var bio = {
    "name": "Cody Schleif",
    "role": "Front-end Developer",
    "contacts": {
      "mobile": "949-606-4050",
      "email": "cschleif@gmail.com",
      "github": "cschleif",
      "location": "Los Angeles, CA"
    },
    "welcomeMessage": "Welcome to my resume! Please feel free to contact me via telephone or email.",
    "skills": [
      "HTML",
      "CSS", "JS", "Bootstrap",
    ],
    "bioPic": "images/profile.jpg"
};

var education = {
  "schools": [
  {
      "name": "California State University Fullerton",
      "location": "Fullerton, CA",
      "degree": "Bachelors",
      "majors": ["Bachelor of Arts in American Studies"],
      "dates": 2012,
      "url": "https://www.fullerton.edu"
    }
  ],

  "onlineCourses": [
  {
      "title": "Front-end Web Developer Nanodegree",
      "school": "Udacity",
      "dates": 2016,
      "url": "http://www.udacity.com/courses"
    },
    {
      "title": "Ruby",
      "school": "Codeacademy",
      "dates": 2016,
      "url": "https://www.codecademy.com/learn/ruby",
    },
    {
      "title": "HTML & CSS",
      "school": "Codeacademy",
      "dates": 2015,
      "url": "https://www.codecademy.com/learn/web",
    }
  ]
};

var work = {
  "jobs": [
  {
    "employer": "Matheson",
    "title": "Account Manager",
    "location": "Irvine, CA",
    "dates": "November 2013 - Janurary 2016",
    "description": "Managed Cryogenic contract negotiations and sales within the Southern California region, with a focus on healthcare facilites."
  },
  {
    "employer": "W.W Grainger",
    "title": "Territory Sales Representitive",
    "location": "Los Angeles, CA",
    "dates": "May 2012 - November 2013",
    "description": "Sold Inventory Management solutions and MRO within the Los Angeles area with a focus on the aviation industry."
    }
  ]
};

var projects = {
  "projects": [
  {
    "title": "Sample Project 1",
    "dates": "2016",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero expedita molestias sequi doloribus corrupti eos, animi <br> id a officia possimus totam commodi mollitia sit, voluptate libero. Odio earum, ex temporibus.",
    "images": [
      "http://placekitten.com/200/150",
      ]
    }
  ]
};

bio.display = function() {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  var formattedPicture = HTMLbioPic.replace("%data%", bio.bioPic);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

  $("#header").append(formattedName + "<br>", formattedRole, formattedPicture + "<br>", formattedWelcome + "<br>",formattedGithub, formattedEmail, formattedMobile, formattedLocation);
  $("#footerContacts").append(formattedMobile, formattedEmail);

  if(bio.skills.length > 0) {

    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
  }

};

education.display = function() {

  for (var school = 0; school < education.schools.length; school++) {
    $("#education").append(HTMLschoolStart);

    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
    var formattedSchool = formattedSchoolName + formattedSchoolDegree + formattedSchoolLocation + formattedSchoolDates + formattedSchoolMajor;
    $(".education-entry:last").prepend(formattedSchool);
  }

  $("#education").append(HTMLonlineClasses);
  $("#education").append(HTMLschoolStart);
  for (var online = 0; online < education.onlineCourses.length; online++) {
    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
    var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);
    var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);
    var formattedOnline = formattedOnlineTitle + formattedOnlineSchool + formattedOnlineDates + formattedOnlineURL;
    $(".education-entry:last").append(formattedOnline);
  }
};

work.display = function() {

  for (var job = 0; job < work.jobs.length; job++) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    var formattedJob = formattedEmployer + formattedTitle + formattedLocation + formattedDates + formattedDescription;

    $(".work-entry:last").append(formattedJob);
    }
  };

// function inName(name) {
//   name = name.trim().split(" ");
//   console.log(name);
//   name[1] = name[1].toUpperCase();
//   name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

//   return name[0] +" "+ name[1]
// }

// $("#main").append(internationalizeButton);

projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);
    if (projects.projects[project].images.length > 0) {
      for (image in projects.projects[project].images)
      {
      var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
      $(".project-entry:last").append(formattedImage);
      }
    }
  }
};


education.display();

bio.display();

work.display();

projects.display();

$("#mapDiv").append(googleMap);

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});





