import './main.scss';
import Summary from './components/Summary'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Summary />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
