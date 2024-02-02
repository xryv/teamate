import tw from 'twin.macro';
import styled from 'styled-components';

type Variant = 'ulLeft' | 'ulRight' | 'active' | 'default' | string;
type VariantSpan = 'top' | 'center' | 'bottom' | 'top-active' | 'center-active' | 'bottom-active';
type Size = 'ulLeft' | 'ulRight' | 'large' | 'default' | string;
type isOpen = boolean;
type handleClick = () => void;

interface StyledElementProps {
    variant?: Variant;
    size?: Size;
}

interface BurgerButtonSpanProps {
    variant?: VariantSpan;
}

interface BurgerProps {
    isOpen?: isOpen;
    handleClick?: handleClick;
}

const variantStyles = {
    ulLeft: tw`bg-transparant-600 -translate-y-4 text-bluePV-500 `,
    ulRight: tw``,
    active: tw`bg-green-500`,
    default: tw``
};

const sizeStyles = {
    ulLeft: tw`rounded-2xl`,
    ulRight: tw`rounded-2xl`,
    large: tw`text-xl`,
    default: tw``
};

const variantHoverStyles = {
    primary: tw`bg-blue-600`,
    secondary: tw`bg-green-600`,
    active: tw`bg-green-600`,
    default: tw`bg-slate-200`
};
const sizeHoverStyles = {
    small: tw`text-xs`,
    medium: tw`text-base`,
    large: tw`text-xl`,
    default: tw``
};

const StyledElement = styled.button<StyledElementProps>`
    ${tw`p-2 text-slate-100 transition-all duration-300 ease-out border-none outline-none rounded-md`};
    ${({ variant = 'default' }) => variantStyles[variant as keyof typeof variantStyles]};
    ${({ size = 'default' }) => sizeStyles[size as keyof typeof sizeStyles]};
    // &:hover {
    //     ${({ variant = 'default' }) => variantHoverStyles[variant as keyof typeof variantHoverStyles]};
    // }
    // &:hover {
    //     ${({ size = 'default' }) => sizeHoverStyles[size as keyof typeof sizeHoverStyles]};
    // }
`;

interface ButtonOrLinkProps {
    isLink?: boolean;
    href?: string;
    variant?: Variant;
    size?: Size;
    children: React.ReactNode;
}




export const ButtonOrLink = ({ isLink, children, ...props }: ButtonOrLinkProps) => {
    return isLink ? (
        <StyledElement as="a" {...props}>
            {children}
        </StyledElement>
    ) : (
        <StyledElement {...props}>
            {children}
        </StyledElement>
    );
};



const BurgerButton = styled.button`
    ${tw`z-40 flex flex-col justify-center items-center w-8 h-4 border-none outline-none p-5`};
`;

const BurgerButtonSpan = styled.span<BurgerButtonSpanProps>`
    ${tw`absolute block w-8 h-0.5 bg-slate-100 transition-all duration-300 ease-out`};
    ${({ variant }) => {
        switch (variant) {
            case 'top':
                return tw`-translate-y-2`;
            case 'center':
                return tw``;
            case 'bottom':
                return tw`translate-y-2`;

            case 'top-active':
                return tw`rotate-[135deg]`;
            case 'center-active':
                return tw`transition-opacity duration-100 opacity-0`;
            case 'bottom-active':
                return tw`-rotate-[135deg]`;


            default:
                return '';
        }
    }};
`;
export const Burger = ({ isOpen, handleClick }: BurgerProps) => {
    return (
        <BurgerButton onClick={() => handleClick?.()}>
            <BurgerButtonSpan variant={isOpen ? 'top-active' : 'top'} />
            <BurgerButtonSpan variant={isOpen ? 'center-active' : 'center'} />
            <BurgerButtonSpan variant={isOpen ? 'bottom-active' : 'bottom'} />
        </BurgerButton>
    );
};
