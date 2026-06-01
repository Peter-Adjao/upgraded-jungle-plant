import {  cn } from "@/utils/cn";

export function buttonVariants({
    variant = "dafault",
    size = "default",
    className = "",
    } = {}) {
        const base  = 
        "button";

        const variants = {
            default: "button-default",
            outline: "button-oline",
            destructive: "button-destructive",
            secondary: "button-secondary",
            ghost: "button-ghost",
            link: "button-link",
            success: "button-success",
            warning: "button-warning",
            subscribe: "button-subscribe",
        };

        const sizes = {
            default: "button-default-size",
            sm: "button-sm",
            lg: "button-lg",
            icon: "button-icon",
            xl: "button-xl",
        };

        return cn(
            base,
            variants[variant],
            sizes[size],
            className
        );
}