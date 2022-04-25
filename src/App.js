import './App.css';
import { routes } from './Routes/Routes';
import Header from './MainView/Header';

function App() {
  return(
    <>
    <Header/>
    {routes}
    </>
  );
}

export default App;
