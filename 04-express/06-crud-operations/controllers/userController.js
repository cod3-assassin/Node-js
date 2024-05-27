let users = [];

const createUser = (req, res, next) => {
  try {
    const user = req.body;
    if (!user.id || !user.name) {
      throw new Error("Invalid user data");
    }
    users.push(user);
    res.status(201).send("User created");
  } catch (err) {
    next(err);
  }
};

const getUsers = (req, res, next) => {
  try {
    res.json(users);
  } catch (err) {
    next(err);
  }
};

const getUserById = (req, res, next) => {
  try {
    const userId = req.params.id;
    const user = users.find((u) => u.id === userId);
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.json(user);
  } catch (err) {
    next(err);
  }
};

const updateUser = (req, res, next) => {
  try {
    const userId = req.params.id;
    const userIndex = users.findIndex((u) => u.id === userId);
    if (userIndex === -1) {
      return res.status(404).send("User not found");
    }
    if (!req.body.name) {
      throw new Error("Invalid user data");
    }
    users[userIndex] = { ...users[userIndex], ...req.body };
    res.send("User updated");
  } catch (err) {
    next(err);
  }
};

const deleteUser = (req, res, next) => {
  try {
    const userId = req.params.id;
    users = users.filter((u) => u.id !== userId);
    res.send("User deleted");
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};
