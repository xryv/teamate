// Interface for the ListItem component
export interface ListItemProps {
    id: number
    name?: string
    svg?: JSX.Element
    src?: string
    isLink: boolean
    href?: string
    alt?: string
    display?: string
    variantTopBar?: string
    sizeTopBar?: string
    as?: string
    isConnect?: boolean
}
