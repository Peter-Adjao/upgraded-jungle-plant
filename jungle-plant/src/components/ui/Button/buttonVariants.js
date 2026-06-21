import {  cn } from "@/utils/cn";

export function buttonVariants({
    variant = "default",
    size = "default",
    rounded = "md",
    className = "",
    } = {}) {
        const base  = 
        "button";

        const variants = {
            default: "button-default",
            outline: "button-outline",
            destructive: "button-destructive",
            secondary: "button-secondary",
            ghost: "button-ghost",
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

            cart_default: "button-cart-icon",
            wishlist_default: "button-wished",
        };

        return cn(
            base,
            variants[variant] ?? variants.default,
            roundedVariants[rounded],
            sizes[size],
            className
        );
}