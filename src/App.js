import './CSS/App.css';
import Row from './Components/Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <Row title = "NetflixOriginals" fetchurl = {requests.fetchNetflixOriginals}/>
    </div>
  );
}

export default App;
