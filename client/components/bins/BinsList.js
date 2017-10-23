import React,{Component} from 'react'
import {createContainer} from 'meteor/react-meteor-data'
import {Bins} from '../../../imports/collections/bins'
import {Link} from 'react-router-dom'

class BinsList extends Component{
  onBinRemove(bin){
    Meteor.call('bins.remove',bin)
  }
  renderList(){
    return this.props.bins.map(bin=>{
      return (
        <li className={'list-group-item'} key={bin._id}>
          <Link to={`/bins/${bin._id}`}>Bin： {bin._id}</Link>
          <span className={'pull-right'}>
            <button className={'btn btn-danger'}
                    onClick={this.onBinRemove.bind(this,bin)} //important, lecture <remove bin>
            >
              Remove
            </button>
          </span>
        </li>
      )
    })
  }

  render(){
    console.log(this.props.bins)
    return(
      <div>
        <ul className={'list-group'}>
          {this.renderList()}
        </ul>
      </div>
    )
  }
}

export default createContainer(()=>{
  Meteor.subscribe('bins');
  Meteor.subscribe('sharedBins');
  return {bins:Bins.find({}).fetch()}
},BinsList)