const initialState = {
  connected: 0,
  messages:[]
};

export default function(state =initialState, action) {

    switch (action.type) {
        case 'SET_CONNECTED':
            return Object.assign({}, state, {connected:action.connected});
        case 'NEW_MESSAGE':
        let m=state.messages;
        m.push(action.message);
            return Object.assign({}, state, {messages:m});

        default:
            return state
    }
}
