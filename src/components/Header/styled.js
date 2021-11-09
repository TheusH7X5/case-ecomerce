import styled from 'styled-components'
import {Toolbar} from '@material-ui/core'
import {Box} from '@material-ui/core'

export const StyledToolbar = styled(Toolbar)`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`

export const StyledBox = styled(Box)`
    background-color: white;
`
export const ImgHome = styled.img`
    cursor: pointer;
    width:auto;
    height:60px;
    position: absolute;
    left: 1rem;
`