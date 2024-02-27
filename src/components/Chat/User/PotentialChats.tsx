import { useState, type ChangeEvent, type FC } from 'react';
import { Stack, TextField, Autocomplete } from '@mui/material';
import { useChatContext } from '../../../context/ChatContext';

export const PotentialChats: FC = () => {
    const { potentialChats } = useChatContext(['potentialChats']);
    // console.log('potentialChats', potentialChats);

    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setSearchTerm(event.target.value);
    };

    const filteredChats = potentialChats?.filter(chat =>
        chat.username?.toLowerCase().includes(searchTerm.toLowerCase()),
    ) ?? [];

    return (
        <>
            <Stack>
                <Autocomplete
                    options={filteredChats}
                    getOptionLabel={(option) => option.username}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Search"
                            variant="outlined"
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    )}
                />

            </Stack>
        </>
    );
};
