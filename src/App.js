
import { element } from 'prop-types';
import './App.css';
import Header from './components/Header';
import Movie from './components/Movie';
import file from './components/data.json'

function App() {
  return (
   <div className="App">
    <Header/>
    <div className="main">
      {
        file.map((e)=>{
          return(
          <Movie title={e.Title} 
          year={e.Year}
          img={e.Poster} />)
        })
      }
       
    </div>



   </div>
  );
}

export default App;
