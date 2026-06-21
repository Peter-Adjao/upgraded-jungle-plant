import { cn } from "@/utils/cn";


export function badgeVariants({
    variant = "default",
    className = "",
} = {}) {
    const base = "badge";

    const variants = {
        default: "badge-default",
        primary: "badge-primary",
        secondary: "badge-secondary",
        count: "badge-count",
        outline: "badge-outline",
        success: "badge-success",
        destructive: "badge-destructive",
        warning: "badge-warning",
    };

    return cn(
        base,
        variants[variant],
        className,
    );
}