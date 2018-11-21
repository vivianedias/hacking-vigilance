import React, { Component } from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import Sidebar from '../../componentes/Sidebar/Sidebar'
import Navbar from '../../componentes/Navbar/Navbar'
import './Teste.css'

class Teste extends Component {
  
  render(){

    return(
      <main>
        <Navbar />
        <div className="container">
          <Sidebar className="teste__column"/>
          
          <form className="teste__column">
            <section>
              <h1 id="item1">Item 1</h1>
                <Checkbox value="checkedC" />
                <Checkbox value="checkedC" />
                <Checkbox value="checkedC" />
                <Checkbox value="checkedC" />
                <Checkbox value="checkedC" />
            </section>
            <section>
              <h1 id="item2">Item 2</h1>
                <Checkbox value="checkedC" />
                <Checkbox value="checkedC" />
                <Checkbox value="checkedC" />
                <Checkbox value="checkedC" />
                <Checkbox value="checkedC" />
            </section>
            <section>
              <h1 id="item3">Item 3</h1>
                <Checkbox value="checkedC" />
                <Checkbox value="checkedC" />
                <Checkbox value="checkedC" />
                <Checkbox value="checkedC" />
                <Checkbox value="checkedC" />
            </section>
            <section>
              <h1 id="item4">Item 4</h1>
                <Checkbox value="checkedC" />
                <Checkbox value="checkedC" />
                <Checkbox value="checkedC" />
                <Checkbox value="checkedC" />
                <Checkbox value="checkedC" />
            </section>
            <section>
              <h1 id="item5">Item 5</h1>
                <Checkbox value="checkedC" />
                <Checkbox value="checkedC" />
                <Checkbox value="checkedC" />
                <Checkbox value="checkedC" />
                <Checkbox value="checkedC" />
            </section>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </main>
    )
  }
}

export default Teste