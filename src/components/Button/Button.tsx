// import styles from 'src/styles/styleButton.ts';
import { StyledBurgerButton, StyledBurgerButtonSpan, StyledButtonOrLink, StyledLink } from '../../styles/styleButton';
// import interfaces from 'src/types/ButtonProps';
import { type ButtonOrLinkProps } from '../../interfaces/ButtonProps';

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
