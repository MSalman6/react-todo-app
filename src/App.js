import Home from "./Home";
import NavBar from "./NavBar";
import AddTodo from "./AddTodo";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./404";

function App() {
  return (
    <Router>
      <div className="App">
          <NavBar />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/add">
                <AddTodo />
              </Route>
              <Route exact path="*">
                <NotFound />
              </Route>
            </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;
