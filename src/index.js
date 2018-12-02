import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './paginas/Home/Home'
import Teste from './paginas/Teste/Teste';
import Sobre from './paginas/Sobre/Sobre';
import Docs from './paginas/Documentation/Docs';
import * as serviceWorker from './serviceWorker';
import './CSSReset.css'
import './index.css'

function Page() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/teste" component={Teste} />
        <Route path="/sobre" component={Sobre} />
        <Route path="/docs" component={Docs} />
      </Switch>
    </div>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <Page />
  </BrowserRouter>,
  document.getElementById('root')
)


//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
