var table=document.getElementById("table")
    var table1=document.getElementById("table1")
    var inpu=document.getElementById("name")
    var age=document.getElementById("age")
    var gender=document.getElementsByName("Gender")
    var Course=document.getElementById("Course")
    var email=document.getElementById("email")
    var save=document.getElementById("save") 
    
    save.addEventListener("click",function(){
        var tr1=document.createElement("tr")
        tr1.setAttribute("class","tr1")
        tr1.innerHTML=`<td>${inpu.value}</td>
            <td>${age.value}</td>
            <td >${gender.value}</td>
            <td>${Course.value}</td>
            <td>${email.value}</td>
            <td><button onclick="Delete(event)">Delete</button></td>`
            table1.append(tr1)
    })
    
    function Delete(event){

       event.target.parentElement.parentElement.remove()
       }

    function gen(Gender){
        gender.value=Gender
       }