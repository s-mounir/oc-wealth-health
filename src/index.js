import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Home from './pages/Home';
import EmployeeList from './pages/EmployeeList';
import Error from './pages/Error';
import Header from './components/Header';
import Footer from './components/Footer';
import { store } from './utils/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employee-list" element={<EmployeeList />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Provider>
    </Router>
  </React.StrictMode>
);