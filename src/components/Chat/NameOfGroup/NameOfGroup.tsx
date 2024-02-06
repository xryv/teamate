import { PencilLine } from 'lucide-react';
import { type ButtonHTMLAttributes, useState, forwardRef } from 'react';
import { NameOfGroup as StyledNameOfGroup, StyledButton } from './styleNameOfGroup';

type ConditionalButtonProps = {
    submittedValue: string
} & ButtonHTMLAttributes<HTMLButtonElement>;

const ConditionalButton = ({ submittedValue, ...props }: ConditionalButtonProps): JSX.Element | null => {
    if (submittedValue === '') {
        return null;
    }
    return <StyledButton {...props} />;
};

const NameOfGroupe = forwardRef<HTMLFormElement, unknown>((_, ref) => {
    const [nameOfGroup, setNameOfGroup] = useState<string>('');
    const [submittedValue, setSubmittedValue] = useState<string>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        setSubmittedValue(nameOfGroup);
    };
    const handleClick = (): void => {
        if (submittedValue !== '') {
            setNameOfGroup('');
            setSubmittedValue('');
        }
    };

    return (
        <StyledNameOfGroup ref={ref} onSubmit={handleSubmit}>
            <label htmlFor="name"></label>
            {submittedValue === '' &&
                    <input autoComplete='off' type="text" id='name' placeholder='Nom du groupe...' value={nameOfGroup} onChange={(e) => { setNameOfGroup(e.target.value); }} />
            }
            <div>
                <h1>{submittedValue}</h1>
                <ConditionalButton submittedValue={submittedValue} type='button' onClick={handleClick}>
                    <PencilLine />
                </ConditionalButton>
            </div>
        </StyledNameOfGroup>
    );
});

NameOfGroupe.displayName = 'NameOfGroupe';

export default NameOfGroupe;
