import { ButtonOrLink } from '../../Button/Button';
import { type ListItemProps } from '../../../interfaces/ListItemProps';
import tw from 'twin.macro';
import styled from 'styled-components';
import { useCallback, useState } from 'react';
import { StyledLinkText } from '../../../styles/styleButton';

const UlStyled = styled.ul`
    ${tw`hidden relative md:flex flex-row items-center justify-center gap-8 w-1/3 max-w-96`}
    li {
        ${tw`flex flex-col justify-center items-center shrink-0 transition-all duration-300 ease-out`}
    }
`;

const LogoStyled = styled.img`${tw`w-10`}`;

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
                        <ButtonOrLink
                            $variant={hoveredItemId === item.id ? item.variantTopBar : undefined}
                            $size={hoveredItemId === item.id ? item.sizeTopBar : undefined}
                            href={item.href}
                            isLink={item.isLink}>
                            {item.svg}
                        </ButtonOrLink>
                        <StyledLinkText $variant={hoveredItemId === item.id ? 'hover' : 'default'}
                            href={item.href}>{item.name}
                        </StyledLinkText>
                    </li>
                ))}
            </UlStyled>
        </>
    );
};
