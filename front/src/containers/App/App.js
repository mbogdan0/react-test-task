import React from 'react';
import DataProvider from "../DataProvider/DataProvider";
import Main from "../Main/Main";

const App = () => {
  return (
    <DataProvider>
        <Main />
    </DataProvider>
  );
};

export default App;
