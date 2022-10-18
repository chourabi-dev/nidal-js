import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import UserDetailsPage from "./pages/UserDetailsPage";
import UsersPage from "./pages/UsersPage";

function App() {
  return (
    
    
    <div  >

        <Router>
                <Switch>
                  <Route path={ '/' }  component={  HomePage  }    exact />
                  <Route path={ '/home' }  component={  HomePage  }  exact  />
                  <Route path={ '/about' }  component={  AboutPage  }  exact  /> 
                  
                  <Route path={ '/users' }  component={  UsersPage  }  exact  /> 
                  <Route path={ '/users/details/:id' }  component={  UserDetailsPage  }  exact  /> 
                  

                  { /*  WILD CARD  */ }
                  <Route path={ '*' }  component={ NotFound } />


                </Switch>
        </Router>
    </div>
  );
}

export default App;
