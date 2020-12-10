import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { DataGlobal, DataIndo, DataProvinsi } from './component'

const App = () => {
  return(
    <Router>
      <div>
        <center>
        <h1>
          <b>COVID-19 TRACKER</b>
        </h1>
        <nav>
          <table>
            <ul>
              <li>
                <Link to="/global">
                  Data Global
                </Link>
              </li>
              <li>
                <Link to="/indo">
                  Data Indonesia
                </Link>
              </li>
              <li>
                <Link to="/provinsi">
                  Data Per Provinsi
                </Link>
              </li>
            </ul>
          </table>
        </nav>
        </center>
      </div>
      <Switch>
        <Route path="/global">
          <DataGlobal/>
        </Route>
        <Route path="/indo">
          <DataIndo/>
        </Route>
        <Route path="/provinsi">
          <DataProvinsi/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;