import { StyledUlSideBar, SideBar } from '../../../styles/stylesNavbar';
import { ButtonOrLink } from '../../Button/Button';
import { type SideBarComponentProps } from '../../../interfaces/SideBarProps';
import React from 'react';
import { useUlList } from '../../../data/ulListNavbar';

export function SideBarComponent({ isOpen }: SideBarComponentProps): JSX.Element {
    const ulList = useUlList();
    return (
        <SideBar $variant={isOpen ? 'active' : undefined} $size={isOpen ? 'active' : undefined}>
            <StyledUlSideBar>
                {ulList.map((item) => (
                    <li key={item.id}>
                        <ButtonOrLink $size="buttonSide" href={item.href ?? '#'} isLink={item.isLink}>
                            {item.svg !== undefined && React.cloneElement(item.svg, { size: '2rem' })}
                            <span>{item.name}</span>
                        </ButtonOrLink>
                    </li>
                ))}
            </StyledUlSideBar>
        </SideBar>
    );
}
