import type React from "react";
import { cn } from "@/lib/utils";

interface ButtonAsButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "default" | "outline" | "secondary" | "ghost" | "destructive";
	size?: "sm" | "md" | "lg";
	as?: "button" | undefined;
	children: React.ReactNode;
}

interface ButtonAsAnchorProps
	extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	variant?: "default" | "outline" | "secondary" | "ghost" | "destructive";
	size?: "sm" | "md" | "lg";
	as: "a";
	children: React.ReactNode;
}

interface ButtonAsComponentProps {
	variant?: "default" | "outline" | "secondary" | "ghost" | "destructive";
	size?: "sm" | "md" | "lg";
	as: React.ComponentType<any>;
	children: React.ReactNode;
	className?: string;
	[key: string]: any;
}

type ButtonProps =
	| ButtonAsButtonProps
	| ButtonAsAnchorProps
	| ButtonAsComponentProps;

export function Button({
	className,
	variant = "default",
	size = "md",
	children,
	as,
	...props
}: ButtonProps) {
	const Component = as || "button";

	const baseStyles =
		"inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

	const variants = {
		default:
			"bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-primary",
		outline:
			"border border-border bg-transparent hover:bg-muted focus:ring-ring",
		secondary:
			"bg-secondary text-secondary-foreground hover:bg-secondary/80 focus:ring-secondary",
		ghost: "hover:bg-muted hover:text-foreground focus:ring-ring",
		destructive:
			"bg-destructive text-destructive-foreground hover:bg-destructive/90 focus:ring-destructive"
	};

	const sizes = {
		sm: "h-9 px-3 text-sm",
		md: "h-10 px-4 py-2",
		lg: "h-12 px-6 py-3 text-lg"
	};

	return (
		<Component
			className={cn(
				baseStyles,
				variants[variant as keyof typeof variants],
				sizes[size as keyof typeof sizes],
				className
			)}
			{...props}
		>
			{children}
		</Component>
	);
}
