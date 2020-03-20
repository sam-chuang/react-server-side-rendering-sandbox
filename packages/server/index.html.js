import { router } from "./http"
import React from "react"
import ReactDOMServer from "react-dom/server"
import { StaticRouter } from "react-router-dom"
import { App } from "../app"

const view = (req, res) => {
  //TODO:
  const context = {}

  const html = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  )

  if (context.url) {
    res.writeHead(301, {
      Location: context.url
    })
    return res.end()
  } else {
    res.write(`
        <!doctype html>
        <div id="app">${html}</div>
        <script type="module">
          import { app } from '/app/index.js'
          app(document.getElementById('app'))
        </script>
      `)
    return res.end()
  }
}

router.get("*", view)
