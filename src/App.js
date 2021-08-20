import {HashRouter as Router} from "react-router-dom";
import Routes from "./Routes";
import './fixtures/i18next';

function App() {
  return (
      <Router>
        <Routes/>
      </Router>
  );
}

export default App;
