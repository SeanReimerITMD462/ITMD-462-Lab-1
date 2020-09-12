// Creating an object of arrays for the courses.  Instance variables of the course category, course number, and course name are created.
let courses = [
  {
    // Adding bold tags to the instances due to not knowing where you wanted us to bold the course category + number
    courseCategory : "<b>ITMS</b>",
    courseNumber : "<b>448</b>",
    courseName : "Cyber Security Technologies",

    // Each object in the array has a function that utilizes the "this" keyword in order to concatenate the parts of each object in the array. 
    fullInfo : function(){
      return this.courseCategory + "-" + this.courseNumber + " " + this.courseName;
    }
  },
  {
    courseCategory : "<b>IPRO</b>",
    courseNumber : "<b>497</b>",
    courseName : "Digital Service Design 2",
    fullInfo : function(){
      return this.courseCategory + "-" + this.courseNumber + " " + this.courseName;
    }
  },
  {
    courseCategory : "<b>ITMD</b>",
    courseNumber : "<b>362</b>",
    courseName : "Human-Computer Interaction",
    fullInfo : function(){
      return this.courseCategory + "-" + this.courseNumber + " " + this.courseName;
    }
  },
  {
    courseCategory : "<b>ITMD</b>",
    courseNumber : "<b>469</b>",
    courseName : "Web Real-Time Communications",
    fullInfo : function(){
      return this.courseCategory + "-" + this.courseNumber + " " + this.courseName;
    }
  },
  {
    courseCategory : "<b>ITMD</b>",
    courseNumber : "<b>462</b>",
    courseName : "Web Site App Development",
    fullInfo : function(){
      return this.courseCategory + "-" + this.courseNumber + " " + this.courseName;
    }
  },
]

// Print the course concatenations to the console and to the HTML file. 
for (var i = 0; i < courses.length; i++)
{
  document.write("Course " + (i + 1) + " is: " + courses[i].fullInfo() + "<br / >");

  console.log( courses[i].fullInfo());
}