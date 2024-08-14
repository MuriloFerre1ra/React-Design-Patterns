import axios from "axios";
import { CurrenteUserLoader } from "./CurrenteUserLoader";
import { UserLoader } from "./UserLoader";
import { DataSource } from "./DataSource";
import { ProductInfo }  from "./ProductInfo";
import { ResourceLoader } from "./ResourceLoader";
import { UserInfo } from "./UserInfo";

const getServerData = url => async () => {
  const response = await axios.get(url);
  return response.data;
}

const getLocalStorageData = key => () => {
  return localStorage.getItem(key);
}

const Text = ({ message }) => <h1>{message}</h1>

function App() {
  return (
    <>
    <DataSource getDataFunc={getServerData('/users/2')} resourceName="user">
      <UserInfo/>
    </DataSource>
    <DataSource getDataFunc={getLocalStorageData('message')} resourceName="message">
      <Text />
    </DataSource>

    {/* <ResourceLoader resourceUrl="/users/2" resourceName="user">
      <UserInfo/>
    </ResourceLoader>
    <br></br>
    <ResourceLoader resourceUrl="/products/1" resourceName="product">
      <ProductInfo/>
    </ResourceLoader> */}
    </>
  );
}

export default App;
