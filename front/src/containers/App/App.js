import React from 'react';
import DataProvider from "../DataProvider/DataProvider";
import Main from "../Main/Main";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
      <>
          <DataProvider>
              <Main />
          </DataProvider>
          <ToastContainer />
      </>
  );
};

export default App;
