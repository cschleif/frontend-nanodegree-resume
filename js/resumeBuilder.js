
var name = "Cody Schleif"
var formattedName = HTMLheaderName.replace("%data%", name);
$("#header").prepend(formattedName);

var role = "Web Developer"
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").append(formattedRole);


var bio = {
    "name": "Cody Schleif",
    "role": "Web Developer",
    "contacts": {
      "mobile": "949-606-4050",
      "email": "cschleif@gmail.com",
      "github": "cschleif",
      "location": "Los Angeles"
    },
    "welcomeMessage": "lorem ipsum dolor sit amet etc etc etc.",
    "skills": [
      "html", "css", "javascript"
    ],
    "bioPic": "images/fry.jpg"

    if(bio.skills.length > 0) {

  $("#header").append(HTMLskillsStart);

  var formattedSkill = HTMLskills.replace("
    %data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("
    %data%", bio.skills[1]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("
    %data", bio.skills[2]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("
    %data%", bio.skills[3]);
 }
}


var education = {
  "schools": [
  {
      "name": "California State University Fullerton",
      "location": "Fullerton, CA",
      "degree": "Bachelors",
      "majors": ["American Studies"],
      "dates": 2012,
      "url": "http://example.com"
    }
  ],

  "onlineCourses": [
  {
      "title": "Front-end Web Developer Nanodegree",
      "school": "Udacity",
      "dates": 2016,
      "url": "http://www.udacity.com/courses"
    }
  ]
}

var work = {
  "jobs": [
  {
    "employer": "Matheson",
    "title": "Account Manager",
    "dates": "November 2013 - Janurary 2016",
    "description": "Managed Cryogenic sales within the Southern California region."
  },
  {
    "employer": "W.W Grainger",
    "tittle": "Territory Sales Representitive",
    "dates": "May 2012 - November 2013",
    "description": "Sold MRO within the Los Angeles area."
    }
  ]

  for (job in work.jobs){
  $("#workExperience").append(HTMLworkStart);

  var formattedEmployer = HTMLworkEmployer.replace
    ("%data%", work.jobs[job].employer);
  var formattedTitle = HTMLworkTitle.replace
  ("%data%", work.jobs[job].title);
  var formattedEmployerTitle = formattedEmployer + formattedTitle;

  $(".work-entry:last").append(
    formattedEmployerTitle);
  }
}

var projects = {
  "projects": [
  {
    "title": "Sample Project 1",
    "dates": "2016",
    "description": "Sample project description.",
    "images": [
      "http://sampleproject1.com",
      "http://sampleproject2.com"
      ]
    }
  ]
}







