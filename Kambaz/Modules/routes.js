import db from "../Database/index.js";

export default function ModuleRoutes(app) {
  app.get("/api/courses/:courseId/modules", (req, res) => {
    const { courseId } = req.params;
    const modules = db.modules.filter((m) => m.course === courseId);
    res.json(modules);
  });
}
