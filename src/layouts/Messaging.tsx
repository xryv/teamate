import { useState, type MouseEventHandler, useLayoutEffect, useRef } from 'react';
import { ToggleUser } from '../components/Chat/ToggleUser/ToggleUser';
import { StyleMessaging } from './StyleMessaging';
import NameOfGroupe from '../components/Chat/NameOfGroup/NameOfGroup';
import Chat from '../components/Chat/Chat/Chat';

export default function Messaging(): JSX.Element {
    const [isOn, setIsOn] = useState(false);
    const chat = useRef<HTMLFormElement>(null);
    const nameOfGroup = useRef<HTMLFormElement>(null);

    const [height, setHeight] = useState<number>(0);

    useLayoutEffect(() => {
        let timeoutId: NodeJS.Timeout | null = null;

        const updateHeight = (): void => {
            const nameOfGroupPosition = nameOfGroup.current?.getBoundingClientRect().top;
            const chatPosition = chat.current?.getBoundingClientRect().top;
            if (nameOfGroupPosition !== undefined && chatPosition !== undefined) {
                setHeight(Math.abs(nameOfGroupPosition - chatPosition) - 21);
            }
        };

        const debouncedUpdateHeight = () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            timeoutId = setTimeout(updateHeight, 200); // Attend 200ms après le dernier événement de redimensionnement
        };

        debouncedUpdateHeight();
        window.addEventListener('resize', debouncedUpdateHeight);
        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            window.removeEventListener('resize', debouncedUpdateHeight);
        };
    }, []);

    const handleClick: MouseEventHandler<HTMLDivElement> = () => {
        setIsOn(!isOn);
    };

    return (
        <StyleMessaging>
            <NameOfGroupe ref={nameOfGroup} />
            <ToggleUser isOn={isOn} onClick={handleClick} />
            <Chat isOn={isOn} ref={chat} height={height}/>
        </StyleMessaging>
    );
}
