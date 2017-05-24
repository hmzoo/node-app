import React, { Component } from 'react';
import {connect} from 'react-redux';
import Profil from './profil';
import Messages from './messages';
import {setProfilName,incProfilCpt} from '../actions/profil.js';

class App extends Component {
  render() {
    return (

      <div className="App">
        <div className="App-header">

          <h2>Welcome to React yes</h2>
        </div>
        <div className="grid" >
          <div className="grid-item 2/3">
            <Profil datas={this.props.profil} inc={this.props.inc}/>
          </div>
        <div className="grid-item 1/3">
        <Messages messages={this.props.sio.messages} sendMessage={this.props.sendMessage} />
      </div>

      </div>
    </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      profil: state.profil,
      sio:state.sio
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      inc: ()=>{dispatch(incProfilCpt());}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
