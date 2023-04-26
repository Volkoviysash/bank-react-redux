const defaultState = {
  customers: [],
};

const ADD_CUSTOMER = "ADD_CUSTOMER";
const REMOVE_CUSTOMER = "REMOVE_CUSTOMER";

const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_CUSTOMER:
      return { ...state, customers: [...state.customers, action.payload] };
    case REMOVE_CUSTOMER:
      return {
        ...state,
        customers: [
          ...state.customers.filter(
            (customer) => customer.id !== action.payload
          ),
        ],
      };

    default:
      return state;
  }
};

// Add customer action creator
export const addCustomerAction = (payload) => ({
  type: ADD_CUSTOMER,
  payload,
});

// Remove customer action creator
export const removeCustomerAction = (payload) => ({
  type: REMOVE_CUSTOMER,
  payload,
});

export default customerReducer;
