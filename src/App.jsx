import {
  BrowserRouter as RouteContainer, Route, Switch
} from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home/Home'
import Profile from './components/Profile/Profile'
import SinglePost from './components/SinglePost/SinglePost'

const App = () => {

  return (
    <div className="app">
      <RouteContainer>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/post/user/:userId/id/:postId">
            <SinglePost />
          </Route>
          <Route path="/profile/user/:profile">
            <Profile />
          </Route>
        </Switch>
      </RouteContainer>
    </div>
  )
}

export default App
