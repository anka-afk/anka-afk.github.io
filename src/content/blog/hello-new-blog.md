---
title: "重新出发：把博客改造成我的论文花园与个人空间"
description: "告别 Hexo 三分支与手动正则脚本，用 Astro 重新构建 ankaanka.org，实现 Obsidian 与 Inferring-Intelligence 仓库的零阻力同步。"
publishedAt: 2026-11-24
tags: ["随笔", "博客重构", "Obsidian", "Astro"]
---

以前的博客是跟着教程搭的 Hexo + Icarus，三个分支来回切，连 Obsidian 的图片链接都要靠 `Makefile` 里的 `sed` 命令转换。久而久之，维护成本比写文章本身还高，博客也就停更了。

这次重做，我给自己定了三个很简单的原则：

1. **视觉与个人主页统一**：延续 GitHub Profile 的浅紫 / 暗紫双色体系，既有清晰的个人与项目展示，也有舒服克制的长文阅读体验。
2. **写作工作流零阻力**：论文精读照常在 Obsidian 里写并推送到 [`Inferring-Intelligence`](https://github.com/anka-afk/Inferring-Intelligence)，博客构建时自动拉取手稿、解析元数据和配图，原生支持 GitHub 风格行内公式 $`O(L^2)`$ 与代码块公式。
3. **对理工科阅读友好**：点击页面里的任意数学公式都可以直接复制 LaTeX 源码，像这样试着点一下上面的 $`O(L^2)`$ 或下面的公式：

```math
\mathcal{L}_{\mathrm{DPO}}(\pi_\theta; \pi_{\mathrm{ref}}) = -\mathbb{E}_{(x, y_w, y_l)}\left[\log \sigma\left(\beta \log \frac{\pi_\theta(y_w|x)}{\pi_{\mathrm{ref}}(y_w|x)} - \beta \log \frac{\pi_\theta(y_l|x)}{\pi_{\mathrm{ref}}(y_l|x)}\right)\right]
```

> [!TIP] 小提示
> 单击任意公式会复制带 `$ ... $` 或 `$$ ... $$` 包裹的 LaTeX（可直接粘贴进 Obsidian / Typora）；按住 `Shift` 点击则会复制纯 LaTeX 源码。

接下来这里会持续更新《推断智能》论文解读，以及一些工程折腾与阶段性思考。欢迎在下方评论区交流！
