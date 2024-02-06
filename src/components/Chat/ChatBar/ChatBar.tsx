import { Mic, SendHorizontal, Smile } from 'lucide-react';
import { StyleChatBar } from './StyleChatBar';
import { ButtonOrLink } from '../../Button/Button';
import { type ChangeEvent, useState, forwardRef } from 'react';
import Picker from '@emoji-mart/react';

interface ChatBarProps {
    placeholder: string
    value: string
    name: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    onEmojiSelect: (emoji: { native: string }) => void
}

const ChatBar = forwardRef<HTMLFormElement, ChatBarProps>(({ placeholder, onEmojiSelect, value, name, onChange }, ref) => {
    const [showEmojis, setShowEmojis] = useState(false);

    return (
        <StyleChatBar>
            <div>
                <label htmlFor="chatInput" className='hidden'>Message</label>
                <input ref={ref} autoFocus id="chatInput" type="text" placeholder={placeholder} value={value} name={name} onChange={onChange} autoComplete="off" />

                <ButtonOrLink onClick={() => { setTimeout(() => { setShowEmojis(!showEmojis); }, 0); }} $size='smiley' $variant='ghostHovered' >
                    <Smile />
                </ButtonOrLink>
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
            </div>

        </StyleChatBar>
    );
});

ChatBar.displayName = 'Chat';
export default ChatBar;
