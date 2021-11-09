import styled from "styled-components";

export const HomeHeader = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
height: 6.5rem;
@media (max-width: 768px) {
    flex-direction: column;
    font-size: 14px;
    margin-top: 3.5rem;
    width: 20%;
}
`
export const ButtonHeader = styled.button`
border: none;
cursor: pointer;
font-size: 19px;
background-color: white;
width: 25%;
transition: all ease 0.5s;
@media (max-width: 768px) {
    margin-top: 0.25rem;
    width: auto;
    margin-left: 3rem;
}
&:hover{
    color: white;
    background-color: #008FD4;
}
`
export const HomeContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 5rem;
`
export const LogoBody = styled.img`
    height: 373px;
    width: auto;
    cursor: pointer;
    @media (max-width: 768px) {
        height: 150px;
    }
`
export const LogoHeader = styled.img`
    height: 80px;
    width: auto;
    cursor: pointer;
    @media (max-width: 768px) {
        height: 40px;
    }
`
