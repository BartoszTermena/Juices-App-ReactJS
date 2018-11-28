import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';
import GrapeJuice from './components/dashboard/juicepages/grape-juice';
import LemonJuice from './components/dashboard/juicepages/lemon-juice';
import LimeJuice from './components/dashboard/juicepages/lime-juice';
import OrangeJuice from './components/dashboard/juicepages/orange-juice';
import StrawberryJuice from './components/dashboard/juicepages/strawberry-juice';
import Watermelon from './components/dashboard/juicepages/watermelon-juice';
import Charry from './components/dashboard/juicepages/cherry-juice';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
         <Navbar />
         <Switch>
           <Route exact path="/" component={Dashboard} />
           <Route path="/juice/grape-juice" component={GrapeJuice} />
           <Route path="/juice/lemon-juice" component={LemonJuice} />
           <Route path="/juice/lime-juice" component={LimeJuice} />
           <Route path="/juice/orange-juice" component={OrangeJuice} />
           <Route path="/juice/strawberry-juice" component={StrawberryJuice} />
           <Route path="/juice/watermelon-juice" component={Watermelon} />
           <Route path="/juice/cherry-juice" component={Charry} />
           <Route path="/project/:id" component={ProjectDetails} />
           <Route path="/signin" component={SignIn} />
           <Route path="/signup" component={SignUp} />
           <Route path="/create" component={CreateProject} />
         </Switch>
        </div>
      </BrowserRouter>
    
    );
  }
}

export default App;
