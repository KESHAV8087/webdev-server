import db from "../Database/index.js";

export default function CourseRoutes(app) {
  app.get("/api/courses", (req, res) => {
    res.json(db.courses);
  });
  app.get("/api/courses/:courseId", (req, res) => {
    const { courseId } = req.params;
    const course = db.courses.find((c) => c._id === courseId);
    if (!course) {
      res.status(404).json({ message: `Course ${courseId} not found` });
      return;
    }
    res.json(course);
  });
}
