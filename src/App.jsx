import "./App.css";
import CurrencyConvertor from "./components/currency-convertor";

function App() {
  return (
    <div className="min-h-screen bg-red-100 flex flex-col items-center justify-center">
      <div className="container">
        <CurrencyConvertor />
      </div>
    </div>
  );
}

export default App;
