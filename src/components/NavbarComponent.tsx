import { VariantProps, cva } from "class-variance-authority";
import React, { ComponentProps, Dispatch, ReactNode } from "react";

const divStyles = cva([
  "flex items-center justify-center h-fit w-fit rounded-full",
]);

const linkStyles = cva(["transition-all", "ease-out", "duration-300"], {
  variants: {
    variant: {
      default: ["bg-slate-500", "-translate-y-4", "text-bluePV-500"],
      ghost: ["text-slate-200"],
    },
    size: {
      default: [
        "rounded-full",
        "w-14",
        "h-14",
        "flex",
        "items-center",
        "justify-center",
        "p-2.5",
        "cursor-pointer",
      ],
      icon: [],
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

type LinkProps = VariantProps<typeof linkStyles> & ComponentProps<"a">;

export function Div({ setHoverStates, element, children, }: { setHoverStates: Dispatch<any>; element: string; children: ReactNode; }): JSX.Element {

  const handleHover = (isHovered: boolean) => {
    setHoverStates((prevState: object) => ({
      ...prevState, [element]: isHovered,
    }));
  };

  const divClasses = divStyles({});

  return (
    <div
      className={divClasses}
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      {children}
    </div>
  );
}

export function Link({ variant, size, ...props }: LinkProps) {
  return <a {...props} className={linkStyles({ variant, size })}></a>;
}
