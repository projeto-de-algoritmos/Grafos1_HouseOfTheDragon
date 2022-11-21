import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Resultado from "./pages/Resultado";

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/" exact render={(props) => <Home {...props} />}/>
          <Route path="/resultado" render={(props) => <Resultado {...props} />}/>
        </Switch>
    </Router>
  )
}
