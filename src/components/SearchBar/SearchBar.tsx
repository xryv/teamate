import { Search as SearchIcon } from '@mui/icons-material';
import { InputBase, type InputBaseComponentProps, alpha, styled, Dialog, type ModalProps } from '@mui/material';
import { type MouseEventHandler } from 'react';
import customTheme from '../../styles/customTheme';

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

export function SearchBarInDialog({ placeholder, inputProps, onClose, open }: SearchBarInDialogProps): JSX.Element {
    return (
        <>
            <Dialog fullWidth open={open} onClose={onClose} sx={{
                '& .MuiDialog-paper': {
                    bgcolor: 'transparent', // change the background color
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
