import { Route, Routes, Navigate } from "react-router-dom";
import { Component } from "react";
import * as authService from "./services/authService";
import NavBar from "./components/navBar";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import NotFound from "./components/notFound";
import Logout from "./components/logout";
import Flybox from "./components/flybox";
import Fly from "./components/fly";
import Profile from "./components/profile";
import NewFlyForm from "./components/newFlyForm";
import "./scss/App.scss";

class App extends Component {
  state = {};

  async componentDidMount() {
    const user = await authService.getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    return (
      <main className="container-fluid d-flex flex-column vh-100 flex-grow-1">
        <NavBar user={user}></NavBar>
        <Routes>
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/profile" element={<Profile user={user} />} />
          <Route path="/new" element={<NewFlyForm user={user} />} />
          <Route path="/flybox" element={<Flybox user={user} />} />
          <Route path="/flybox/:flyName" element={<Fly user={user} />} />
          <Route
            path="/"
            element={
              user ? <Navigate to="/flybox" user={user} /> : <LoginForm />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    );
  }
}
export default App;

// REACT ROUTER V6 //
// React Router v6 always looks for exact matches
// Order of Routes no longer matters with v6 either
// Redirect no longer exists in v6, instead we import Navigate
// * <Route path="/" element={<Navigate replace to="/home" />} />
// * Note we need to add the replace keyword if we want the old functionality of a true redirect.
// * Otherwise we will just push the new page (not replace it)
// Nested Routes are now different in v6:
// * Now we define a route in app.js like this: <Route path="/home/*" element={<Home />} />
// * Then any routes defined in the Home component would be relative to this path
// * ie.) <Route path="/home/new-user" element={<p>Hello New User...<p/>} />
// We can also achieve nested routing by creating a Link in the component you want to nest a route in
// * Then define the nested route in app.js as a CHILD <Route> element within the Parent <Route>
// * This is good to keep our routes all in one place
// * But don't forget to tell react where in the DOM to render the new element from the nested route
// * We do that by importing and using the Outlet component (acts as a place holder in the component we want to render a nested route)
// Navigating Programmatically (ie using browser history.push) has CHANGED!!!
// * Now we need to import the useNavigate function from react-router-dom
// * Then when we want to navigate use the following syntax:
// * const navigate = useNavigate()
// * navigate('/home')
