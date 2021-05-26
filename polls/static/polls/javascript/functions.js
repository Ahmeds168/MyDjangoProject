




function getDetails(id){

   
  
    $.ajax({url:"/"+id,async:false,success:function(result){ document.getElementById('details').innerHTML=result;}, error: function(result,exception){alert("failure");} });
}
function vote(id){
    var option;
    // find which radion is checked and get its value
if( document.getElementById("choice1").checked)
option=document.getElementById("choice1").value;
else if( document.getElementById("choice2").checked)
option=document.getElementById("choice2").value;
else if( document.getElementById("choice3").checked)
option=document.getElementById("choice3").value;
else if( document.getElementById("choice4").checked)
option=document.getElementById("choice4").value;


$.ajax({url:id+"/"+option+"/option",async:false,success:function(result){ document.getElementById('details').innerHTML=result;}, error: function(result,exception){alert("failure");} });
}


//{% url 'polls:detail' question.id %}