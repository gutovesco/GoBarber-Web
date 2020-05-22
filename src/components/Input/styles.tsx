import styled, {css} from 'styled-components'
import Tooltip from '../Tooltip/Tooltip'

interface ContainerProps{
    isFocused: boolean
    isFiled: boolean;
    isErrored: boolean;
}

export const Error = styled(Tooltip)`
height: 20px;
margin-left: 16px;

svg{
    margin: 0;
}

span{
    background: #c53030;
    color: #fff;

    &::before{
        border-color: #c53030 transparent;
    }
}
`;


export const Container = styled.div<ContainerProps>`
    background: #232129;
    border-radius: 10px;
    border: 2px solid #232129;
    padding: 16px;
    width: 100%;
    color: #f4ede8;
    display: flex;
    align-items: center;

    & + div {
    margin-top: 10px;
    }

    ${props => props.isErrored && css`
    border-color: #c53030;
    `}

    ${props => props.isFocused && css`
    color: #ff9000;
    border-color: #ff9000
    `}

    ${props => props.isFiled && css`
    color: #ff9000;
    `}

    input{
        flex: 1;
        border: 0;
        background: transparent;
        color: #f4ede8;

        &::placeholder{
            color: #666360;
        }
    }

    svg{
        margin-right: 16px;
    }
`;

