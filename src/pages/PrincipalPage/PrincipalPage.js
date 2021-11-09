import React from 'react'
import { ButtonHeader, HomeContainer, HomeHeader, LogoBody, LogoHeader } from './styled'
import logoheader from '../../assets/logoheader.webp'
import logobody from '../../assets/comunikime.webp'
import { goToRegisterPage } from '../../routes/coordinator'
import { useHistory } from 'react-router-dom'

export const PrincipalPage = () => {
    const history = useHistory()
    return (
        <div>
        <HomeHeader>
            <LogoHeader src={logoheader}/>
            <ButtonHeader>Produtos</ButtonHeader>
            <ButtonHeader>Parceiros</ButtonHeader>
            <ButtonHeader>Sobre</ButtonHeader>
            <ButtonHeader>Contato</ButtonHeader>
            <ButtonHeader>Suporte</ButtonHeader>
            <ButtonHeader>Blog/Notícias</ButtonHeader>
        </HomeHeader>
            <HomeContainer>
            <LogoBody src={logobody} onClick={() => goToRegisterPage(history)}/>
            </HomeContainer>
        </div>
    )
}