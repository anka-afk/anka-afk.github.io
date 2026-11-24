import { visit } from 'unist-util-visit';

/**
 * Supports GitHub-style math syntax alongside standard remark-math ($...$ / $$...$$):
 * 1. Inline math written as $`...`$ (used in Obsidian/GitHub compatible notes)
 * 2. Display math written as ```math ... ``` fenced code blocks
 */
export function remarkGithubMath() {
  return (tree) => {
    // 0. Strip GitHub-style backtick wrappers inside remark-math's inlineMath nodes ($`expr`$)
    visit(tree, 'inlineMath', (node) => {
      if (
        typeof node.value === 'string' &&
        node.value.length >= 2 &&
        node.value.startsWith('`') &&
        node.value.endsWith('`')
      ) {
        const cleaned = node.value.slice(1, -1);
        node.value = cleaned;
        if (node.data?.hChildren?.[0] && typeof node.data.hChildren[0].value === 'string') {
          node.data.hChildren[0].value = cleaned;
        }
      }
    });

    // 1. Convert ```math fenced blocks into math-display nodes for rehype-katex
    visit(tree, 'code', (node) => {
      if (typeof node.lang === 'string' && node.lang.trim().toLowerCase() === 'math') {
        const value = node.value ?? '';
        node.type = 'math';
        node.data = {
          hName: 'div',
          hProperties: { className: ['math', 'math-display'] },
          hChildren: [{ type: 'text', value }],
        };
      }
    });

    // 2. Convert $`...`$ sequences (text ending with '$' + inlineCode + text starting with '$')
    visit(tree, (node) => {
      if (!Array.isArray(node.children) || node.children.length < 3) return;

      const children = node.children;
      const out = [];
      let i = 0;

      while (i < children.length) {
        const curr = children[i];
        const prev = out[out.length - 1];
        const next = children[i + 1];

        const prevEndsWithDollar =
          prev &&
          prev.type === 'text' &&
          typeof prev.value === 'string' &&
          prev.value.endsWith('$') &&
          !prev.value.endsWith('\\$');

        const nextStartsWithDollar =
          next &&
          next.type === 'text' &&
          typeof next.value === 'string' &&
          next.value.startsWith('$');

        if (curr.type === 'inlineCode' && prevEndsWithDollar && nextStartsWithDollar) {
          // Strip trailing '$' from previous text node
          prev.value = prev.value.slice(0, -1);
          if (prev.value.length === 0) {
            out.pop();
          }

          // Push inlineMath node compatible with rehype-katex
          const expr = curr.value ?? '';
          out.push({
            type: 'inlineMath',
            value: expr,
            data: {
              hName: 'span',
              hProperties: { className: ['math', 'math-inline'] },
              hChildren: [{ type: 'text', value: expr }],
            },
          });

          // Strip leading '$' from next text node in place so chained $`a`$,$`b`$ works
          next.value = next.value.slice(1);
          if (next.value.length === 0) {
            i += 2;
          } else {
            i += 1;
          }
          continue;
        }

        out.push(curr);
        i += 1;
      }

      node.children = out;
    });
  };
}
