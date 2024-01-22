import { Mic, PlusCircle, SendHorizontal, SmileIcon } from "lucide-react";
import React from "react";
import { Button } from "./Button";



interface ChatBarProps {
    valueInput?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void
    onClickUser?: () => void
}

export default function ChatBar({ valueInput, onChange, onSubmit, onClickUser, ...props }: ChatBarProps) {
    return (
        <div {...props} className="flex w-full h-fit items-center opacity-50">
            <form autoFocus action="submit" onSubmit={onSubmit} className="flex items-center pl-4 w-full h-10 bg-transparant-600 rounded-full">    {/* ChatBar*/}
                <div className="flex items-center justify-center w-full h-full">
                    <Button>
                        <SmileIcon size={28} />
                    </Button>
                    <div className="w-full h-full mx-2 pl-1 opacity-100 border-l-2 border-slate-800">
                        <input autoFocus value={valueInput} onChange={onChange} type="text" className="w-full h-full bg-inherit text-slate-950 outline-none" />
                    </div>
                </div>
                <div className="flex items-center h-full gap-1">
                    <div className="flex flex-col gap-1 items-center justify-center">
                        <Button type="button" onClick={onClickUser} variant="border" size='select'>
                            switch user
                        </Button>
                    </div>
                    <Button>
                        <PlusCircle size={28} />
                    </Button>
                    <Button variant="ghostLight">
                        <SendHorizontal size={28} />
                    </Button>
                </div>
            </form>
            <Button variant="ghostGray" size='mic'>
                <Mic size={28} />
            </Button>
        </div>
    )
}