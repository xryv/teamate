import type React from 'react';

// Interface for the ListItem component
export interface ListItemProps {
    id: number
    name?: string
    svg?: JSX.Element
    src?: string
    isLink: boolean
    href?: string
    alt?: string
    display?: string
}

// Interface for the ButtonOrLink component
export interface ButtonOrLinkProps {
    children?: React.ReactNode
    href?: string
    isLink?: boolean
    isBurger?: boolean
    isOpen?: boolean
    handleClick?: () => void
}
