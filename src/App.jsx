import "./App.css";
import { orderPlace } from "./orderService";
import { pay } from "./razorpayService";

function App() {
  return (
    <div className="App">
      <button
        className="button_pay"
        onClick={() => {
          pay(orderPlace); 
        }}
      >
        Pay with Razorpay
      </button>
    </div>
  );
}

export default App;
