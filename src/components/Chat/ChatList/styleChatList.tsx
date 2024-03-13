import styled, { css } from 'styled-components';
import tw from 'twin.macro';
type TimeProps = {
    $image?: boolean | undefined
} & React.HTMLAttributes<HTMLElement>;

type ChatListContainerProps = {
    $heightStack?: number
} & React.HTMLAttributes<HTMLElement>;

export const ChatListContainer = styled.ul<ChatListContainerProps>`
${tw`relative flex flex-col-reverse  p-4 scroll-pt-4  md:p-6 md:scroll-pt-8 overflow-y-auto  scroll-smooth  text-slate-300 `}
max-height: calc(100vh - ${props => props.$heightStack}px - 68.5px - 12rem);
&::-webkit-scrollbar {
    width: 0.5rem;
  }
    &::-webkit-scrollbar-thumb {
        ${tw`bg-transparant-300 rounded-full`}
    }
    &::-webkit-scrollbar-track {
        ${tw`bg-transparant-100`}
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #555;
      }


     .message{
        ${tw`relative w-full h-fit flex flex-col px-6 md:px-10`}
        .content-time-image{
            ${tw`relative flex flex-row max-w-96 overflow-hidden items-end border border-slate-300 rounded-xl my-2 border-opacity-50 shadow-xl break-all`}
            .content{
                ${tw`h-full px-3 py-3 text-sm`}
            }
            .image{
                ${tw`w-full h-full`}
            }
        }

        .edit-delete{
            ${tw`w-fit flex flex-row gap-0.5 absolute right-7 md:right-0 bg-transparant-300 backdrop-blur-sm p-0.5 md:p-1 rounded-xl top-0  `}  
        }
    }
`;
export const StyledTime = styled.small<TimeProps>`
    ${tw`text-xs px-2 py-1 break-normal`}
    ${props => props.$image === true
        ? css`
        ${tw`absolute right-0 top-0 bg-noirTransparent-300 rounded-bl-xl`}
    `
        : tw`h-full`}
`;
