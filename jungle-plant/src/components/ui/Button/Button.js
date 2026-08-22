import { Slot } from "@radix-ui/react-slot";
import { buttonVariants } from "./buttonVariants";
import "./Button.css";


export default function Button({
     children,
     variant,
     size,
     rounded,
     className="",
     asChild = false,
      ...props
    }) {
        const Comp = asChild ? Slot : "button"; 
    return (
            <Comp
                className={buttonVariants({
                    variant,
                    size,
                    rounded,
                    className,
                })}
                {...props}
            >
            {children}
            </Comp>
    );
   
}