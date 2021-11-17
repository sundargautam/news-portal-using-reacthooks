import { Container } from "react-bootstrap";
import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Customnavbar from "./components/CustomNavbar/CustomNavbar";
import Footer from "./components/Footer/Footer";
import Business from "./pages/Business/Business";
import Home from "./pages/Home/Home";
const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Container className="app-inner-wrapper">
          <Banner banner="Breaking News" />
          <Customnavbar />
          <div className="main-app">
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Home pageTitle="Latest News" />}
              />
              <Route
                path="/business"
                render={() => <Business pageTitle="Business News" />}
              />
            </Switch>
          </div>
          <Footer />
        </Container>
      </div>
    </BrowserRouter>
  );
};

export default App;
