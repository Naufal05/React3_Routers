import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Content";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
