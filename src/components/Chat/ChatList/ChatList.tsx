import { PencilLine, Trash2 } from 'lucide-react';
import { ChatListContainer, Time } from './styleChatList';
import { useEffect, useRef, useState } from 'react';
import { useTransition, animated } from 'react-spring';

interface ChatListProps {
    list: Array<{ message?: string | undefined, id: string, user: boolean, timestamp: string, image?: string | undefined }>
    onEdit: (id: string) => void
    onDelete: (id: string) => void
}

export function ChatList({ list, onEdit, onDelete }: ChatListProps): JSX.Element {
    const [isHovered, setIsHovered] = useState<string>('');
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    const handleMouseEnter = (id: string): void => {
        setIsHovered(id);
    };
    const handleMouseLeave = (): void => {
        setIsHovered('');
    };

    const transitions = useTransition(list, {
        from: { transform: 'translate3d(5px,10px,0px)', opacity: 0 },
        enter: { transform: 'translate3d(0px,0px,0px)', opacity: 1 },
        leave: { transform: 'translate3d(5px,0px,0)', opacity: 0 },
        keys: message => message.id,
    });

    useEffect(() => {
        if (messagesEndRef.current !== null) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [list]);

    return (
        <>
            <div className='flex flex-col flex-grow justify-end w-full'>
                <ChatListContainer className='scrollbar-rounded'>
                    {transitions((styles, item) => (
                        <animated.li
                            style={styles}
                            className={`message ${item.user ? 'items-end' : 'items-start'}`}
                            key={item.id}
                            onMouseEnter={() => { handleMouseEnter(item.id); }}
                            onMouseLeave={() => { handleMouseLeave(); }}
                        >
                            <div className='content-time-image'>
                                {item.image !== undefined && <img className='image' src={item.image} alt="image envoyée par un utilisateur" />}
                                {item.message !== undefined && <p className='content'>{item.message}</p>}
                                <Time $image={item.image !== undefined}>{item.timestamp ?? ''}</Time>
                            </div>
                            <div className={`edit-delete transition-opacity duration-100 ease-in ${item.user && isHovered === item.id ? 'opacity-100' : 'opacity-0'}`}>
                                {item.image === undefined && <button className='' type='button' onClick={() => { onEdit(item.id); }}><PencilLine size={16} /></button>}
                                <button className='' type='button' onClick={() => { onDelete(item.id); }}><Trash2 size={16} /></button>
                            </div>
                        </animated.li>
                    ))}
                    <div ref={messagesEndRef} />
                </ChatListContainer>
            </div>
        </>
    );
}
