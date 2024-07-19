import {
  useState,
  useEffect,
  Suspense,
  lazy,
  createContext,
  useContext,
} from "react";
import Head from "./components/Head";
import "./App.css";
import CountryCard from "./components/CountryCard";
import Shimmer from "./components/Shimmer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/contact";
import CountryMenu from "./components/CountryMenu";
import { Link } from "react-router-dom";
import Profile from "./components/Profile";
import { filterData } from "./utiles/Helper";
import useOnline from "./utiles/useOnline";
import userContext from "./utiles/userContext";
import { Provider } from "react-redux";
import store from "./utiles/store";
import Box from "./components/box";

const Cart = lazy(() => import("./components/Cart"));
// eslint-disable-next-line
const List = ({ data }) => {
  return (
    <>
      {/* <div className="country-list"> */}
      <div className="flex flex-wrap justify-between  my-6 mx-2 ml-3">
        {data.slice(0, 25).map((el, i) => (
          <Link to={`/country/${el.name.common}`} key={i}>
            <CountryCard country={el} />
          </Link>
        ))}
      </div>
    </>
  );
};

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [countryList, setCountryList] = useState([]);
  const [newList, setNewList] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    console.log(data);
    setCountryList(data);
    setNewList(data);
  }

  /*useEffect(() => {
    const filteredCountryList = countryList.filter((country) =>
      country.name.common.toLowerCase().includes(searchText.toLowerCase())
    );
    setNewList(filteredCountryList);
  }, [searchText, countryList]);*/
  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>Please check your internet connection⚠️</h1>;
  }
  return countryList?.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex justify-center align-middle">
        <input
          type="text"
          placeholder="Search"
          className="bg-slate-300 m-4 h-9 rounded-md text-center"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="bg-black h-9 w-20 m-4 text-slate-200 rounded-md  relative right-4"
          onClick={() => {
            const filter = filterData(searchText, countryList);
            setNewList(filter);
          }}
        >
          Search
        </button>
      </div>

      <List data={newList} />
    </>
  );
};

const Footer = () => {
  const { user } = useContext(userContext);
  return (
    <h2 p-4 className="text-center bg-black text-white p-4">
      This site is developed by {user.name} - {user.email}
    </h2>
  );
};

function App() {
  return (
    <>
      <Provider store={store}>
        <Head />
        <Outlet />

        <Footer />
      </Provider>
    </>
  );
}
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/country/:name",
        element: <CountryMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Box />,
      },
    ],
  },
]);

export default App;
