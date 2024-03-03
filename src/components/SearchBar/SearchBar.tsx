import { Search as SearchIcon } from '@mui/icons-material';
import { Autocomplete, Box, CircularProgress, TextField, InputBase, type InputBaseComponentProps, alpha, styled, Dialog, type ModalProps, IconButton, type IconButtonProps } from '@mui/material';
import { type MouseEventHandler, Fragment, useEffect, useState } from 'react';
import customTheme from '../../styles/customTheme';
import { useChatContext } from '../../context/ChatContext';
import { useAuthContext } from '../../context/AuthContext';

const StyledAutocomplete = styled(Autocomplete)(({ theme }) => ({
    color: theme.palette.common.white,

    '& .MuiFormLabel-root': {
        color: alpha(theme.palette.common.white, 0.6),
    },

    '& .MuiInputBase-root': {
        '&:before': {
            borderBottom: '1px solid rgb(255 255 255 / 42%)',
        },
        '&:hover:before': {
            // borderBottom: '1px solid #yourColor', // Remplacez #yourColor par la couleur que vous voulez utiliser pour le hover
        },
    },
    '& .MuiButtonBase-root': {
        color: theme.palette.common.white,
        padding: '.40rem',
    },
    '& .MuiAutocomplete-endAdornment': {
        top: 'calc(50% - 18px)',
        borderRadius: '0.25rem',
        '&:hover': {
            [theme.breakpoints.up('xs')]: {
                backgroundColor: 'transparent',
            },
            [theme.breakpoints.up('md')]: {
                color: customTheme.palette.slate[300],
                backgroundColor: customTheme.palette.transparant[300],
            },
        },
    },
}));
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    color: '#cbd5e1',
    border: '1px solid #cbd5e1',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'transparent',
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.15),
    },
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
    width: 'auto',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '0ch',
        [theme.breakpoints.up('sm')]: {
            width: '10ch',
        },
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const DialogSearch = styled('div')(({ theme }) => ({
    position: 'relative',
    // borderRadius: theme.shape.borderRadius,
    borderRadius: '.5rem',
    border: '1px solid #cbd5e1',
    backgroundColor: alpha(theme.palette.grey[800], 0.15),
    backdropFilter: 'blur(10rem)',
    '&:hover': {
        backgroundColor: alpha(theme.palette.grey[900], 0.25),
    },
    width: '100%', // make the width 100%
}));
const DialogSearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const DialogStyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%', // make the width 100%
    },
}));

const IconButtonWithProps = ({ menuStyle, barStyle, burger, ...props }: StyledIconButtonProps): JSX.Element => (
    <IconButton {...props} />
);

export const StyledIconButton = styled(IconButtonWithProps)<StyledIconButtonProps>(({ theme, menuStyle, barStyle, burger }) => ({
    color: menuStyle === true ? customTheme.palette.bluePV.main : customTheme.palette.slate[200],
    borderRadius: barStyle === true ? '0.25rem' : '',
    padding: burger === true ? '1.5rem' : '',
    '&:hover': {
        [theme.breakpoints.up('xs')]: {
            backgroundColor: 'transparent',
        },
        [theme.breakpoints.up('md')]: {
            color: customTheme.palette.slate[300],
            backgroundColor: customTheme.palette.transparant[300],
        },
    },
}));

interface StyledIconButtonProps extends IconButtonProps {
    menuStyle?: boolean
    barStyle?: boolean
    burger?: boolean
}

interface SearchBarProps {
    placeholder?: string
    inputProps?: InputBaseComponentProps
    onClick?: MouseEventHandler<HTMLElement> | undefined
}

interface SearchBarInDialogProps {
    placeholder?: string
    inputProps?: InputBaseComponentProps
    onClose?: ModalProps['onClose']
    open: ModalProps['open']
}

interface OptionType {
    _id?: string
    username?: string
}
interface SearchUsersProps {
    data: OptionType[] | undefined
    placeholder?: string
    loading?: boolean
}

export function SearchBar({ placeholder, inputProps, onClick }: SearchBarProps): JSX.Element {
    return (
        <>
            <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder={placeholder}
                    inputProps={inputProps}
                    onClick={onClick}
                />
            </Search>
        </>

    );
}

export function SearchIconOnly({ onClick }: { onClick: MouseEventHandler<HTMLElement> }): JSX.Element {
    return (
        <StyledIconButton
            size="large"
            edge="start"
            role="button"
            aria-label="open drawer"
            aria-haspopup="true"
            onClick={onClick}
        >
            <SearchIcon titleAccess="Rechercher" />
        </StyledIconButton>

    );
}

export function SearchBarInDialog({ placeholder, inputProps, onClose, open }: SearchBarInDialogProps): JSX.Element {
    return (
        <>
            <Dialog fullWidth open={open} onClose={onClose} sx={{
                '& .MuiDialog-paper': {
                    backgroundColor: 'transparent', // change the background color
                    color: alpha(customTheme.palette.common.white, 0.95), // change the text color
                    borderRadius: '.5rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                },
            }}>
                <DialogSearch>
                    <DialogSearchIconWrapper>
                        <SearchIcon />
                    </DialogSearchIconWrapper>
                    <DialogStyledInputBase
                        placeholder={placeholder}
                        inputProps={inputProps}
                        multiline
                        maxRows={5}
                    />
                </DialogSearch>
            </Dialog>
        </>

    );
}

export function SearchUsers({ data, loading }: SearchUsersProps): JSX.Element {
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState<OptionType[]>([]);
    const [hasStartedTyping, setHasStartedTyping] = useState(false);
    const { user } = useAuthContext(['user']);
    const { createChat } = useChatContext(['createChat']);

    useEffect(() => {
        if (data !== undefined) {
            setOptions(data);
        }
    }, [data]);

    return (
        <>
            <StyledAutocomplete
                id="find-user"
                open={hasStartedTyping}
                onOpen={() => {
                    setOpen(true);
                }}
                onClose={() => {
                    setOpen(false);
                    setHasStartedTyping(false);
                }}
                onChange={(_, value) => {
                    if (value?._id !== undefined) {
                        void createChat(user?._id, value._id);
                    }
                }}
                isOptionEqualToValue={(option, value) => (option as OptionType)._id !== (value as OptionType)._id }
                getOptionLabel={(option) => (option as OptionType).username ?? ''}
                options={options}
                loading={loading}
                noOptionsText="No user found"
                fullWidth
                // disablePortal // Ajoutez cette ligne
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Rechercher un utilisateur"
                        name='search'
                        variant="standard"
                        color='warning'
                        onChange={() => { setHasStartedTyping(true); }}
                        InputProps={{
                            ...params.InputProps,
                            startAdornment: (
                                <StyledIconButton barStyle onClick={() => { setOpen(!open); }}>
                                    <SearchIcon />
                                </StyledIconButton>
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
                renderOption={(props, option: unknown) => {
                    const typedOption = option as OptionType;
                    return (
                        <Box component='li' {...props} key={typedOption._id}>
                            <Box component='span'>{typedOption.username}</Box>
                        </Box>
                    );
                }}
            />
        </>

    );
}
