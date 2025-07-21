/**
 * 个人网站配置文件
 * 修改此文件中的数据可以自定义网站内容
 */

const websiteConfig = {
  // 基本信息
  basics: {
    name: "小小博客",
    title: "运维工程师",
    devName: "运维开发者", // 首页终端显示的名称
    location: "东莞, 中国",
    email: "admin@891123.xyz",
    github: "github.com/relieved2026",
    githubUrl: "https://github.com/relieved2026",
    linkedin: "#",
    linkedinUrl: "#",
    wechat: "#",
    status: "目前正在寻找挑战性项目和创新机会...", // 首页状态消息
    education: "计算机科学与技术",
    experience: "10年+",
  },

  // GitHub置顶项目
  githubPinnedRepos: [
    {
      name: "sex-agreement-app",
      description: "X行为同意协议系统",
      language: "TypeScript",
      languageColor: "#2b7489", // JavaScript颜色
      stars: 1138,
      forks: 135,
      repoUrl: "https://github.com/123xiao/sex-agreement-app",
      demoUrl: "https://001.123408.xyz",
      topics: ["react", "node", "Next", "DaisyUI"],
    },
    {
      name: "Cloudflare-SQL-to-API",
      description:
        "这是一个基于 Cloudflare Workers 和 D1 数据库的应用，可以通过编写 SQL 查询快速创建 REST API 接口。",
      language: "Vue",
      languageColor: "#f1e05a",
      stars: 126,
      forks: 16,
      repoUrl: "https://github.com/123xiao/Cloudflare-SQL-to-API",
      demoUrl: "",
      topics: [" Element Plus", "Nuxt 3", "Vue 3", "D1 数据库"],
    },
    {
      name: "remote-log-viewer",
      description: "远程服务器日志查询工具",
      language: "JavaScript",
      languageColor: "#f1e05a",
      stars: 125,
      forks: 8,
      repoUrl: "https://github.com/123xiao/remote-log-viewer",
      demoUrl: "",
      topics: ["react", "node", "ssh2", "electron"],
    },
    {
      name: "stock-tracker",
      description: "盯盘朋友仓位涨跌工具",
      language: "TypeScript",
      languageColor: "#2b7489", // TypeScript颜色
      stars: 17,
      forks: 3,
      repoUrl: "https://github.com/123xiao/stock-tracker",
      demoUrl: "https://stock.123408.xyz",
      topics: ["react", "node", "Ant Design UI", "electron"],
    },
    {
      name: "get-cookie-httponly",
      description: "万能Cookie 获取工具，突破httponly限制",
      language: "JavaScript",
      languageColor: "#f1e05a",
      stars: 19,
      forks: 4,
      repoUrl: "https://github.com/123xiao/get-cookie-httponly",
      demoUrl: "",
      topics: ["javascript", "html5", "css3", "Chrome插件"],
    },

    {
      name: "geek-dev-personal-site",
      description: "GEEK_DEV 个人极客风格网站",
      language: "html",
      languageColor: "#f1e05a",
      stars: 8,
      forks: 3,
      repoUrl: "https://github.com/123xiao/geek-dev-personal-site",
      demoUrl: "",
      topics: [" Element Plus", "Nuxt 3", "Vue 3", "D1 数据库"],
    },
  ],

  // 技能列表（首页终端显示）
  skills: ["Java", "JavaScript", "Python", "React", "Node.js", "DevOps"],

  // 详细技能评分
  skillsDetail: {
    frontend: [
      { name: "HTML/CSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "React", level: 85 },
      { name: "Vue.js", level: 80 },
    ],
    backend: [
      { name: "Java", level: 80 },
      { name: "Node.js", level: 88 },
      { name: "Python", level: 85 },
      { name: "SQL", level: 80 },
    ],
    devtools: [
      { name: "Git", level: 92 },
      { name: "Docker", level: 78 },
      { name: "CI/CD", level: 70 },
      { name: "Linux", level: 85 },
    ],
  },

  // 兴趣爱好
  interests: ["Web开发", "开源项目", "人工智能", "网络运维"],

  // 项目列表
  projects: [
    {
      title: "万用代理",
      description: "一个基于Cloudflare Workers的万用代理",
      technologies: [],
      githubUrl: "#",
      liveUrl: "https://cf-proxy.123408.xyz",
    },
    {
      title: "X行为同意协议系统",
      description: "一个基于X的同意协议系统",
      technologies: [],
      githubUrl: "https://github.com/123xiao/sex-agreement-app",
      liveUrl: "https://001.123408.xyz",
    },
    {
      title: "盯盘朋友仓位助手",
      description:
        "这是一个用于追踪朋友股票仓位和实时涨跌的应用，可同时运行在Web浏览器和Windows桌面环境。",
      githubUrl: "https://github.com/123xiao/stock-tracker",
      technologies: [],
      liveUrl: "https://stock.123408.xyz",
    },
    {
      title: "AI聊天机器人",
      description: "一个基于OpenAI的AI聊天机器人",
      technologies: [],
      githubUrl: "#",
      liveUrl: "https://ai.123408.xyz",
    },
    {
      title: "临时邮箱系统",
      description: "一个基于Cloudflare Workers的临时邮箱系统",
      technologies: [],
      githubUrl: "#",
      liveUrl: "https://mail.123408.xyz",
    },
    {
      title: "免费在线视频搜索与观看平台",
      description:
        "轻量级、免费的在线视频搜索与观看平台，提供来自多个视频源的内容搜索与播放服务。无需注册，即开即用，支持多种设备访问。",
      technologies: [],
      githubUrl: "#",
      liveUrl: "https://tv.123408.xyz",
    },
    {
      title: "短链生成系统",
      description: "一个基于Cloudflare Workers的短链生成系统",
      technologies: [],
      githubUrl: "#",
      liveUrl: "https://link.123408.xyz",
    },
    {
      title: "聚合消息推送系统",
      description: "一个基于Cloudflare Workers的聚合消息推送系统",
      technologies: [],
      githubUrl: "#",
      liveUrl: "https://push.123408.xyz",
    },
    {
      title: "SQL to API 管理平台",
      description: "基于Cloudflare Workers和D1数据库的SQL转API工具",
      technologies: [],
      githubUrl: "https://github.com/123xiao/Cloudflare-SQL-to-API",
      liveUrl: "https://123406.xyz",
    },
  ],

  // 博客文章
  blogPosts: [
    {
      title: "WebAssembly: 网页应用的未来",
      excerpt:
        "探索WebAssembly如何让浏览器运行高性能应用，以及它将如何改变Web开发的未来...",
      tags: ["WebAssembly", "前端", "性能优化"],
      date: {
        day: "15",
        month: "六月",
        year: "2023",
      },
      url: "#",
    },
    {
      title: "零知识证明在区块链中的应用",
      excerpt:
        "深入探讨零知识证明技术如何保护区块链交易的隐私性，同时不牺牲安全性和透明度...",
      tags: ["区块链", "隐私", "加密技术"],
      date: {
        day: "28",
        month: "五月",
        year: "2023",
      },
      url: "#",
    },
    {
      title: "微服务架构：从理论到实践",
      excerpt:
        "分享我在将单体应用重构为微服务架构过程中的经验和教训，以及相关技术选型...",
      tags: ["微服务", "架构设计", "DevOps"],
      date: {
        day: "10",
        month: "五月",
        year: "2023",
      },
      url: "#",
    },
  ],

  // 社交媒体链接
  socialLinks: {
    github: "https://github.com/relieved2026",
    twitter: "#",
    linkedin: "#",
    weixin: "#",
  },

  // 个人照片URL（可以替换为您自己的照片链接）
  profileImage: "head_min.png",

  // 版权信息
  copyright: {
    year: new Date().getFullYear(),
    name: "小小博客",
  },
};
