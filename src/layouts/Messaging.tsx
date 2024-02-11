import { Chat } from '../components/Chat/Chat/Chat';
import { NameOfGroup } from '../components/Chat/NameOfGroup/NameOfGroup';

export default function Messaging(): JSX.Element {
    return (
        <>
            <NameOfGroup />
            <Chat />
        </>
    );
}
