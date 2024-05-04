import logo from './logo.svg';
import './App.css';
import background from './background.webp'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Personal Nutritional adviser</h1>
      </header>
      <main>
        <div className='container'>
          <div className='input'>

            <input placeholder='  Input your prompt' className='input-field'></input>
            <button className='button submit'>Submit</button>
          </div>
          <div className='output'>

          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
