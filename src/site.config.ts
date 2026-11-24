export interface ProjectItem {
  name: string;
  repo: string;
  url: string;
  demoUrl?: string;
  description: string;
  language: string;
  stars?: string;
  category: 'AstrBot' | 'Research';
  featured?: boolean;
  tags: string[];
}

export const SITE = {
  title: 'anka',
  titleTemplate: '%s · anka',
  description:
    'USTC M.S. in Intelligent Science & Technology. Deep Learning, LLM Training & 《推断智能》.',
  url: 'https://ankaanka.org',
  author: 'anka',
  handle: 'anka-afk',
  avatar: 'https://github.com/anka-afk.png',
  email: 'anka@mail.ustc.edu.cn',
  location: 'USTC · Hefei, China',
  tagline: 'USTC M.S. · LLM Training & AI Systems',
  bio: '中科大智能科学与技术硕士在读，关注大语言模型训练、强化学习与 Agent 系统；业余参与 AstrBot 开源维护与插件开发，并记录前沿论文的阅读笔记。',
  social: {
    github: 'https://github.com/anka-afk',
    bilibili: 'https://space.bilibili.com/26584382',
    orcid: 'https://orcid.org/0009-0002-7954-1266',
    orcidId: '0009-0002-7954-1266',
    inferringRepo: 'https://github.com/anka-afk/Inferring-Intelligence',
    rss: '/rss.xml',
  },
  series: {
    name: '推断智能',
    enName: 'Inferring-Intelligence',
    repo: 'anka-afk/Inferring-Intelligence',
    tagline: '不止回答“公式怎么推”，更追问“为什么偏偏是这个公式”。',
    description:
      '从问题背景、数学结构与研究直觉出发，反推论文算法背后的设计动机，重建从问题定义到损失函数的完整逻辑链条。',
  },
  /**
   * Giscus 评论系统配置（基于 GitHub Discussions）
   * 启用步骤：
   * 1. 在博客仓库（如 anka-afk/anka-afk.github.io）的 Settings -> Features 中开启 Discussions
   * 2. 安装 Giscus GitHub App: https://github.com/apps/giscus
   * 3. 访问 https://giscus.app/zh-CN 获取 repoId 和 categoryId 并填入下方
   */
  giscus: {
    enabled: true,
    repo: 'anka-afk/anka-afk.github.io',
    repoId: '',
    category: 'Announcements',
    categoryId: '',
    mapping: 'pathname',
    lang: 'zh-CN',
  },
} as const;

export const PROJECTS: ProjectItem[] = [
  {
    name: 'AstrBot',
    repo: 'AstrBotDevs/AstrBot',
    url: 'https://github.com/AstrBotDevs/AstrBot',
    demoUrl: 'https://astrbot.app',
    description:
      '多平台 LLM 聊天机器人与开发框架，平时作为 CoreDev 之一参与日常维护、Issue 排查与社区 PR 评审。',
    language: 'Python',
    category: 'AstrBot',
    featured: true,
    tags: ['LLM', 'Agent'],
  },
  {
    name: 'astrbot_sowing_discord',
    repo: 'anka-afk/astrbot_sowing_discord',
    url: 'https://github.com/anka-afk/astrbot_sowing_discord',
    description: '面向 AstrBot 的群聊信息整理与搬运插件，持续更新维护中。',
    language: 'Python',
    stars: '618+',
    category: 'AstrBot',
    featured: true,
    tags: ['AstrBot', 'Automation'],
  },
  {
    name: 'astrbot_plugin_meme_manager',
    repo: 'anka-afk/astrbot_plugin_meme_manager',
    url: 'https://github.com/anka-afk/astrbot_plugin_meme_manager',
    demoUrl: 'https://ankaanka.org/astrbot_plugin_meme_manager/',
    description:
      '面向 AstrBot 的表情包管理插件，支持 AI 触发发送、自动收集、WebUI 管理与云端同步。',
    language: 'Python',
    stars: '570+',
    category: 'AstrBot',
    featured: true,
    tags: ['AstrBot', 'WebUI'],
  },
  {
    name: 'Inferring-Intelligence',
    repo: 'anka-afk/Inferring-Intelligence',
    url: 'https://github.com/anka-afk/Inferring-Intelligence',
    demoUrl: '/papers',
    description:
      '《推断智能》论文阅读与课程手稿仓库，整理 DPO、SCoRe、Mamba、ETO 等算法的推导与设计直觉。',
    language: 'Markdown',
    category: 'Research',
    featured: false,
    tags: ['LLM', 'RL', 'Papers'],
  },
];

export const EDUCATION = [
  {
    school: '中国科学技术大学 (USTC)',
    department: '人工智能与数据科学学院 · School of Artificial Intelligence and Data Science',
    degree: '智能科学与技术 硕士 · M.S. in Intelligent Science and Technology',
    period: '2026.09 – 2029.07 (Expected)',
    location: '合肥',
    current: true,
  },
  {
    school: '华南理工大学 (SCUT)',
    department: '数学学院 · School of Mathematics',
    degree: '信息与计算科学 理学学士 · B.S. in Information and Computing Science',
    period: '2022.09 – 2026.06',
    location: '广州',
    current: false,
  },
] as const;

export const EXPERIENCE = [
  {
    org: 'AstrBot',
    role: 'CoreDev · 开源维护',
    period: '持续维护',
    location: 'Open Source',
    summary: '参与项目维护、Issue 排查与社区 PR 评审。',
    url: 'https://github.com/AstrBotDevs/AstrBot',
  },
  {
    org: '招商银行佛山分行',
    role: '研发实习生 · Research and Development Intern',
    period: '2025.06 – 2025.09',
    location: '佛山',
    summary: 'China Merchants Bank, Foshan Branch',
  },
] as const;

export const SKILLS = [
  { group: 'AI & ML', items: ['Python', 'PyTorch', 'TensorFlow', 'LLM Post-Training', 'RLHF / DPO'] },
  { group: 'Systems & Web', items: ['TypeScript', 'React', 'Vue.js', 'Astro', 'Node.js', 'C++'] },
  { group: 'Infra & Data', items: ['Docker', 'Linux', 'Git', 'MongoDB', 'MySQL'] },
];
