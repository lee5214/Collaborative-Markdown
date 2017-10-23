import React,{Component} from 'react'
import ReactDom from 'react-dom'
import {Template} from 'meteor/templating'
import {Blaze} from 'meteor/blaze'

//work with third party render lib -- Blaze
class Accounts extends Component{
  componentDidMount(){
    this.view = Blaze.render(Template.loginButtons,ReactDom.findDOMNode(this.refs.container))
  }
  componentWillUnmount(){
    Blaze.remove(this.view)
  }
  render(){
    return(
      <div ref={'container'}></div>
    )
  }
}

export default Accounts