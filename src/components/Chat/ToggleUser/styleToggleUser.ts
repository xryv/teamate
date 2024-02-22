import styled from 'styled-components';
import tw from 'twin.macro';

interface ToggleProps {
    $toggleUser: boolean
}
export const ToggleContainer = styled.div`
${tw`absolute left-20 top-40`}
`;

export const ToggleButton = styled.div<ToggleProps>`
${tw`relative flex items-center w-20 h-10 rounded-full transition-all ease-out duration-300 `}
${props => props.$toggleUser ? tw`bg-purplePV-900` : tw`bg-bluePV-900`}
`;

export const ToggleCircle = styled.div<ToggleProps>`
${tw`w-10 h-10 absolute top-0 bottom-0 rounded-full bg-slate-300 transition-all ease-out duration-300`}
${props => props.$toggleUser && tw`translate-x-10`}
`;

export const ToggleText = styled.p<ToggleProps>`
${tw`absolute text-slate-100`}
${props => props.$toggleUser ? tw`left-0` : tw`right-0`}
`;
