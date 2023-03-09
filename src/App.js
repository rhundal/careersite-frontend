import './App.css';
import Header from './components/Header';
import Background from './components/Background';
import Home from './pages/Home';
import { useEffect, useState, createContext, useReducer, Children } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './features/jobsSlice';
import { selectItem } from './features/jobsSlice';
// import { GlobalProvider } from './context/GlobalState';
// import { ThemeContext } from './context/GlobalState';


const initialState = {

  selectedCategoryInitial: 'Select Category',
  selectedStateInitial: 'Select State',
  selectedNumJobsInitial: 'Select Number of Jobs'
}

export const ThemeContext = createContext(initialState);

function App() {

  const dispatch = useDispatch();

  const [selectedCategory, setSelectedCategory] = useState(initialState.selectedCategoryInitial);

  const [selectedState, setSelectedState] = useState(initialState.selectedStateInitial);

  const [selectedNumJobs, setSelectedNumJobs] = useState(initialState.selectedNumJobsInitial);

  useEffect(() => {

    dispatch(fetchData());
  }, [dispatch]);


  return (

    <div className="App">

      {/* <GlobalProvider value={{}}>
        <Home />
      </GlobalProvider> */}

      <ThemeContext.Provider value={{
        selectedCategory, setSelectedCategory, selectedState, setSelectedState, selectedNumJobs, setSelectedNumJobs
      }}>
        <Home />
      </ThemeContext.Provider>

      {/* <Home category={data.category} state={data.state} numJobs={data.numJobs} /> */}

      {/* <globalStateContext.Provider value={globalState}>
      </globalStateContext.Provider> */}


    </div>
  );
}

export default App;
