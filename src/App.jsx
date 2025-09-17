import Home from "./Routs/Home/HomeComponent";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./Routs/NavigationBar/NavigationBar";
import Authentication from "./Routs/Authentication/Authentication";
import Shop from "./Routs/Shop/Shop";
import Trends from "./Routs/Shop/Trends";
import Checkout from "./Routs/Checkout/Checkout";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NavigationBar />}>
          <Route index element={<Home />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="shop" element={<Shop />} />
          <Route path="trends" element={<Trends />} />
          <Route path="checkout" element={<Checkout/>}/>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
