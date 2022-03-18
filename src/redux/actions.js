

// ACTION TYPES constants

export const ROUTE_SET = 'ROUTE_SET';
export const DRAWER_OPEN = 'DRAWER_OPEN';
export const DRAWER_CLOSE = 'DRAWER_CLOSE';


// ACTION CREATORS

export const actionRouteSet = (name) => {
  return {
    type: ROUTE_SET,
    payload: name,
  };
};

export const actionDrawerOpen = () => {
  return {
    type: DRAWER_OPEN,
  };
};

export const actionDrawerClose = () => {
  return {
    type: DRAWER_CLOSE,
  };
};
