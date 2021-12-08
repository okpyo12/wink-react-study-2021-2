import { BrowserRouter as Router, Route } from 'react-router-dom';
import {FileUploadPage} from "./components/FileUploadPage";
import {ResultPage} from "./components/ResultPage";

const App = () => {
  return (
    <Router>
        <Route exact path='/' component={FileUploadPage}/>
        <Route exact path='/result' component={ResultPage}/>
    </Router>
  );
};

export default App;