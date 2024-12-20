const uploadPhoto = document.getElementById("upload-photo");
const previewPhoto = document.getElementById("preview-photo");
const inputFile = document.getElementById("input-file");
const deletePhotoButton = document.getElementById("delete-photo-button");
const dropHere = document.getElementById("drop-here");

// Create a function to handle the file upload process
const handleFileUpload = (event) => {
    const file = inputFile.files[0];

    // Check if the file is an image
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();

        reader.addEventListener("load", () => {
            // Check the file size (in bytes) and dimensions before displaying the image
            const image = new Image();
            image.src = reader.result;

            image.onload = () => {
                if (file.size <= 1500000 && image.width === 1080 && image.height === 1080) {
                    previewPhoto.src = reader.result;
                    previewPhoto.classList.remove("upload-logo");
                    deletePhotoButton.style.display = "block";
                    dropHere.style.display = "none";
                } else {
                    alert("Please upload an image that is less than 1MB and has dimensions of exactly 120x120 pixels.");

                }
            };
        });

        reader.readAsDataURL(file);
    } else {
        alert("Please upload a valid image file.");
    }
}; // Missing closing brace added here

// Add event listeners to the buttons
uploadPhoto.addEventListener("click", () => {
    inputFile.click();
});

inputFile.addEventListener("change", handleFileUpload);

deletePhotoButton.addEventListener("click", () => {
    previewPhoto.src = "";
    previewPhoto.classList.add("upload-logo");
    inputFile.value = "";
    deletePhotoButton.style.display = "none";
    dropHere.style.display = "block";
});

// Handle the file drop process
dropHere.addEventListener("drop", (event) => {
    event.preventDefault();
    inputFile.files = event.dataTransfer.files;
    handleFileUpload(event);
});

// Show the "drop here" message when the user drags a file over the drop zone
dropHere.addEventListener("dragover", (event) => {
    event.preventDefault();
    dropHere.style.display = "block";
});

