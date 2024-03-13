import { Button, Dialog } from '@mui/material';
import { type SetStateAction, type Dispatch } from 'react';

export default function DisplayImgInDialog({ open, setOpen, url, id, onDeleteImg }: { open: boolean, setOpen: Dispatch<SetStateAction<boolean>>, url: string, id: string, onDeleteImg: (id: string, url: string) => void }): JSX.Element {
    const handleClose = (): void => {
        setOpen(false);
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <img src={url} alt="img" />
            <Button onClick={() => { onDeleteImg(id, url); }}>Delete</Button>
        </Dialog>
    );
}
