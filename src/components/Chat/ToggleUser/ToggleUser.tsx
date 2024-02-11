import { type MouseEventHandler } from 'react';
import { ToggleContainer, ToggleButton, ToggleCircle, ToggleText } from './styleToggleUser';

interface ToggleUserProps {
    toggleUser: boolean
    onClick: MouseEventHandler<HTMLDivElement> | undefined
}

export function ToggleUser({ toggleUser, onClick }: ToggleUserProps): JSX.Element {
    return (
        <ToggleContainer>
            <ToggleButton $toggleUser={toggleUser} onClick={onClick}>
                <ToggleCircle $toggleUser={toggleUser} />
                <ToggleText $toggleUser={toggleUser}>{toggleUser ? 'other' : 'user'}</ToggleText>
            </ToggleButton>
        </ToggleContainer>
    );
}
