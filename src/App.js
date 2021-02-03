import './CSS/App.css';
import Row from './Components/Row';
import requests from './requests';
import Banner from './Components/Banner';


function App() {
  return (
    <div className="App">

      <Banner/>

      {requests.map((genre)=>{
        return(
          <Row fetchurl = {genre.link} title={genre.title} key={genre.id} isLargeRow = {genre.islargeRow}/>
        );
      })}
      
    </div>
  );
}

export default App;
