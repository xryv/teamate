import { Mic, Paperclip, SendHorizontal, Smile } from 'lucide-react';
import { StyleChatBar } from './StyleChatBar';
import { ButtonOrLink } from '../../Button/Button';
import { type ChangeEvent, useState, useRef } from 'react';
import Picker from '@emoji-mart/react';

interface ChatBarProps {
    placeholder: string
    value: string | undefined
    name: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    onEmojiSelect: (emoji: { native: string }) => void
    onsubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

export function ChatBar({ placeholder, value, name, onChange, onEmojiSelect, onsubmit }: ChatBarProps): JSX.Element {
    const [showEmojis, setShowEmojis] = useState(false);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handlePaperclipClick = (): void => {
        fileInputRef.current?.click();
    };

    return (
        <StyleChatBar onSubmit={onsubmit}>
            <label htmlFor="chatInput" className='hidden'>Message</label>
            <input autoFocus id="chatInput" type="text" placeholder={placeholder} value={value} name={name} onChange={onChange} autoComplete="off" />
            <ButtonOrLink onClick={() => { setTimeout(() => { setShowEmojis(!showEmojis); }, 0); }} $size='smiley' $variant='ghostHovered' >
                <Smile />
            </ButtonOrLink>
            <>
                <ButtonOrLink onClick={handlePaperclipClick} $size='paperclip' $variant='ghostHovered' >
                    <Paperclip />
                </ButtonOrLink>
                <label htmlFor="fileInput" className='hidden'>File</label>
                <input ref={fileInputRef} onChange={onChange} id='fileInput' className='hidden' type="file" accept="image/*" />
            </>
            {showEmojis && <>
                <div className='emoji-picker'>
                    <Picker onClickOutside={() => { setShowEmojis(!showEmojis); }} onEmojiSelect={onEmojiSelect} />
                </div>
            </>}
            {value !== ''
                ? (
                    <>

                        <ButtonOrLink $size='default' $variant='ghostHovered' isSubmit >
                            <SendHorizontal />
                        </ButtonOrLink>
                    </>
                )
                : (
                    <>
                        <ButtonOrLink $size='mic' $variant='ghostHovered' >
                            <Mic />
                        </ButtonOrLink>
                    </>
                )}
        </StyleChatBar>
    );
}
