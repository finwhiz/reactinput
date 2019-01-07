// define ADD, addMessage(), messageReducer(), and store here:
const ADD = 'ADD'

function addMessage(message) { 
  return {
    type: ADD,
    message: message
  };
};

function messageReducer (previousState, action) {
    return [...previousState , action.message];
};

let store = {
  state: [],
  getState: () => store.state,
  dispatch: (action) => {
    if (action.type ==ADD) {
      store.state = messageReducer(store.state, action);
    }
  }
}
