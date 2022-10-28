const fs = require("fs")
const jsonServer = require("json-server")
const path = require("path")

const server = jsonServer.create()

const router = jsonServer.router(path.resolve(__dirname, "db.json"))

const SERVER_PORT = 8000
const SERVER_DELAY = 800

const SERVER_HANDLERS = {
  login: "/login",
  profile: "/profile",
}

server.use(jsonServer.defaults({ bodyParser: true }))
server.use(async (req, res, next) => {
  await new Promise(resolve => {
    setTimeout(resolve, SERVER_DELAY)
  })
  next()
})

server.use((req, res, next) => {
  if (!req.headers.authorization && !req.path.includes(SERVER_HANDLERS.login)) {
    return res.status(403).json({ message: "AUTH ERROR" })
  }
  next()
})

server.post(SERVER_HANDLERS.login, (req, res) => {
  const { username, password } = req.body
  const db = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "db.json"), "UTF-8")
  )
  const { users } = db

  const userFromBd = users.find(
    user => user.username === username && user.password === password
  )
  if (userFromBd) {
    return res.json(userFromBd)
  }
  return res.status(403).json({ message: "USER NOT FOUND" })
})
server.get(SERVER_HANDLERS.profile, (req, res) => {
  const db = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "db.json"), "UTF-8")
  )
  const { profile } = db

  if (profile) {
    return res.json(profile)
  }
  return res.status(403).json({ message: "PROFILE REQUEST ERROR" })
})

server.use(router)
server.listen(SERVER_PORT, () => {
  const list = Object.keys(SERVER_HANDLERS).map(hand => {
    return `${hand} \n`
  })
  console.log(`server is running on port ${SERVER_PORT}`)
  console.log(`handlers list: \n ${list}`)
})
