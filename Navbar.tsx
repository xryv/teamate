import { ButtonOrLink, Burger } from "./Button";
import tw from 'twin.macro'
import styled from 'styled-components'
import logo from "./assets/logo.png";
import Game from "./assets/rl.png";
import rank from "./assets/rank.png";
import profil from "./assets/profil.png";
import { Bell, Calendar, Home, LayoutDashboard, Search, Users } from "lucide-react";
import { useState } from 'react';
import React from 'react';

type VariantSideBarStyle = 'active';
type SideBarStyle = 'active';


interface StyledSideBarProps {
    $variant?: VariantSideBarStyle
    $size?: SideBarStyle
}

interface StyledUlProps {
    $variant?: VariantSideBarStyle
    $size?: SideBarStyle
}




const BarStyle = styled.nav`
 ${tw`relative flex items-center justify-center py-4 z-40 gap-6`};
    }
`
const SideBar = styled.nav<StyledSideBarProps>`
    ${tw`md:hidden block fixed right-0  transition-all duration-300 ease-out bg-gradient2 z-30 border-none outline-none rounded-b-2xl`};
    ${(props => props.$variant === 'active' ? tw`w-fit` : tw`w-0`)};
    ${(props => props.$size === 'active' ? tw`opacity-100` : tw`opacity-0`)};
`


const StyledUlSideBar = styled.ul`  
    ${tw`flex flex-col justify-center items-center gap-8 px-6 py-4`}
    li {
        ${tw`flex flex-col justify-center items-center shrink-0`}
}
    a{
        ${tw`text-slate-100`}
}`


const StyledUl = styled.ul<StyledUlProps>`
    ${tw`hidden md:flex flex-row items-center justify-center gap-8 w-1/3 max-w-96`}
    li {
        ${tw`flex flex-col justify-center items-center shrink-0 transition-all duration-300 ease-out`}
    }
`


const StyledUlGame = styled.ul`
${tw`md:hidden flex flex-col w-1/3 justify-start pl-6 `}
li {
    ${tw`w-fit h-fit shrink-0`}
}`




const StyledUlLogo = styled.ul`
${tw` flex flex-row justify-center items-center w-1/3 md:w-fit md:px-3`}
li {
    ${tw`w-fit h-fit`}
}
`

const StyledUlBurger = styled.ul`
${tw`md:hidden flex flex-row justify-end items-center w-1/3 pr-[2.9rem]`}
li {
    ${tw`flex w-fit h-fit justify-end items-center shrink-0`}
}
`


const ulLeft = [
    {
        id: 1,
        icon: <Home size='2.5em' strokeWidth={1} />,
        link: '/',
        isLink: true,
        a: 'Accueil',
        variantBar: 'ulLeft',
        variantSide: '',
        sizeBar: 'ulLeft',
        sizeSide: 'ulLeft'
    },
    {
        id: 2,
        icon: <Search size='2.5rem' strokeWidth={1} />,
        link: '/search',
        isLink: true,
        a: 'Recherche',
        variantBar: 'ulLeft',
        variantSide: '',
        sizeBar: 'ulLeft',
        sizeSide: 'ulLeft'
    },
    {
        id: 3,
        icon: <Calendar size='2.5rem' strokeWidth={1} />,
        link: '/calendar',
        isLink: true,
        a: 'Événement',
        variantBar: 'ulLeft',
        variantSide: '',
        sizeBar: 'ulLeft',
        sizeSide: 'ulLeft'
    },
    {
        id: 4,
        icon: <LayoutDashboard size='2.5rem' strokeWidth={1} />,
        link: '/dashboard',
        isLink: true,
        a: 'Parcourir',
        variantBar: 'ulLeft',
        variantSide: '',
        sizeBar: 'ulLeft',
        sizeSide: 'ulLeft'
    },

]



