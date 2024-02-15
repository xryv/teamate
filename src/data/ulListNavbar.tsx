import { Bell, Calendar, Home, LayoutDashboard, MoreVertical, Search, User, Users } from 'lucide-react';
import logoImage from '../assets/logo.png';
import gameImage from '../assets/rl.png';
import { useAuthContext } from '../context/AuthContext';
import { type ListItemProps } from '../interfaces/ListItemProps';

export function useUlList(): ListItemProps[] {
    const { user } = useAuthContext(['user']);
    return [
        { id: 1, name: 'Accueil', svg: <Home size='2.5em' strokeWidth={1} />, isLink: true, href: '/', variantTopBar: 'firstHalf', sizeTopBar: 'firstHalf' },
        { id: 2, name: 'Recherché', svg: <Search size='2.5rem' strokeWidth={1} />, isLink: true, href: '/Recherché', variantTopBar: 'firstHalf', sizeTopBar: 'firstHalf' },
        { id: 3, name: 'Événement', svg: <Calendar size='2.5rem' strokeWidth={1} />, isLink: true, href: '/Événement', variantTopBar: 'firstHalf', sizeTopBar: 'firstHalf' },
        { id: 4, name: 'Parcourir', svg: <LayoutDashboard size='2.5rem' strokeWidth={1} />, isLink: true, href: '/Parcourir', variantTopBar: 'firstHalf', sizeTopBar: 'firstHalf' },
        { id: 5, name: 'Amis', svg: <Users size='2.5rem' strokeWidth={1} />, isLink: false, variantTopBar: 'firstHalf', sizeTopBar: 'firstHalf' },
        { id: 6, name: 'Notification', svg: <Bell size='2.5rem' strokeWidth={1} />, isLink: false, variantTopBar: 'firstHalf', sizeTopBar: 'firstHalf' },
        { id: 7, name: user !== null ? `Profile : ${user?.username}` : 'Se connectez', svg: <User size='2.5rem' strokeWidth={1} />, isLink: true, href: '/Profil', variantTopBar: 'firstHalf', sizeTopBar: 'firstHalf', isConnect: user !== null },
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

export const logo = logoImage;
export const game = gameImage;
