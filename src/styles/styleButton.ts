import tw, { type TwStyle } from 'twin.macro';
import styled from 'styled-components';
import { type StyledLinkTextProps, type BurgerButtonSpanProps as StyledBurgerButtonSpanProps, type StyledButtonOrLinkProps } from '../interfaces/ButtonProps';

const BurgerVariantStyles = {
    top: tw`-translate-y-2`,
    center: tw``,
    bottom: tw`translate-y-2`,
    'top-active': tw`rotate-[135deg]`,
    'center-active': tw`transition-opacity duration-100 opacity-0`,
    'bottom-active': tw`-rotate-[135deg]`,
};
const buttonVariant: Record<string, TwStyle> = {
    firstHalf: tw`bg-transparant-600 -translate-y-4 text-bluePV-500 `,
    secondHalf: tw``,
    active: tw`bg-green-500`,
    default: tw``,
};

const buttonSize: Record<string, TwStyle> = {
    firstHalf: tw`p-2 rounded-2xl`,
    secondHalf: tw`rounded-2xl`,
    large: tw`text-xl`,
    default: tw`p-2`,
    buttonSide: tw`p-0.5 hover:text-orangePV-900 hover:scale-105`,
};

const linkVariant: Record<string, TwStyle> = {
    default: tw`opacity-0`,
    notHover: tw``,
    hover: tw`opacity-100 text-orangePV-900 -translate-y-4`,
};

export const StyledBurgerButton = styled.button`
    ${tw`flex flex-col justify-center items-center w-fit h-fit p-5 border-none outline-none `};
`;

export const StyledBurgerButtonSpan = styled.span<StyledBurgerButtonSpanProps>`
    ${tw`absolute block w-8 h-0.5 bg-slate-100 transition-all duration-300 ease-out `};
    ${({ $variant }) => BurgerVariantStyles[$variant]};
`;

export const StyledLinkText = styled.a<StyledLinkTextProps>`
    ${tw`absolute text-slate-100 transition-all duration-300 ease-out top-16`}
    ${({ $variant = 'default' }) => linkVariant[$variant]};
`;

export const StyledButtonOrLink = styled.button<StyledButtonOrLinkProps>`
    ${tw`flex flex-col justify-center items-center text-slate-100 transition-all duration-300 ease-out border-none outline-none rounded-md`};
    ${({ $variant = 'default' }) => buttonVariant[$variant]};
    ${({ $size = 'default' }) => buttonSize[$size]};
    &:hover {
        ${({ $variant = 'default' }) => buttonVariant[$variant]};
        ${({ $size = 'default' }) => buttonSize[$size]};
    }
`;
