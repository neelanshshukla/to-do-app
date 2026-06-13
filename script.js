const inputbox = document.getElementById("inputplace");
const tasklist = document.querySelector("#showplace ul");  

function addtolist()
{
    const tasktext = inputbox.value;

       if(tasktext.trim()  === "")         //used trim() function to remove any blank space
       {
            alert("Enter a task first!");
            return;
       }

    const newtask = document.createElement("li");    //creating a new list point on clicking the button
    newtask.textContent = tasktext;                  // putting the textbox value in the list point
     
        const deletebtn = document.createElement("span");
        deletebtn.innerHTML = "\u00d7";                   // adding HTML code for multipication symbol or a cross symbol
        newtask.appendChild(deletebtn);         //adding delete btn to the task

    tasklist.appendChild(newtask);      //sending our newly created task to the list 
    inputbox.value = "";                // again clearing the inputbox

    savedata();  //saving the new list to the local storage
}


// performing the C.R.U.D. operations 

function savedata()  //Creating the data
{
    localStorage.setItem("todolist" , tasklist.innerHTML)  //saving the task list's HTML code under a name tag or a label "todolist"
}

function showtask()  //reading the data
{
     tasklist.innerHTML = localStorage.getItem("todolist") || "";  //putting back stored data in the "todolist" or blank if no data present in the innerHTML
}

showtask();


// the event delegation part (complex part)
// using the addEventListner in the tasklist and checking for the clicks

// (e) stands for event
tasklist.addEventListener("click" , function(e){

    if(e.target.tagName === "LI")     //if clicking the list 
    {
        e.target.classList.toggle("checked");  // adding the "checked" class (crossing it out)
        savedata();
    }

    else if(e.target.tagName === "SPAN")  //if clicking the delete btn
    {
        e.target.parentElement.remove();  //removing the parent of the delete btn(the task)
        savedata();
    }
})