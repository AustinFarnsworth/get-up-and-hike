import NavBar from "./components/navbar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SinglePost from "./pages/home/singlePost";
import CreatePost from "./pages/home/createPost";
import HomePage from "./pages/home/homePage";
import AboutPage from "./pages/home/aboutPage";

function App() {
  return (
    <div>
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/post" component={SinglePost} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/create" component={CreatePost} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
