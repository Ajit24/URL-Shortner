
import './App.css';
import Url from './App/Url';
import {Routes , Route} from "react-router-dom"
import First from './App/First';

function App() {
  return (
    <div className="App">
      <h1>Generate Short Url</h1>
      {/* <Url /> */}
{/* <First/> */}

      <Routes>
        <Route path='/' element={<First/>}/>
        <Route path='/done' element={<Url/>}/>

      </Routes>
    </div>
  );
}

export default App;
