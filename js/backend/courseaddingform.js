document.addEventListener("DOMContentLoaded", function() {
    const learningAddSection = document.querySelector(".learning-add-section");
    const closeButton = document.querySelector(".close-button a");
    const secondaryButton = document.querySelector(".btn-secondarys");
    const addSectionLink = document.querySelector(".add-sectioning a");

    // Function to open the .learning-add-section
    function openLearningAddSection() {
        learningAddSection.style.display = "block";
    }

    // Function to close the .learning-add-section
    function closeLearningAddSection() {
        learningAddSection.style.display = "none";
    }

    // Event listener for the "Add Section" link
    addSectionLink.addEventListener("click", function(e) {
        e.preventDefault(); // Prevent the link from navigating
        openLearningAddSection();
    });

    // Event listener for the close button
    closeButton.addEventListener("click", function(e) {
        e.preventDefault(); // Prevent the link from navigating
        closeLearningAddSection();
    });

    // Event listener for the secondary button
    secondaryButton.addEventListener("click", function() {
        closeLearningAddSection();
    });

    // Event listener to close the .learning-add-section when clicking outside
    window.addEventListener("click", function(e) {
        if (e.target === learningAddSection) {
            closeLearningAddSection();
        }
    });
});




document.addEventListener("DOMContentLoaded", function() {
    const radioInputs = document.querySelectorAll(".custom-radio-select input");
    const nextButton = document.querySelector(".nextbutton");
    const backButton = document.querySelectorAll(".back-main");
    const lessonTypeContainers = document.querySelectorAll(".learningss-input-cat");
    const mainMenuCourse = document.querySelector(".main-menu-course");
    const addLessonLink = document.querySelector(".addlessoning");
    const learningsAddSection = document.querySelector(".learnings-add-section");
    const closeButton = document.querySelector(".close-buttons a");
    const secondaryButton = document.querySelector(".btn-secondaryss");

    // Function to show the selected lesson type and hide the main menu
    function showLessonType(lessonType) {
        lessonTypeContainers.forEach(container => {
            container.style.display = "none";
        });
        document.querySelector(`.learningss-input-cat.${lessonType}`).style.display = "block";
        mainMenuCourse.style.display = "none";
    }

    // Function to go back to the main menu
    function showMainMenu() {
        lessonTypeContainers.forEach(container => {
            container.style.display = "none";
        });
        mainMenuCourse.style.display = "block";
    }

    // Function to display the learnings-add-section
    function showLearningsAddSection() {
        learningsAddSection.style.display = "block";
    }

    // Function to hide the learnings-add-section
    function hideLearningsAddSection() {
        learningsAddSection.style.display = "none";
    }

    // Add a click event listener to the "Add Lesson" link
    addLessonLink.addEventListener("click", function(e) {
        e.preventDefault();
        showLearningsAddSection();
    });

    // Add click event listeners to "Change" links
    backButton.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            showMainMenu();
        });
    });

    // Add click event listener to the "Next" button
    nextButton.addEventListener("click", function(e) {
        e.preventDefault();
        // Find the selected radio input
        const selectedInput = Array.from(radioInputs).find(input => input.checked);
        // Get the value of the selected input
        const selectedValue = selectedInput ? selectedInput.value : "";
        if (selectedValue) {
            showLessonType(selectedValue);
        }
    });

    // Add click event listeners to close buttons
    closeButton.addEventListener("click", function(e) {
        e.preventDefault();
        hideLearningsAddSection();
    });

    secondaryButton.addEventListener("click", function(e) {
        e.preventDefault();
        hideLearningsAddSection();
    });
});


var inputField = document.querySelector('#duration');

inputField.onkeydown = function(event) {
  // Only allow if the e.key value is a number or if it's 'Backspace'
  if(isNaN(event.key) && event.key !== 'Backspace') {
    event.preventDefault();
  }
};

 // Get references to the checkbox and select elements
 var checkbox = document.getElementById("multiple_courses_checkbox");
 var select = document.getElementById("multi_instructor");

 // Add an event listener to the checkbox
 checkbox.addEventListener("change", function () {
     // Toggle the visibility of the select based on the checkbox state
     select.style.display = this.checked ? "block" : "none";
 });

 function previewCourseThumbnail(input) {
    var preview = document.querySelector(".js--image-preview");
    var file = input.files[0];
    var reader = new FileReader();

    if (file) {
        reader.readAsDataURL(file);
        reader.onload = function (e) {
            var image = new Image();
            image.src = e.target.result;
            image.onload = function () {
                if (image.width === 1080 && image.height === 1080) {
                    // Display the image in the preview div
                    preview.innerHTML = '<img src="' + e.target.result + '" alt="Course Thumbnail">';
                } else {
                    // Reset the input and show an error message
                    input.value = "";
                    preview.innerHTML = "Image must be 600x600 pixels.";
                }
            };
        };
    }
}

