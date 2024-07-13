import './App.css';
import './components/Login';
import './components/Gerenciamento';
import './components/Forms';
import './components/To-do';
import './components/Time';
import './components/Fatorial';

function App() {
  return (
    <div className="App">
      <header className="header">
        
      </header>
      <main className="main">
        <Fatorial/> 
        <Forms/> 
        <Gerenciamento/> 
        <Login/> 
        <Time/> 
        <To-do/>
      </main>
      <footer className="footer">

      </footer>
    </div>
  );
}

export default App;