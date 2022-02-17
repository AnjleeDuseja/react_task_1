import "./App.css";
import Home from "./pages/Home/Home";
import AuthProvider from "./context/AuthProvider";
import AdminPage from "./pages/AdminPage/AdminPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <main>
        <Switch>
          <Route exact path="/">
            {" "}
            <AuthProvider>
              <Home />
            </AuthProvider>
          </Route>
          <Route exact path="/admin" component={AdminPage} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
