import styled from 'styled-components';
import { COLOR, PRIMARY_FONTS } from '../common/constants/global';

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
`

export const CriticalButton = styled(Button) <{ size: string }>`
    padding: ${(props) => props.size};
    color: ${COLOR.WHITE};
    background-color: ${COLOR.RED};
    border: 1px solid ${COLOR.RED};
`

export const OutlineButton = styled(Button) <{ size: string }>`
    padding: ${(props) => props.size};
    background-color: ${INVISIBLE};
    border: 1px solid ${COLOR.GREY};
`

export const GhostButton = styled(Button) <{ size: string }>`
    padding: ${(props) => props.size};
    background-color: ${INVISIBLE};
    border: 1px solid ${INVISIBLE};
`