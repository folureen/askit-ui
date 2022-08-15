import styled from 'styled-components';
import { COLOR } from '../../common';

export const Input = styled.input`
    height: 40px;
    width: 100%;
    border-radius: 8px;
    border: 1px solid ${COLOR.GREY};
    padding-left: 12px;
    font-size: 16px;
    ::placeholder {
        color: ${COLOR.GREY};
        font-size: 16px;
}
`