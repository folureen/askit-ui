import styled from 'styled-components';
import { COLOR, PRIMARY_FONTS } from '../../common/constants/global';

const INVISIBLE = 'rgba(0,0,0,0)';

const Button = styled.button`
    padding: 10px 20px;
    font-weight: 600;
    border-radius: 8px;
    font-family: ${PRIMARY_FONTS};
    cursor: pointer;
    box-sizing: border-box;
`

export const PrimaryButton = styled(Button) <{ size: string }>`
    padding: ${(props) => props.size};
    background-color: ${COLOR.PRIMARY};
    border: 1px solid ${COLOR.PRIMARY};
    color: ${COLOR.BLACK};
    &:hover {
        background-color: ${COLOR.HOVER_PRIMARY};
        border: 1px solid ${COLOR.HOVER_PRIMARY};
    }
    &:active {
        background-color: ${COLOR.ACTIVE_PRIMARY};
        border: 1px solid ${COLOR.ACTIVE_PRIMARY};
    }
`

export const CriticalButton = styled(Button) <{ size: string }>`
    padding: ${(props) => props.size};
    color: ${COLOR.WHITE};
    background-color: ${COLOR.RED};
    border: 1px solid ${COLOR.RED};
    &:hover {
        background-color: ${COLOR.HOVER_RED};
        border: 1px solid ${COLOR.HOVER_RED};
    }
    &:active {
        background-color: ${COLOR.ACTIVE_RED};
        border: 1px solid ${COLOR.ACTIVE_RED};
    }
`

export const OutlineButton = styled(Button) <{ size: string }>`
    padding: ${(props) => props.size};
    background-color: ${INVISIBLE};
    border: 1px solid ${COLOR.GREY};
    &:hover {
        background-color: ${COLOR.HOVER_WHITE};
    }
    &:active {
        background-color: ${COLOR.ACTIVE_WHITE};
    }
`

export const GhostButton = styled(Button) <{ size: string }>`
    padding: ${(props) => props.size};
    background-color: ${INVISIBLE};
    border: 1px solid ${INVISIBLE};
    &:hover {
        background-color: ${COLOR.HOVER_WHITE};
        border: 1px solid ${COLOR.HOVER_WHITE};
    }
    &:active {
        background-color: ${COLOR.ACTIVE_WHITE};
        border: 1px solid ${COLOR.ACTIVE_WHITE};
    }
`