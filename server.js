const jsonServer = require('json-server');
const cors = require('cors');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 3000;

server.use(cors());
server.use(middlewares);
server.use(jsonServer.bodyParser);

// Mapeo opcional para auth si usas sign-in / sign-up
server.post('/authentication/sign-in', (req, res) => {
  res.jsonp({ token: "mock-jwt-token", user: { id: 1, email: req.body.email } });
});

server.post('/authentication/sign-up', (req, res) => {
  res.status(201).jsonp({ message: "User registered successfully" });
});

server.use(router);

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
