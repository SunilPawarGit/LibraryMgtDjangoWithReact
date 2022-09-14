import "./App.css";
import AddBooks from "./components/AddBooks";
import Axios from 'axios'
import { useState, useEffect } from "react";
import ViewBooks from "./components/ViewBooks";
function App() {
  const [books, setBooks] = useState([])
  const [id, setId] = useState(null)
  const [isSubmit, setIsSubmit] = useState(true);

  useEffect(() => {
    const ViewAllBooks = () => {
      Axios.get("http://localhost:8000").then((res) => {
        setBooks(res.data);
      });
    };
    if (isSubmit) {
      ViewAllBooks();
      setIsSubmit(false)
    }
  }, [isSubmit])
  return (
    <div className="App">
      <AddBooks id={id} setId={setId} books={books} setIsSubmit={setIsSubmit} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {books.map((data) => <ViewBooks key={Math.random()} data={data} id={id} setIsSubmit={setIsSubmit} setId={setId} />
        )}
      </div>
    </div>
  );
}

export default App;
