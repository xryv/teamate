import { PencilLine, Trash2 } from 'lucide-react';
import { ChatListContainer, StyledTime } from './styleChatList.tsx';
import { useContext, useEffect, useRef, useState } from 'react';
import { useTransition, animated } from 'react-spring';
import { HeightContext } from '../../../layouts/NewPages';
import { type Message } from '../../../context/ChatContextProps';
import { type User } from '../../../context/AuthContextProps.ts';
import { LinearProgress, Box } from '@mui/material';
import { type UseFetchRecipientUserReturn } from '../../../hooks/useFetchRecipient.tsx';

interface ChatListProps {
    list: Message[] | undefined | null
    recipientUser: UseFetchRecipientUserReturn | undefined
    isMessagesLoading: boolean | undefined
    user: User | null | undefined
    onEdit: (id: string) => void
    onDelete: (id: string) => void
}

type TimeProps = {
    $image?: boolean | undefined
    children: string
} & React.HTMLAttributes<HTMLElement>;

const Time = ({ $image, children }: TimeProps): JSX.Element => {
    const date = new Date(children);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();

    const time = `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;

    return (
        <StyledTime $image={$image}>
            {time}
        </StyledTime>
    );
};

export function ChatList({ list, user, recipientUser, isMessagesLoading, onEdit, onDelete }: ChatListProps): JSX.Element {
    const [isHovered, setIsHovered] = useState<string>('');
    const messagesEndRef = useRef<HTMLDivElement | null>(null);
    const heightStack = useContext(HeightContext);

    const handleMouseEnter = (id: string): void => {
        setIsHovered(id);
    };
    const handleMouseLeave = (): void => {
        setIsHovered('');
    };

    const transitions = useTransition(list ?? [], {
        from: { opacity: 0, transform: 'translate3d(5px,10px,0px)' },
        enter: { opacity: 1, transform: 'translate3d(0px,0px,0px)' },
        leave: { opacity: 0, transform: 'translate3d(5px,0px,0)' },
        keys: message => message?._id ?? '',
    });

    useEffect(() => {
        window.scrollTo(0, document.body.scrollHeight);
        if (messagesEndRef.current !== null) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [list]);

    return isMessagesLoading === true && recipientUser !== null
        ? (<>
            <Box flexGrow={1}></Box>
            <LinearProgress color='error' />
        </>
        )
        : (
            <>
                <div className='flex flex-col flex-grow justify-end w-full'>
                    {list != null && list.length === 0 && (
                        <div className='w-full items-end'>
                            <p className='text-center text-slate-300'>Aucun message</p>
                        </div>
                    )}
                    {recipientUser == null && (
                        <div className='w-full items-end'>
                            <p className='text-center text-slate-300'>Sélectionnez un chat pour commencer à discuter</p>
                        </div>
                    )}
                    {list != null && list.length > 0 && recipientUser != null && (
                        <ChatListContainer $heightStack={heightStack} className='scrollbar-rounded'>
                            {transitions((styles, item) => (
                                <animated.li
                                    style={styles}
                                    className={`message ${user?._id === item?.senderId ? 'items-end' : 'items-start'}`}
                                    key={item?._id}
                                    onMouseEnter={() => { handleMouseEnter(item?._id); }}
                                    onMouseLeave={() => { handleMouseLeave(); }}
                                >
                                    <div className='content-time-image'>
                                        {item?.image !== undefined && <img className='image' src={item?.image} alt="image envoyée par un utilisateur" />}
                                        {item?.text !== undefined && <p className='content'>{item?.text}</p>}
                                        <Time $image={item?.image !== undefined}>{item?.createdAt ?? ''}</Time>
                                    </div>
                                    <div className={`edit-delete transition-opacity duration-100 ease-in ${user?._id === item?.senderId && isHovered === item?._id ? 'opacity-100' : 'opacity-0'}`}>
                                        {item.image === undefined && <button className='' type='button' onClick={() => { onEdit(item?._id); }}><PencilLine size={16} /></button>}
                                        <button className='' type='button' onClick={() => { onDelete(item?._id); }}><Trash2 size={16} /></button>
                                    </div>
                                </animated.li>
                            ))}
                            <div ref={messagesEndRef} />
                        </ChatListContainer>
                    )}
                </div>
            </>
        );
}
