import { router, server } from "./http"
import serveStatic from "serve-static"
import { join, resolve } from "path"

const root = join(__dirname, "../site")

const serve = serveStatic(root, {})

router.use(serve)
