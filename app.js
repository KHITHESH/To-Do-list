let inputs=document.querySelectorAll("input")
let table= document.querySelector("table")
let submitBtn = document.querySelector("#submit")
let row
function formHandle(){
    event.preventDefault()
    let userName=inputs[0].value
    let userPlace=inputs[1].value

    if(submitBtn.innerText=="SUBMIT"){
        if(userName==='' || userPlace===''){
            alert("Fill the inputs")
        }
        else{
            let tr = document.createElement("tr")
            let td1 = document.createElement("td")
            let td2 = document.createElement("td")
            let td3 = document.createElement("td")
    
            let updateBtn = document.createElement("button")
            let deleteBtn = document.createElement("button")
    
            updateBtn.innerText="UPDATE"
            deleteBtn.innerText="DELETE"
    
            td1.innerText=userName
            td2.innerText=userPlace
    
    
            tr.append(td1,td2,td3)
            td3.append(updateBtn,deleteBtn)
            table.append(tr)
    
            inputs[0].value=''
            inputs[1].value=''
    
            updateBtn.addEventListener('click',()=>{
                submitBtn.innerText="UPDATE"
                inputs[0].value=td1.innerText
                inputs[1].value=td2.innerText
            })
            row = tr
            deleteBtn.addEventListener("click",()=>{
                tr.remove()
            })
        }
        
        
    }
    else if(submitBtn.innerText=="UPDATE"){
        submitBtn.innerText="SUBMIT"
        row.cells[0].innerText = inputs[0].value
        row.cells[1].innerText = inputs[1].value

        inputs[0].value=''
        inputs[1].value=''
    }
    
    

}