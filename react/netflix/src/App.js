import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import List from "./components/header/list";
import { popular, shows, trendings } from "./constant";

function App(props) {
  return (
    <div class="wrapper">
      <Header />
      <section class="main-container">
        <List heading="Popular on netflix" list={popular} id="popular" />

        <List heading="Trending now" list={trendings} id="myList" />

        <List heading="TV Shows" list={shows} id="tvShows" />

        <List
          heading="Blockbuster Action & Adventure"
          list={trendings}
          id="movies"
        />
        <List heading="Netflix Originals" list={trendings} id="originals" />
      </section>
      <Footer />
    </div>
  );
}

export default App;
