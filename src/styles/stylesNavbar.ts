import styled from 'styled-components';
import tw from 'twin.macro';
import { type SideBarProps } from '../interfaces/SideBarProps';

export const TopBar = styled.nav`${tw`relative flex items-center justify-center gap-6 md:py-4 bg-gradient z-50`}`;

export const LogoList = styled.ul`${tw` flex flex-row justify-center items-center w-1/3 md:w-fit md:px-3`}
li {
    ${tw`w-fit h-fit`}
    img{
        ${tw`w-20 h-auto mx-auto`}
    }}`;

export const GameList = styled.ul`${tw`md:hidden flex flex-row justify-center items-center w-1/3 md:w-fit md:px-3 -order-1`}`;

export const BurgerList = styled.ul`${tw`md:hidden flex flex-row justify-center items-center w-1/3 `}
li {
    ${tw`flex w-fit h-fit justify-end items-center shrink-0`}
    }`;

export const StyledDiv = styled.div<{ $isOpen: boolean }>`
    ${tw`fixed inset-0 top-0 bg-slate-900 z-10 transition-opacity duration-300 ease-out`}
    ${({ $isOpen }) => $isOpen ? tw`opacity-50` : tw`opacity-0 pointer-events-none`}
`;

export const StyledUlSideBar = styled.ul`  ${tw`flex flex-col justify-center items-center gap-8 w-32 py-4`}
li {
    ${tw`flex flex-col justify-center items-center shrink-0`}
    a{
        ${tw`text-slate-100`}
    }}`;

export const SideBar = styled.nav<SideBarProps>`
    ${tw`md:hidden block fixed right-0 h-screen max-h-[500px] transition-all duration-300 ease-out bg-gradient2 z-30 border-none outline-none rounded-b-2xl overflow-y-auto`};
    ${(props => props.$variant === 'active' ? tw`w-fit` : tw`w-0`)};
    ${(props => props.$size === 'active' ? tw`opacity-100` : tw`opacity-0`)};
`;
