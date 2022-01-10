const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults({
  static: './build'
});

const users = router.db.get("users");

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use((req, res, next) => {
  const login = req.body.login;
  const password = req.body.password;
  console.log(login);
  console.log(password);
  if (req.method === "POST" && req.url === "/auth") {
    const authUser = users
      .toJSON()
      .find((user) => user.login === login && user.password === password);
    if (authUser === undefined) {
      res.status(404).json({ error: "Неверный логин или пароль" });
    }
    res.json({ ...authUser, password: null });
  }
  next();
});

server.use(router);
server.listen(process.env.PORT || 3001, () => {
  console.log("JSON Server is running");
});
