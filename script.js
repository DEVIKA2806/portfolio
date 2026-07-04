function openProject(card){

    const cards=document.querySelectorAll(".project-card");

    cards.forEach(item=>{

        if(item!==card){

            item.classList.add("hidden");

        }

    });

    card.classList.add("active");

}

function closeProject(e){

    e.stopPropagation();

    const cards=document.querySelectorAll(".project-card");

    cards.forEach(item=>{

        item.classList.remove("hidden");
        item.classList.remove("active");

    });

}

function openActivity(card){

    const cards=document.querySelectorAll(".activity-card");

    cards.forEach(item=>{

        if(item!==card){

            item.classList.add("hidden");

        }

    });

    card.classList.add("active");

}

function closeActivity(e){

    e.stopPropagation();

    const cards=document.querySelectorAll(".activity-card");

    cards.forEach(item=>{

        item.classList.remove("active");

        item.classList.remove("hidden");

    });

}

function openModal() {
  document.getElementById("contactModal").style.display = "block";
}

function closeModal() {
  document.getElementById("contactModal").style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("contactModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
}