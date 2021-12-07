import { BrowserRouter as Router, Route } from 'react-router-dom';
//import * as lib from "./components/library";
import {FileUploadPage} from "./components/FileUploadPage";
import {AnalysisPage} from "./components/AnalysisPage";

const App = () => {
  return (
    <Router>
        <Route exact path='/' component={FileUploadPage}/>
        <Route exact path='/analysis' component={AnalysisPage}/>
    </Router>
  );
};

export default App;