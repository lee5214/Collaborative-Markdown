import React,{ Component } from 'react';
import ReactDom from 'react-dom'
import App from './components/App'
import {BrowserRouter,Route} from 'react-router-dom'
import BinsMain from './components/bins/BinsMain'
import BinsList from './components/bins/BinsList'
const routes = (
  <BrowserRouter>
    <div>
      <Route path={'/'} component={App}/>
      <Route exact path={'/'} component={BinsList}/>
      <Route path={'/bins/:binId'} component={BinsMain}/>
    </div>
  </BrowserRouter>
)

Meteor.startup(()=>{
  ReactDom.render(routes,document.querySelector('.root'))
})

