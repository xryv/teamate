// import styles from 'src/styles/styleButton.ts';
import { StyledBurgerButton, StyledBurgerButtonSpan, StyledButtonOrLink, StyledLink } from '../../styles/styleButton';
// import interfaces from 'src/types/ButtonProps';
import { type ButtonOrLinkProps } from '../../interfaces/ButtonProps';
import { StyledIconButton } from '../SearchBar/SearchBar';
import { type IconButtonProps } from '@mui/material';
import { type MouseEvent } from 'react';

export const ButtonOrLink = ({ children, href, isLink, isBurger, isOpen, isSubmit, onClick, ...props }: ButtonOrLinkProps): JSX.Element => {
    if (isBurger !== undefined) {
        return (
            <StyledBurgerButton onClick={onClick}>
                <StyledBurgerButtonSpan $variant={isOpen ?? false ? 'top-active' : 'top'} />
                <StyledBurgerButtonSpan $variant={isOpen ?? false ? 'center-active' : 'center'} />
                <StyledBurgerButtonSpan $variant={isOpen ?? false ? 'bottom-active' : 'bottom'} />
            </StyledBurgerButton>
        );
    } else {
        return isLink === true && href !== undefined
            ? (
                <StyledLink onClick={onClick} to={href} {...props}>{children}</StyledLink>)
            : (
                <StyledButtonOrLink onClick={onClick} type={isSubmit ?? false ? 'submit' : 'button'} {...props}>{children}</StyledButtonOrLink>
            );
    }
};

interface BurgerIconUIProps extends IconButtonProps {
    isOpen?: boolean
    onClick?: (event: MouseEvent<HTMLElement>) => void
}

export const BurgerIconUI = ({ isOpen, onClick, ...props }: BurgerIconUIProps): JSX.Element => {
    return (
        <StyledIconButton title='Menu' burger={true} onClick={onClick} {...props} >
            <StyledBurgerButtonSpan $variant={isOpen === true ? 'top-active' : 'top'} />
            <StyledBurgerButtonSpan $variant={isOpen === true ? 'center-active' : 'center'} />
            <StyledBurgerButtonSpan $variant={isOpen === true ? 'bottom-active' : 'bottom'} />
        </StyledIconButton>
    );
};
