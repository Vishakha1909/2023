document.addEventListener('DOMContentLoaded', function () {
    // Define user content
    var userContent = {
      ro: {
        greetMessage: 'Hey User 1!',
        media: [
          { type: 'image', src: 'image1.jpg' },
          { type: 'video', src: 'video1.mp4' },
        ],
        paragraph: 'Welcome to the world of User 1. Explore and enjoy!',
      },
      user2: {
        greetMessage: 'Hello User 2!',
        media: [
          { type: 'image', src: 'image2.jpg' },
          { type: 'video', src: 'video2.mp4' },
        ],
        paragraph: 'Discover the content curated for User 2. Have a great time!',
      },
      // Add more users as needed
    };
  
    // DOM elements
    var nameDropdown = document.getElementById('nameDropdown');
    var passwordField = document.getElementById('passwordField');
    var authenticatedContent = document.getElementById('authenticatedContent');
    var greetMessage = document.getElementById('greetMessage');
    var gallery = document.getElementById('gallery');
    var userParagraph = document.getElementById('userParagraph');
  
    // Event listener for dropdown change
    nameDropdown.addEventListener('change', function () {
      showPasswordField();
    });
  
    // Event listener for form submission
    document.getElementById('contactForm').addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the default form submission behavior
      submitForm();
    });
  
    // Function to show the password field when a name is selected
    function showPasswordField() {
      passwordField.style.display = 'block';
    }
  
    // Function to authenticate and show content
    function authenticate() {
      var selectedName = nameDropdown.value;
      var password = document.getElementById('password').value;
  
      // Hardcoded passwords (replace with your actual passwords)
      var userPasswords = {
        ro: 'password1',
        user2: 'password2',
        // Add more passwords as needed
      };
  
      if (userPasswords[selectedName] && password === userPasswords[selectedName]) {
        authenticatedContent.style.display = 'block';
  
        greetMessage.textContent = userContent[selectedName].greetMessage;
        loadGallery(userContent[selectedName].media);
        userParagraph.textContent = userContent[selectedName].paragraph;
      } else {
        alert('Authentication failed. Please try again.');
      }
    }
  
    // Function to open the modal
    function openModal(content) {
      var modal = document.getElementById('myModal');
      var modalContent = document.getElementById('modalContent');
      var closeBtn = document.getElementById('closeBtn');
  
      // Set content inside the modal
      modalContent.innerHTML = content;
  
      // Display the modal
      modal.style.display = 'flex';
  
      // Close modal when clicking outside the modal content
      modal.onclick = function (event) {
        if (event.target === modal) {
          closeModal();
        }
      };
  
      // Close modal when clicking the close button
      closeBtn.onclick = closeModal;
    }
  
    // Function to close the modal
    function closeModal() {
      var modal = document.getElementById('myModal');
      modal.style.display = 'none';
    }
  
    // Function to load the gallery based on media content
    function loadGallery(media) {
      gallery.innerHTML = ''; // Clear existing content
  
      media.forEach(function (item, index) {
        var galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
  
        if (item.type === 'image') {
          var imageElement = document.createElement('img');
          imageElement.src = item.src;
          imageElement.alt = 'Gallery Image';
          galleryItem.appendChild(imageElement);
  
          // Open the image in a popup on click
          imageElement.addEventListener('click', function () {
            openModal(`<img src="${item.src}" alt="Gallery Image">`);
          });
        } else if (item.type === 'video') {
          var videoElement = document.createElement('video');
          videoElement.src = item.src;
          videoElement.controls = true;
          galleryItem.appendChild(videoElement);
  
          // Open the video in a popup on click
          videoElement.addEventListener('click', function () {
            openModal(`<video src="${item.src}" controls></video>`);
          });
        }
  
        gallery.appendChild(galleryItem);
      });
    }
  
    // ... Existing code ...
  });
  