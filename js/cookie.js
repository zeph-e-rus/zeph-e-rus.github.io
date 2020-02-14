window.cookieconsent.initialise({
    container: document.getElementById("cookieconsent"),
    palette:{
        "popup": {
      "background": "#a4d5eb",
      "text": "#000000"
    },
    "button": {
      "background": "rgb(240, 80, 20)",
      "text": "#ffffff"
    }
  },
    revokable: true,
    onStatusChange: function(status) {
     console.log(this.hasConsented() ?
      'enable cookies' : 'disable cookies');
    },
    "position": "bottom",
    "theme": "classic",
    "type": "opt-out",
    "secure": true,
    "content": {
      "header": 'Cookies used on the website!',
      "message": '<img style="height: 100px;width: 130px;float: left;margin-right: 22px;" src="images/cookie.svg"><b>Are you ok with optional cookies?</b><br>They let us give you a better experience, improve our products, and keep our marketing costs down.<br> We won’t turn them on until you accept.',
      "allow": 'Accept',
      "deny": 'Decline',
      "link": 'Learn more in our cookie policy.',
      "href": 'https://www.taskventurers.com/cookie-policy',
      "close": '&#x274c;',
      "policy": '',
      "target": '_blank',
      }
   });
