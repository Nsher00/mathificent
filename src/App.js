import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import SelectInput from './SelectInput.js';
import PlayButton from './PlayButton.js';

function App() {
  return (
    <div>
      <Header/>
      <h1>Mathificent!</h1>
      <Main/>
      <SelectInput/>
      <SelectInput/>
      <PlayButton/>
      <Footer/>
    </div>
  )
}

export default App;
