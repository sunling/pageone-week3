# AI 金句生成器 (Page One Workshop 第四节课示例项目)

这个小项目展示了如何通过 HTML + JS 页面，直接调用 OpenRouter 的 API，从而生成一条中文金句。

---

## 🧠 本节课目标

- 学会什么是 API 调用
- 学会如何在网页中通过 `fetch()` 请求 AI 模型接口
- 实践使用 OpenRouter 平台，调用大语言模型生成内容
- 创建一个完全脱机可运行的小网页工具
- 激发“网页 + AI = 可以做出有趣作品”的想象力

---

## 🚀 使用方法

1. 注册 OpenRouter：https://openrouter.ai
2. 获取 API Key：https://openrouter.ai/keys
   - 点击 “Create new key”
   - 复制生成的 key，妥善保存
3. 下载本项目，解压后双击 `index.html` 打开网页
4. 输入你的 API Key 和一个主题，点击“生成金句”，即可看到结果！

---

## 📁 文件说明

- `index.html` 页面结构
- `scripts/week4.js` 调用 OpenRouter API 的逻辑
- `scripts/week4.css` 页面美化样式（多巴胺渐变色风格）
- `README.md` 项目说明（当前文件）

---

## ✨ Bonus：进阶探索建议

如果你愿意，可以尝试加入更多功能，让你的网页更丰富有趣：

1. **换一个 Prompt**  
   修改 `script.js` 中的 prompt，比如改为“生成一个英文 motivational quote”或“一句旅行建议”。

2. **改成对话模式**  
   让用户和 AI 聊天：支持连续提问、追加内容。

3. **支持多种模型选择**  
   增加一个下拉菜单，选择使用不同模型（如 GPT-4、Claude、Mistral）。

4. **加入复制按钮**  
   生成金句后，一键复制内容到剪贴板。

5. **保存历史记录**  
   将用户生成的金句记录在 localStorage，刷新后仍可查看。

6. **换个主题风格**  
   改变颜色、布局或字体，让网页更符合你的审美。

7. **部署到 GitHub Pages**  
   让你的作品上线，通过网址分享给朋友！

