import {  cn } from "@/utils/cn";

export function buttonVariants({
    variant = "default",
    size = "md",
    rounded = "md",
    className = "",
    } = {}) {
        const base  = 
        "button";

        const variants = {
            default: "button-default",
            outline: "button-outline",
            primary: "button-primary",
            secondary: "button-secondary",
            ghost: "button-ghost",
            ghostDestructive: "button-ghost-destructive",
            destructive: "button-destructive",

            link: "button-link",
            success: "button-success",
            warning: "button-warning",
            subscribe: "button-subscribe",

            cart: "button-cart",
            wishlist: "button-wishlist"
        };

        const roundedVariants = {
            none: "button-rounded-none",
            sm: "button-rounded-sm",
            md: "button-rounded-md",
            lg: "button-rounded-lg",
            xl: "button-rounded-xl",
            full: "button-rounded-full",
        
            left: "button-rounded-left",
            right: "button-rounded-right",
        };

        const sizes = {
            default: "button-default-size",
            xs: "button-xs",
            sm: "button-sm",
            md: "button-md",
            lg: "button-lg",
            xl: "button-xl",

            icon: "button-icon",
            "icon-sm": "button-icon-sm",
            "icon-lg": "button-icon-lg",
            

            cart_default: "button-cart-icon",
            wishlist_default: "button-wished",
            special: "button-special",
        };

        return cn(
            base,
            variants[variant] ?? variants.default,
            roundedVariants[rounded],
            sizes[size],
            className
        );
}