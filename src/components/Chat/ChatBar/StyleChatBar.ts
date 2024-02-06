import styled from 'styled-components';
import tw from 'twin.macro';

export const StyleChatBar = styled.div`
    ${tw`fixed bottom-0 left-0 flex flex-row items-center w-full bg-transparent`}
    div {
        ${tw`relative flex flex-row items-center w-full h-fit gap-4 bg-transparent rounded-full`}
        label {
            ${tw`hidden`};
        }
        input { 
            ${tw`w-full h-10 px-4 pl-10 text-slate-300 text-sm bg-transparent border border-transparant-900 rounded-full outline-none focus:outline-orangePV-500`};
            &::placeholder {
                ${tw`text-slate-300 opacity-50`};
            }
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
    }
`;
