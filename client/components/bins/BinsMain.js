import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Bins } from '../../../imports/collections/bins';
import BinsEditor from './BinsEditor'
import BinsViewer from './BinsViewer'
import BinsShare from './BinsShare';

class BinsMain extends Component {
  render () {

    if(!this.props.bin){
      return (
        <div>Loading...</div>
      )
    }
    //console.log('received bin => ',this.props.bin);
    return (
      <div>
        <BinsEditor bin={this.props.bin}/>
        <BinsViewer bin={this.props.bin}/>
        <BinsShare bin={this.props.bin}/>
      </div>
    );
  }
}

//binId from route was passed to this.props.match.params
//then use it to fetch the bin obj from collection
export default createContainer((props) => {
  const {binId} = props.match.params;
  Meteor.subscribe('bins');
  Meteor.subscribe('sharedBins');
  return {bin: Bins.findOne(binId)};
},BinsMain);