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
  }
])

db.Class.insertMany([
  {
    title: "CMSC 124",
    section: "U",
    posts: "ramarabe",
    teacher: "cssotelo",
    students: [],
  },
  {
    title: "CMSC 170 UV",
    section: "UV",
    posts: "xxx",
    teacher: "ainovejas",
    students: [],
  },
  {
    title: "CMSC 100 UV",
    section: "V",
    posts: "xxx",
    teacher: "ainovejas",
    students: [],
  }
])