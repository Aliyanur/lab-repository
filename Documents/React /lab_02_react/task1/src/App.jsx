import "./App.css";
import FragmentLayout from "./Lab_2.1/FragmentLayout";
import ItemList from "./Lab_2.1/ItemList";
import FragmentWithList from "./Lab_2.1/FragmentWithList";

function App() {
  return (
    <main className="app">
      <header>
        <h1>My React Lab</h1>
      </header>
      <FragmentLayout />
      <ItemList />
      <FragmentWithList />
    </main>
  );
}

export default App;