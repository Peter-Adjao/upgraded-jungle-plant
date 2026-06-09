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
            cart: "button-cart",
        };

        const rounded = {
            none: "button-rounded",
            sm: "button-rounded-sm",
            md: "button-rounded-md",
            lg: "button-rounded-lg",
            full: "button-rounded-full",

            left: "button-rounded-left",
            right: "button-rounded-right",
        };

        const sizes = {
            default: "button-default-size",
            sm: "button-sm",
            lg: "button-lg",
            icon: "button-icon",
            xl: "button-xl",

            cart: "button-cart-icon",
        };

        return cn(
            base,
            variants[variant],
            sizes[size],
            className
        );
}