import logo from './logo.svg';
import './App.css';
import './sass/main.scss'
import NavBar from "./components/NavBar";
import Example from "./components/Example";
import Main from "./components/Main";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
<NavBar/>
<Example/>
<Main/>
<Footer/>
    </div>
  );
}

export default App;
