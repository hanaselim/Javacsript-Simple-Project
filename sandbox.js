const wawo = document.querySelectorAll("p");
wawo.forEach(p =>{
        if(p.textContent.includes("error")){
            p.classList.add("error");
        }
        else if(p.textContent.includes("success")){
            p.classList.add("success");
        }
    });


    const title=document.querySelector(".title");
    title.classList.toggle("test");