/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var bio = {
 	"name" : "Parvesh Garg",
 	"role" : "Web developer",
 	"contacts" : {
 		"mobile" : "978-052-6957",
 		"email" : "parveshgarg24@gmail.com",
 		"github" : "Parvesh garg",
        "twitter" : "@parvesh",
 		"location" : "Punjab"
 	},
 	"welcomeMessage" : "lorem ipsum dolor sit amet etc etc",
 	"skills" : ["awesomeness","algorithemic mind","delivering thing","adeptive"],
 	"biopic" : "images/myphoto.jpg"
 };

 var education = {
 	"schools" : [
 	{
 		"name": "Children's Valley Public School",
 		"location": "Ludhiana",
 		"degree": "Matric",
 		"majors" : ["all subjects"],
 		"dates" : "2013",
 		"url" : "https://example.com"
 	},
 	{
 		"name": "Children's Valley Public School",
 		"location": "Ludhiana",
 		"degree": "senior secondary",
 		"majors" : ["PCM"],
 		"dates" : "2015",
 		"url" : "https://example.com"
 	}
 	],
 	"onlineCourses" : [
 	{
 		"title":"Front end developer",
 		"school" : "Freecodecamp",
 		"dates": "2017",
 		"url" : "https://freecodecamp.com"
 	}   
 	]
 };

 var work = {
 	"jobs" : [
 	{
 		"employer" : "Software-designer",
 		"title" : "Computer-boy",
 		"location" : "Ludhiana",
 		"dates" : "in future" ,
 		"description" : "Now,i did not have any work workExperience so i made it have to enter some entry in online resume  page. Just for funnnnnnnnnnnnn."	
 	}
 	]
 };

 var projects = {
 	"projects": [
     {
     	"title": "tribute Page",
     	"dates": "2016",
     	"description" : "It's my first project made by me using front end developping coding . These project is made with only html and css. These tribute  Page is of Narendra Damodardas Modi",
        "images" : ["images/tributepage.png"],
        "url" :["https://codepen.io/parveshgarg/full/RKMmqo/"]
     },
     {
     	"title" : "Digital Calculator",
     	"dates" : "2017",
     	"description" : "It is digital calculator. All keys and calculation are working properly. Its my best project in javascript.",
     	"images" : ["images/calculator.png"],
        "url" : "https://codepen.io/parveshgarg/full/JNeaya/"
     }
 	]
 };
  
 bio.display = function(){
        $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
        $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
    	$("#topContacts").append(HTMLmobile.replace("%contact%","mobile").replace("%data%",bio.contacts.mobile));
    	$("#topContacts").append(HTMLemail.replace("%contact%","email").replace("%data%",bio.contacts.email));
    	$("#topContacts").append(HTMLgithub.replace("%contact%","github").replace("%data%",bio.contacts.github));
        $("#topContacts").append(HTMLtwitter.replace("%contact%","twitter").replace("%data%",bio.contacts.twitter));    	
    	$("#topContacts").append(HTMLlocation.replace("%contact%","location").replace("%data%",bio.contacts.location));
        $("#header").append(HTMLbioPic.replace("%data%",bio.biopic));
        $("#header").append(HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage));

        if(bio.skills.length>0) {
            $("#header").append(HTMLskillsStart);
            bio.skills.forEach(function(skill){
                $("#skills").append(HTMLskills.replace("%data%",skill));
            });
        $("#footerContacts").append(HTMLmobile.replace("%contact%","mobile").replace("%data%",bio.contacts.mobile));
        $("#footerContacts").append(HTMLemail.replace("%contact%","email").replace("%data%",bio.contacts.email));
        $("#footerContacts").append(HTMLgithub.replace("%contact%","github").replace("%data%",bio.contacts.github));
        $("#footerContacts").append(HTMLtwitter.replace("%contact%","twitter").replace("%data%",bio.contacts.twitter));        
        $("#footerContacts").append(HTMLlocation.replace("%contact%","location").replace("%data%",bio.contacts.location));
             }
  };

work.display =function(){

  work.jobs.forEach(function(job){
  	$("#workExperience").append(HTMLworkStart);
    $(".work-entry:last").append(HTMLworkEmployer.replace("%data%",job.employer)+HTMLworkTitle.replace("%data%",job.title));
    $(".work-entry:last").append(HTMLworkDates.replace("%data%",job.dates));
    $(".work-entry:last").append(HTMLworkLocation.replace("%data%",job.location));
    $(".work-entry:last").append(HTMLworkDescription.replace("%data",job.description));

  });

};

projects.display = function(){
	projects.projects.forEach(function(project){
		$("#projects").append(HTMLprojectStart);
	    $(".project-entry:last").append(HTMLprojectTitle.replace("%data%",project.title));
	    $(".project-entry:last").append(HTMLprojectDates.replace("%data%",project.dates));
	    $(".project-entry:last").append(HTMLprojectDescription.replace("%data%",project.description));
	    $(".project-entry:last").append(HTMLprojectImage.replace("%data%",project.images).replace("#",project.url));
	  });
};

education.display = function(){
    education.schools.forEach(function(school){
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(HTMLschoolName.replace("%data%",school.name)+HTMLschoolDegree.replace("%data%",school.degree));
        $(".education-entry:last").append(HTMLschoolDates.replace("%data%",school.dates));
        $(".education-entry:last").append(HTMLschoolLocation.replace("%data%",school.location));
        $(".education-entry:last").append(HTMLschoolMajor.replace("%data%",school.majors));
    });  
    $("#education").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(course){
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(HTMLonlineTitle.replace("%data%",course.title)+HTMLonlineSchool.replace("%data%",course.school));
        $(".education-entry:last").append(HTMLonlineDates.replace("%data%",course.dates));
        $(".education-entry:last").append(HTMLonlineURL.replace("%data%",course.url));
    });
};




bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);



$("projects img:first").click(function(){
    window.location = 'https://codepen.io/parveshgarg/full/RKMmqo/';
});
