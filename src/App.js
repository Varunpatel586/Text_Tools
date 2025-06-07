import './App.css';
import Navbar from'./components/Navbar';
import Form from './components/Form';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
      <Form heading='Enter text below'/>
      </div>
    </>
  );
}

export default App;
