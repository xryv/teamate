import { Search as SearchIcon } from '@mui/icons-material';
import { Autocomplete, Box, CircularProgress, InputAdornment, Stack, TextField, ThemeProvider } from '@mui/material';
import { Fragment, useEffect, useState } from 'react';
import customTheme from '../../styles/customTheme';

interface OptionType {
    _id?: string
    username?: string
    // ajoutez ici d'autres propriétés si nécessaire
}
interface SearchBarProps {
    data: OptionType[] | undefined
    placeholder?: string
    loading?: boolean
}

export function SearchBar({ data, loading }: SearchBarProps): JSX.Element {
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState<OptionType[]>([]);

    useEffect(() => {
        if (data !== undefined) {
            setOptions(data);
        }
    }, [data]);

    console.log('data', data);

    return (
        <>
            <ThemeProvider theme={customTheme}>
                <Stack>
                    <Box>
                        <Autocomplete
                            id="asynchronous-demo"
                            placeholder="Search…"
                            sx={{ width: 300 }}
                            open={open}
                            onOpen={() => {
                                setOpen(true);
                            }}
                            onClose={() => {
                                setOpen(false);
                            }}
                            isOptionEqualToValue={(option, value) => option.username === value.username}
                            getOptionLabel={(option) => option.username ?? ''}
                            options={options}
                            loading={loading}
                            noOptionsText="No user found"
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Rechercher un utilisateur"
                                    name='search'
                                    variant="standard"
                                    color='secondary'
                                    InputProps={{
                                        ...params.InputProps,
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <SearchIcon />
                                            </InputAdornment>
                                        ),
                                        endAdornment: (
                                            <Fragment>
                                                {loading === true ? <CircularProgress color="orangePV" size={20} /> : null}
                                                {params.InputProps.endAdornment}
                                            </Fragment>
                                        ),
                                    }}

                                />
                            )}
                            renderOption={(props, option) => (
                                <Box component='li' {...props} key={option._id}>
                                    <Box component='span'>{option.username}</Box>
                                </Box>
                            )}

                        />
                    </Box>
                </Stack>
            </ThemeProvider>

        </>

    );
}
