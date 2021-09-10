import {BrowserRouter as Router } from "react-router-dom";
import {ConnectedRouter} from "connected-react-router";
import { history } from "./store/configureStore";
import Routes from "./Routes";
import './fixtures/i18next';

function App() {
  return (
      <Router>
        <ConnectedRouter history={history}>
           <Routes/>
        </ConnectedRouter>
      </Router>
  );
}

export default App;
