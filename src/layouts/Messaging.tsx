import React, { useEffect, useState } from "react";
import jeuPng from "../assets/messagerie/rl.png";
import Message from "../components/Messages";
import ChatBar from "../components/ChatBar";

export default function Messaging() {
    const [isEdited, setIsEdited] = useState('')
    const [isCurrentUserBoolean, setIsCurrentUserBoolean] = useState(true)
    const [valueInput, setValueInput] = useState('')
    const [messages, setMessages] = useState([
        {
            edit: true,
            isEdited: isEdited,
            variant: "default",
            content: `I don't have personal preferences, but I can help you with any questions you have.`,
            timestamp: "17:41:16",
            isCurrentUser: true,
        },
        {
            edit: true,
            isEdited: isEdited,
            variant: "other",
            content: `I don't have personal preferences, but I can help you with any questions you have.`,
            timestamp: "17:41:16",
            isCurrentUser: false,
        },
        {
            edit: true,
            isEdited: isEdited,
            variant: "default",
            content: `I don't have personal preferences, but I can help you with any questions you have.`,
            timestamp: "17:41:16",
            isCurrentUser: true,
        },
        {
            edit: true,
            isEdited: isEdited,
            variant: "other",
            content: `I don't have personal preferences, but I can help you with any questions you have.`,
            timestamp: "17:41:16",
            isCurrentUser: false,
        },
    ]);

    const handleMessageSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setMessages((prevMessages) => {
            const updatedMessages = [...prevMessages];
            updatedMessages.push({
                edit: true,
                isEdited: isEdited,
                variant: isCurrentUserBoolean ? "default" : "other",
                content: valueInput,
                timestamp: new Date().toLocaleTimeString(),
                isCurrentUser: isCurrentUserBoolean,
            });
            return updatedMessages;
        })
        setValueInput('')
    }

    const chatBoxRef = React.useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (chatBoxRef.current)
            chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }, [messages]);

    const handleDeleteMessage = (index: number) => {
        const updatedMessages = [...messages];
        updatedMessages.splice(index, 1);
        setMessages(updatedMessages);
    };

    const handleEditMessage = (index: number) => {
        setMessages((prevMessages) => {
            const updatedMessages = [...prevMessages];
            updatedMessages[index] = { ...updatedMessages[index], edit: !updatedMessages[index].edit };
            if (updatedMessages[index].isEdited === 'En cours de modification...') {
                updatedMessages[index] = { ...updatedMessages[index], isEdited: updatedMessages[index].isEdited = 'Modifié' };
            }
            if (updatedMessages[index].edit === false) {
                updatedMessages[index] = { ...updatedMessages[index], isEdited: updatedMessages[index].isEdited = 'En cours de modification...' };
                console.log('re')
            }
            console.log(updatedMessages[index].edit)
            console.log(updatedMessages[index].isEdited)
            // console.log(isEdited)
            return updatedMessages;
        });
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        setMessages((prevMessages) => {
            const updatedMessages = [...prevMessages];
            updatedMessages[index] = { ...updatedMessages[index], content: e.target.value };
            return updatedMessages;
        });
    };

    const handleChangeValueInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValueInput(e.target.value)
    }

    return (
        <div className="flex justify-center w-full h-fit px-4 py-6">
            {/* img groupe messages */}
            <div className="flex flex-col w-full h-fit">
                <div className="flex items-center justify-center relative">
                    {/* img groupe */}
                    <img className="absolute lg:hidden left-10" src={jeuPng} alt="" />
                    <input
                        className="bg-transparant-500 text-lg text-bluePV-1000 font-custom rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orangePV-500  "
                        type="text"
                        placeholder="Nom du groupe..."
                    />
                </div>
                <div ref={chatBoxRef} className="h-96 py-10 px-4 overflow-y-auto scrollbar-thumb-transparant-300 scrollbar-thin scrollbar-track-transparant-100 scrollBar scroll-smooth">
                    {messages.map((message, index) => (
                        <Message 
                            key={index}
                            isEdited={message.isEdited}
                            edit={message.edit}
                            variant={message.variant as "default" | "other"}
                            content={message.content}
                            timestamp={message.timestamp}
                            isCurrentUser={message.isCurrentUser}
                            onDeleteClick={() => handleDeleteMessage(index)}
                            onEditClick={() => handleEditMessage(index)}
                            onInputChange={(e) => handleInputChange(e, index)}
                        />
                    ))}
                </div>
                <ChatBar  onClickUser={() => { setIsCurrentUserBoolean(!isCurrentUserBoolean) }} valueInput={valueInput} onChange={handleChangeValueInput} onSubmit={handleMessageSubmit} />
                {isCurrentUserBoolean ? <p className="text-transparant-1000 pl-2">Vous êtes User</p> : <p className="text-transparant-1000 pl-2">Vous êtes Other</p>}
            </div>
        </div>
    );
}
