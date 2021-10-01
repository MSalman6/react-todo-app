import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Create from "./pages/Create";
import Notes from "./pages/Notes";
import { createTheme, ThemeProvider  } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import Layout from "./pages/Layout";

const theme = createTheme({
  palette: {
    primary: {
      main: '#fefefe'
    },
    secondary: purple
  },
  typography: {
    fontFamily: 'Quicksand',
    fontSize: 12,
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700
  }
})

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={ theme }>
        <Router>
          <Layout>
            <Switch>
              <Route exact path="/">
                <Notes />
              </Route>
              <Route exact path="/create">
                <Create />
              </Route>
            </Switch>
          </Layout>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
