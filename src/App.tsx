import Form from "./components/Form/Form";
import Navbar from "./components/Navbar/Navbar";
import List from "./components/List/List";
import MovieProvider from "./components/context/MovieStore";
import { ToastContainer, toast } from "react-toastify";

// ------------------------------------------------------------------------------------------------

function App() {
  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <MovieProvider>
        <Navbar />
        <Form />
        <List />
      </MovieProvider>
    </>
  );
}

export default App;
