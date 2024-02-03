import { type ReactElement, useMemo } from 'react'; import { Bell, Calendar, Home, LayoutDashboard, Search, Users } from 'lucide-react';
import rank from '../assets/rank.png';
import profil from '../assets/profil.png';
import logo from '../assets/logo.png';
import game from '../assets/rl.png';
import { ListItems } from '../components/ListItems';
import type { ListItemProps } from '../types/ListItemProps';
import styled from 'styled-components';
import tw from 'twin.macro';
import { ButtonOrLink } from '../components/Button';

const NavStyled = styled.nav`
    ${tw`relative flex items-center justify-center gap-6`}
`;

const LogoList = styled.ul`
${tw` flex flex-row justify-center items-center w-1/3 md:w-fit md:px-3`}
li {
    ${tw`w-fit h-fit`}
    img{
        ${tw`w-20 h-auto mx-auto`}
    }
}
`;
const GameList = styled.ul`
${tw`md:hidden flex flex-row justify-center items-center w-1/3 md:w-fit md:px-3 -order-1`}
`;

const BurgerList = styled.ul`
${tw`md:hidden flex flex-row justify-end items-center w-1/3 pr-[2.9rem]`}
li {
    ${tw`flex w-fit h-fit justify-end items-center shrink-0`}
}
`;

const ulList: ListItemProps[] = [
    { id: 1, name: 'Accueil', svg: <Home size='2.5em' strokeWidth={1} />, isLink: true, href: '/' },
    { id: 2, name: 'Recherché', svg: <Search size='2.5rem' strokeWidth={1} />, isLink: true, href: '/Recherché' },
    { id: 3, name: 'Événement', svg: <Calendar size='2.5rem' strokeWidth={1} />, isLink: true, href: '/Événement' },
    { id: 4, name: 'Parcourir', svg: <LayoutDashboard size='2.5rem' strokeWidth={1} />, isLink: true, href: '/Parcourir' },
    { id: 5, name: 'Amis', svg: <Users size='2.5rem' strokeWidth={1} />, isLink: false },
    { id: 6, name: 'Notification', svg: <Bell size='2.5rem' strokeWidth={1} />, isLink: false },
    { id: 7, name: 'Rang', src: rank, isLink: true, href: '/Rang' },
    { id: 8, name: 'Profil', src: profil, isLink: true, href: '/Profil' },
];

export default function Navbar(): ReactElement {
    const firstHalf = useMemo(() => ulList.filter(item => item.id <= 4), []);
    const secondHalf = useMemo(() => ulList.filter(item => item.id > 4 && item.id <= 8), []);
    return (
        <NavStyled>
            <ListItems items={firstHalf} />
            <LogoList>
                <li>
                    <ButtonOrLink isLink href="/">
                        <img src={logo} alt="Logo" />
                    </ButtonOrLink>
                </li>
            </LogoList>
            <ListItems items={secondHalf} />
            <GameList>
                <li>
                    <ButtonOrLink isLink href="/">
                        <img src={game} alt="Jeu" />
                    </ButtonOrLink>
                </li>
            </GameList>
            <BurgerList>
                <li>
                    <ButtonOrLink isOpen={isOpen} handleClick={handleClick} />
                </li>
            </BurgerList>
        </NavStyled>
    );
}
