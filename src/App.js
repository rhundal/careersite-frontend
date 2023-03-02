import './App.css';
import Header from './components/Header';
import Background from './components/Background';
import Home from './pages/Home';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './features/jobsSlice';
import { selectItem } from './features/jobsSlice';


function App() {

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(fetchData());
  }, [dispatch]);


  return (

    <div className="App">

      <Home />

      {/* <Home category={data.category} state={data.state} numJobs={data.numJobs} /> */}

      {/* <globalStateContext.Provider value={globalState}>
      </globalStateContext.Provider> */}


    </div>
  );
}

export default App;
