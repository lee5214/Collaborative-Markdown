import React, { Component } from 'react';

class BinsShare extends Component {
  state={shareEmail:''}

  onShareClick(){
    const email = this.state.shareEmail
    Meteor.call('bins.share', this.props.bin,email)
    this.setState({shareEmail:''})
  }
  onRemoveShare(email){
    Meteor.call ('bins.removeSharedEmail',this.props.bin,email)
  }

  renderShareList(){
    return this.props.bin.sharedWith.map(email=>{
      return (
        <div key={email}>
        <button  className={'btn btn-default'}>
          {email}
        </button>
          <button
            onClick={this.onRemoveShare.bind(this,email)}
            className={'btn btn-default'}>x</button>
        </div>

      )
    })
  }
  render () {
    return (
      <footer className={'bins-share'}>
        <div className={'input-group'}>
          <input onInput={(event)=>this.setState({shareEmail:event.target.value})}
                 value={this.state.shareEmail}
                 className={'form-control'}

          />

          <div className={'input-group-btn'}>
            <button
              onClick={this.onShareClick.bind(this)}
              className={'btn btn-default'}>
              Share Bin
            </button>
          </div>
        </div>

        <div>
          Shared With:
        </div>
        <div className={'btn-group'}>
          {this.renderShareList()}
        </div>
      </footer>
    );
  }
}

export default BinsShare;