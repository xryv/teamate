import { Bell, Calendar, Home, LayoutDashboard, MoreVertical, Search, User, Users } from 'lucide-react';
import gameImage from '../assets/rl.png';
import { useAuthContext } from '../context/AuthContext';
import { type ListItemProps } from '../interfaces/ListItemProps';

export function useUlList(): ListItemProps[] {
    const { user } = useAuthContext(['user']);
    console.log('userrr', user);
    return [
        { id: 1, name: 'Accueil', svg: <Home size='2.5em' strokeWidth={1} />, isLink: true, href: '/', variantTopBar: 'firstHalf', sizeTopBar: 'firstHalf' },
        { id: 2, name: 'Recherché', svg: <Search size='2.5rem' strokeWidth={1} />, isLink: true, href: '/Recherché', variantTopBar: 'firstHalf', sizeTopBar: 'firstHalf' },
        { id: 3, name: 'Événement', svg: <Calendar size='2.5rem' strokeWidth={1} />, isLink: true, href: '/Événement', variantTopBar: 'firstHalf', sizeTopBar: 'firstHalf' },
        { id: 4, name: 'Parcourir', svg: <LayoutDashboard size='2.5rem' strokeWidth={1} />, isLink: true, href: '/Parcourir', variantTopBar: 'firstHalf', sizeTopBar: 'firstHalf' },
        { id: 5, name: 'Amis', svg: <Users size='2.5rem' strokeWidth={1} />, isLink: false, variantTopBar: 'firstHalf', sizeTopBar: 'firstHalf' },
        { id: 6, name: 'Notification', svg: <Bell size='2.5rem' strokeWidth={1} />, isLink: false, variantTopBar: 'firstHalf', sizeTopBar: 'firstHalf' },
        { id: 7, name: user !== null ? `${user?.username}` : 'Se connecter', svg: <User size='2.5rem' strokeWidth={1} />, isLink: true, href: '/Profil', variantTopBar: 'firstHalf', sizeTopBar: 'firstHalf', isConnect: user !== null },
        { id: 8, name: 'En savoir plus', svg: <MoreVertical size='2.5rem' strokeWidth={1} />, isLink: true, href: '/Profil', variantTopBar: 'firstHalf', sizeTopBar: 'firstHalf' },
        // { id: 9, name: 'Se connecter', svg: <LogIn size='2.5rem' strokeWidth={1} />, isLink: true, href: '/login' },
        // { id: 10, name: 'Se déconnecter', svg: <LogOut size='2.5rem' strokeWidth={1} />, isLink: true, href: '/logout' },
        // { id: 11, name: 'Rang', src: rank, isLink: true, href: '/Rang' },
        // { id: 12, name: 'Profil', src: profil, isLink: true, href: '/Profil' },
    ];
}
export function useFirstHalf(): ListItemProps[] {
    const ulListFirstHalf = useUlList();
    return ulListFirstHalf.filter(item => item.id <= 4);
}

export function useSecondHalf(): ListItemProps[] {
    const ulListSecondHalf = useUlList();
    return ulListSecondHalf.filter(item => item.id > 4 && item.id <= 8);
}

export const logo = <svg width="94" height="73" viewBox="0 0 94 73" fill="none" xmlns="http://www.w3.org/2000/svg">
    <title>Logo Teamate</title>
    <path d="M0 0C12.5 4.83333 47 17.5 94 0.5C93.5 4.5 88 12 75.5 13.5C55.8295 15.8605 56 25.3212 56 38.5C56 53 62 57 63 73H30.5C30.8333 69.3333 32.3 60.1 35.5 52.5C39.5 43 38 32.5 37 26.5C36 20.5 33 15.5 18.5 14C6.9 12.8 1.33333 4.16667 0 0Z" fill="url(#paint0_linear_781_1976)"/>
    <path d="M47 58.5C35 58.5 30.5915 69 30.5915 73H63C63 69 59 58.5 47 58.5Z" fill="url(#paint1_linear_781_1976)" fillOpacity="0.7"/>
    <path d="M19 14C8.08308 12.3205 2 5.5 0 0C0.5 5.5 3.10679 15.7848 6 23.5C9 31.5 9.5 39.5 9 42.5C11.5 40.5 17.6 33.9 22 23.5C26.3333 24.8333 35.6 30.3 38 39.5C38.5 44 38.5 26 35.5 21.5C32.5 17 32 16 19 14Z" fill="url(#paint2_linear_781_1976)"/>
    <path d="M75 13.5C85.9265 11.861 92 7 94 0.5C94 9 90.4596 14.1292 88 22C85.5 30 84.5 39.3333 84.5 42C76 34.5 74.5 29 72 23.5C65.5 25 57 33.5 56 38.5C56 37 55.5 25.72 58.5 21.5C61.5 17.28 65 15 75 13.5Z" fill="url(#paint3_linear_781_1976)"/>
    <defs>
        <linearGradient id="paint0_linear_781_1976" x1="47" y1="0" x2="47" y2="73" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F5C55A"/>
            <stop offset="0.272936" stopColor="#F48065"/>
            <stop offset="0.528281" stopColor="#F2398E"/>
            <stop offset="0.765017" stopColor="#C1307C"/>
            <stop offset="1" stopColor="#95296A"/>
        </linearGradient>
        <linearGradient id="paint1_linear_781_1976" x1="47.25" y1="58" x2="47.25" y2="72.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F38A5E" stopOpacity="0.8"/>
            <stop offset="0.498281" stopColor="#F36B70"/>
            <stop offset="1" stopColor="#F24885"/>
        </linearGradient>
        <linearGradient id="paint2_linear_781_1976" x1="19.1082" y1="0" x2="19.1082" y2="42.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#97296C"/>
            <stop offset="0.591743" stopColor="#E7378B"/>
            <stop offset="1" stopColor="#F4BE5C"/>
        </linearGradient>
        <linearGradient id="paint3_linear_781_1976" x1="75" y1="0.5" x2="75" y2="42" gradientUnits="userSpaceOnUse">
            <stop stopColor="#97296C"/>
            <stop offset="0.591743" stopColor="#E7378B"/>
            <stop offset="1" stopColor="#F4BE5C"/>
        </linearGradient>
    </defs>
