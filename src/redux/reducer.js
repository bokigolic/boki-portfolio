

const initialState = {
  reoute: 'HOME',
  nesto: 'bla bla'
};

const rootReducer = (state=initialState, action)=> {
  switch (action.type) {
    case 'NEKI_ACTION':
      return state;
  
    default:
      return state;
  }
};

export default rootReducer;