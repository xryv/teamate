import { TopBar } from '../components/NavBar/TopBar/TopBar';
import { SideBarComponent } from '../components/NavBar/SideBar/SideBar';
import { useState } from 'react';
import { StyledDiv } from '../styles/stylesNavbar';

export default function Navbar(): JSX.Element {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const handleClick = (): void => { setIsOpen(!isOpen); };

    return (
        <>
            <TopBar isOpen={isOpen} onClick={handleClick} />
            <SideBarComponent isOpen={isOpen} />
            <StyledDiv $isOpen={isOpen} />
        </>
    );
}
