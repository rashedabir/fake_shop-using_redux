import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Products from "./screens/Products";
import ProductDetails from "./screens/ProductDetails";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="App">
          <Switch>
            <Route path="/" exact component={Products} />
            <Route path="/products/:id" exact component={ProductDetails} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
