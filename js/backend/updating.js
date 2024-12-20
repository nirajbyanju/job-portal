


function checkInput(input, length) {
    if (input.value.trim().length >= length) {
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
    } else {
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
    }
  }

function confirmSubmit() {
    var result = confirm("Are you sure you want to submit?");
    if (result) {
      document.getElementById("myForm").submit();
    } else {
      return false;
    }
  }



const uploadPhoto = document.getElementById("upload-photo");
      const previewPhoto = document.getElementById("preview-photo");
      const inputFile = document.getElementById("input-file");
      const deletePhotoButton = document.getElementById("delete-photo-button");
      const dropHere = document.getElementById("drop-here");
    
      // Create a function to handle the file upload process
      const handleFileUpload = (event) => {
        const file = inputFile.files[0];
        const reader = new FileReader();
    
        reader.addEventListener("load", () => {
          previewPhoto.src = reader.result;
          previewPhoto.classList.remove("upload-logo");
          deletePhotoButton.style.display = "block";
          dropHere.style.display ="none";
        });
    
        reader.readAsDataURL(file);
      };
    
      // Add event listeners to the buttons
      uploadPhoto.addEventListener("click", () => {
        inputFile.click();
      });
    
      inputFile.addEventListener("change", handleFileUpload);
    
deletePhotoButton.addEventListener("click", (event) => {
  event.preventDefault(); // add this line to prevent the default behavior
  previewPhoto.src = "";
  previewPhoto.classList.add("upload-logo");
  inputFile.value = "";
  deletePhotoButton.style.display = "none";
  dropHere.style.display ="block";
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
        dropHere.style.display = "block";
      });
    
      // Set the preview photo source to the uploaded company logo
      const companyLogoInput = document.getElementById("preview-photo");
  const companyLogo = companyLogoInput.src;
      if (companyLogo) {
        previewPhoto.src = companyLogo;
        previewPhoto.classList.remove("upload-logo");
        deletePhotoButton.style.display = "block";
        dropHere.style.display = "none";
      }






     





      
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


$(function () {
    $('#datetimepicker6').datetimepicker();
    $('#datetimepicker7').datetimepicker({
useCurrent: false //Important! See issue #1075
});
    $("#datetimepicker6").on("dp.change", function (e) {
        $('#datetimepicker7').data("DateTimePicker").minDate(e.date);
    });
    $("#datetimepicker7").on("dp.change", function (e) {
        $('#datetimepicker6').data("DateTimePicker").maxDate(e.date);
    });
});
      
      
      
      
      
      const wrapper = document.querySelector(".wrapper");
      const selectBtn = wrapper.querySelector(".select-btn");
      const searchInp = wrapper.querySelector("input");
      const options = wrapper.querySelector(".options");
      const selectedOptionEl = document.querySelector("#selected-option");
      
      let categoryofvacancy = [
        "Engineering/Architecture",
        "Hospitality/Travel/Tourism",
        "Accounting/Finance",
        "IT/Telecommunications",
        "Sales/Marketing/Customer Service",
        "Teaching/Education",
        "General Management/Administration",
        "Medical/Pharmaceutical",
        "Technician",
        "Other"
      ];
      
      function addCountry(selectedCountry) {
        options.innerHTML = "";
        categoryofvacancy.forEach(country => {
          let isSelected = country == selectedCountry ? "selected" : "";
          let li = `<li onclick="updateName(this)" value="${country}" class="${isSelected}">${country}</li>`;
          options.insertAdjacentHTML("beforeend", li);
        });
      }
      
      addCountry();
      
      function updateName(selectedLi) {
        searchInp.value = "";
        addCountry(selectedLi.innerText);
        wrapper.classList.remove("active");
        selectBtn.firstElementChild.innerText = selectedLi.innerText;
        document.getElementById("categoryofvacancy").value = selectedLi.innerText;
        let selectedOption = selectedLi.getAttribute('value');
        console.log("Selected option: ", selectedOption);
        selectedOptionEl.innerText = `Selected option: ${selectedOption}`;
      }
      
      searchInp.addEventListener("keyup", () => {
        let arr = [];
        let searchWord = searchInp.value.toLowerCase();
        arr = categoryofvacancy.filter(data => {
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
      
      // First dropdown
      $('.dropdown-el').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).toggleClass('expanded');
        $('#'+$(e.target).attr('for')).prop('checked',true);
      });
      $(document).click(function() {
        $('.dropdown-el').removeClass('expanded');
      });
      
      // Second dropdown
      $('.dropdown-el2').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).toggleClass('expanded');
        $('#'+$(e.target).attr('for')).prop('checked',true);
      });
      $(document).click(function() {
        $('.dropdown-el2').removeClass('expanded');
      });



      const uploadPhoto2 = document.getElementById("upload-photo2");
      const previewPhoto2 = document.getElementById("preview-photo2");
      const inputFile2 = document.getElementById("input-file2");
      const deletePhotoButton2 = document.getElementById("delete-photo-button2");
      const dropHere2 = document.getElementById("drop-here2");
      
      // Create a function to handle the file upload process
      const handleFileUpload2 = (event) => {
        const file = inputFile2.files[0];
        const reader = new FileReader();
      
        reader.addEventListener("load", () => {
          previewPhoto2.src = reader.result;
          previewPhoto2.classList.remove("upload-logo");
          deletePhotoButton2.style.display = "block";
          dropHere2.style.display = "none";
        });
      
        reader.readAsDataURL(file);
      };
      
      // Add event listeners to the buttons
      uploadPhoto2.addEventListener("click", () => {
        inputFile2.click();
      });
      
      inputFile2.addEventListener("change", handleFileUpload2);
      
      deletePhotoButton2.addEventListener("click", (event) => {
        event.preventDefault(); // add this line to prevent the default behavior
        previewPhoto2.src = "";
        previewPhoto2.classList.add("upload-logo");
        inputFile2.value = "";
        deletePhotoButton2.style.display = "none";
        dropHere2.style.display = "block";
      });
      
      // Handle the file drop process
      dropHere2.addEventListener("drop", (event) => {
        event.preventDefault();
        inputFile2.files = event.dataTransfer.files;
        handleFileUpload2(event);
      });
      
      // Show the "drop here" message when the user drags a file over the drop zone
      dropHere2.addEventListener("dragover", (event) => {
        event.preventDefault();
        dropHere2.style.display = "block";
      });
      
      // Hide the "drop here" message when the user leaves the drop zone
      dropHere2.addEventListener("dragleave", (event) => {
        event.preventDefault();
        dropHere2.style.display = "block";
      });
      
      // Set the preview photo source to the uploaded company logo
      const companyLogoInput2 = document.getElementById("preview-photo2");
      const companyLogo2 = companyLogoInput2.src;
      if (companyLogo2) {
        previewPhoto2.src = companyLogo2;
        previewPhoto2.classList.remove("upload-logo");
        deletePhotoButton2.style.display = "block";
        dropHere2.style.display = "none";
      }
      
      
