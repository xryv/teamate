import { ButtonOrLink } from './Button';
import { type ListItemProps } from '../types/ListItemProps';
import tw from 'twin.macro';
import styled from 'styled-components';
import { useCallback, useState } from 'react';

const UlStyled = styled.ul`
    ${tw`hidden relative md:flex flex-row items-center justify-center gap-8 w-1/3 max-w-96`}
    li {
        ${tw`flex flex-col justify-center items-center shrink-0 transition-all duration-300 ease-out`}
    }
`;

const LogoStyled = styled.img`${tw`w-10`}`;

const LinkTextStyled = styled.a`${tw`absolute text-orangePV-900  translate-y-8`}`;

export const ListItems = ({ items }: { items: ListItemProps[] }): JSX.Element => {
    const [hoveredItemId, setHoveredItemId] = useState<number | null>(null);

    const handleMouseEnter = useCallback((id: number): void => {
        setHoveredItemId(id);
    }, []);

    const handleMouseLeave = useCallback((): void => {
        setHoveredItemId(null);
    }, []);

    return (
        <>
            <UlStyled>
                {items.map((item) => (
                    <li key={item.id}
                        onMouseEnter={() => { handleMouseEnter(item.id); }}
                        onMouseLeave={handleMouseLeave}>
                        <ButtonOrLink href={item.href} isLink={item.isLink}>
                            {(item.src !== undefined && item.display === undefined) && <LogoStyled src={item.src} alt={item.name} />}
                            {item.svg}
                        </ButtonOrLink>
                        {hoveredItemId === item.id && <LinkTextStyled href={item.href}>{item.name}</LinkTextStyled>}
                    </li>
                ))}
            </UlStyled>
        </>
    );
};
