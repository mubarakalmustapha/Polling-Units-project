import { Route, Routes } from 'react-router-dom';
import ListOfDelltaPollingUnits from './components/ListOfDelltaPollingUnits';
import TotalOfPollingUnits from './components/TotalOfPollingUnits';
import AddPollingUnits from './components/AddPollingUnits';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <div style={{
      marginTop:30
    }} className="container mt-3">
      <Routes>
        <Route path='/' element={<ListOfDelltaPollingUnits/>}/>
        <Route path='/total' element={<TotalOfPollingUnits/>}/>
        <Route path='/add' element={<AddPollingUnits/>}/>
      </Routes>
    </div>
      </>
  );
}

export default App;
