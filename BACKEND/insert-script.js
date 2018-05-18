db.User.insertMany([
  {
    email: "ramarabe@up.edu.ph",
    name: "Ross",
    username: "ramarabe",
    password: "ross",
    usertype: "Student",
  },
  {
    email: "mmmataya@up.edu.ph",
    name: "Mark",
    username: "mmmataya",
    password: "mark",
    usertype: "Student",
  },
  { 
    email: "ainovejas@up.edu.ph",
    name: "Alexis",
    username: "ainovejas",
    password: "alexis",
    usertype: "Teacher",
  },
  {
    email: "cssotelo@up.edu.ph",
    name: "CJ",
    username: "cssotelo",
    password: "cj",
    usertype: "Teacher",
  },
  {
    email: "arnado@up.edu.ph",
    name: "Arnado",
    username: "arnado",
    password: "arnado",
    usertype: "Teacher",
  }
]);

db.Class.insertMany([
  {
    title: "CMSC 124 U",
    teacher: "cssotelo",
    students: [],
  },
  {
    title: "CMSC 170 UV",
    teacher: "ainovejas",
    students: [],
  },
  {
    title: "CMSC 100 UV",
    teacher: "arnado",
    students: [],
  },
  {
    title: "MATH 28 UV",
    teacher: "ainovejas",
    students: [],
  },
  {
    title: "ENG 10 A",
    teacher: "cssotelo",
    students: [],
  },
  {
    title: "CMSC 19 U",
    teacher: "cssotelo",
    students: ["ramarabe"],
  },
  {
    title: "CMSC 170 WS",
    teacher: "ainovejas",
    students: ["ramarabe", "mmmataya"],
  }
])



db.Post.insertMany([
{
  author: "cssotelo",
  title: "Assignment 1",
  content: "Lorem ipsum olor",
  timestamp: "08-14-1999",
  class: "CMSC 124 U"
},
{
  author: "cssotelo",
  title: "Assignment 2",
  content: "Lorem ipsum olor",
  timestamp: "08-14-2000",
  class: "CMSC 124 U"
},
{
  author: "cssotelo",
  title: "Assignment 1",
  content: "Lorem ipsum olor",
  timestamp: "08-14-1999",
  class: "ENG 10 A"
},
{
  author: "arnado",
  title: "Assignment 1",
  content: "Lorem ipsum olor",
  timestamp: "08-14-1999",
  class: "CMSC 100 UV"
}
])