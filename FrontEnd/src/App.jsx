import "./App.css";
import Navbar from "./components/Navbar";
import AllRoutes from "./components/AllRoutes";
import AuthContextProvider from "./Context/AuthContextProvider"; 

export default function App() {
  return (
    <AuthContextProvider>
      <>
        <Navbar />
        <AllRoutes />
      </>
    </AuthContextProvider>
  );
}
