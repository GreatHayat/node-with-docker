const express = require("express");
const router = express.Router();
const models = require("../models");

const { User } = models;

router.get("/", async (req, res) => {
  const users = await User.findAll();
  res.send(users);
});

router.get("/:id", async (req, res) => {
  const user = await User.findOne({ where: { id: req.params.id } });
  if (!user) {
    return res.status(404).send({ message: "User not found with given ID" });
  }
  res.status(200).send(user);
});

router.post("/", async (req, res) => {
  const user = await User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    is_active: req.body.is_active,
  });
  res.send(user);
});

router.put("/:id", async (req, res) => {
  let user = await User.findByPk(req.params.id);
  if (!user) {
    return res.status(404).send({ message: "User not found with given ID" });
  }

  try {
    user = await User.update(
      {
        username: req.body.username,
        email: req.body.email,
        //   password: req.body.password, // this field will not be updated
      },
      {
        fields: ["username", "email"],
        returning: ["username", "email"],
        where: { id: req.params.id },
      }
    );

    res.status(200).send(user);
  } catch (error) {
    console.log("Error", error);
  }
});

router.delete("/:id", async (req, res) => {
  await User.destroy({ where: { id: req.params.id } });
  res.status(200).send({ message: "User Removed Successfully" });
});

module.exports = router;
