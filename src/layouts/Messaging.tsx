import { useState, type MouseEventHandler } from 'react';
import { ToggleUser } from '../components/Chat/ToggleUser/ToggleUser';
import { Chat } from '../components/Chat/Chat/Chat';
import { NameOfGroup } from '../components/Chat/NameOfGroup/NameOfGroup';

export default function Messaging(): JSX.Element {
    const [isOn, setIsOn] = useState(false);

    const handleClick: MouseEventHandler<HTMLDivElement> = () => {
        setIsOn(!isOn);
    };

    return (
        <>
            <ToggleUser isOn={isOn} onClick={handleClick} />
            <NameOfGroup />
            <Chat isOn={isOn}/>
        </>
    );
}
