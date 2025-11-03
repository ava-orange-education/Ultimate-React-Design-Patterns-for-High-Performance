import BookInfo from "./components/BookInfo";
import UserInfo from "./components/UserInfo"

function App() {
  return (
    <>
      <UserInfo userId={"3"} />
      <BookInfo bookId={"2"} />
    </>
  );
}

export default App;
