"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
	ArrowRight,
	Code2,
	ExternalLink,
	Github,
	Moon,
	Palette,
	Rocket,
	Sun,
	Zap
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function HomePage() {
	const [mounted, setMounted] = useState(false);
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		setMounted(true);
		setIsDark(document.documentElement.classList.contains("dark"));
	}, []);

	const toggleTheme = () => {
		document.documentElement.classList.toggle("dark");
		setIsDark(!isDark);
	};

	if (!mounted) return null;

	return (
		<div className="min-h-screen bg-background">
			{/* Navigation */}
			<nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center h-16">
						<div className="flex items-center space-x-2">
							<div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
								<Code2 className="w-5 h-5 text-white" />
							</div>
							<span className="font-bold text-xl">NextBoiler</span>
						</div>
						<div className="flex items-center space-x-4">
							<Button variant="ghost" size="sm" onClick={toggleTheme}>
								{isDark ? (
									<Sun className="w-4 h-4" />
								) : (
									<Moon className="w-4 h-4" />
								)}
							</Button>
							<Button
								as="a"
								href="https://vercel.com/new/clone?repository-url=https://github.com/melodyxpot/next-tw-boilerplate"
								target="_blank"
								rel="noopener noreferrer"
								variant="outline"
								size="sm"
								className="bg-gradient-to-r from-green-500 to-emerald-600 text-white border-none hover:from-green-600 hover:to-emerald-700"
							>
								<ExternalLink className="w-4 h-4 mr-2" />
								Deploy
							</Button>
							<Button
								as="a"
								href="https://github.com/melodyxpot/next-tw-boilerplate"
								target="_blank"
								rel="noopener noreferrer"
								variant="outline"
								size="sm"
							>
								<Github className="w-4 h-4 mr-2" />
								GitHub
							</Button>
						</div>
					</div>
				</div>
			</nav>

			{/* Hero Section */}
			<section className="relative pt-32 pb-20 overflow-hidden">
				{/* Animated Background */}
				<div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900">
					<div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fillRule=%22evenodd%22%3E%3Cg fill=%22%236366f1%22 fillOpacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
				</div>

				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<div className="animate-fade-in-up">
							<Badge
								variant="secondary"
								className="mb-6 px-4 py-2 text-sm font-medium"
							>
								<Zap className="w-4 h-4 mr-2" />
								Production Ready
							</Badge>
						</div>

						<h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in-up animation-delay-200">
							Build Stunning Apps,{" "}
							<span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
								Faster
							</span>
						</h1>

						<p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
							A production-ready Next.js + Tailwind CSS boilerplate with modern
							tooling, clean architecture, and delightful UI animations.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
							<Button
								as="a"
								href="#getting-started"
								size="lg"
								className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all duration-200"
							>
								Get Started
								<ArrowRight className="w-5 h-5 ml-2" />
							</Button>
							<Button
								as="a"
								href="https://vercel.com/new/clone?repository-url=https://github.com/melodyxpot/next-tw-boilerplate"
								target="_blank"
								rel="noopener noreferrer"
								size="lg"
								className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all duration-200"
							>
								<ExternalLink className="w-5 h-5 mr-2" />
								Deploy Now
							</Button>
							<Button
								as="a"
								href="https://github.com/melodyxpot/next-tw-boilerplate"
								target="_blank"
								rel="noopener noreferrer"
								variant="outline"
								size="lg"
								className="px-8 py-3 text-lg font-semibold hover:bg-muted/50 transition-all duration-200 bg-transparent"
							>
								<Github className="w-5 h-5 mr-2" />
								View on GitHub
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section id="getting-started" className="py-20 bg-muted/30">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
							Everything You Need
						</h2>
						<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
							Built with the latest technologies and best practices for modern
							web development
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						{[
							{
								icon: <Zap className="w-8 h-8" />,
								title: "Zero Config Start",
								description:
									"Get up and running in seconds with our optimized setup"
							},
							{
								icon: <Palette className="w-8 h-8" />,
								title: "Beautifully Styled",
								description:
									"Tailwind-based design system with dark mode support"
							},
							{
								icon: <Rocket className="w-8 h-8" />,
								title: "Performance First",
								description: "Optimized for speed, SEO, and Core Web Vitals"
							},
							{
								icon: <Code2 className="w-8 h-8" />,
								title: "Developer Delight",
								description: "TypeScript, ESLint, and hot reload out of the box"
							}
						].map((feature, index) => (
							<Card
								key={index}
								className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm border border-border/50"
							>
								<div className="text-indigo-600 dark:text-indigo-400 mb-4">
									{feature.icon}
								</div>
								<h3 className="text-xl font-semibold text-foreground mb-2">
									{feature.title}
								</h3>
								<p className="text-muted-foreground">{feature.description}</p>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Components Showcase Section */}
			<section className="py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
							Custom Components
						</h2>
						<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
							Beautiful, accessible components built with pure Tailwind CSS
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{/* Button Showcase */}
						<Card className="p-6">
							<h3 className="text-xl font-semibold mb-4">Buttons</h3>
							<div className="space-y-3">
								<Button className="w-full">Default Button</Button>
								<Button variant="outline" className="w-full bg-transparent">
									Outline Button
								</Button>
								<Button variant="secondary" className="w-full">
									Secondary Button
								</Button>
								<Button variant="ghost" className="w-full">
									Ghost Button
								</Button>
							</div>
						</Card>

						{/* Badge Showcase */}
						<Card className="p-6">
							<h3 className="text-xl font-semibold mb-4">Badges</h3>
							<div className="flex flex-wrap gap-2">
								<Badge>Default</Badge>
								<Badge variant="secondary">Secondary</Badge>
								<Badge variant="outline">Outline</Badge>
								<Badge variant="destructive">Destructive</Badge>
							</div>
						</Card>

						{/* Card Showcase */}
						<Card className="p-6">
							<h3 className="text-xl font-semibold mb-4">Cards</h3>
							<Card className="p-4 bg-muted/50">
								<h4 className="font-medium mb-2">Nested Card</h4>
								<p className="text-sm text-muted-foreground">
									Cards can be nested and styled with different variants
								</p>
							</Card>
						</Card>
					</div>
				</div>
			</section>

			{/* Code Preview Section */}
			<section className="py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
								Clean, Modern Code
							</h2>
							<p className="text-xl text-muted-foreground mb-8 leading-relaxed">
								Built with industry best practices and modern patterns. Every
								component is crafted for maintainability and scalability.
							</p>
							<ul className="space-y-4">
								{[
									"TypeScript for type safety",
									"ESLint & Prettier configured",
									"Responsive design patterns",
									"Accessible components"
								].map((item, index) => (
									<li
										key={index}
										className="flex items-center text-muted-foreground"
									>
										<div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
										{item}
									</li>
								))}
							</ul>
						</div>

						<Card className="p-6 bg-gray-900 border-gray-800 overflow-hidden">
							<div className="flex items-center justify-between mb-4">
								<div className="flex space-x-2">
									<div className="w-3 h-3 bg-red-500 rounded-full"></div>
									<div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
									<div className="w-3 h-3 bg-green-500 rounded-full"></div>
								</div>
								<span className="text-gray-400 text-sm font-mono">
									page.tsx
								</span>
							</div>
							<pre className="text-sm text-gray-300 font-mono overflow-x-auto">
								<code>{`export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <h1 className="text-4xl font-bold">
        Hello World
      </h1>
    </div>
  )
}`}</code>
							</pre>
						</Card>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
				<div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
					<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
						Your next project deserves a beautiful starting point
					</h2>
					<p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
						Join thousands of developers who are building faster with our
						boilerplate
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button
							as="a"
							href="https://vercel.com/new/clone?repository-url=https://github.com/melodyxpot/next-tw-boilerplate"
							target="_blank"
							rel="noopener noreferrer"
							size="lg"
							className="px-8 py-3 text-lg font-semibold bg-green-500 text-white hover:bg-green-600 transform hover:scale-105 transition-all duration-200"
						>
							<ExternalLink className="w-5 h-5 mr-2" />
							Deploy to Vercel
						</Button>
						<Button
							as="a"
							href="https://github.com/melodyxpot/next-tw-boilerplate"
							target="_blank"
							rel="noopener noreferrer"
							size="lg"
							variant="secondary"
							className="px-8 py-3 text-lg font-semibold bg-white text-indigo-600 hover:bg-gray-100 transform hover:scale-105 transition-all duration-200"
						>
							Clone the Repo
							<ArrowRight className="w-5 h-5 ml-2" />
						</Button>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="py-12 bg-background border-t border-border">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<div className="flex items-center space-x-2 mb-4 md:mb-0">
							<div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
								<Code2 className="w-5 h-5 text-white" />
							</div>
							<span className="font-bold text-xl">NextBoiler</span>
						</div>
						<p className="text-muted-foreground">
							Built with ❤️ using Next.js and Tailwind CSS
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
