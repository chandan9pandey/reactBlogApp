import './styles/app.css';
import HomeDetails from './categories/HomeDetails.js'
import CategoryDetails from './categories/CategoryDetails';
import ArticleDetails from './categories/ArticleDetails';
import {Switch,Route,BrowserRouter} from 'react-router-dom';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
            <Route path="/categories/:topic" component={CategoryDetails}/>
            <Route path="/Home/:id" component={ArticleDetails}/>
            <Route path="/" component={HomeDetails}/>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
