const container = document.getElementById("container");
//const content = document.createElement("div");

for(let i = 0; i < 16; i++)
{ 
    for(let j = 0; j < 16; j++)
    {
        const content = document.createElement("div");
        content.style.border = "6px solid black";
        content.classList.add("grid");
        content.style.width = "30px";
        content.style.height = "30px";
        container.appendChild(content);        
    }
    
}

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

