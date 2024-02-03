import { StyledUlSideBar, SideBar } from '../styles/stylesNavbar';
import { ButtonOrLink } from '../components/Button';
import { ulList } from '../data/ulListNavbar';
import { type SideBarComponentProps } from '../interfaces/SideBarProps';

export function SideBarComponent({ isOpen }: SideBarComponentProps): JSX.Element {
    return (
        <SideBar $variant={isOpen ? 'active' : undefined} $size={isOpen ? 'active' : undefined}>
            <StyledUlSideBar>
                {ulList.map((item) => (
                    <li key={item.id}>
                        <ButtonOrLink $size= href={item.href ?? '#'} isLink={item.isLink}>
                            {item.svg}
                            {item.src !== undefined && <img width='40px' src={item.src} alt={item.name} />}
                            <span>{item.name}</span>
                        </ButtonOrLink>
                    </li>
                ))}
            </StyledUlSideBar>
        </SideBar>
    );
}
