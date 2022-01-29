import './App.css';
import Dictionary from './Dictionary';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary
        </header>
        <main>
        <Dictionary defaultKeyword="water"/>
        </main>
        <footer>Coded by <a href="https://www.linkedin.com/in/ciara-sugrue-5078791b5/" 
        target="_blank" 
        rel="noreferrer">Ciara Ní Shiochrú</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
