function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  document.getElementById("myDropdown1").classList.remove("show");
  document.getElementById("myDropdown2").classList.remove("show");
}

function myFunction1() {
  document.getElementById("myDropdown1").classList.toggle("show");
  document.getElementById("myDropdown").classList.remove("show");
  document.getElementById("myDropdown2").classList.remove("show");
}

function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show");
  document.getElementById("myDropdown").classList.remove("show");
  document.getElementById("myDropdown1").classList.remove("show");
}
$(document).mouseup(function (e) {
  if ($(e.target).closest(".myDropdown").length ===
    0) {
    document.getElementById("myDropdown").classList.remove("show");
  }
  if ($(e.target).closest(".myDropdown1").length ===
    0) {
    document.getElementById("myDropdown1").classList.remove("show");
  }
  if ($(e.target).closest(".myDropdown2").length ===
    0) {
    document.getElementById("myDropdown2").classList.remove("show");
  }
});
// Close the dropdown if the user clicks outside of it
window.onclick = e => {

  if (e.target.innerText == "All Job Category" || e.target.innerText == "Information Technology (IT)" || e.target.innerText == "Vitual Assistant") {
    bt1.innerHTML = e.target.innerText + '<i style="margin-left: 30px" class="fas fa-caret-down"></i>';
  } else if (e.target.innerText == "All Job Type" || e.target.innerText == "Full Time" || e.target.innerText == "Permanent")
    bt2.innerHTML = e.target.innerText + '<i style="margin-left: 30px" class="fas fa-caret-down"></i>';
  else if (e.target.innerText == "All Job Location" || e.target.innerText == "Kolkata")
    bt3.innerHTML = e.target.innerText + '<i style="margin-left: 30px" class="fas fa-caret-down"></i>';
  if (!event.target.matches('.dropbtn')) {
    var dropdowns1 = document.getElementsByClassName("dropdown-content1");
    var dropdowns2 = document.getElementsByClassName("dropdown-content2");
    var dropdowns3 = document.getElementsByClassName("dropdown-content3");
    var i;
    for (i = 0; i < dropdowns1.length; i++) {
      var openDropdown = dropdowns1[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
    for (i = 0; i < dropdowns2.length; i++) {
      var openDropdown = dropdowns2[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
    for (i = 0; i < dropdowns3.length; i++) {
      var openDropdown = dropdowns3[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
filterSelection("all")

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv1");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}