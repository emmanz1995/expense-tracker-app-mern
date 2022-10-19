import React, { useState } from 'react';
import './App.scss';
import Dashboard from './expense/dashboard/Dashboard';
import Navbar from './shared/components/navbar/Navbar';
import AddModal from "./shared/components/addModal/AddModal";

function App() {
  const [theme, setTheme] = useState('light');
  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <div className={theme}>
      <div className="background">
        <Navbar setTheme={setTheme} theme={theme} openModal={openModal} />
        <Dashboard />
        {open && <AddModal closeModal={closeModal} />}
      </div>
    </div>
  );
}

export default App;