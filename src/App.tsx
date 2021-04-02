import React, {useState, useEffect} from 'react'
import { NavBar } from './compoments/NavBar'
import {Route, Switch, BrowserRouter} from 'react-router-dom'
import { AboutPage } from './pages/AboutPage'
import { TodosPage } from './pages/TodosPage'

export const App: React.FC = () => {

  return (
    <BrowserRouter>
      <div>
      <NavBar/>
      <Switch>
        <Route component={TodosPage} path='/' exact></Route>
        <Route component={AboutPage} path='/about'></Route>
      </Switch>
    </div>
    </BrowserRouter>
    
  )
}
