import { Bell, Calendar, Home, LayoutDashboard, Search, Users } from 'lucide-react';
import rank from '../assets/rank.png';
import profil from '../assets/profil.png';
import logoImage from '../assets/logo.png';
import gameImage from '../assets/rl.png';

export const ulList = [
    { id: 1, name: 'Accueil', svg: <Home size='2.5em' strokeWidth={1} />, isLink: true, href: '/', variantTopBar: 'firstHalf', sizeTopBar: 'firstHalf' },
    { id: 2, name: 'Recherché', svg: <Search size='2.5rem' strokeWidth={1} />, isLink: true, href: '/Recherché', variantTopBar: 'firstHalf', sizeTopBar: 'firstHalf' },
    { id: 3, name: 'Événement', svg: <Calendar size='2.5rem' strokeWidth={1} />, isLink: true, href: '/Événement', variantTopBar: 'firstHalf', sizeTopBar: 'firstHalf' },
    { id: 4, name: 'Parcourir', svg: <LayoutDashboard size='2.5rem' strokeWidth={1} />, isLink: true, href: '/Parcourir', variantTopBar: 'firstHalf', sizeTopBar: 'firstHalf' },
    { id: 5, name: 'Amis', svg: <Users size='2.5rem' strokeWidth={1} />, isLink: false, variantTopBar: 'firstHalf', sizeTopBar: 'firstHalf' },
    { id: 6, name: 'Notification', svg: <Bell size='2.5rem' strokeWidth={1} />, isLink: false, variantTopBar: 'firstHalf', sizeTopBar: 'firstHalf' },
    { id: 7, name: 'Rang', src: rank, isLink: true, href: '/Rang' },
    { id: 8, name: 'Profil', src: profil, isLink: true, href: '/Profil' },
];

export const firstHalf = ulList.filter(item => item.id <= 4);
export const secondHalf = ulList.filter(item => item.id > 4 && item.id <= 8);
export const logo = logoImage;
export const game = gameImage;
