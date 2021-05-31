import {
  BrowserRouter as RouteContainer, Route, Switch
} from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home/Home'
import MyProfile from './components/MyProfile/MyProfile'
import Profiles from './components/Profiles/Profiles'
import Navbar from './components/Shared/Header/Navbar'
import SinglePost from './components/SinglePost/SinglePost'

const App = () => {

  return (
    <div className="app">
      <RouteContainer>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/post/user/:userId/id/:postId">
            <SinglePost />
          </Route>
          <Route path="/profile/user/:profile">
            <MyProfile />
          </Route>
          <Route path="/allProfiles">
            <Profiles />
          </Route>
        </Switch>
      </RouteContainer>
    </div>
  )
}

export default App
