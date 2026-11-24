# ankaanka.org

基于 **Astro + Tailwind CSS** 重构的个人主页与技术博客，延续 GitHub Profile 的浅紫/暗紫双主题设计语言，原生同步 [`Inferring-Intelligence`](https://github.com/anka-afk/Inferring-Intelligence)（《推断智能》）论文手稿。

## 特性

- **零阻力同步《推断智能》**：构建时自动拉取 `anka-afk/Inferring-Intelligence` 的 `manuscripts/` 目录与配图，解析标题、arXiv 原文、代码仓库、发表会议、一句话总结与主题标签。
- **完整兼容 Obsidian / GitHub 数学语法**：同时支持 `` $`...`$ ``、```` ```math ````、标准 `$...$` / `$$...$$` 以及 Obsidian Callout（`> [!TIP]` 等）。
- **点击公式复制 LaTeX**：单击任意行内或块级公式即可复制带 `$...$` / `$$...$$` 的 LaTeX 代码；按住 `Shift` 点击复制纯源码。
- **阅读与发现体验**：悬浮目录大纲（TOC）、论文配图灯箱放大、代码块一键复制、`Ctrl/Cmd + K` 站内搜索、RSS 订阅与 Giscus 评论区。

## 本地开发

```bash
# 1. 安装依赖
npm install

# 2. 同步 Inferring-Intelligence 手稿并启动开发服务器
npm run dev:sync

# （已同步过手稿时可直接启动）
npm run dev

# 3. 生产构建（自动同步 + 构建 dist/）
npm run build
```

## 写随笔

在 `src/content/blog/` 下新建 `.md` 或 `.mdx` 文件即可：

```markdown
---
title: "文章标题"
description: "一句话简介"
publishedAt: 2026-11-24
tags: ["随笔", "AI"]
---

正文内容...
```

## 激活 Giscus 评论区

1. 在 GitHub 博客仓库（如 `anka-afk/anka-afk.github.io`）的 **Settings → Features** 中开启 **Discussions**。
2. 安装 [Giscus GitHub App](https://github.com/apps/giscus)。
3. 在 [giscus.app/zh-CN](https://giscus.app/zh-CN) 获取 `repoId` 和 `categoryId`，填入 `src/site.config.ts` 的 `giscus` 配置即可自动启用（并跟随站内深浅色实时切换）。

## 部署到 GitHub Pages（保留 `ankaanka.org`）

1. 将本项目推送到 `anka-afk/anka-afk.github.io` 的 `main` 分支（`public/CNAME` 已包含 `ankaanka.org`）。
2. 在仓库 **Settings → Pages → Build and deployment** 中将 Source 切换为 **GitHub Actions**。
3. （可选）如果想在每次推送 `Inferring-Intelligence` 时**立即**触发博客重构建，可在 `Inferring-Intelligence` 仓库添加如下 Action（需在 Secrets 中配置一个带 `repo` 权限的 PAT `BLOG_DISPATCH_TOKEN`）：

```yaml
name: Trigger Blog Rebuild
on:
  push:
    branches: [main]
jobs:
  dispatch:
    runs-on: ubuntu-latest
    steps:
      - run: |
          curl -X POST \
            -H "Accept: application/vnd.github+json" \
            -H "Authorization: Bearer ${{ secrets.BLOG_DISPATCH_TOKEN }}" \
            https://api.github.com/repos/anka-afk/anka-afk.github.io/dispatches \
            -d '{"event_type":"inferring-intelligence-updated"}'
```
