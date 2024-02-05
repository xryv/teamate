import { TopBar as TopBarStyled, LogoList, GameList, BurgerList } from '../../../styles/stylesNavbar';
import { ButtonOrLink } from '../../Button/Button';
import { firstHalf, secondHalf, logo, game } from '../../../data/ulListNavbar';
import { ListItems } from '../ListItems/ListItems';

export function TopBar({ isOpen, onClick }: { isOpen: boolean, onClick: () => void }): JSX.Element {
    return (
        <TopBarStyled>
            <ListItems items={firstHalf} />
            <LogoList>
                <li>
                    <ButtonOrLink isLink href="/">
                        <img src={logo} alt="Logo" />
                    </ButtonOrLink>
                </li>
            </LogoList>
            <ListItems items={secondHalf} />
            <GameList>
                <li>
                    <ButtonOrLink isLink href="/">
                        <img src={game} alt="Jeu" />
                    </ButtonOrLink>
                </li>
            </GameList>
            <BurgerList>
                <li>
                    <ButtonOrLink isBurger isOpen={isOpen} onClick={onClick} />
                </li>
            </BurgerList>
        </TopBarStyled>
    );
}
