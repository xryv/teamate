import styled from 'styled-components';
import tw from 'twin.macro';

export const StyleChatBar = styled.form`
    ${tw`relative flex flex-row items-center w-full h-fit bg-transparent `}
        label {
            ${tw`hidden`};
        }
        input { 
            ${tw`w-full h-10 px-24 text-slate-300 text-sm bg-transparent border border-transparant-900 rounded-full outline-none focus:outline-orangePV-500`};
            &::placeholder {
                ${tw`text-slate-300 opacity-50`};
            }
        }

        div {
            ${tw`flex flex-row  gap-2`}
        }
        button {
            ${tw`absolute right-0 w-10 h-full rounded-full`}
            svg {
                ${tw`w-6 h-6 opacity-50`}
                &:hover {
                    ${tw`opacity-100`}
                }
            }
        }
        .emoji-picker {
            ${tw`absolute bottom-full w-fit h-fit`} // Ajoutez vos styles ici
        }
        .rien{
            ${tw`p-10`}
        }
    
`;
