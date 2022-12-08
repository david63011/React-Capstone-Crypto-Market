import React from 'react';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import store from './Components/Pages/Redux/ConfigureStore';
import Main from './Components/Pages/Main';
import Details from './Components/Pages/Details';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/detail/:id" element={<Details />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
