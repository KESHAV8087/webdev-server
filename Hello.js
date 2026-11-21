export default function Hello(app) {
  app.get("/", (req, res) => {
    res.send("Welcome to the Kambaz Node server by Keshav Adkar");
  });
  app.get("/hello", (req, res) => {
    res.send("Life is good!");
  });
}
