import logo from "./logo.svg";
import "./App.css";
import Header from "./componets/header";
import List from "./componets/list";
import ImagesList from "./componets/images";
import ResponsiveDrawer from "./componets/drawer";

function App() {
  return (
    <div className="App">
      <Header />
      <List />
      <ImagesList />
      <ResponsiveDrawer />
    </div>
  );
}

export default App;
