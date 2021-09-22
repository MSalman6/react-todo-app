import Home from "./Home";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddTodo from "./addTodo";
import InvalidUrl from "./404";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/add-todo">
              <AddTodo />
            </Route>
            <Route exact path="*">
              <InvalidUrl />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
