import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Layout/Header";
import CartProvider from "./components/Store/CartProvider";
import AddMedicine from "./components/Shoes/AddMedicine";
import MedicineList from "./components/Shoes/MedicineList";

const App = () => {
  const [medicines, setMedicines] = useState([]);
  const addMedicineHandler = (medicine) => {
    setMedicines((prevMedicines) => [...prevMedicines, medicine]);
  };
  return (
    <CartProvider>
      <Header />
      <AddMedicine onAddMedicine={addMedicineHandler} />
      <MedicineList medicines={medicines} />
    </CartProvider>
  );
};

export default App;
