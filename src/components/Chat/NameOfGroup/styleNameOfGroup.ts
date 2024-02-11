import styled from 'styled-components';
import tw from 'twin.macro';

export const StyleNameOfGroup = styled.form`
    ${tw`mt-10 mb-4`}

    label {
        ${tw`hidden`}
    }

    input {
        ${tw`bg-transparent text-center text-lg text-slate-300 px-4 py-2 border-b outline-none focus:border-orangePV-900`}
        &:empty {
            ${tw`block`}
        }
        &:not(:empty) {
            ${tw`hidden`}
        }
    }
    div {
        ${tw`relative`}
        button {
            ${tw`absolute -top-4 -right-10 outline-none transition-all duration-300 ease-in`}
            svg {
                ${tw`text-slate-600`}
            }
        }


        h1 {
            ${tw`text-slate-300 transition-all duration-300 ease-in`}
            &:empty {
                ${tw`text-lg`}
            }
            &:not(:empty) {
                ${tw`text-5xl`}
            }
        }
    }
`;
