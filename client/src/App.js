import NavBar from "./components/navbar";
import "./app.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SinglePost from "./pages/home/singlePost";
import CreatePost from "./pages/home/createPost";
import AboutPage from "./pages/home/aboutPage";
import HomePage from "./pages/home/homePage";

import {PostsContextProvider} from "./context/postContext";

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
          </Switch>
        </Router>
      </div>
    </PostsContextProvider>
  );
}

export default App;
