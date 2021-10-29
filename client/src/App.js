import NavBar from "./components/navbar";
import "./app.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SinglePost from "./pages/home/singlePost";
import CreatePost from "./pages/home/createPost";
import AboutPage from "./pages/home/aboutPage";
import HomePage from "./pages/home/homePage";
import {PostsContextProvider} from "./context/postContext";
import LoginPage from "./pages/home/login";
import RegisterPage from "./pages/home/register";

function App() {
  return (
    // adding the context provider to allow shared data globally with app
    <PostsContextProvider>
      <div className="app">
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/post/:id" component={SinglePost} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/create" component={CreatePost} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage} />
          </Switch>
        </Router>
      </div>
    </PostsContextProvider>
  );
}

export default App;
