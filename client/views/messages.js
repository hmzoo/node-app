import React from 'react';
import ReactDOM from 'react-dom';

export default class Messages extends React.Component {
    constructor(props) {
        super(props);
        this.state={
          msgtext: '',
          over: 0
        }
    }
    onSubmit(event){
    event.preventDefault();

  var input = ReactDOM.findDOMNode(this.refs.msgText)
  var newMessage = input.value;
  this.props.sendMessage(newMessage);
  input.value = '';
  }

  scrollToBottom () {
    const node = ReactDOM.findDOMNode(this.refs.messagesEnd);
    node.scrollIntoView({behavior: "smooth"});
}

componentDidUpdate() {
  console.log(!this.state.over);
  if(!this.state.over){
    this.scrollToBottom();
  }
}

    render() {

        return (
            <div className='messages' >
              
                <div className='messages-list' onMouseOver={()=>{this.setState({over:1});}} onMouseOut={()=>{this.setState({over:0});}}>
                    {this.props.messages.map(function(msg, i) {
                        return <p className='m--' key={i}><b className='fz--' >{msg.from}:</b>{msg.content}</p>
                    })
                    }
                    <span ref='messagesEnd'></span>
                </div>

                    <form onSubmit={this.onSubmit.bind(this)}>
                      <div className='grid m'>
                        <div className='grid-item 9/12'>
                          <input type='text' ref='msgText' className="form-input" ></input>
                        </div>
                        <div className='grid-item 3/12'>
                          <button className='btn btn-primary' type='submit'>SEND</button>
                        </div>
                      </div>
                    </form>

            </div>
        );
    }
}
