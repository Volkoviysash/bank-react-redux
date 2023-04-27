import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  addCustomerAction,
  removeCustomerAction,
} from "./store/customerReducer";
import { addCashAction, getCashAction } from "./store/cashReducer";
import { fetchCustomers } from "./asyncActions/customers";

function App() {
  // Create dispatch
  const dispatch = useDispatch();

  //to take state from Redux
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);

  const getCash = (cash) => {
    dispatch(getCashAction(cash));
  };

  const addCash = (cash) => {
    dispatch(addCashAction(cash));
  };

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };
    dispatch(addCustomerAction(customer));
  };

  const removeCustomer = (customer) => {
    dispatch({ type: "REMOVE_CUSTOMERS", payload: customer.id });
    dispatch(removeCustomerAction(customer.id));
  };

  return (
    <div className="App">
      <div className="display">${cash}</div>
      <div style={{ display: "flex" }}>
        <button
          onClick={() => addCash(Number(prompt("Enter the amount")))}
          className="cash-in"
        >
          Cash IN
        </button>
        <button
          onClick={() => getCash(Number(prompt("Enter the amount")))}
          className="cash-out"
        >
          Cash OUT
        </button>
      </div>

      {customers.length > 0 ? (
        <div className="customers-block">
          <h3 className="customers-header">Customers list:</h3>
          {customers.map((customer) => (
            <div onClick={() => removeCustomer(customer)} className="customer">
              {customer.name}
            </div>
          ))}
        </div>
      ) : (
        <div className="customers-info">No customers.</div>
      )}
      <div style={{ display: "flex" }}>
        <button
          onClick={() =>
            addCustomer(prompt("Enter the name of the new customer"))
          }
          className="add-customer"
        >
          Add Customer
        </button>
        <button
          onClick={() => dispatch(fetchCustomers())}
          className="delete-customer"
        >
          Get Customers from DB
        </button>
      </div>
    </div>
  );
}

export default App;