const ulRight = [
    {
        id: 5,
        icon: <Users size='2.5rem' strokeWidth={1} />,
        isLink: false,
        a: 'Amis',
        variantBar: 'ulLeft',
        variantSide: '',
        sizeBar: 'ulRight',
        sizeSide: 'ulRight'
    },
    {
        id: 6,
        icon: <Bell size='2.5rem' strokeWidth={1} />,
        isLink: false,
        a: 'Notification',
        variantBar: 'ulLeft',
        variantSide: '',
        sizeBar: 'ulRight',
        sizeSide: 'ulRight'

    },
    {
        id: 7,
        icon: <img className="w-10" src={rank} alt="Rank" />,
        link: '/rank',
        isLink: true,
        a: 'Classement',
        variantBar: 'ulRight',
        variantSide: '',
        sizeBar: 'ulRight',
        sizeSide: 'ulRight'
    },
    {
        id: 8,
        icon: <img className="w-10" src={profil} alt="Profil" />,
        link: '/profil',
        isLink: true,
        a: 'Profil',
        variantBar: 'ulRight',
        variantSide: '',
        sizeBar: 'ulRight',
        sizeSide: 'ulRight'
    },
]

const ulSideBar = [...ulLeft, ...ulRight];

interface Items {
    id: number;
    icon: JSX.Element;
    link?: string;
    isLink: boolean;
    a?: string;
    variantBar: string;
    variantSide: string;
    sizeBar: string;
    sizeSide: string;
}




// si hoveredItem === ulLeft + item.id alors afficher le a
// sinon ne rien afficher


export default function Navbar() {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [navHeight, setNavHeight] = useState<string>('0px'); // Ajout d'un nouvel état pour navHeight
    const barRef = React.useRef(null);

    React.useEffect(() => {
        const updateHeight = () => {
            if (barRef.current) {
                const newNavHeight = (barRef.current as HTMLElement).offsetHeight;
                setNavHeight(`${newNavHeight}px`); // Mise à jour de navHeight
            }
        };
        // Mettre à jour la hauteur initiale
        updateHeight();

        // Ajouter un écouteur d'événement 'resize' à l'objet 'window'
        window.addEventListener('resize', updateHeight);

        // Supprimer l'écouteur d'événement lorsque le composant est démonté
        return () => {
            window.removeEventListener('resize', updateHeight);
        };
    }, []);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    function renderList(items: Items[], prefix: string) {
        return items.map((item) => (
            <li
                key={item.id}
                onMouseEnter={() => setHoveredItem(prefix + item.id)}
                onMouseLeave={() => setHoveredItem(null)}
            >
                <ButtonOrLink variant={hoveredItem === prefix + item.id ? item.variantBar : undefined} size={hoveredItem === prefix + item.id ? item.sizeBar : undefined} isLink={item.isLink} href={item.link}>
                    {item.icon}
                </ButtonOrLink>
                {hoveredItem === prefix + item.id && <a className="absolute text-orangePV-900  translate-y-8" href={item.link}>{item.a}</a>}
            </li>
        ));
    }

    function renderSideBar(items: Items[]) {
        return items.map((item) => (
            <li key={item.id}
                onClick={handleClick}
            >
                <ButtonOrLink isLink={item.isLink} href={item.link}>
                    {item.icon}
                </ButtonOrLink>
                <a href={item.link}>{item.a}</a>
            </li>
        ));
    }

    return (
        <>
            <BarStyle ref={barRef}>
                <StyledUlGame>
                    <li>
                        <ButtonOrLink isLink href="/">
                            <img className="w-16 h-auto md:mx-auto" src={Game} alt="jeu" />
                        </ButtonOrLink>
                    </li>
                </StyledUlGame>

                <StyledUl>
                    {renderList(ulLeft, 'left')}
                </StyledUl>

                <StyledUlLogo>
                    <li>
                        <ButtonOrLink variant="default" isLink href="/">
                            <img className=" md:w-20 h-auto md:mx-auto" src={logo} alt="Logo" />
                        </ButtonOrLink>
                    </li>
                </StyledUlLogo>

                <StyledUl>
                    {renderList(ulRight, 'right')}
                </StyledUl>
                <StyledUlBurger>
                    <li>
                        <Burger isOpen={isOpen} handleClick={handleClick} />
                    </li>
                </StyledUlBurger>
            </BarStyle>
            <SideBar $variant={isOpen ? 'active' : undefined} $size={isOpen ? 'active' : undefined} >
                <StyledUlSideBar>
                    {renderSideBar(ulSideBar)}
                </StyledUlSideBar>
            </SideBar>
            {isOpen && <div className={`fixed inset-0 top-[${navHeight}] bg-black opacity-50 z-20 transition-all duration-300 ease-out`} />}
        </>);
}
