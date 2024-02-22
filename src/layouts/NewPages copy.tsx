import { ArrowLeft, ArrowLeftCircle, Bell, Calendar, Home, LayoutDashboard, MoreVertical, ScanText, Search, User, Users, Volume2 } from 'lucide-react';
import { Logo } from '../data/ulListNavbar';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import { ButtonOrLink } from '../components/Button/Button';
import profil from '../assets/profil.png';

const gradient = css`
background: linear-gradient(90deg, #97296C, #E7378B, #F4BE5C);  
background-size: 200% auto;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  animation: gradient 3s linear infinite;

  @keyframes gradient {
    0% {background-position: 0% 50%;}
    50% {background-position: 100% 50%;}
    100% {background-position: 0% 50%;}
  }
`;

const TextGradient = styled.span`
  ${tw`w-full text-base text-center font-bold w-fit absolute -bottom-1 left-10 `}
  ${gradient}
`;

const NewPages = (): JSX.Element => {
    return (
        <>
            <div className="flex items-center flex-col relative w-full bg-gradient" id="786:1948">
                <div className="flex items-center w-full bg-noirTransparent-500 h-fit" id="791:1952">
                    <ButtonOrLink>
                        <ArrowLeft size={32} strokeWidth={1} color='white' />
                    </ButtonOrLink>
                    <div className="flex flex-shrink-0 relative" id="789:1965">
                        <Logo width={54} height={33} />
                        <TextGradient>eamate</TextGradient>
                    </div>
                </div>
                <div className="flex flex-shrink-0 w-full min-h-screen" id="797:2250">
                    <div className="flex flex-col items-center flex-shrink-0 gap-2 relative bg-noirTransparent-500" id="791:1953">
                        <ButtonOrLink>
                            <Home size={32} strokeWidth={1} color='white' />
                        </ButtonOrLink>
                        <ButtonOrLink>
                            <Search size={32} strokeWidth={1} color='white' />
                        </ButtonOrLink>
                        <ButtonOrLink>
                            <Calendar size={32} strokeWidth={1} color='white' />
                        </ButtonOrLink>
                        <ButtonOrLink>
                            <LayoutDashboard size={32} strokeWidth={1} color='white' />
                        </ButtonOrLink>
                        <ButtonOrLink>
                            <Users size={32} strokeWidth={1} color='white' />
                        </ButtonOrLink>
                        <ButtonOrLink>
                            <Bell size={32} strokeWidth={1} color='white' />
                        </ButtonOrLink>
                        <ButtonOrLink>
                            <User size={32} strokeWidth={1} color='white' />
                        </ButtonOrLink>
                        <ButtonOrLink>
                            <MoreVertical size={32} strokeWidth={1} color='white' />
                        </ButtonOrLink>
                    </div>
                    <div className="flex flex-col flex-shrink-0 relative items-center gap-4 text-slate-300 bg-noirTransparent-300 max-h-screen overflow-y-auto" id="792:2151">
                        <h1 className="flex flex-col w-full flex-shrink-0 items-start max-h-[10vh] p-2 text-lg" id="792:2003">Mon groupe</h1>
                        <div className="flex flex-col w-full flex-shrink-0 items-start gap-4 px-2" id="792:2149">
                            <div className="flex flex-col w-full " id="792:2118">
                                <div className="flex justify-between flex-shrink-0 w-full py-3" id="792:2015">
                                    <div className="flex" id="792:2013">En ligne :</div>
                                    <div className="flex" id="792:2014">5</div>
                                </div>
                                <div className="flex flex-col gap-2 px-2" id="792:2021">
                                    <div className="flex items-center" id="792:2054">
                                        <div className="relative" id="R8F79YLaYPCHYVUi2k9aqA">
                                            <img className="w-8" src={profil} id="792:2023" />
                                            <div className="w-2 h-2 bg-green-500 absolute rounded bottom-1 right-1" id="792:2081"></div>                                        </div>
                                        <div className="ml-2 text-xs" id="792:2056">Miles, Esther</div>
                                    </div>
                                    <div className="flex items-center" id="792:2030">
                                        <div className="relative" id="R8F7GndWEJigAQibM5kJmA">
                                            <img className="w-8" src={profil} id="792:2023" />
                                            <div className="w-2 h-2 bg-green-500 absolute rounded bottom-1 right-1" id="792:2081"></div>
                                        </div>
                                        <div className="ml-2 text-xs" id="792:2032">Miles, Esther</div>
                                    </div>
                                    <div className="flex items-center" id="792:2022">
                                        <div className="relative" id="R8F7RNDYTa5zGw5hS8HR56">
                                            <img className="w-8" src={profil} id="792:2023" />
                                            <div className="w-2 h-2 bg-green-500 absolute rounded bottom-1 right-1" id="792:2081"></div>
                                        </div>
                                        <div className="ml-2 text-xs" id="792:2024">Miles, Esther</div>
                                    </div>
                                    <div className="flex items-center" id="792:2046">
                                        <div className="relative" id="R8F7ccPomX99NfhF4ahJ8t">
                                            <img className="w-8" src={profil} id="792:2047" />
                                            <div className="w-2 h-2 bg-green-500 absolute rounded bottom-1 right-1" id="792:2084"></div>
                                        </div>
                                        <div className="ml-2 text-xs" id="792:2048">Miles, Esther</div>
                                    </div>
                                    <div className="flex items-center" id="792:2038">
                                        <div className="relative" id="R8F7jh2LtXSAom3UXqBDme">
                                            <img className="w-8" src={profil} id="792:2047" />
                                            <div className="w-2 h-2 bg-green-500 absolute rounded bottom-1 right-1" id="792:2086"></div>
                                        </div>
                                        <div className="ml-2 text-xs" id="792:2040">Miles, Esther</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col w-full" id="792:2119">
                                <div className="flex justify-between flex-shrink-0 w-full py-3" id="792:2120">
                                    <div className="flex" id="792:2121">Hors ligne :</div>
                                    <div className="flex" id="792:2122">3</div>
                                </div>
                                <div className="flex flex-col gap-2 px-2 opacity-50" id="792:2021">
                                    <div className="flex items-center" id="792:2054">
                                        <div className="relative" id="R8F79YLaYPCHYVUi2k9aqA">
                                            <img className="w-8" src={profil} id="792:2023" />
                                        </div>
                                        <div className="ml-2 text-xs" id="792:2056">Miles, Esther</div>
                                    </div>
                                    <div className="flex items-center" id="792:2030">
                                        <div className="relative" id="R8F7GndWEJigAQibM5kJmA">
                                            <img className="w-8" src={profil} id="792:2023" />
                                        </div>
                                        <div className="ml-2 text-xs" id="792:2032">Miles, Esther</div>
                                    </div>
                                    <div className="flex items-center" id="792:2022">
                                        <div className="relative" id="R8F7RNDYTa5zGw5hS8HR56">
                                            <img className="w-8" src={profil} id="792:2023" />
                                        </div>
                                        <div className="ml-2 text-xs" id="792:2024">Miles, Esther</div>
                                    </div>
                                    <div className="flex items-center" id="792:2046">
                                        <div className="relative" id="R8F7ccPomX99NfhF4ahJ8t">
                                            <img className="w-8" src={profil} id="792:2047" />
                                        </div>
                                        <div className="ml-2 text-xs" id="792:2048">Miles, Esther</div>
                                    </div>
                                    <div className="flex items-center" id="792:2038">
                                        <div className="relative" id="R8F7jh2LtXSAom3UXqBDme">
                                            <img className="w-8" src={profil} id="792:2047" />
                                        </div>
                                        <div className="ml-2 text-xs" id="792:2040">Miles, Esther</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-full flex-shrink-0 items-start gap-4 px-2" id="797:2179">
                            <div className="flex flex-col w-full " id="797:2188">
                                <div className="flex flex-shrink-0 w-full py-3" id="797:2181">Salon textuels :</div>
                                <div className="flex flex-col gap-2  flex-shrink-0 px-2" id="797:2247">
                                    <div className="flex items-center" id="797:2185">
                                        <ScanText />
                                        <div className="ml-2 text-sm" id="797:2186">Général :</div>
                                    </div>
                                    <div className="flex flex-col gap-2 px-2" id="792:2021">
                                        <div className="flex items-center" id="792:2054">
                                            <div className="relative" id="R8F79YLaYPCHYVUi2k9aqA">
                                                <img className="w-8" src={profil} id="792:2023" />
                                            </div>
                                            <div className="ml-2 text-xs" id="792:2056">Miles, Esther</div>
                                        </div>
                                        <div className="flex items-center" id="792:2030">
                                            <div className="relative" id="R8F7GndWEJigAQibM5kJmA">
                                                <img className="w-8" src={profil} id="792:2023" />
                                            </div>
                                            <div className="ml-2 text-xs" id="792:2032">Miles, Esther</div>
                                        </div>
                                        <div className="flex items-center" id="792:2022">
                                            <div className="relative" id="R8F7RNDYTa5zGw5hS8HR56">
                                                <img className="w-8" src={profil} id="792:2023" />
                                            </div>
                                            <div className="ml-2 text-xs" id="792:2024">Miles, Esther</div>
                                        </div>
                                        <div className="flex items-center" id="792:2046">
                                            <div className="relative" id="R8F7ccPomX99NfhF4ahJ8t">
                                                <img className="w-8" src={profil} id="792:2047" />
                                            </div>
                                            <div className="ml-2 text-xs" id="792:2048">Miles, Esther</div>
                                        </div>
                                        <div className="flex items-center" id="792:2038">
                                            <div className="relative" id="R8F7jh2LtXSAom3UXqBDme">
                                                <img className="w-8" src={profil} id="792:2047" />
                                            </div>
                                            <div className="ml-2 text-xs" id="792:2040">Miles, Esther</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center" id="797:2201">
                                        <ScanText />
                                        <div className="ml-2 text-sm" id="797:2211">Exercices :</div>
                                    </div>
                                    <div className="flex flex-col gap-2 px-2" id="792:2021">
                                        <div className="flex items-center" id="792:2054">
                                            <div className="relative" id="R8F79YLaYPCHYVUi2k9aqA">
                                                <img className="w-8" src={profil} id="792:2023" />
                                            </div>
                                            <div className="ml-2 text-xs" id="792:2056">Miles, Esther</div>
                                        </div>
                                        <div className="flex items-center" id="792:2030">
                                            <div className="relative" id="R8F7GndWEJigAQibM5kJmA">
                                                <img className="w-8" src={profil} id="792:2023" />
                                            </div>
                                            <div className="ml-2 text-xs" id="792:2032">Miles, Esther</div>
                                        </div>
                                        <div className="flex items-center" id="792:2022">
                                            <div className="relative" id="R8F7RNDYTa5zGw5hS8HR56">
                                                <img className="w-8" src={profil} id="792:2023" />
                                            </div>
                                            <div className="ml-2 text-xs" id="792:2024">Miles, Esther</div>
                                        </div>
                                        <div className="flex items-center" id="792:2046">
                                            <div className="relative" id="R8F7ccPomX99NfhF4ahJ8t">
                                                <img className="w-8" src={profil} id="792:2047" />
                                            </div>
                                            <div className="ml-2 text-xs" id="792:2048">Miles, Esther</div>
                                        </div>
                                        <div className="flex items-center" id="792:2038">
                                            <div className="relative" id="R8F7jh2LtXSAom3UXqBDme">
                                                <img className="w-8" src={profil} id="792:2047" />
                                            </div>
                                            <div className="ml-2 text-xs" id="792:2040">Miles, Esther</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="frame-150-2BW" id="797:2189">
                                <div className="flex flex-shrink-0 w-full py-3" id="797:2182">Salon vocaux :</div>
                                <div className="flex flex-col gap-2 flex-shrink-0 px-2" id="797:2246">
                                    <div className="flex items-center" id="797:2226">
                                        <Volume2 />
                                        <div className="ml-2 text-sm" id="797:2235">Général :</div>
                                    </div>
                                    <div className="flex flex-col gap-2 px-2" id="792:2021">
                                        <div className="flex items-center" id="792:2054">
                                            <div className="relative" id="R8F79YLaYPCHYVUi2k9aqA">
                                                <img className="w-8" src={profil} id="792:2023" />
                                            </div>
                                            <div className="ml-2 text-xs" id="792:2056">Miles, Esther</div>
                                        </div>
                                        <div className="flex items-center" id="792:2030">
                                            <div className="relative" id="R8F7GndWEJigAQibM5kJmA">
                                                <img className="w-8" src={profil} id="792:2023" />
                                            </div>
                                            <div className="ml-2 text-xs" id="792:2032">Miles, Esther</div>
                                        </div>
                                        <div className="flex items-center" id="792:2022">
                                            <div className="relative" id="R8F7RNDYTa5zGw5hS8HR56">
                                                <img className="w-8" src={profil} id="792:2023" />
                                            </div>
                                            <div className="ml-2 text-xs" id="792:2024">Miles, Esther</div>
                                        </div>
                                        <div className="flex items-center" id="792:2046">
                                            <div className="relative" id="R8F7ccPomX99NfhF4ahJ8t">
                                                <img className="w-8" src={profil} id="792:2047" />
                                            </div>
                                            <div className="ml-2 text-xs" id="792:2048">Miles, Esther</div>
                                        </div>
                                        <div className="flex items-center" id="792:2038">
                                            <div className="relative" id="R8F7jh2LtXSAom3UXqBDme">
                                                <img className="w-8" src={profil} id="792:2047" />
                                            </div>
                                            <div className="ml-2 text-xs" id="792:2040">Miles, Esther</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center" id="797:2240">
                                        <Volume2 />
                                        <div className="ml-2 text-sm" id="797:2245">Exercices :</div>
                                    </div>
                                    <div className="flex flex-col gap-2 px-2" id="792:2021">
                                        <div className="flex items-center" id="792:2054">
                                            <div className="relative" id="R8F79YLaYPCHYVUi2k9aqA">
                                                <img className="w-8" src={profil} id="792:2023" />
                                            </div>
                                            <div className="ml-2 text-xs" id="792:2056">Miles, Esther</div>
                                        </div>
                                        <div className="flex items-center" id="792:2030">
                                            <div className="relative" id="R8F7GndWEJigAQibM5kJmA">
                                                <img className="w-8" src={profil} id="792:2023" />
                                            </div>
                                            <div className="ml-2 text-xs" id="792:2032">Miles, Esther</div>
                                        </div>
                                        <div className="flex items-center" id="792:2022">
                                            <div className="relative" id="R8F7RNDYTa5zGw5hS8HR56">
                                                <img className="w-8" src={profil} id="792:2023" />
                                            </div>
                                            <div className="ml-2 text-xs" id="792:2024">Miles, Esther</div>
                                        </div>
                                        <div className="flex items-center" id="792:2046">
                                            <div className="relative" id="R8F7ccPomX99NfhF4ahJ8t">
                                                <img className="w-8" src={profil} id="792:2047" />
                                            </div>
                                            <div className="ml-2 text-xs" id="792:2048">Miles, Esther</div>
                                        </div>
                                        <div className="flex items-center" id="792:2038">
                                            <div className="relative" id="R8F7jh2LtXSAom3UXqBDme">
                                                <img className="w-8" src={profil} id="792:2047" />
                                            </div>
                                            <div className="ml-2 text-xs" id="792:2040">Miles, Esther</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-grow" id="797:2249">
                        <div className="frame-156-AcU" id="801:2412">
                            <ButtonOrLink>
                                <ArrowLeftCircle size={32} strokeWidth={1} color='white' />
                            </ButtonOrLink>
                            <div className="canal-TLg" id="792:2153">Canal</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewPages;
