import axios from "axios";
import UserInfo from "./components/UserInfo";
import DataSourceRender from "./components/DataSourceRender";

const getDataFromServer = async(url) => {
  const response = await axios.get(url);
  return response.data;
}

function App() {
  return (
    <>
      <DataSourceRender getData={() => getDataFromServer("/users/1")} render={resource => <UserInfo user={resource} />} />
    </>
  );
}

export default App;