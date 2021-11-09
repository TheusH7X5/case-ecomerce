import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ErrorPage } from '../pages/ErrorPage/ErrorPage'
import { PrincipalPage } from '../pages/PrincipalPage/PrincipalPage'
import  RegisterPage  from '../pages/RegisterPage/RegisterPage'
import  SellingPage  from '../pages/SellingPage/SellingPage'

export const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <PrincipalPage/>
                </Route>
                <Route exact path="/register-product">
                    <RegisterPage/>
                </Route>
                <Route exact path="/selling-product">
                    <SellingPage/>
                </Route>
                <Route>
                    <ErrorPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}