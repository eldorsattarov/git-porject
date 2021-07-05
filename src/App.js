import logo from './logo.svg';
import './App.css';
import './sass/main.scss'
import NavBar from "./components/NavBar";
import Example from "./components/Example";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {BrowserRouter,Switch,Route,useLocation} from "react-router-dom";
import MyIdea from "./components/MyIdea";
import HomePage from "./components/HomePage";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
        
        <NavBar/>
        
        <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/footer" exact component={Footer}/>
            <Route path="/myidea" exact component={MyIdea}/>
        </Switch>


    </BrowserRouter>
  );
}

export default App;
