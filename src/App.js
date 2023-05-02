
import './App.css';
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">Dictionary</header>
   <main>
    <Dictionary />
   </main>
    </div>
    <footer className='text-center'>
      Open source code by <a href="https://github.com/sacrmr/dictionary-project" target='blank' rel='noreferrer'>Samantha Cramer</a>
    </footer>
    </div>
  );
}

export default App;
