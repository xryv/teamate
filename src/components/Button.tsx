import { VariantProps, cva } from "class-variance-authority";
import React from "react";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge"

const buttonStyles = cva(["transitions-colors", "flex", "items-center", "justify-center"], {
    variants: {
        variant: {
            default: ["hover:bg-transparant-600"],
            ghostLight: ["bg-transparant-600 hover:bg-transparant-800"],
            ghostGray: ["bg-transparant-800 hover:bg-transparant-1000"],
            border: ["border-2", "border-orangePV-500", "hover:bg-orangePV-500", "hover:text-white"]
        },
        size: {
            default: ["rounded-full", "p-2", "w-10", "h-10",],
            mic: ["rounded-full", "p-2", "w-10", "h-10", "ml-4"],
            select: ["rounded-full", 'px-1', "w-auto", "h-auto", 'text-xs']
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
})

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">

interface clickButton extends ButtonProps {
    variant?: 'default' | 'ghostLight' | 'ghostGray' | 'border'
    size?: 'default' | 'mic' | 'select'
}

export function Button({ variant, size, className, ...props }: clickButton) {
    return (
        <button  {...props} className={twMerge(buttonStyles({ variant, size }), className)} />);
}

