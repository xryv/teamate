import { game, logo, useFirstHalf, useSecondHalf } from '../../../data/ulListNavbar';
import { TopBar as TopBarStyled, LogoList, GameList, BurgerList } from '../../../styles/stylesNavbar';
import { ButtonOrLink } from '../../Button/Button';
import { ListItems } from '../ListItems/ListItems';

export function TopBar({ isOpen, onClick }: { isOpen: boolean, onClick: () => void }): JSX.Element {
    const firstHalf = useFirstHalf();
    const secondHalf = useSecondHalf();
    return (
        <TopBarStyled>
            <ListItems items={firstHalf} />
            <LogoList>
                <li>
                    <ButtonOrLink isLink href="/">
                        {logo}
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
