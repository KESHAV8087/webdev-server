let todos = [
  { id: 1, title: "Task 1", description: "Create a NodeJS server", completed: false },
  { id: 2, title: "Task 2", description: "Add path parameters", completed: true },
  { id: 3, title: "Task 3", description: "Add query parameters", completed: false },
  { id: 4, title: "Task 4", description: "Deploy to Render", completed: true },
];

export default function WorkingWithArrays(app) {
  app.get("/lab5/todos", (req, res) => {
    const { completed } = req.query;
    if (completed !== undefined) {
      const completedBool = completed === "true";
      res.json(todos.filter((t) => t.completed === completedBool));
      return;
    }
    res.json(todos);
  });

  app.get("/lab5/todos/create", (req, res) => {
    const newTodo = {
      id: new Date().getTime(),
      title: "New Task",
      description: "",
      completed: false,
    };
    todos.push(newTodo);
    res.json(todos);
  });

  app.get("/lab5/todos/:id", (req, res) => {
    const { id } = req.params;
    const todo = todos.find((t) => t.id === parseInt(id));
    if (!todo) {
      res.status(404).json({ message: `Todo with ID ${id} not found` });
      return;
    }
    res.json(todo);
  });

  app.get("/lab5/todos/:id/delete", (req, res) => {
    const { id } = req.params;
    todos = todos.filter((t) => t.id !== parseInt(id));
    res.json(todos);
  });

  app.get("/lab5/todos/:id/title/:title", (req, res) => {
    const { id, title } = req.params;
    todos = todos.map((t) => (t.id === parseInt(id) ? { ...t, title } : t));
    res.json(todos);
  });

  app.get("/lab5/todos/:id/completed/:completed", (req, res) => {
    const { id, completed } = req.params;
    todos = todos.map((t) =>
      t.id === parseInt(id) ? { ...t, completed: completed === "true" } : t
    );
    res.json(todos);
  });

  app.get("/lab5/todos/:id/description/:description", (req, res) => {
    const { id, description } = req.params;
    todos = todos.map((t) => (t.id === parseInt(id) ? { ...t, description } : t));
    res.json(todos);
  });
}
