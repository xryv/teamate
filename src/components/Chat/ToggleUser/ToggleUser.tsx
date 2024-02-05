import { type MouseEventHandler } from 'react';

export function ToggleUser({ isOn, onClick }: { isOn: boolean, onClick: MouseEventHandler<HTMLDivElement> | undefined }): JSX.Element {
    return (
        <div className='absolute left-0'>
            <div className={`relative flex items-center w-20 h-10 rounded-full transition-all ease-out duration-300 bg-bluePV-900 ${isOn && 'bg-purplePV-900'}`} onClick={onClick}>
                <div className={`w-10 h-10 absolute top-0 bot-0 rounded-full bg-slate-300 transition-all ease-out duration-300 ${isOn && 'translate-x-10'}`}></div>
                <p className={`absolute text-slate-100 ${isOn ? 'left-0' : 'right-0'}`} >{isOn ? 'other' : 'user'}</p>
            </div>
        </div>
    );
}
