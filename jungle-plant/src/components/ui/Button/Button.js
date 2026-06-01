
import { buttonVariants } from "./buttonVariants";
import "./Button.css";


export default function Button({
     children,
     variant,
     size,
     className="",
      ...props
    }) {
    return (
        <>
            <button
            // className={`footer-button ${className}`}
                className={buttonVariants({
                    variant,
                    size,
                    className,
                })}
                {...props}
            >
            {children}
            </button>
         </>
    );
   
}