import { useReducer } from "react";
import "./styles.css";
const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
};
function reducer(state, action) {
  if (state.isActive === false && action.type !== "openAccount") return state;

  switch (action.type) {
    case "openAccount":
      return { ...initialState, isActive: true, balance: 500 };
    case "deposit":
      return { ...state, balance: state.balance + 150 };
    case "withdraw":
      return {
        ...state,
        balance: state.balance >= 50 ? state.balance - 50 : state.balance,
      };
    case "requestLoan":
      if (state.loan !== 0) return state;
      return {
        ...state,
        balance: state.loan === 0 ? state.balance + 5000 : state.balance,
        loan: state.loan === 0 ? 5000 : state.loan,
      };
    case "payLoan":
      if (state.loan === 0) return state;
      return {
        ...state,
        balance: state.loan !== 0 ? state.balance - 5000 : state.balance,
        loan: state.loan !== 0 ? 0 : state.loan,
      };
    case "closeAccount":
      if (state.loan !== 0 || state.balance !== 0) return state;
      return { ...state, isActive: false, balance: 0, loan: 0 };

    default:
      return new Error("Unknown action");
  }
}
function BankAccount() {
  const [{ balance, isActive, loan }, dispatch] = useReducer(
    reducer,
    initialState
  );
  return (
    <div className="BankAccount">
      <h1>useReducer Bank Account</h1>
      <p>Balance: {balance}</p>
      <p>Loan: {loan}</p>

      <p>
        <button
          onClick={() => {
            dispatch({ type: "openAccount" });
          }}
          disabled={isActive}
        >
          Open account
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch({ type: "deposit" });
          }}
          disabled={!isActive}
        >
          Deposit 150
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch({ type: "withdraw" });
          }}
          disabled={!isActive}
        >
          Withdraw 50
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch({ type: "requestLoan" });
          }}
          disabled={!isActive}
        >
          Request a loan of 5000
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch({ type: "payLoan" });
          }}
          disabled={!isActive}
        >
          Pay loan
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch({ type: "closAccount" });
          }}
          disabled={!isActive}
        >
          Close account
        </button>
      </p>
    </div>
  );
}

export default BankAccount;
