import { VariantProps, cva } from "class-variance-authority";
import { SquarePen, Trash2 } from "lucide-react";
import React, { ComponentProps, useState } from "react";

type DivStylesMessages = VariantProps<typeof divStylesMessages> & ComponentProps<"div">

const divStylesMessages = cva(['relative flex h-fit w-full py-5'], {
    variants: {
        variant: {
            default: ['justify-end'],
            other: ['justify-start']
        }
    },
    defaultVariants: {
        variant: 'default'
    }
})

interface MessageProps extends DivStylesMessages {
    variant: 'default' | 'other'
    content: string;
    timestamp: string;
    isCurrentUser: boolean;
    edit: boolean;
    isEdited: string;
    onEditClick?: () => void;
    onDeleteClick?: () => void;
    onInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


export default function Message({
    variant,
    content,
    timestamp,
    isCurrentUser,
    edit,
    isEdited,
    onEditClick,
    onDeleteClick,
    onInputChange,
    ...props
}: MessageProps) {
    return (
        <div {...props} className={divStylesMessages({ variant })}>
            <p className="text-transparant-1000 pr-2">{isEdited}</p>
            {edit ? (
                <p className="w-fit text-transparant-1000 p-3 shadow rounded-tl-full rounded-tr-full rounded-br-full shadow-transparant-300">
                    {content}
                </p>
            ) : (
                <input
                    type="text"
                    size={content.length}
                    value={content}
                    onChange={(e) => onInputChange && onInputChange(e)} // Utilisation de la fonction onInputChange
                    className="w-fit text-transparant-1000 bg-transparent p-3 shadow rounded-tl-full rounded-tr-full rounded-br-full shadow-transparant-300"
                />

            )}

            <span className="absolute flex items-center px-1 -bottom-1.5">
                <small className="text-transparant-700 px-2">{timestamp}</small>
                {isCurrentUser && <SquarePen size={16} onClick={onEditClick} className="cursor-pointer text-transparant-800" />}
                {isCurrentUser && <Trash2 size={16} onClick={onDeleteClick} className="cursor-pointer text-transparant-800" />}
            </span>
        </div>
    );
}
