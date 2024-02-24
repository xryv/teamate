import styled from 'styled-components';
import tw from 'twin.macro';

export const StyleChatBar = styled.form`
    ${tw`relative flex flex-row items-center w-[95%] h-fit mb-1 mx-auto bg-transparent `}
        label {
            ${tw`hidden`};
        }
        input { 
            ${tw`w-full h-10 pl-20 pr-10 text-slate-300 text-sm bg-transparent border border-transparant-900 rounded outline-none focus:outline-orangePV-500`};
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
            ${tw`absolute bottom-full w-fit h-fit`}
        }
        .rien{
            ${tw`p-10`}
        }
    
`;
