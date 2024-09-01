const Router = require("express");

const authRouter = Router();

// authRouter.get("/hello", (_req, res) => {
//   res.send("hello");
// });
authRouter.post("/register", (req, res) => {
    console.log(req.body)
    res.send("hel");
  });

module.exports = authRouter;
