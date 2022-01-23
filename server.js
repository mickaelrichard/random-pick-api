const cors = require("cors");
const app = require("express")();
app.use(cors());

//routes
app.get("/", (req, res) => {
  const choices = ["rock", "paper", "scissors"];
  computer = choices[Math.floor(Math.random() * 3)];

  res.status(200).json({
    status: "success",
    data: {
      computer,
    },
  });
});

//not found
app.get("*", (req, res) => {
  res.status(404).send("Route does not exist");
});

//server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
