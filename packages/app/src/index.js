import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"

export const App = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/about">About page</Route>
        <Route path="/">Hi, React.js from server</Route>
      </Switch>
    </>
  )
}

export const app = node => {
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    node
  )
}
