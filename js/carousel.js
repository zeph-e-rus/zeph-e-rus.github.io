function one() {
    document.getElementById("demo").innerHTML = "The seeds were sown for Task Venturers back in November 2017, when a batch of digital nomads were finding repeated success in all aspects of their work due to their dedication, hard work, high standards and the obligation to deliver quality. Since then, over the past couple of years, we have managed to grow from a group of digital freelancers into a global powerhouse of Virtual Assistance skills, with a more updated, profound and innovative skillset.<br>Now every day, our people are developing and presenting innovative virtual business solutions, which supports the business transformation of our clients.<br>We expanded and stepped in to help the taskmasters with a wide range of Virtual Assistant (VA) services, encompassing niches like web development, SEO, digital marketing, graphic designing, e-commerce, content writing, video editing, and virtual accounting. In this mission, we have with us the most talented, hardworking and dedicated team of experts. They understand that each business is unique and obtain a deep understanding of your customers, market, competition, challenges, and future strategy.<br>We evolved into a team of experts who spend their days supporting and innovating the bedrock of our business – you.";
    }
    
    function two() {
    document.getElementById("demo").innerHTML = "Our mission is to enable the business owners to focus on their most important priorities, save time and achieve an appropriate work-life balance. Quality, punctuality, commitment, and honesty is our motto. We take, organize and simplify the huge volume of administrative tasks that steal the valuable time of business owners. We ensure the ultimate business growth and profitability of our clients.";
      
    }
    
    function three() {
    document.getElementById("demo").innerHTML = "Our vision is to become the number one dedicated, efficient, viable and friendly Virtual Assistant business proudly helping business owners to plan and implement innovative ideas and strategies for ultimate growth and success that enable them to live their dream lifestyle of freedom-based business. We aim to be the global leader in the virtual assistance industry that delivers the highest quality with dedication, timeliness, a sense of warmth and team spirit.";
    
    }
    document.getElementById("default").innerhtml = ""+one(); 
    // Add active class to the current button (highlight it)
    var header = document.getElementById("myHeader");
    var btns = header.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }