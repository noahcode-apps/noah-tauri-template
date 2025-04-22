<div align="center">
<h1>Noah Tauri Template</h1>

A modern desktop application template based on Tauri 2.0, integrating mainstream technologies like React, TypeScript, Tailwind CSS, and more.

[简体中文](./README.md) | English
</div>

## Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite 6
- **Desktop Framework**: Tauri 2.0
- **Styling Solution**: Tailwind CSS 4
- **UI (Optional)**: shadcn/ui
- **Type System**: TypeScript
- **Code Linting**: Biome
- **Package Manager**: pnpm
- **Version Management**: Changesets
- **Git Workflow**: Husky + Commitlint

## Features

- 🚀 High-performance desktop application based on Tauri 2.0
- ⚡️ Fast development experience with Vite 6
- 🎨 Modern UI with Tailwind CSS 4
- 📦 Package management with pnpm
- 🔍 Code linting and formatting with Biome
- 📝 Version management with Changesets
- 🔒 Git commit standardization with Husky and Commitlint

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm 8+
- Rust 1.70+
- [Tauri System Dependencies](https://tauri.app/v1/guides/getting-started/prerequisites)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/noah-tauri-template.git
cd noah-tauri-template

# Install dependencies
pnpm install
```

### Development

```bash
# Start development server
pnpm dev

# Build the application
pnpm build

# Preview the build
pnpm preview
```

### Tauri Commands

```bash
# Run Tauri development environment
pnpm tauri dev

# Build Tauri application
pnpm tauri build
```

## Project Structure

```
noah-tauri-template/
├── src/               # Frontend source code
├── src-tauri/         # Tauri backend code
├── public/            # Static assets
├── .changeset/        # Changesets configuration
├── .github/           # GitHub configuration
├── .husky/            # Git hooks
└── .vscode/           # VS Code configuration
```

## Code Standards

The project uses Biome for code linting and formatting:

```bash
# Run code linting
pnpm lint
```

## Git Commit Standards

The project follows the Conventional Commits specification. Commit message format:

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

Types include:
- feat: New feature
- fix: Bug fix
- docs: Documentation
- style: Formatting
- refactor: Code refactoring
- test: Testing
- chore: Build process or auxiliary tool changes

## Version Release

Using Changesets for version management:

```bash
# Create a new changeset
pnpm changeset

# Update version number
pnpm pub:version

# Publish package
pnpm pub:publish
```

## License

[MIT](LICENSE)