</svg>;

interface LogoProps {
    width?: number
    height?: number
}

export const Logo = ({ width, height }: LogoProps): JSX.Element => (
    <svg width={width} height={height} viewBox="0 0 94 73" fill="none" xmlns="http://www.w3.org/2000/svg">
        <title>Logo Teamate</title>
        <path d="M0 0C12.5 4.83333 47 17.5 94 0.5C93.5 4.5 88 12 75.5 13.5C55.8295 15.8605 56 25.3212 56 38.5C56 53 62 57 63 73H30.5C30.8333 69.3333 32.3 60.1 35.5 52.5C39.5 43 38 32.5 37 26.5C36 20.5 33 15.5 18.5 14C6.9 12.8 1.33333 4.16667 0 0Z" fill="url(#paint0_linear_781_1976)"/>
        <path d="M47 58.5C35 58.5 30.5915 69 30.5915 73H63C63 69 59 58.5 47 58.5Z" fill="url(#paint1_linear_781_1976)" fillOpacity="0.7"/>
        <path d="M19 14C8.08308 12.3205 2 5.5 0 0C0.5 5.5 3.10679 15.7848 6 23.5C9 31.5 9.5 39.5 9 42.5C11.5 40.5 17.6 33.9 22 23.5C26.3333 24.8333 35.6 30.3 38 39.5C38.5 44 38.5 26 35.5 21.5C32.5 17 32 16 19 14Z" fill="url(#paint2_linear_781_1976)"/>
        <path d="M75 13.5C85.9265 11.861 92 7 94 0.5C94 9 90.4596 14.1292 88 22C85.5 30 84.5 39.3333 84.5 42C76 34.5 74.5 29 72 23.5C65.5 25 57 33.5 56 38.5C56 37 55.5 25.72 58.5 21.5C61.5 17.28 65 15 75 13.5Z" fill="url(#paint3_linear_781_1976)"/>
        <defs>
            <linearGradient id="paint0_linear_781_1976" x1="47" y1="0" x2="47" y2="73" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F5C55A"/>
                <stop offset="0.272936" stopColor="#F48065"/>
                <stop offset="0.528281" stopColor="#F2398E"/>
                <stop offset="0.765017" stopColor="#C1307C"/>
                <stop offset="1" stopColor="#95296A"/>
            </linearGradient>
            <linearGradient id="paint1_linear_781_1976" x1="47.25" y1="58" x2="47.25" y2="72.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F38A5E" stopOpacity="0.8"/>
                <stop offset="0.498281" stopColor="#F36B70"/>
                <stop offset="1" stopColor="#F24885"/>
            </linearGradient>
            <linearGradient id="paint2_linear_781_1976" x1="19.1082" y1="0" x2="19.1082" y2="42.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="#97296C"/>
                <stop offset="0.591743" stopColor="#E7378B"/>
                <stop offset="1" stopColor="#F4BE5C"/>
            </linearGradient>
            <linearGradient id="paint3_linear_781_1976" x1="75" y1="0.5" x2="75" y2="42" gradientUnits="userSpaceOnUse">
                <stop stopColor="#97296C"/>
                <stop offset="0.591743" stopColor="#E7378B"/>
                <stop offset="1" stopColor="#F4BE5C"/>
            </linearGradient>
        </defs>
    </svg>
);
export const game = gameImage;
