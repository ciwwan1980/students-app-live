const express = require("express");
const router = express.Router();

const validate = require('./validation')

let students = [
  {
    name: "Rupert",
    lastname: "Jalili",
    age: 30,
    class: "FBW101",
    location: "BER"
  }, 
   {
    name: "Ajil",
    lastname: "Kado",
    age: 39,
    class: "FBW101",
    location: "BER"
  }
];

// - GET (all, individual)
router.get("/", (req, res) => {
  res.status(200).json(students);
});

router.get("/:name", (req, res) => {
  const student = students.find(
    ({ name }) => name.toLowerCase() === req.params.name.toLowerCase()
  );

  if (student) {
    return res.status(200).json(student);
  }

  res.status(404).json({ error: "Student not found" });
});

// - PUT (individual)
router.put("/:name", validate,(req, res) => {
  if (req.params.name && req.body) {
    students = students.map(student => {
      if (student.name.toLowerCase() === req.params.name.toLowerCase()) {
        Object.assign(student, req.body);
      }

      return student;
    });
  }
  res.send(students);
});

// - DELETE (individual)
router.delete("/:name", (req, res) => {
  if (req.params.name) {
    students = students.filter(
      ({ name }) => name.toLowerCase() !== req.params.name.toLowerCase()
    );
  }

  res.send(students);
});
// - POST (individual)
router.post("/", validate,(req, res) => {
  if (req.body) {
    students.push(req.body);
    return res.send({
      status: "success",
      message: `student with name: ${req.body.name} added`
    });
  }

  res.send("NO!");
});

module.exports = router;
