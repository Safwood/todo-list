import { FC } from 'react';
import { Header } from './components/Header';
import { TasksPage } from './components/TasksPage';
import { AddressPage } from './components/AddressPage';
import { Routes, Route } from 'react-router-dom';
import { Paths } from './utils';


const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={Paths.Tasks} element={<TasksPage />} />
        <Route path={Paths.Addresses} element={<AddressPage />} />
      </Routes>
    </div>
  );
}

export default App;
