import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './index.css';
import Teste from './paginas/Teste/Teste';
import * as serviceWorker from './serviceWorker';

function App() {
  return (
    <div>
      {/* <Navbar />

        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login}/>
        <Route path="/conta" component={Conta}/>
        <Route path="/sobre" component={Sobre} />
        <Route component={NaoEncontrada} /> */}
        <Switch>

        <Route path="/teste" component={Teste} />

      </Switch>
    </div>
  )
}

ReactDOM.render(
  //<Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  //</Provider>, 
  document.getElementById('root')
)


//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
