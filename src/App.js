import "./App.scss";
import Search from "./components/Search";

function App() {
  return (
    <>
      <h1 className="title">React Weather</h1>
      <div className="container">
        <main>
          <Search />
        </main>
      </div>
    </>
  );
}

export default App;
