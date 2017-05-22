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
        <p className="App-intro" >
          TEST
        </p>
        <Messages messages={this.props.sio.messages} sendMessage={this.props.sendMessage} />

        <Profil datas={this.props.profil} inc={this.props.inc}/>
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
