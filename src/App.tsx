import Form from "./components/Form/Form";
import Navbar from "./components/Navbar/Navbar";
import List from "./components/List/List";
import MovieProvider from "./components/context/MovieStore";
import { ToastContainer, toast } from "react-toastify";
import Modal from "./components/Modal/Modal";
import FilterNav from "./components/FilterNav/FilterNav";

// ------------------------------------------------------------------------------------------------

function App() {
  return (
    <div className="bg-[#595959] h-screen overflow-x-hidden">
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
        <Modal />
        <Navbar />
        <Form />
        <FilterNav />
        <List />
      </MovieProvider>
    </div>
  );
}

export default App;
