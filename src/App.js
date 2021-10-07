import Home from "./Home";
import NotFound from "./404";
import Layout from "./Layout";
import NavBar from "./NavBar";
import AddTodo from "./AddTodo";
import { purple, red } from "@material-ui/core/colors";
import { createTheme, ThemeProvider  } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


const theme = createTheme({
  palette: {
    primary: purple,
    secondary: {
      main: '#fefefe'
    }
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
  appBar: {
    height: 90
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <div className="App">
              {/* <NavBar /> */}
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
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;