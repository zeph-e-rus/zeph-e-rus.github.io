        // Get the modal
        var modal = document.getElementById('id01');

        // When the user clicks anywhere outside of the modal, close it
        $(document).mouseup(function (e) {
          if ($(e.target).closest("modal").length ===
            0) {
           // document.getElementById('id01').style.display = 'none';
          }
        });
        $(function () {
          $("#includedContent").load("login.html");
        });

        //top - button
        var mybutton = document.getElementById("myBtn");

        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function () {
          scrollFunction()
        };

        function scrollFunction() {
          if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            mybutton.style.display = "block";
          } else {
            mybutton.style.display = "none";
          }
        }

        // When the user clicks on the button, scroll to the top of the document
        function topFunction() {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        }