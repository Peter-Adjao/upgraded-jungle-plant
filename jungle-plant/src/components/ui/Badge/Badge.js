import { badgeVariants } from "./badgeVariants";
import "./Badge.css";


export default function Badge({
    children,
    variant,
    className="",
    ...props
}) {
    return (
        <span
            className={badgeVariants({
                variant,
                className,
            })}
            {...props}
        >
            {children}
        </span>
    );
}