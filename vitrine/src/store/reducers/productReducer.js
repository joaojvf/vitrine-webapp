const ACTIONS = {
  SHOW: "PRODUCT_SHOWER",
  ADD: "PRODUCT_ADD",
  REMOVE: "PRODUCT_REMOVE",
};

const INITIAL_STATE = {
  products: [],
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.SHOW:
      return {
        ...state,
      };
    case ACTIONS.ADD:
      return {
        ...state,
      };

    case ACTIONS.REMOVE:
      return {
        ...state,
      };
    default:
        return state
  }
};

export default productReducer;