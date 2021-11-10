import Header from "./componenets/Header";
import DeliveryForm from "./componenets/DeliveryForm";
import DeliveriesList from "./componenets/DeliveriesList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className='main-container'>
        <DeliveryForm />
        <DeliveriesList />
      </div>
    </div>
  );
}

export default App;
