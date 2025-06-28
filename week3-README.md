# Page One Workshop - Week 3 🎉

欢迎来到第三节课！这次我们将用 Supabase 来实现一个最简单的数据驱动网页：
一个可以从数据库里读取卡片内容并显示的小工具。

---

## ✅ 我们会学到什么？

- 🧠 了解 Supabase：开箱即用的数据库，像 Google Sheet 升级版
- 🧱 创建一张表：存放卡片数据（标题、内容、作者）
- 🔗 在网页中接入 Supabase JS 库
- 🧭 实现动态读取并显示卡片
- ✨ 感受“网页 + 数据 = 迷你应用”的魔法！

---

## 🚀 开始你的第三周练习

👇 请按照以下步骤操作：

### 1. Fork 这个项目

点击右上角的 `Fork`，将这个项目复制到你自己的 GitHub 帐号。

### 2. 在 TRAE 打开项目

- 打开 [https://trae.app](https://trae.app)
- 选择「从 GitHub 导入」你刚刚 fork 的仓库
- 开始编辑代码！

### 3. 替换你的 Supabase 配置信息

打开 `scripts/main.js`，将这两行替换为你自己项目的值：

```js
const SUPABASE_URL = 'https://your-project.supabase.co';
const SUPABASE_ANON_KEY = 'your-anon-key';
```

👉 如何获取？进入 [Supabase 控制台](https://supabase.com/dashboard/project)，在左侧找到 Project Settings → API

### 4. 本地预览（可选）

如果你想在本地打开页面，可运行：

```bash
python3 -m http.server
```

打开浏览器访问：`http://localhost:8000`

---

## 🧪 表结构建议（在 Supabase 创建）

表名：`cards`

| 字段名   | 类型   | 备注       |
|----------|--------|------------|
| id       | int    | 主键，自增 |
| title    | text   | 卡片标题   |
| content  | text   | 正文内容   |
| author   | text   | 作者       |

---

## 💡 想继续进阶？以下是一些你可以尝试的改进提示（Coding Agent Prompt）：

### 🧩 数据功能升级

1. 添加一个表单，填写标题、内容和作者后，可以把卡片添加进 Supabase。
2. 为每张卡片添加删除按钮，点击后将其从数据库中移除。
3. 加一个下拉框，按作者筛选显示卡片。
4. 给 `cards` 表添加 `created_at` 字段，并按时间倒序显示。

### 🎨 样式与交互升级

5. 加一个“加载中”动画效果，提示用户等待卡片加载。
6. 改进卡片样式，加入圆角、阴影和 hover 效果。
7. 让卡片正文支持 Markdown 格式（如加粗、换行、列表等）。

### 🌐 部署与分享

8. 在 README 中加上如何通过 GitHub Pages 免费发布网页的说明。
9. 为卡片添加“复制链接”按钮，方便分享到社交平台。

### 🧠 小工具拓展

10. 增加一个搜索框，可按标题或正文关键词实时过滤卡片。

---

## 🧯 遇到问题？

欢迎在微信群里提问，祝你玩得开心 🎈