// Attach the event listener to the file input
var courseThumbnailInput = document.getElementById("course_thumbnail");
courseThumbnailInput.addEventListener("change", function () {
    previewCourseThumbnail(this);
});

function navigateWizard(action) {
    var currentTab = $('.tab-pane.active');
    var activeTabLink = $('a[href="#' + currentTab.attr('id') + '"]');
    
    if (action === 'previous') {
        var prevTab = currentTab.prev('.tab-pane');
        if (prevTab.length > 0) {
            currentTab.removeClass('active');
            prevTab.addClass('active');
            activeTabLink.removeClass('active');
            $('a[href="#' + prevTab.attr('id') + '"]').addClass('active');
        }
    } else if (action === 'next') {
        var nextTab = currentTab.next('.tab-pane');
        if (nextTab.length > 0) {
            currentTab.removeClass('active');
            nextTab.addClass('active');
            activeTabLink.removeClass('active');
            $('a[href="#' + nextTab.attr('id') + '"]').addClass('active');
        }
    }
}


function appendOutcome() {
    // Create a new div element for the outcome
    var outcomeDiv = document.createElement("div");
    outcomeDiv.classList.add("d-flex", "dd-flex", "mt-2");

    // Create an input element for the outcome
    var inputElement = document.createElement("input");
    inputElement.type = "text";
    inputElement.classList.add("form-control");
    inputElement.name = "outcomes[]";
    inputElement.placeholder = "Provide outcomes";

    // Create a remove button for the outcome
    var removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.classList.add("btn", "btn-danger", "btn-sm");
    removeButton.innerHTML = '<i class="fa fa-minus"></i>';
    removeButton.onclick = function() {
        // Remove the outcome when the remove button is clicked
        outcomeDiv.remove();
    };

    // Append the input element and remove button to the outcome div
    outcomeDiv.appendChild(inputElement);
    outcomeDiv.appendChild(removeButton);

    // Append the outcome div to the "addingsoutcomes" container
    document.getElementById("addingsoutcomes").appendChild(outcomeDiv);
}

function removeOutcome(button) {
    // Get the parent div of the button (the outcome section)
    var outcomeSection = button.parentElement.parentElement;

    // Remove the outcome section
    outcomeSection.remove();
}

function appendRequirement() {
    // Create a new div element for the requirement
    var requirementDiv = document.createElement("div");
    requirementDiv.classList.add("d-flex", "dd-flex", "mt-2");

    // Create an input element for the requirement
    var inputElement = document.createElement("input");
    inputElement.type = "text";
    inputElement.classList.add("form-control");
    inputElement.name = "requirements[]";
    inputElement.placeholder = "Provide requirements";

    // Create a remove button for the requirement
    var removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.classList.add("btn", "btn-danger", "btn-sm");
    removeButton.innerHTML = '<i class="fa fa-minus"></i>';
    removeButton.onclick = function() {
        // Remove the requirement when the remove button is clicked
        requirementDiv.remove();
    };

    // Append the input element and remove button to the requirement div
    requirementDiv.appendChild(inputElement);
    requirementDiv.appendChild(removeButton);

    // Append the requirement div to the "addingrequired" container
    document.getElementById("addingrequired").appendChild(requirementDiv);
}

function removeRequirement(button) {
    // Get the parent div of the button (the requirement section)
    var requirementSection = button.parentElement.parentElement;

    // Remove the requirement section
    requirementSection.remove();
}


function calculateDiscountPercentage(discountedPrice) {
    // Get the values of price and discounted_price inputs
    var priceInput = document.getElementById("price");
    var discountedPriceInput = document.getElementById("discounted_price");

    // Parse the input values as numbers
    var price = parseFloat(priceInput.value);
    var discountedPrice = parseFloat(discountedPriceInput.value);

    // Calculate the discount percentage
    var discountPercentage = 0;
    if (price > 0 && discountedPrice > 0) {
        discountPercentage = ((price - discountedPrice) / price) * 100;
    }

    // Update the discount percentage in the HTML
    var discountedPercentageElement = document.getElementById("discounted_percentage");
    discountedPercentageElement.textContent = discountPercentage.toFixed(2) + "%";
}