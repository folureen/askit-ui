import styled from 'styled-components';
import { COLOR } from '../common/constants/global';

export const Button = styled.button<{ backgroundColor?: string, color?: string }>`
    padding: 8px 40px;
    background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : COLOR.PRIMARY)};
    color: ${(props) => (props.color ? props.color : COLOR.WHITE)};
    border: none;
    border-radius: 4px;
`