// Hide the "drop here" message when the user leaves the drop zone
dropHere.addEventListener("dragleave", (event) => {
    event.preventDefault();
    dropHere.style.display = "none"; // Fixed to set display to "none"
});
    const companyLogoInput = document.getElementById("preview-photo");
    const companyLogo = companyLogoInput.src;
      if (companyLogo) {
        previewPhoto.src = companyLogo;
        previewPhoto.classList.remove("upload-logo");
        deletePhotoButton.style.display = "block";
        dropHere.style.display = "none";
      }



      const wrapper = document.querySelector(".wrapper");
      const selectBtn = wrapper.querySelector(".select-btn");
      const searchInp = wrapper.querySelector("input");
      const options = wrapper.querySelector(".options");
      const selectedOptionEl = document.querySelector("#selected-option");
      
      let nameofcompany; // Declare the variable in a scope accessible to both fetch and functions
      
      fetch('/get-categories')
          .then(response => response.json())
          .then(data => {
              // Use the retrieved categories
              nameofcompany = data.categories;
              // Now you can use nameofcompany in your existing JavaScript code
      
              // Initialize the dropdown after fetching categories
              addCountry();
          })
          .catch(error => console.error('Error fetching categories:', error));
      
      function addCountry(selectedCountry) {
          options.innerHTML = "";
          nameofcompany.forEach(country => {
              let isSelected = country == selectedCountry ? "selected" : "";
              let li = `<li onclick="updateName(this)" value="${country}" class="${isSelected}">${country}</li>`;
              options.insertAdjacentHTML("beforeend", li);
          });
      }
      
      function updateName(selectedLi) {
          searchInp.value = "";
          addCountry(selectedLi.innerText);
          wrapper.classList.remove("active");
          selectBtn.firstElementChild.innerText = selectedLi.innerText;
          document.getElementById("nameofcompany").value = selectedLi.innerText;
          let selectedOption = selectedLi.getAttribute('value');
          console.log("Selected option: ", selectedOption);
          selectedOptionEl.innerText = `Selected option: ${selectedOption}`;
      }
      
      searchInp.addEventListener("keyup", () => {
          let arr = [];
          let searchWord = searchInp.value.toLowerCase();
          arr = nameofcompany.filter(data => {
              return data.toLowerCase().startsWith(searchWord);
          }).map(data => {
              let isSelected = data == selectBtn.firstElementChild.innerText ? "selected" : "";
              return `<li onclick="updateName(this)" class="${isSelected}" value="${data}">${data}</li>`;
          }).join("");
          options.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Oops! Category not found</p>`;
      });
      
      selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));
      
      document.addEventListener("click", (event) => {
          if (!wrapper.contains(event.target)) {
              wrapper.classList.remove("active");
          }
      });
      
      
      
          jQuery(document).ready(function($) {
              var tags = $('#tags').inputTags({
                tags: [],
                autocomplete: {
                  values: ['', 'Software Development', 'Project Management', 'Data Analysis', 'Graphic Design', 'Marketing', 'Sales', 'Accounting', 
                  'Customer Service', 'Human Resources', 'Engineering', 'Teaching', 'Writing', 'Editing', 'Research', 'Healthcare', 'Hospitality', 
                  'Communication', 'Leadership', 'Teamwork', 'Problem Solving', 'Time Management', 'Adaptability', 'Creativity', 'Conflict Resolution',
                   'Decision Making', 'Organization', 'Collaboration', 'Critical Thinking', 'Customer Service', 'Attention to Detail', 'Emotional Intelligence',
                   'Accounting', 'Administrative Support', 'Advertising', 'Analytics', 'Art', 'Banking', 'Business Analysis', 'Business Development', 'Business Intelligence',
                    'Call Center', 'Civil Engineering', 'Coaching', 'Communication', 'Computer Science', 'Consulting', 'Content Management', 'Copywriting', 'Corporate Finance',
                     'Creative Writing', 'Criminal Justice', 'Customer Relationship Management (CRM)', 'Customer Service', 'Data Analysis', 'Data Entry', 'Data Warehousing', 
                     'Database Administration', 'Design', 'Digital Marketing', 'E-commerce', 'Economics', 'Education', 'Electrical Engineering', 'Engineering', 'Entrepreneurship',
                      'Environmental Science', 'Event Planning', 'Executive Management', 'Facilities Management', 'Fashion', 'Finance', 'Fine Arts', 'Fundraising', 'Graphic Design',
                       'Healthcare', 'Hospitality', 'Human Resources', 'Industrial Engineering', 'Information Technology (IT)', 'Insurance', 'Interior Design', 'International Business', 
                       'Internet Research', 'Investment Banking', 'Journalism', 'Law', 'Leadership', 'Logistics', 'Management', 'Manufacturing', 'Market Research', 'Marketing',
                        'Mechanical Engineering', 'Media', 'Medical Billing', 'Medical Transcription', 'Merchandising', 'Non-profit Management', 'Nursing', 'Operations Management', 
                        'Organizational Development', 'Payroll', 'Performance Management', 'Personal Training', 'Pharmaceuticals', 'Photography', 'Physical Therapy', 'Product Management',
                         'Project Management', 'Property Management', 'Public Relations', 'Publishing', 'Purchasing', 'Quality Assurance', 'Real Estate', 'Research', 'Retail', 
                         'Risk Management', 'Sales', 'Search Engine Optimization (SEO)', 'Security', 'Social Media Marketing', 'Software Development', 'Sports', 'Supply Chain Management',
                          'Technical Support', 'Telecommunications', 'Training', 'Travel', 'User Experience (UX)', 'User Interface (UI) Design', 'Video Editing', 'Video Production', 
                          'Visual Design', 'Web Design', 'Web Development', 'Writing']
                },
                init: function(elem) {
                  $('span', '#events').text('init');
                  $('<p class="results">').html('<strong>Tags:</strong> ' + elem.tags.join(' - ')).insertAfter(elem.$list);
                },
                create: function() {
                  $('span', '#events').text('create');
                },
                update: function() {
                  $('span', '#events').text('update');
                },
                destroy: function() {
                  $('span', '#events').text('destroy');
                },
                selected: function() {
                  $('span', '#events').text('selected');
                },
                unselected: function() {
                  $('span', '#events').text('unselected');
                },
                change: function(elem) {
                  $('.results').empty().html('<strong>Tags:</strong> ' + elem.tags.join(' - '));
                },
                autocompleteTagSelect: function(elem) {
                  console.info('autocompleteTagSelect');
                }
              });
        
              $('#tags').inputTags('tags', function(tags) {
                $('.results').empty().html('<strong>Tags:</strong> ' + tags.join(' - '));
              });
        
              var autocomplete = $('#tags').inputTags('options', 'autocomplete');
              $('span', '#autocomplete').text(autocomplete.values.join(', '));
            });