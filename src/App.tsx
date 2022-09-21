import './App.css'
import { Header } from './components/Header';
import  Employees  from './components/Employees';
import { Footer } from './components/Footer';

function App(): JSX.Element {

  return (
    <div className="app">
      <Header />
      <Employees />
      <Footer />
    </div>
  )
}

export default App
