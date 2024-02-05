import { useState, type MouseEventHandler } from 'react';
import { ToggleUser } from '../components/Chat/ToggleUser/ToggleUser';
import { Chat } from '../components/Chat/Chat/Chat';
import { StyleMessaging } from './StyleMessaging';

export default function Messaging(): JSX.Element {
    const [isOn, setIsOn] = useState(false);

    const handleClick: MouseEventHandler<HTMLDivElement> = () => {
        setIsOn(!isOn);
    };

    return (
        <StyleMessaging>
            <ToggleUser isOn={isOn} onClick={handleClick} />
            <Chat isOn={isOn} />
        </StyleMessaging>
    );
}
