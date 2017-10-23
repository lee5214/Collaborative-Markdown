import React,{Component} from 'react'
import Accounts from './Accounts';
import {Link,withRouter} from 'react-router-dom'

class Header extends Component{

  onBinClick(event){
    event.preventDefault();
    //btn should redirect to the link of newly created bin,
    //but we don't have the binId before it created
    //this callback is called after bins.insert
    Meteor.call('bins.insert',(error,binId)=>{
      console.log('binId => ',binId)
      this.props.history.push(`/bins/${binId}`)
    });
  }
  render(){
    return(
      <nav className={'nav navbar-default'}>
        <div className={'navbar-header'}>
          <Link to={'/'} className={'navbar-brand'}>Markbin</Link>
        </div>
        <ul className={'nav navbar-nav'}>
          <li>
            <Accounts/>
          </li>
          <li>
            <a href={'#'} onClick={this.onBinClick.bind(this)}>Create Bin</a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default withRouter(Header)