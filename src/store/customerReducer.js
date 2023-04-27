const defaultState = {
  customers: [],
};

const ADD_CUSTOMER = "ADD_CUSTOMER";
const ADD_MANY_CUSTOMERS = "ADD_MANY_CUSTOMERS";
const REMOVE_CUSTOMER = "REMOVE_CUSTOMER";

const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_CUSTOMER:
      return { ...state, customers: [...state.customers, action.payload] };
    case ADD_MANY_CUSTOMERS:
      return { ...state, customers: [...state.customers, ...action.payload] };
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

// Add many customer action creator
export const addManyCustomersAction = (payload) => ({
  type: ADD_MANY_CUSTOMERS,
  payload,
});

// Remove customer action creator
export const removeCustomerAction = (payload) => ({
  type: REMOVE_CUSTOMER,
  payload,
});

export default customerReducer;
