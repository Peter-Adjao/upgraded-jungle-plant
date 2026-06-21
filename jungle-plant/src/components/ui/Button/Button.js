
import { buttonVariants } from "./buttonVariants";
import "./Button.css";


export default function Button({
     children,
     variant,
     size,
     rounded,
     className="",
      ...props
    }) {
    return (
            <button
                className={buttonVariants({
                    variant,
                    size,
                    rounded,
                    className,
                })}
                {...props}
            >
            {children}
            </button>
    );
   
}