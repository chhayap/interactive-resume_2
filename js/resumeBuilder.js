var bio = {
	"name" : "Chhaya Paryani",
	"role" : "Web Developer",
	"contacts" : { 
		"mobile" : "123-456-7890",
		"email" : "chhaya@example.com",
		"github" : "chhayap",
		"twitter" : "chhaya",
		"location": "San Diego"
	},
	"welcomeMsg" : "Welcome to my website!",
	"skills" : ["Programmer", "Designer", "Engineer"],
	"bioPic" : "images/me.jpg",
	"display": function() {
		var formattedName = HTMLheaderName.replace("%data%" , bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%" , bio.role);
		var formattedBioPic = HTMLbioPic.replace("%data%" , bio.bioPic);
		var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%" , bio.welcomeMsg);

		// Insert Head -> Top Contacts info
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		$("#header").append(formattedBioPic);
		$("#header").append(formattedWelcomeMsg);

		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

		$("#topContacts").append(formattedMobile)
			.append(formattedEmail)
			.append(formattedTwitter)
			.append(formattedGithub)
			.append(formattedLocation);

		//Insert Head -> Skills info
		if (bio.skills.length != 0) {
			$ ("#header").append(HTMLskillsStart);
			for (var i = 0; i < bio.skills.length; i++) {
				var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
	
				$("#skills").append(formattedSkill);
			}
		}

		$("#footerContacts").append(formattedMobile)
			.append(formattedEmail)
			.append(formattedGithub)
			.append(formattedLocation); 
	}
};


var education = {
	"schools" : [
	{
		"name" : "J M Patel College",
		"location" : "Bhandara",
		"degree" : "BSc",
		"dates" : "1993-1995",
		"major" : ["CompSci"],
		"url" : "http://example.com"
	},
	{
		"name" : "Patel School of Mgmt",
		"location" : "Bhandara",
		"degree" : "Diploma",
		"dates" : "1996",
		"major" : "Buisness Mgmt",
		"url" : "http://example.com"
	}
	], 
	"onlineCourses" : [
	{
		"title" : "Front-end Nanodegree",
		"school": "Udacity",
		"dates": "2015",
		"url": "http://www.udacity.com/course"
	}
	],
	"display": function(){
		for (var school in this.schools){
			$("#education").append(HTMLschoolStart);
			var formattedschoolName = HTMLschoolName.replace("%data%", this.schools[school].name);
			var formattedSchoolCity = HTMLschoolLocation.replace("%data%", this.schools[school].location);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", this.schools[school].degree);
			var formattedSchoolDate = HTMLschoolDates.replace("%data%", this.schools[school].dates);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", this.schools[school].major);
			
			var lastEducationEntry = $(".education-entry:last");
			lastEducationEntry.append(formattedschoolName + formattedSchoolDegree)
				.append(formattedSchoolDate)
				.append(formattedSchoolCity)
				.append(formattedSchoolMajor)
			 
		}
		$("#education").append(HTMLonlineClasses);
		for (var onlineCourse in this.onlineCourses){
			$("#education").append(HTMLschoolStart);
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", this.onlineCourses[onlineCourse].title);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", this.onlineCourses[onlineCourse].school);
			var formattedOnlineDates = HTMLonlineDates.replace("%data%", this.onlineCourses[onlineCourse].dates);
			var formattedOnlineURL = HTMLonlineURL.replace("%data%", this.onlineCourses[onlineCourse].url);

			var lastEducationEntry = $(".education-entry:last");
			lastEducationEntry.append(formattedOnlineTitle)
							.append(formattedOnlineSchool)
							.append(formattedOnlineDates)
							.append(formattedOnlineURL);
		}
	}	
};



var work = {
	"jobs" : [{
		"employer": "Intuit",
		"title": "Web Developer",
		"dates" : "2016",
		"location": "San Diego, CA",
		"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat tempora repudiandae ad dolor cumque aliquid quaerat voluptatibus illum cum alias eius ab, quasi iste amet a dicta nam? Facilis, possimus."
	},
	{
		"employer": "Intel",
		"title": "Engineer",
		"dates": "2014",
		"location": "Santa Clara, CA",
		"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat tempora repudiandae ad dolor cumque aliquid quaerat voluptatibus illum cum alias eius ab, quasi iste amet a dicta nam? Facilis, possimus."
	}],
	"display": function() {
		for (var job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

			var lastWorkEntry = $(".work-entry:last");
			lastWorkEntry.append(formattedEmployer + formattedTitle)
				.append(formattedDates)
				.append(formattedLocation)
				.append(formattedDescription);
		}
	}
};

var projects = {
	"projects" : [
	{
		"title": "Sample Project 1",
		"date": "2015",
		"description": "aaaaa bbbbb ccccc dddd"
	}, 
	{
		"title": "Sample Project 2",
		"date": "2015",
		"description": "aaaa,bbbbb,ccccc,dddd"
	}
  ],

  "display": function(){
	for (var project in this.projects) {
			$("#projects").append(HTMLprojectStart);
			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", this.projects[project].title);
			var formattedProjectDate = HTMLprojectDates.replace("%data%", this.projects[project].date);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", this.projects[project].description);
			var lastProjectEntry = $(".project-entry:last");
			lastProjectEntry.append(formattedProjectTitle)
				.append(formattedProjectDate)
				.append(formattedProjectDescription);

		}
	}
};
// Insert Bio info.
bio.display();

// Insert WorkExperience
work.display();

// Insert Projects
projects.display();

// Insert Education
education.display();

//Insert InternationalizeButton
$("#main").append(internationalizeButton);


// Insert GOOGLE MAP
$("#mapDiv").append(googleMap);