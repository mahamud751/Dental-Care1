import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';

import Login from './components/Login/Login';
import AuthProvider from './Context/AuthProvider';

import PrivateComponent from './components/PrivateComponent/PrivateComponent'
import Team from './components/Team/Team';
import Home from './components/Home/Home';

import Service from './components/SingleProduct/Service/Service';
import FullService from './components/FullService/FullService';
import SingleProducts from './components/SingleProducts/SingleProducts';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/service">
              <Service></Service>
            </Route>
            <PrivateComponent path="/singleProducts/:id">
              <SingleProducts></SingleProducts>
            </PrivateComponent>
            <Route path="/fullService">
              <FullService></FullService>
            </Route>

            <Route path="/team">
              <Team></Team>
            </Route>


            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
