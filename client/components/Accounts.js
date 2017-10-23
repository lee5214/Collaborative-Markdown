import React,{Component} from 'react'
import ReactDom from 'react-dom'
import {Template} from 'meteor/templating'
//work with third party render lib -- Blaze
import {Blaze} from 'meteor/blaze'

class Accounts extends Component{
  componentDidMount(){
    this.view = Blaze.render(Template.loginButtons,ReactDom.findDOMNode(this.refs.container))
  }
  componentWillUnmount(){
    Blaze.remove(this.view)
  }
  render(){
    return(
      <div ref={'container'} />
    )
  }
}

export default Accounts