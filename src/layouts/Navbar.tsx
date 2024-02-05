import { TopBar } from '../components/NavBar/TopBar/TopBar';
import { SideBarComponent } from '../components/NavBar/SideBar/SideBar';
import { useState, useEffect, useRef } from 'react';

export default function Navbar(): JSX.Element {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [navHeight, setNavHeight] = useState<string>('0px');
    const barRef = useRef<null>(null);

    useEffect(() => {
        const updateHeight = (): void => {
            if (barRef.current !== null) {
                const newNavHeight = (barRef.current as HTMLElement).offsetHeight;
                setNavHeight(`${newNavHeight}px`);
            }
        };
        updateHeight();
        window.addEventListener('resize', updateHeight);
        return () => {
            window.removeEventListener('resize', updateHeight);
        };
    }, []);

    const handleClick = (): void => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <TopBar isOpen={isOpen} onClick={handleClick} />
            <SideBarComponent isOpen={isOpen} />
            {isOpen && <div className={`fixed inset-0 top-[${navHeight}] bg-black opacity-50 z-20 transition-all duration-300 ease-out`} />}
        </>
    );
}
