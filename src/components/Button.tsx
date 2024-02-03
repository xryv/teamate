import { BurgerButton, BurgerButtonSpan, StyledButton, StyledLink } from '../styles/styleButton';
import { type ButtonOrLinkProps } from '../types/ListItemProps';

export const ButtonOrLink = ({ children, href, isLink, isBurger, isOpen, handleClick, ...props }: ButtonOrLinkProps): JSX.Element => {
    if (isBurger !== undefined) {
        return (
            <BurgerButton onClick={handleClick}>
                <BurgerButtonSpan variant={isOpen !== undefined ? 'top-active' : 'top'} />
                <BurgerButtonSpan variant={isOpen !== undefined ? 'center-active' : 'center'} />
                <BurgerButtonSpan variant={isOpen !== undefined ? 'bottom-active' : 'bottom'} />
            </BurgerButton>
        );
    } else {
        return isLink === true
            ? (
                <StyledLink href={href} {...props}>{children}</StyledLink>
            )
            : (
                <StyledButton {...props}>{children}</StyledButton>
            );
    }
};
