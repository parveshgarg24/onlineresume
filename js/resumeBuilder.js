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
 	"bioPic" : "images/myphoto.jpg"
 }

 var education = {
 	"schools" : [
 	{
 		"name": "Children's Valley Public School",
 		"city": "Ludhiana",
 		"degree": "Matric",
 		"major" : ["all subjects"],
 		"dates" : 2013,
 		"url" : "https://example.com"
 	},
 	{
 		"name": "Children's Valley Public School",
 		"city": "Ludhiana",
 		"degree": "senior secondary",
 		"major" : ["PCM"],
 		"dates" : 2015,
 		"url" : "https://example.com"
 	}
 	],
 	"onlineCourse" : [
 	{
 		"title":"Front end developer",
 		"school" : "Freecodecamp",
 		"dates": 2017,
 		"url" : "https://freecodecamp.com"
 	}   
 	]
 }

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
 }

 var projects = {
 	"projects": [
     {
     	"title": "tribute Page",
     	"dates": 2016,
     	"description" : "It's my first project made by me using front end developping coding . These project is made with only html and css. These tribute  Page is of Narendra Damodardas Modi",
        "images" : "images/tributepage.png"
     },
     {
     	"title" : "Digital Calculator",
     	"dates" : 2017,
     	"description" : "It is digital calculator. All keys and calculation are working properly. Its my best project in javascript.",
     	"images" : "images/calculator.png"
     }
 	]
 }
  
 bio.display = function(){
        $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
        $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
    	$("#topContacts").append(HTMLmobile.replace("%contact%","mobile").replace("%data%",bio.contacts.mobile));
    	$("#topContacts").append(HTMLemail.replace("%contact%","email").replace("%data%",bio.contacts.email));
    	$("#topContacts").append(HTMLgithub.replace("%contact%","github").replace("%data%",bio.contacts.github));
        $("#topContacts").append(HTMLtwitter.replace("%contact%","twitter").replace("%data%",bio.contacts.twitter));    	
    	$("#topContacts").append(HTMLlocation.replace("%contact%","location").replace("%data%",bio.contacts.location));
        $("#header").append(HTMLbioPic.replace("%data%",bio.bioPic));
        $("#header").append(HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage));

        if(bio.skills.length>0) {
            	$("#header").append(HTMLskillsStart);
             	$("#skills").append(HTMLskills.replace("%data%",bio.skills[0]));
             	$("#skills").append(HTMLskills.replace("%data%",bio.skills[1]));
             	$("#skills").append(HTMLskills.replace("%data%",bio.skills[2]));
             	$("#skills").append(HTMLskills.replace("%data%",bio.skills[3]));
             }
  }

work.display =function(){

  for (key in work.jobs){
  	$("#workExperience").append(HTMLworkStart);
    $(".work-entry:last").append(HTMLworkEmployer.replace("%data%",work.jobs[key].employer)+HTMLworkTitle.replace("%data%",work.jobs[key].title));
    $(".work-entry:last").append(HTMLworkDates.replace("%data%",work.jobs[key].dates));
    $(".work-entry:last").append(HTMLworkLocation.replace("%data%",work.jobs[key].location));
    $(".work-entry:last").append(HTMLworkDescription.replace("%data",work.jobs[key].description));

  }

}

// $(document).click(function(loc){
// 	var x = loc.pageX;
// 	var y = loc.pageY;
// 	logClicks(x,y);
// });

projects.display = function(){
	for(key in projects.projects){
		$("#projects").append(HTMLprojectStart);
	    $(".project-entry:last").append(HTMLprojectTitle.replace("%data%",projects.projects[key]["title"]));
	    $(".project-entry:last").append(HTMLprojectDates.replace("%data%",projects.projects[key]["dates"]));
	    $(".project-entry:last").append(HTMLprojectDescription.replace("%data%",projects.projects[key]["description"]));
	    $(".project-entry:last").append(HTMLprojectImage.replace("%data%",projects.projects[key]["images"]));
	  }
}

education.display = function(){
    for(school in education.schools){
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(HTMLschoolName.replace("%data%",education.schools[school].name)+HTMLschoolDegree.replace("%data%",education.schools[school].degree));
        $(".education-entry:last").append(HTMLschoolDates.replace("%data%",education.schools[school].dates));
        $(".education-entry:last").append(HTMLschoolLocation.replace("%data%",education.schools[school].city));
        $(".education-entry:last").append(HTMLschoolMajor.replace("%data%",education.schools[school].major));
    }  
    $("#education").append(HTMLonlineClasses);
    for(course in education.onlineCourse){

        $("#education").append(HTMLonlineTitle.replace("%data%",education.onlineCourse[course].title)+HTMLonlineSchool.replace("%data%",education.onlineCourse[course].school));
        $("#education").append(HTMLonlineDates.replace("%data%",education.onlineCourse[course].dates));
        $("#education").append(HTMLonlineURL.replace("%data%",education.onlineCourse[course].url));

    }
}

bio.display();
work.display();
projects.display();
education.display();

$("mapDiv").append(googleMap);

