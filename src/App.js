import './App.css';
import Routes from './routes'
import { UserContextProvider } from './Contexts/UserContext';

function App() {
  return (
    <UserContextProvider>
      <Routes />
    </UserContextProvider>
  );
}

export default App;