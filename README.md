<div align="center">
<h1>Noah Tauri Template</h1>

一个基于 Tauri 2.0 的现代化桌面应用模板，集成了 React、TypeScript、Tailwind CSS 等主流技术栈。

简体中文 | [English](./README-en-US.md)
</div>

## 技术栈

- **前端框架**: React 19
- **构建工具**: Vite 6
- **桌面框架**: Tauri 2.0
- **样式方案**: Tailwind CSS 4
- **UI(可选)**: shadcn/ui
- **类型系统**: TypeScript
- **代码规范**: Biome
- **包管理器**: pnpm
- **版本管理**: Changesets
- **Git 工作流**: Husky + Commitlint

## 特性

- 🚀 基于 Tauri 2.0 的高性能桌面应用
- ⚡️ 使用 Vite 6 实现快速的开发体验
- 🎨 集成 Tailwind CSS 4 实现现代化 UI
- 📦 使用 pnpm 作为包管理器
- 🔍 集成 Biome 进行代码检查和格式化
- 📝 使用 Changesets 进行版本管理
- 🔒 使用 Husky 和 Commitlint 规范 Git 提交

## 开始使用

### 环境要求

- Node.js 18+
- pnpm 8+
- Rust 1.70+
- [Tauri 系统依赖](https://tauri.app/v1/guides/getting-started/prerequisites)

### 安装

```bash
# 克隆项目
git clone https://github.com/yourusername/noah-tauri-template.git
cd noah-tauri-template

# 安装依赖
pnpm install
```

### 开发

```bash
# 启动开发服务器
pnpm dev

# 构建应用
pnpm build

# 预览构建结果
pnpm preview
```

### Tauri 相关命令

```bash
# 运行 Tauri 开发环境
pnpm tauri dev

# 构建 Tauri 应用
pnpm tauri build
```

## 项目结构

```
noah-tauri-template/
├── src/               # 前端源代码
├── src-tauri/         # Tauri 后端代码
├── public/            # 静态资源
├── .changeset/        # Changesets 配置
├── .github/           # GitHub 配置
├── .husky/            # Git hooks
└── .vscode/           # VS Code 配置
```

## 代码规范

项目使用 Biome 进行代码检查和格式化：

```bash
# 运行代码检查
pnpm lint
```

## Git 提交规范

项目使用 Conventional Commits 规范，提交信息格式如下：

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

类型（type）包括：
- feat: 新功能
- fix: 修复
- docs: 文档
- style: 格式
- refactor: 重构
- test: 测试
- chore: 构建过程或辅助工具的变动

## 版本发布

使用 Changesets 进行版本管理：

```bash
# 创建新的变更集
pnpm changeset

# 更新版本号
pnpm pub:version

# 发布包
pnpm pub:publish
```

## 许可证

[MIT](LICENSE)
