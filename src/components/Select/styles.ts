import styled from 'styled-components'
import { COLOR } from '../../common'

export const Select = styled.select`
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


export const SelectOption = styled.option`
        padding: 0 20px;
        margin: 5px;
        width: 100%;
        border: 1px solid red;
        border-radius: 8px;
`