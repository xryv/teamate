import { PencilLine } from 'lucide-react';
import { useState, type FormEvent, type FocusEvent } from 'react';
import { StyleNameOfGroup } from './styleNameOfGroup';

export const NameOfGroup = (): JSX.Element => {
    const [nameOfGroup, setNameOfGroup] = useState<string>('');
    const [submittedValue, setSubmittedValue] = useState<string>('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        setSubmittedValue(nameOfGroup);
    };

    const handleBlur = (e: FocusEvent<HTMLInputElement>): void => {
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
        <StyleNameOfGroup onSubmit={handleSubmit}>
            <label htmlFor="name"></label>
            {submittedValue === '' &&
                <input autoComplete='off' type="text" id='name' placeholder='Nom du groupe...' value={nameOfGroup} onChange={e => { setNameOfGroup(e.target.value); }} onBlur={handleBlur} />
            }
            <div>
                <h1>{submittedValue}</h1>

                {submittedValue !== '' && <button type='button' onClick={handleClick}>
                    <PencilLine />
                </button>}
            </div>
        </StyleNameOfGroup>
    );
};
