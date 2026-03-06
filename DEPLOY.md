# Trusty Used Cars - 部署指南

## 快速部署到 Vercel（免费）

### 方法1：手动部署（推荐）

1. **注册 Vercel 账号**
   - 访问 https://vercel.com
   - 使用 GitHub 账号登录

2. **导入项目**
   - 点击 "New Project"
   - 选择 "Import Project"
   - 选择 GitHub 仓库或直接上传

3. **部署**
   - 点击 "Deploy"
   - 等待 1-2 分钟

4. **获取免费域名**
   - 部署完成后自动分配 .vercel.app 域名

### 方法2：本地 CLI 部署

```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录
vercel login

# 部署
cd trusty-cars-export
vercel
```

### 方法3：GitHub 自动化部署

1. 将项目推送到 GitHub
2. 在 Vercel 导入 GitHub 仓库
3. 每次 push 代码自动部署

---

## 绑定自定义域名

部署完成后可以在 Vercel 后台：
1. Settings → Domains
2. 添加你的域名（如 trustyusedcars.com）
3. 按提示配置 DNS 记录

---

## 注意事项

- Vercel 免费版：每月 100GB 流量
- 静态网站足够使用
- 图片建议使用图床（如 Cloudinary）

---

## 项目配置

- 框架：Next.js 16
- 样式：Tailwind CSS
- 部署平台：Vercel
- 免费域名：*.vercel.app
