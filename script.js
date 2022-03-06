// Collapsable Menu

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    content.classList.toggle("hidden")  
    var icon = this.getElementsByClassName("arrow-icon")
    console.log(icon)
    if (content.classList.contains("hidden")) {
        icon.src = "./assets/arrow-down.svg"
    } else {
        icon.src="./assets/arrow-right.svg"
    }

    console.log(coll.id)
    if (coll.id) {
        window.location.href(`/${coll.id}`)
    }
  });
}

// Adding new list 


// Checking list
const checklist = document.querySelectorAll(".list-checkbox");
checklist.forEach((checkbox) => {
    checkbox.addEventListener("change", function() {
        console.log(checkbox.value)
    })
})


// Adding list to priority
const priorityIcons = document.querySelectorAll(".priority-icon");
priorityIcons.forEach((icon) => {
    icon.addEventListener("click", function() {
        if (icon.classList.contains("not-selected")) {
            icon.src = './assets/priority.svg';
            icon.classList.remove("not-selected")
        } else {
            icon.src = './assets/flag-outline.svg'
            icon.classList.add("not-selected")
        }
    })
})