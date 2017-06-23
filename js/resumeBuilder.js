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
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

    	var contact = HTMLmobile.replace("%contact%","mobile");
    	contact = contact.replace("%data%",bio.contacts.mobile);
    	$("#topContacts").append(contact);
    	contact = HTMLemail.replace("%contact%","email");
    	contact = contact.replace("%data%",bio.contacts.email);
    	$("#topContacts").append(contact);
    	contact = HTMLgithub.replace("%contact%","github");
    	contact = contact.replace("%data%",bio.contacts.github);
    	$("#topContacts").append(contact);
    	contact = HTMLlocation.replace("%contact%","location");
    	contact = contact.replace("%data%",bio.contacts.location);
    	$("#topContacts").append(contact);
     var pic = HTMLbioPic.replace("%data%",bio.bioPic);
    $("#header").append(pic);
     var msg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
     $("#header").append(msg);

 if(bio.skills.length>0) {


 	$("#header").append(HTMLskillsStart);

 	var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
 	$("#skills").append(formattedSkill);
 	formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
 	$("#skills").append(formattedSkill);
 	formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
 	$("#skills").append(formattedSkill);
 	formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
 	$("#skills").append(formattedSkill);
 }

function displayWork(){
  for (key in work.jobs){
  	$("#workExperience").append(HTMLworkStart);
  	var jobEmploy = HTMLworkEmployer.replace("%data%",work.jobs[key].employer);
    var jobTitle = HTMLworkTitle.replace("%data%",work.jobs[key].title);
    $(".work-entry:last").append(jobEmploy+jobTitle);
    var val = HTMLworkDates.replace("%data%",work.jobs[key].dates);
    $(".work-entry:last").append(val);
    val = HTMLworkLocation.replace("%data%",work.jobs[key].location);
    $(".work-entry:last").append(val);
    val = HTMLworkDescription.replace("%data",work.jobs[key].description);
    $(".work-entry:last").append(val);

  }
}

displayWork();
$(document).click(function(loc){
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});
// $("#main").append(internationalizeButton);
// function inName(name){
// 	var arr=name.split(" ");
// 	arr[0]=arr[0].slice(0,1).toUpperCase()+arr[0].slice(1);
// 	arr[1]=arr[1].toUpperCase();
// 	return arr.join(" ");
// }

projects.display = function(){
	for(key in projects.projects){
		$("#projects").append(HTMLprojectStart);
	    var project_data = HTMLprojectTitle.replace("%data%",projects.projects[key]["title"]);
	    $(".project-entry:last").append(project_data);
	    project_data = HTMLprojectDates.replace("%data%",projects.projects[key]["dates"]);
	    $(".project-entry:last").append(project_data);
	    project_data = HTMLprojectDescription.replace("%data%",projects.projects[key]["description"]);
	    $(".project-entry:last").append(project_data);
	    project_data = HTMLprojectImage.replace("%data%",projects.projects[key]["images"]);
	    $(".project-entry:last").append(project_data);
	  }
}

education.display = function(){
    for(school in education.schools){
        $("#education").append(HTMLschoolStart);
        // var schoolData=HTMLschoolName.replace("%data%",education.schools[school].name)+HTMLschoolDegree.replace("%data%",education.schools[school].degree);
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

projects.display();
education.display();

