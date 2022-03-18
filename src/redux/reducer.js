import { DRAWER_CLOSE, DRAWER_OPEN, ROUTE_SET } from "./actions";

const initialState = {
  route: 'HOME',
  drawerOpened: false
};

const rootReducer = (state=initialState, action)=> {
  switch (action.type) {

    case ROUTE_SET:
      return {
        ...state,
        route: action.payload
      };

    case DRAWER_OPEN:
      return {
        ...state,
        drawerOpened: true
      };
    case DRAWER_CLOSE:
      return {
        ...state,
        drawerOpened: false
      };

    default:
      return state;
  }
};

export default rootReducer;