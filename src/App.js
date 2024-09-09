import logo from './logo.svg';
import './App.css';
import Card from './Card';
import Data from './Data';

function App() {
  return (
    <>
      <div class="bg">
        <h1>Kiberbash</h1>
      </div>
      {Data.map((e) => (<Card data={e} />))}
    </>
  );
}

export default App;
