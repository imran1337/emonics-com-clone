import "./App.css";
import Home from "./components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Product from "./components/Product/Product";
import Blog from "./components/Blog/Blog";
import Industries from "./components/Industries/Industries";
import Services from "./components/Services/Services";
import Contact from './components/Contact/Contact';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>

        <Route path="/services">
          <Services />
        </Route>

        <Route path="/industries">
          <Industries />
        </Route>

        <Route path="/product">
          <Product />
        </Route>

        <Route path="/blog">
          <Blog />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
