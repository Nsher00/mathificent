import './App.css';
import Header from './Header.js';

function App() {
  return (
    <Header />
    <h1>Mathificent!</h1>
    <footer className="navbar fixed-bottom bg-dark">
  <div className="container-fluid">
    <a href="https://www.webucator.com" className="nav-link text-light">
      Copyright &copy; {new Date().getFullYear()} Webucator
    </a>
  </div>
</footer>
  );
}

export default App;
