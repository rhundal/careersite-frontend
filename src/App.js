import './App.css';
import Header from './components/Header';
import Background from './components/Background';
import Home from './pages/Home';
// import data from './../public/data.json';
import { useEffect, useState } from 'react';
// import { data } from './utils/data';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './features/jobsSlice';
import { selectItem } from './features/jobsSlice';

// const globalState = {

//   jobData: data
// }

function App() {

  // const [data, setData] = useState([]);

  // const [myData, setMyData] = useState(data);
  const dispatch = useDispatch(); // to dispatch actions

  //const myData = useSelector((state) => state.jobsReducer)

  useEffect(() => {

    dispatch(fetchData());
  }, [dispatch]);


  // useEffect(() => {

  //   fetch('./../public/data.json')    // not setting data - issue 1
  //     .then(respone => {
  //       return respone.json();
  //     }).then(data => {
  //       setData(data);
  //     }).catch(() => {

  //       console.error();
  //     });

  // }, []);

  //console.log("value of category from app " + myData[0].category);

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
