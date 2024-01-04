// Define user content
var userContent = {
    namoshi: {
        greetMessage: 'Heyyy Nemo!!',
        media: [
          { type: 'image', src: 'namoshi/1.jpg' },
          { type: 'image', src: 'namoshi/2.jpg' },
          { type: 'image', src: 'namoshi/3.jpg' }
        ],
        paragraph: '',
      },
    snigdha: {
      greetMessage: 'Heyyy Snigdha!',
      media: [
        { type: 'image', src: 'snigdha/image1.jpg' },
        { type: 'video', src: 'video1.mp4' },
      ],
      paragraph: '',
    },
    sanika: {
      greetMessage: 'Heyyy Sanika Di!',
      media: [
        { type: 'image', src: 'image2.jpg' },
        { type: 'video', src: 'video2.mp4' },
      ],
      paragraph: '',
    },
    mona: {
        greetMessage: 'Yoo Mona!',
        media: [
          { type: 'image', src: 'image2.jpg' },
          { type: 'video', src: 'video2.mp4' },
        ],
        paragraph: '',
      },
    ro: {
        greetMessage: 'Hey Ro!',
        media: [
          { type: 'image', src: 'ro/1.jpg' },
          { type: 'image', src: 'ro/2.jpg' },
          { type: 'image', src: 'ro/3.jpg' },
          { type: 'image', src: 'ro/4.jpg' },
          { type: 'image', src: 'ro/5.png' },
          { type: 'image', src: 'ro/6.png' },
          { type: 'image', src: 'ro/7.png' },
          { type: 'video', src: 'video2.mp4' },
        ],
        paragraph: '',
      },
    rohan: {
        greetMessage: 'Helloo Rohan',
        media: [
          { type: 'image', src: 'image2.jpg' },
          { type: 'video', src: 'video2.mp4' },
        ],
        paragraph: '',
      },
    amazon: {
        greetMessage: 'Helloo Abhirupa, Adarsh, Durgesh, Mradul & Saloni!',
        media: [
          { type: 'image', src: 'image2.jpg' },
          { type: 'video', src: 'video2.mp4' },
        ],
        paragraph: '',
      },
  };
  
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

  document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
    submitForm();
  });

  function showPasswordField() {
    passwordField.style.display = 'block';
  }
  
  function authenticate() {
    var nameDropdown = document.getElementById('nameDropdown');
    var selectedName = nameDropdown.options[nameDropdown.selectedIndex].value;
    var password = document.getElementById('password').value;
  
    var userPasswords = {
      namoshi: 'italytripwhen?',
      snigdha: 'motoliya',
      sanika: 'temp',
      mona: 'takemetoaustralia',
      ro: 'dingus',
      rohan: 'poda',
      amazon: 'hellyeah'
    };
  
    if (userPasswords[selectedName] && password === userPasswords[selectedName]) {
      var authenticatedContent = document.getElementById('authenticatedContent');
      authenticatedContent.style.display = 'block';
  
      var greetMessage = document.getElementById('greetMessage');
      greetMessage.textContent = userContent[selectedName].greetMessage;
  
      loadGallery(userContent[selectedName].media);
  
      var userParagraph = document.getElementById('userParagraph');
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
