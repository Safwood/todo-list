import { FC } from 'react';
import { Header } from './components/Header';
import { TasksPage } from './components/TasksPage';
import { AddressPage } from './components/AddressPage';
import { Routes, Route } from 'react-router-dom';


const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<TasksPage />} />
        <Route path="/addresses" element={<AddressPage />} />
      </Routes>
    </div>
  );
}

export default App;
