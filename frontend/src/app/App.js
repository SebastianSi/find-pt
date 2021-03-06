import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from "./NotFound";
import SearchPage from "./searchPage/SearchPage";
import HomePage from "./HomePage";
import AddTrainer from "./RegisterTrainerPage/AddTrainer";

class App extends React.Component {
    componentDidMount() {
        toggleHeaderItemsActiveClass();
    }

    render() {
        return (
            <Router>
                <div className='App'>
                    <nav className='main-header'>
                        <ul className='main-header-list'>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/search">Search</Link>
                            </li>
                            <li>
                                <Link to="/register_as_trainer">Add Trainer</Link>
                            </li>
                        </ul>
                    </nav>

                    <Switch>

                        <Route path="/search" exact>
                            <SearchPage />
                        </Route>
                        <Route path="/register_as_trainer" exact component={AddTrainer} />
                        <Route path="/" exact>
                            <HomePage />
                        </Route>
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </Router>
        )
    }

}

function toggleHeaderItemsActiveClass() {

  const headerMenuItems = document.querySelector('.main-header-list');
  [...headerMenuItems.children].forEach((liNode)=> {
      liNode.onclick = function() {
          [...headerMenuItems.children].map( node => node.className = '');
          liNode.className = 'active';
      }
  })
}

export default App;
