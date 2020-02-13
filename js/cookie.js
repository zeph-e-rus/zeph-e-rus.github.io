import "css/style.css";
window.addEventListener("load", function()
{
    const newLocal = "Are you ok with optional cookies?<br>They let us give you a better experience, improve our products, and keep our marketing costs down. We won’t turn them on until you accept <a href=https://www.taskventurers.com/cookie-policy>Learn more in our cookie policy.</a>"
    window.wpcc.init(
        {"border":"thin","corners":"small","colors":
        {"popup":{"background":"#edfdfa","text":"#000000","border":"#5ec2b6"},
        "button":{"background":"#5ec2b6","text":"#ffffff"}},"position":"bottom",
        "content":{
        "message":newLocal,
        "button":"Accept","button":"Decline"}})})
