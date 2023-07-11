function doCheckAge() {

    // get the age that was input
    var ageElement = document.getElementById("ageText");
    var ageText = ageElement.value;
    var ageNo = Number(ageText);

    // get the list of rides
    var rideListElement = document.getElementById("rideList");

    for (let rideElement of rideListElement.children) {
        // get the minimum age
        let minAgeText = rideElement.getAttribute("data-MinAge");
        let minAgeNo = Number(minAgeText)

        // get the maximum age
        let maxAgeText = rideElement.getAttribute("data-MaxAge");
        let maxAgeNo = Number(maxAgeText);

        // test the age and update the component
        if (ageNo < minAgeNo) {
            rideElement.className = "menuNo";
        } else {
            if (ageNo > maxAgeNo) {
                rideElement.className = "menuNo";
            } else {
                rideElement.className = "menuYes";
            }
        }
    }
}

// Get the input element and the button element
const input = document.getElementById("ageText");
const button = document.getElementByClassName("menuButton");

// Add an event listener for the "keydown" event on the input element
input.addEventListener("keydown", function(event) {
  // If the user presses the "Enter" key or "Return" key, click the button
  if (event.key === 'Enter') {
    button.click();
  }
});


//Hover over items in the list, images of the rides appear
const list = document.querySelector('.menuRideList');
const image = document.querySelector('.image');
const imageContainer = document.querySelector('.image-container');

list.addEventListener('mouseover', (event) => {
  const listItem = event.target.closest('li');
  if (!listItem) {
    return;
  }
  const imageSource = listItem.getAttribute('data-image');
  if (!imageSource) {
    return;
  }
  image.src = imageSource;
  imageContainer.classList.add('active');
  setTimeout(() => {
    image.style.opacity = '1';
  }, 100);
});

list.addEventListener('mouseout', () => {
  image.style.opacity = '0';
  setTimeout(() => {
    imageContainer.classList.remove('active');
  }, 500);
});