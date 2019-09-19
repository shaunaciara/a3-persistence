window.onload = function() {


let cont = []

$('#submitform').submit(function(e) {
    e.preventDefault();
    var fName = $('input#fName').val();
    var lName = $('input#lName').val();
    var phone = $('input#phone').val();
    var email = $('script#email').val();
    $.post('/contacts?' + $.param({fName:fName, lName:lName, phone:phone, email:email}), function() {
      $.get('/contacts', function(contacts) {    
      cont = Object.values(contacts)
      console.log(contacts)
        
     
        
        
      let tb = "<table border = '3'"
        tb+= "<tr>"
        tb+="<td> First Name</td>"
        tb+="<td> Last Name</td>"
        tb+="<td> Phone Number</td>"
        tb+="<td> Modify</td>"
        tb+="</tr>"
        let j = 0
        cont.forEach(function(cont) {
          if(email === cont[4]){
            tb+= "<tr>"
            tb+="<td>"+cont[0]+"</td>"
            tb+="<td>"+cont[1]+"</td>"
            tb+="<td>"+cont[2]+"</td>"
            tb+='<td><button style="background-color:grey;color:white;" id="' + j + '" onclick="edit(' + j + ')"> Edit </button></td>\n'
            tb+="</tr>"
            j++
        
        
          }
        });
                     
        tb+="</table>"
        document.getElementById('table').innerHTML = tb
        
      $('input#fName').val('');
      $('input#lName').val('');
      $('input#phone').val('');
      $('input').focus();

    });
  });
})
}

let conts = []
const edit = function(index){
  console.log(index)
  $.get('/contacts', function(contacts) { 
  conts = Object.values(contacts)
  console.log(conts)
     let j = 0
    var email = $('script#email').val();
      let tb = "<table border = '3'"
        tb+= "<tr>"
        tb+="<td> First Name</td>"
        tb+="<td> Last Name</td>"
        tb+="<td> Phone Number</td>"
        tb+="<td> Modify</td>"
        tb+="</tr>"
    
        conts.forEach(function(conts) {
          if(email === conts[4]){
            if(j == index){
               tb+= "<tr>"
              tb+="<td>"+conts[0]+"</td>"
              tb+="<td>"+conts[1]+"</td>"
              tb+="<td>"+conts[2]+"</td>"
              tb+='<td><button style="background-color:grey;color:white;" id="' + j + '" onclick="update(' + j + ')"> Update </button></td>\n'
              tb+="</tr>"
              j++
            }
            else {
               tb+= "<tr>"
              tb+="<td>"+conts[0]+"</td>"
              tb+="<td>"+conts[1]+"</td>"
              tb+="<td>"+conts[2]+"</td>"
              tb+='<td><button style="background-color:grey;color:white;" id="' + j + '" onclick="edit(' + j + ')"> Edit </button></td>\n'
              tb+="</tr>"
              j++
            }
          }
        })
        tb+="</table>"
        document.getElementById('table').innerHTML = tb
        
  })
}

let contss = []
const update = function(index){
  console.log(index)
  $.get('/contacts', function(contacts) { 
  contss = Object.values(contacts)
  console.log(contss)
     let j = 0
    var email = $('script#email').val();
      let tb = "<table border = '3'"
        tb+= "<tr>"
        tb+="<td> First Name</td>"
        tb+="<td> Last Name</td>"
        tb+="<td> Phone Number</td>"
        tb+="<td> Modify</td>"
        tb+="</tr>"
    
        contss.forEach(function(contss) {
          if(email === contss[4]){
            if(j == index){
               tb+= "<tr>"
              tb+="<td>"+contss[0]+"</td>"
              tb+="<td>"+contss[1]+"</td>"
              tb+="<td>"+contss[2]+"</td>"
              tb+='<td><button style="background-color:grey;color:white;" id="' + j + '" onclick="edit(' + j + ')"> edit </button></td>\n'
              tb+="</tr>"
              j++
            }
            else {
               tb+= "<tr>"
              tb+="<td>"+contss[0]+"</td>"
              tb+="<td>"+contss[1]+"</td>"
              tb+="<td>"+contss[2]+"</td>"
              tb+='<td><button style="background-color:grey;color:white;" id="' + j + '" onclick="edit(' + j + ')"> edit </button></td>\n'
              tb+="</tr>"
              j++
            }
          }
        })
        tb+="</table>"
        document.getElementById('table').innerHTML = tb
        
  })
}