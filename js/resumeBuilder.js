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
 	"bioPic" : "images/fry.jpg"
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
 		"location" : "Ludhaiana",
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
     	"decription" : "It's my first project made by me using front end developping coding . These project is made with only html and css. These tribute  Page is of Narendra Damodardas Modi",
        "images" : "images/tribute-page.jpg"
     }
 	]
 }
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

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
  for (key in work.jobs){
  	$("#workExperience").append(HTMLworkStart);
  	var jobEmploy = HTMLworkEmployer.replace("%data%",work.jobs[key].employer);
    var jobTitle = HTMLworkTitle.replace("%data%",work.jobs[key].title);
    $(".work-entry:last").append(jobEmploy+jobTitle);
  }
