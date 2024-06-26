import Modal from "./components/Modal";
import LargeBookListItems from "./components/books/LargeListItems";
import { books } from "./data/books";

function App() {
  return (
    <>
      <Modal>
        <LargeBookListItems book={books[0]} />
      </Modal>
    </>
  );
}

export default App;
