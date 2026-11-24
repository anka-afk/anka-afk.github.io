import { visit } from 'unist-util-visit';

const CALLOUT_LABELS = {
  note: 'Note',
  info: 'Info',
  tip: 'Tip',
  hint: 'Tip',
  important: 'Important',
  warning: 'Warning',
  caution: 'Caution',
  danger: 'Caution',
  abstract: 'Abstract',
  summary: 'Summary',
  tldr: 'TL;DR',
  question: 'Question',
  example: 'Example',
  quote: 'Quote',
};

const CALLOUT_RE = /^\[!([a-zA-Z0-9_-]+)\][+-]?(?:[ \t]+([^\r\n]*))?(?:\r?\n)?/;

/**
 * Converts Obsidian / GitHub callouts (> [!NOTE] Title) into styled <aside> blocks.
 */
export function remarkObsidianCallout() {
  return (tree) => {
    visit(tree, 'blockquote', (node) => {
      if (!Array.isArray(node.children) || node.children.length === 0) return;

      const firstChild = node.children[0];
      if (firstChild.type !== 'paragraph' || !Array.isArray(firstChild.children) || firstChild.children.length === 0) {
        return;
      }

      const firstText = firstChild.children[0];
      if (firstText.type !== 'text' || typeof firstText.value !== 'string') return;

      const match = firstText.value.match(CALLOUT_RE);
      if (!match) return;

      const rawType = match[1].toLowerCase();
      const customTitle = match[2]?.trim();
      const type = CALLOUT_LABELS[rawType] ? rawType : 'note';
      const title = customTitle || CALLOUT_LABELS[type] || match[1];

      // Remove matched header marker from text
      firstText.value = firstText.value.slice(match[0].length);
      if (firstText.value.length === 0) {
        firstChild.children.shift();
      }
      if (firstChild.children.length === 0) {
        node.children.shift();
      }

      const titleNode = {
        type: 'paragraph',
        data: {
          hName: 'div',
          hProperties: { className: ['callout-title'] },
        },
        children: [{ type: 'text', value: title }],
      };

      const bodyNode = {
        type: 'blockquote',
        data: {
          hName: 'div',
          hProperties: { className: ['callout-body'] },
        },
        children: node.children,
      };

      node.data = {
        hName: 'aside',
        hProperties: {
          className: ['callout', `callout-${type}`],
          'data-callout': type,
        },
      };
      node.children = [titleNode, bodyNode];
    });
  };
}
