//Disapearing scrolll navbar
var lastScroll = window.pageYOffset
window.onscroll = function(){
    var thisScroll = window.pageYOffset
    if(lastScroll > thisScroll){
        document.getElementById("navbar").style.top = "0"
    }else{
        document.getElementById("navbar").style.top = "-80px"
    }
    lastScroll = thisScroll
}

//about change screen section
$('#introduction, #skills, #education, #certifications, #hobbies').click(function(){
    clearPreviousSelection()
    console.log(this.id)
    $('#' + this.id).css("background-color", "black")
    $('#' + this.id).css("color", "#D3A6A4")
    $('#' + this.id + "-content").css("display", "block")
})

function clearPreviousSelection(){
    $("#introduction, #skills, #education, #certifications, #hobbies").css("background-color", "#D3A6A4")
    $("#introduction, #skills, #education, #certifications, #hobbies").css("color", "black")

    $("#introduction-content").css("display", "none")
    $("#skills-content").css("display", "none")
    $("#education-content").css("display", "none")
    $("#certifications-content").css("display", "none")
    $("#hobbies-content").css("display", "none")
}

//project hover to see text
$("#project1, #project2, #project3, #project4, #project5, #project6, #project7, #project8, #project9, #project10, #project11").hover(function(){
    $('#' + this.id + 'text').css("display", "block")
    }, function(){
    $('#' + this.id + 'text').css("display", "none")
})

//switch to project page
/* $('#project1, #project2, #project3, #project4, #project5, #project6, #project7, #project8, #project9, #project10, #project11').click(function(){
    console.log(this.id)
    $('#content').css("display", "none")
    $('#' + this.id + "content").css("display", "block")
}) */

//switch back to the main page 
/* $('#aboutLink, #projectsLink, #contantLink, #back').click(function(){
    $('#content').css("display", "block")
    $('#project1content').css("display", "none")
    $('#project2content').css("display", "none")
    $('#project3content').css("display", "none")
    $('#project4content').css("display", "none")
    $('#project5content').css("display", "none")
    $('#project6content').css("display", "none")
    $('#project7content').css("display", "none")
    $('#project8content').css("display", "none")
    $('#project9content').css("display", "none")
    $('#project10content').css("display", "none")
    $('#project11content').css("display", "none")
}) */

