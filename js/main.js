
var temp = $("#template-1").html();
var template = Handlebars.compile(temp);

var data = {icon: "leaf", title: "About me", content: "I'm an enthusiastic person with the idea to create, invent and solve problems efficiently with elegance. It's awesome when we make the engineering walks with design in same line."};
var data2 = {icon:"cog", title: "Qualifications", content: "Over two years of experience in customer service and frequent function changes in business"}
var data3 = {icon: "education", title: "Education", content: "University: Universidade Paulista", content2: "Course: Computer Engeneering"}

$("#about").html(template(data));
$("#qualities").html(template(data2));
$("#education").html(template(data3));


var data4 = [{
	subTitle:"Intern in Avenue Code", 
	since:"Since 07/16", 
	taskTitle:"Job rotation, know and apply the knowledge of the following areas in internal projects:",
	mainlyTasks: ["Quality Assurance (QA)", "User Interface (UI)",".NET","Ruby"] 
	},

	{
	subTitle:"Adminitrative officer in Instituto de Assistencia Medica ao Servidor Publico Estadual (IAMSPE)", 
	since:"Since 03/13", 
	taskTitle:"Main responsibilities exercised in the pharmacy sector:",
	mainlyTasks: 
	["Assistance to deliverers and business representatives;", 
	"Medicines conference;",
	"Launches invoices systems (internal) control and payment;",
	"Completion of drug procurement processes;"] 
	}]

var temp2 = $("#template-2").html();
var template2 = Handlebars.compile(temp2);
$("#experiences").html(template2(data4));
	
var dataSkills = [
	{value:"30", skillName:"C++"}, 
	{value:"30", skillName:"Agile Scrum"},
	{value:"30", skillName:"C#"}, 
	{value:"30", skillName:"ASP.NET"}, 
	{value:"30", skillName:"HTML"}, 
	{value:"20", skillName:"CSS"},
	{value:"20", skillName:"JavaScript"}, 
];



/*template skills*/
var temp3 = $("#template-3").html();
var template3 = Handlebars.compile(temp3);
$("#skills-replace").html(template3(dataSkills));




// $(document).ready(function(){
//     var interval = 2, //How much to increase the progressbar per frame
//         updatesPerSecond = 1000/60, //Set the nr of updates per second (fps)
//         progress =  $(),
//         animator = function(){
//             progress.val(progress.val()+interval);
//             $('#val').text(progress.val());
//             if ( progress.val()+interval < progress.attr('max')){
//                setTimeout(animator, updatesPerSecond);
//             } else { 
//                 $('#val').text('Done');
//                 progress.val(progress.attr('max'));
//             }
//         }
    
//     setTimeout(animator, updatesPerSecond);
// });



// $(document).ready(function(){
// 	if($(".progress-bar").css("width") < $(".progress-bar").attr("aria-valuenow")) {
// 		setTimeout(animator, 1000/60);
// 	}
// 	$(".progress-bar").each(function(i,e){
// 		var max = $(e).attr("aria-valuenow");
// 		for (x=1; x <= max; x++) {
// 			setInterval();
// 			$(e).css("width", x+"%");
// 		}
// 	});
// })

for (skill in dataSkills){}
$(document).ready(function(){
	console.log($("#myBar").get(0))
	function move(element) {
	  
	  var width = 1;
	  var id = setInterval(frame, 10);
	  function frame() {
	    if (width >= 100) {
	      clearInterval(id);
	    } 
	    else {
	      width++;
	      element.style.width = width + '%';
	    }
	  }
	}
	move($("#myBar").get(0));
})

