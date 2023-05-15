import { useState } from "react";
import Cart from "./components/Cart/Cart.jsx";
import Header from "./components/LayOut/Header";
import Shoes from "./components/Shoes/Shoes";
const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  }
  const hideCartHandler = () => {
    setCartIsShown(false);
  }
  return (
    <>
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Shoes />
      </main>
    </>
  );
}

export default App;