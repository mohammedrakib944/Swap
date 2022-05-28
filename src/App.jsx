import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// internal imports
import Loader from "./components/loader/Loader";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      {/* <Loader /> */}
      <Sidebar />
      <Header />
    </div>
  );
}

export default App;
