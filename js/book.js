var count=1;
function abc() {
    btn2.style.backgroundColor ="#FF790C";
    btn1.style.backgroundColor = "";
    btn.innerHTML="SEARCH AGAIN";
    var y=document.getElementById("sel");
    var val = y.options[y.selectedIndex];
    para.innerHTML="Below you can find a list of available time slots for "+val.innerHTML+" by Task Venturers Team.";
    var x = document.getElementById("bt1");
    if (x.style.display == "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    } 
    if(count%2=="0")
    {
    para.innerHTML="Please select service, date and provider then click on the Find Appointments button.";
    btn.innerHTML="CHECK AVAILABILITY";
    btn1.style.backgroundColor ="#FF790C";
    btn2.style.backgroundColor = "";  
    btn3.style.backgroundColor = "";  
    bt1.style.display = "none";
    form1.style.display = "none";
    bt.style.display = "none";
    } count++;
}
function abc1(){
    btn3.style.backgroundColor ="#FF790C";
    btn2.style.backgroundColor = "";
    btn1.style.backgroundColor = "";
    bt1.style.display = "none";
    btn.innerHTML="back";
    para.innerHTML="You're booking Regular VA Works by Task Venturers Team on "+document.getElementById("date").value+".<br><br>";
    var y = document.getElementById("form1");
    if (y.style.display == "none") {
      y.style.display = "block";
      bt.style.display = "block";
    } else {
      y.style.display = "none";
      bt.style.display = "none";
    } 
}
function abc2(){
    btn4.style.backgroundColor ="#FF790C";
    btn3.style.backgroundColor = "";
    btn2.style.backgroundColor = "";
    btn1.style.backgroundColor = "";
    btn.style.display = "none";
    form1.style.display = "none";
    bt.style.display = "none";
    para.innerHTML="Thankyou ";

}