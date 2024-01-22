import React, { useState } from "react";
import logo from "../assets/navbar/logo.png"
import rank from "../assets/navbar/rank.png"
import profil from "../assets/navbar/profil.png"
import jeuPng from "../assets/messagerie/rl.png"
import { Bell, Calendar, Home, LayoutDashboard, MoreVertical, Search, Users } from "lucide-react";
import { Div, Link } from "../components/NavbarComponent";


export default function Navbar() {
    const [hoverStates, setHoverStates] = useState({
        home: false,
        search: false,
        calendar: false,
        dashboard: false
    });

    const aStyleLeft = `transition-all absolute font-custom font-normal text-orangePV-900 translate-y-7`

    const buttonStyle = `rounded-full w-14 h-14 flex items-center justify-center p-2.5 cursor-pointer shrink-0`

    const aStyleRight = `w-14 h-14 flex items-center justify-center p-2.5 cursor-pointer shrink-0	`

    return (
        <header className=" flex justify-center gap-10 w-full h-fit px-4 py-6">

            <nav className="relative flex gap-5 items-center justify-center">
                <img className='absolute lg:block md:hidden -left-28 pt-10' src={jeuPng} alt="" />
                <Div setHoverStates={setHoverStates} element="home">
                    <Link variant={hoverStates.home ? 'default' : 'ghost'} >
                        <Home />
                    </Link>
                    {hoverStates.home && <a href="#" className={aStyleLeft}>Accueil</a>}
                </Div>
                <Div setHoverStates={setHoverStates} element="search">
                    <Link variant={hoverStates.search ? 'default' : 'ghost'}>
                        <Search />
                    </Link>
                    {hoverStates.search && <a href="#" className={aStyleLeft}>Recherche</a>}

                </Div>
                <Div setHoverStates={setHoverStates} element="calendar">
                    <Link variant={hoverStates.calendar ? 'default' : 'ghost'}>
                        <Calendar />
                    </Link>
                    {hoverStates.calendar && <a href="#" className={aStyleLeft}>Événement</a>}

                </Div>
                <Div setHoverStates={setHoverStates} element="dashboard">
                    <Link variant={hoverStates.dashboard ? 'default' : 'ghost'}>
                        <LayoutDashboard />
                    </Link>
                    {hoverStates.dashboard && <a href="#" className={aStyleLeft}>Parcourir</a>}

                </Div>
                <img className="h-16" src={logo} alt='logo du site' />
                <button className={buttonStyle} type="button">
                    <Users className="text-slate-200" />
                </button>
                <button className={buttonStyle} type="button">
                    <Bell className="text-slate-200" />
                </button>
                <a className={aStyleRight} href="#"><img src={rank} alt="" /></a>
                <a className={aStyleRight} href="#"><img src={profil} alt="" /></a>
                <a className={aStyleRight} href="#">
                    <MoreVertical className="text-slate-200" />
                </a>
            </nav>
        </header >
    )
}

