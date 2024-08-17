const container = document.getElementById("container");
//const content = document.createElement("div");

function newBoard(num = 16)
{
    let dimension = 960 / num + "px";
    
    for(let i = 0; i < num; i++)
    { 
        for(let j = 0; j < num; j++)
        {
            const content = document.createElement("div");
            
            content.style.border = "6px solid black";
            content.classList.add("grid");
            content.textContent = j + 1;
            content.style.width = dimension; 
            content.style.height = dimension;
            container.appendChild(content);        
        }
        
    }
}


// Step 3
function hover()
{
    const divs = document.querySelectorAll(".grid");
    divs.forEach((div) => 
    {   
        div.addEventListener("mouseover", () =>
        {
            div.style.background = "purple";
        })
    });

    divs.forEach((div) => 
    {   
        div.addEventListener("mouseout", () =>
        {
            div.style.background = "white";
        })
    });
}

newBoard();
hover();


// Step 4
const button = document.querySelector("#btn");
button.addEventListener("click", alertFunction);

function alertFunction()
{   
    let num = 0;
    while(num < 1 || num > 100)
        num = prompt("Enter the number of squares:");
    container.innerHTML = "";

    newBoard(num);
    hover();
}

