import styled from 'styled-components';
import tw from 'twin.macro';

export const ChatListContainer = styled.ul`
    ${tw`relative flex flex-col py-6 scroll-pt-8 px-4 max-h-[70vh] overflow-y-auto  hover:scrollbar-thumb-slate-300 scrollbar-track-transparant-100 scroll-smooth  text-slate-300 `}
    &::-webkit-scrollbar {

    }

     .message{
        ${tw` w-full h-fit flex flex-col px-10`}
        .content-time{
            ${tw`flex flex-row max-w-96 items-end border border-slate-300 rounded-xl my-2 border-opacity-50 shadow-xl break-all`}
            .content{
                ${tw`h-full px-3 py-3 text-sm`}
            }
            .time{
                ${tw`h-full text-xs px-2 py-1 break-normal`}
            }
        }

        .edit-delete{
            ${tw`w-fit flex flex-row gap-0.5 absolute right-0 top-0`}  
        }
    }
`;
