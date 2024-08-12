var age = 25; 
alert("Your age is: " + age);




    // Declare and initialize a variable to keep track of the number of visits
    let visitCount = localStorage.getItem('visitCount');

    // Check if visitCount is null, which means this is the first visit
    if (visitCount === null) {
        visitCount = 1;
    } else {
        visitCount = parseInt(visitCount) + 1;
    }

    // Store the updated visit count in localStorage
    localStorage.setItem('visitCount', visitCount);

    // Display the number of visits on the web page
    document.getElementById('visit-count').innerText = `You have visited this site ${visitCount} times.`;


  var birthYear = 2004; 
  document.write("My birth year is " + birthYear + ".");

 
  var visitorName = "John Doe"; 
  var productTitle = "T-shirt"; 
  var quantity = 5; 
  document.write(visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store.");