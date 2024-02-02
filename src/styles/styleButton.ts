import tw from 'twin.macro';
import styled from 'styled-components';
import { type BurgerButtonSpanProps } from '../types/ButtonProps';

export const StyledButton = styled.button`
    ${tw`p-2 text-slate-100 transition-all duration-300 ease-out border-none outline-none rounded-md`}
`;

export const StyledLink = styled.a`
    ${tw`p-2 text-slate-100 transition-all duration-300 ease-out border-none outline-none rounded-md`}
`;

export const BurgerButton = styled.button`
    ${tw`z-40 flex flex-col justify-center items-center w-8 h-4 border-none outline-none p-5`};
`;

export const BurgerButtonSpan = styled.span<BurgerButtonSpanProps>`
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
        }
    }};
    }
`;
