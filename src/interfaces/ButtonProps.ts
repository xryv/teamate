// Interface for the BurgerButtonSpan component create on src/styles/styleButton.tsx
export interface BurgerButtonSpanProps {
    $variant: 'top' | 'center' | 'bottom' | 'top-active' | 'center-active' | 'bottom-active'
}
// Interface for the StyledButtonOrLink component create on src/styles/styleButton.ts
export interface StyledButtonOrLinkProps {
    $variant?: 'firstHalf' | 'secondHalf' | 'active' | 'default' | string
    $size?: 'firstHalf' | 'secondHalf' | 'large' | 'default' | string
}
// Interface for the StyledLinkText component create on src/styles/styleButton.ts
export interface StyledLinkTextProps {
    $variant?: 'hover' | string
}

// Interface for the ButtonOrLink component on src/components/Button.tsx
export interface ButtonOrLinkProps {
    children?: React.ReactNode
    href?: string
    isLink?: boolean
    isBurger?: boolean
    isOpen?: boolean
    onClick?: () => void
    $variant?: 'firstHalf' | 'secondHalf' | 'active' | 'default' | string
    $size?: 'firstHalf' | 'secondHalf' | 'large' | 'default' | 'buttonSide'
}
