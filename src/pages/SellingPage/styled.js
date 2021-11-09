import { Card } from "@material-ui/core"
import styled from "styled-components"


export const Container = styled.div`
display: flex;
flex-direction:row;
align-items: center;
justify-content: center;
width: auto;
padding: 15px;
@media (max-width: 768px) {
    flex-direction: column;
}
`
export const StyledCard = styled(Card)`
    width: 80%;
    margin: 20px;
`