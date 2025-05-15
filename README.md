# GEEK_DEV 个人极客风格网站

一个充满极客风格的个人网站模板，具有终端界面元素和现代化设计。完美展示开发者的项目、技能和作品集。

<!-- 点击下方按钮前往Cloudflare Pages官网 -->

[![部署到Cloudflare Pages](https://img.shields.io/badge/Cloudflare%20Pages-部署-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://pages.cloudflare.com/)

## 在线预览

您可以通过以下链接访问在线演示版本：
[在线演示版本](https://123408.xyz)

## 特性

- 🖥️ 终端风格界面元素
- 🎨 极客审美设计
- 📱 完全响应式布局
- 🔧 易于自定义的配置文件
- 🚀 简单部署，无需后端
- 📊 技能展示区域
- 📂 项目和作品集展示
- 📝 博客文章区域
- 📱 联系方式和社交媒体链接
- 🔍 GitHub 项目集成
- ⚡ 快速加载
- 🌐 针对搜索引擎优化
- 🔄 动态内容加载
- 🔍 自定义 404 页面

## 预览

![首页](index.png "首页")

## 技术栈

- HTML5
- CSS3
- JavaScript (ES6+)
- Font Awesome 图标
- 响应式设计

## 快速开始

### 本地安装

1. 克隆仓库

   ```bash
   # 请将下面的URL替换为你自己的GitHub仓库
   git clone https://github.com/123xiao/geek-dev-personal-site.git
   cd geek-dev-personal-site
   ```

2. 打开项目
   - 使用任意代码编辑器打开项目文件夹
   - 直接在浏览器中打开 `index.html` 文件

### 自定义配置

修改 `config.js` 文件以自定义网站内容：

```javascript
const websiteConfig = {
  // 基本信息
  basics: {
    name: "你的名字",
    title: "你的职位",
    // 其他基本信息...
  },

  // 更多配置...
};
```

## 部署

### 方法 1：使用 Cloudflare Pages 部署

<!-- 点击下方按钮前往Cloudflare Pages官网 -->

[![部署到Cloudflare Pages](https://img.shields.io/badge/Cloudflare%20Pages-部署-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://pages.cloudflare.com/)

1. 点击上方"部署到 Cloudflare Pages"按钮前往 Cloudflare Pages 官网
2. 点击"Sign up"注册账户或"Log in"登录现有账户
3. 登录后，在 Cloudflare 仪表板中导航到"Pages"部分
4. 点击"创建应用程序"按钮
5. 选择"连接到 Git"选项
6. 授权 Cloudflare 访问你的 GitHub 账户（如果尚未授权）
7. 选择包含此项目的仓库（或先 fork 到你的 GitHub 账户再选择）
8. 配置部署选项：
   - 项目名称：输入你喜欢的名称
   - 生产分支：main（或 master）
   - 构建命令：留空
   - 构建输出目录：留空
9. 点击"保存并部署"
10. 等待部署完成，Cloudflare 将自动为你的网站分配一个域名（通常是 `项目名.pages.dev`）
11. （可选）在 Cloudflare Dashboard 中为你的网站配置自定义域名

### 方法 2：使用 GitHub Pages 部署

<!-- 点击下方按钮前往GitHub Pages文档 -->

[![部署到GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-部署-181717?style=for-the-badge&logo=github&logoColor=white)](https://pages.github.com/)

1. 将项目代码推送到你的 GitHub 仓库

   ```bash
   git add .
   git commit -m "准备部署到GitHub Pages"
   git push origin main
   ```

2. 在 GitHub 仓库页面，点击"Settings"（设置）选项卡
3. 在左侧导航栏中，找到并点击"Pages"选项
4. 在"Source"（源）部分，选择以下选项：
   - Branch（分支）：main（或 master）
   - Folder（文件夹）：/ (root)
   - 点击"Save"（保存）按钮
5. 等待几分钟，GitHub 会自动构建并部署你的网站
6. 部署完成后，GitHub 会在页面顶部显示你的网站 URL（通常是`https://你的用户名.github.io/仓库名/`）
7. （可选）配置自定义域名：
   - 在 GitHub Pages 设置页面的"Custom domain"（自定义域名）部分，输入你的域名
   - 在你的 DNS 服务商处，添加一条指向`你的用户名.github.io`的 CNAME 记录
   - 等待 DNS 变更生效（可能需要几小时）
   - 勾选"Enforce HTTPS"（强制启用 HTTPS）选项以启用安全连接

注意：GitHub Pages 已自动支持 404.html 页面，无需额外配置即可使用本项目的自定义 404 页面。

### 方法 3：部署到其他静态网站托管服务

由于这是一个纯静态网站，你可以将其部署到任何提供静态网站托管的服务，如：

- Netlify
- Vercel
- Firebase Hosting
- Amazon S3
- Render
- Digital Ocean App Platform

只需上传所有文件到对应的托管服务即可。

## 文件结构

```
/
├── index.html          # 主页
├── 404.html            # 404错误页面
├── style.css           # 样式表
├── script.js           # 主要JavaScript
├── config.js           # 配置文件
└── favicon.ico         # 网站图标
```

## 自定义

### 修改内容

所有网站内容都可以通过修改 `config.js` 文件进行自定义，包括：

- 个人信息
- 技能列表
- GitHub 项目
- 作品集项目
- 博客文章

### 修改样式

要自定义网站外观，编辑 `style.css` 文件。主要颜色和主题变量定义在 CSS 文件的顶部：

```css
:root {
  --primary-color: #00ff00;
  --secondary-color: #0c0c0c;
  --text-color: #f0f0f0;
  /* 更多变量... */
}
```

## 许可证

MIT License

## 作者

[无名键客](https://github.com/123xiao)

---

如果你喜欢这个项目，请给它一个星星 ⭐
