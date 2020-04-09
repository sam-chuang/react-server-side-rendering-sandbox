import { router, server } from "./http"
import serveStatic from "serve-static"
import { join, resolve } from "path"

const serveApp = serveStatic(join(__dirname, "../app"), {})
router.use(serveApp)

const serveModules = serveStatic(join(__dirname, "../modules"), {})
router.use(serveModules)
