import logo from './logo.svg';
import './App.css';
import Home from './Home'
function App() {
  return (
    <div className="App">
     <Home
          suggestions={["Marine Augustine", "Magan Smith", "Anita Gros", 
          "Nick Glannpolous", "Narayana Gamer", "Adam Milne"]}
        />
    </div>
  );
}

export default App;
