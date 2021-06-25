import { useState } from 'react';
import { BrowserRouter as Router, Link, NavLink, Prompt, Redirect, Route, Switch } from 'react-router-dom'
import Msg from './Msg';
import Suppliers from './Suppliers';
import ToggleLink from './ToggleLink';
import WithRouterComp from './WithRouterComp';

function App() {
  const [prompt, setPrompt] = useState(false)
  return (
    <Router>
      <div >
        <ToggleLink to='/products/car'>Products</ToggleLink><br />
        {/* <ToggleLink to='/products'>Products</ToggleLink><br /> */}
        <ToggleLink to="/suppliers" >Suppliers</ToggleLink>
        {/* <Switch> */}
        <NavLink to='/navlinking' activeClassName='active' className="btn btn-primary">NavLink</NavLink><br />
        <Route path='/products/:dataType?' component={Msg} />
        <Prompt message="Want to navigate?" when={prompt === true} />
        <Redirect path='/' component={Msg} />
        {/* </Switch> */}
        <WithRouterComp />
      </div>
    </Router>
  );
}

export default App;
