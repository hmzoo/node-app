import React from 'react';

export default class Messages extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
            msg: ''
    }}
  render() {

      return(<div >
      <div>
        {
          this.props.messages.map(function(msg,i) {
                    return <p key={i}><b>{msg.from}:</b>{msg.content}</p>
                })
        }
      <input type='text' value=''></input>
      <button className='btn' onClick={this.props.sendMessage}>SEND</button>
    </div>
  </div>);
}
}
