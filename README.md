# Next.js + Tailwind CSS Boilerplate

A modern, production-ready Next.js boilerplate with Tailwind CSS, TypeScript, ESLint, and Prettier pre-configured for rapid development.

## ✨ Features

- ⚡ **Next.js 15** - The React framework for production
- 🎨 **Tailwind CSS** - A utility-first CSS framework
- 📘 **TypeScript** - Static type checking
- 🔍 **ESLint** - Code linting and quality
- 💅 **Prettier** - Code formatting
- 🐕 **Husky** - Git hooks for quality control
- 📦 **Package Manager Agnostic** - Works with npm, yarn, pnpm, or bun

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/melodyxpot/next-tw-boilerplate.git
   cd next-tw-boilerplate
   ```

2. **Install dependencies**
   ```bash
   # Choose your preferred package manager
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see your app.

## 📝 Available Scripts

- `dev` - Start development server
- `build` - Build for production
- `start` - Start production server
- `lint` - Run ESLint
- `prettier` - Format code with Prettier
- `prettier:check` - Check code formatting

## 🏗️ Project Structure

```
├── app/                    # App router pages and layouts
├── components/             # Reusable React components
│   └── ui/                # UI components
├── public/                # Static assets
├── .eslintrc.json         # ESLint configuration
├── .prettierrc.json       # Prettier configuration
├── tailwind.config.ts     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## 🔧 Configuration

### ESLint & Prettier
This boilerplate comes with optimized ESLint and Prettier configurations that work well together:
- Import sorting
- Tailwind CSS class sorting
- TypeScript support
- Next.js specific rules

### Husky
Git hooks are set up to run linting and formatting before commits to ensure code quality.

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTE.md) for details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

Built with ❤️ using:
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
