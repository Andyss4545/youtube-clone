import './App.css';
import NavBar from './Components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Components/Home/Home';
import SearchPage from './Components/SearchPage/SearchPage';
function App() {
  return (
    // BEM class naming convention
    <div className="app">
         {/** Header */}

         <BrowserRouter>
              <NavBar/>
               <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path='/search/:searchTerm'  element={<SearchPage/>} />
                    {/** add :searchTerm to the search page */}
               </Routes>
         </BrowserRouter>
    </div>
  );
}

export default App;
