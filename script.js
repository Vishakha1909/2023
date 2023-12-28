// Define user content
var userContent = {
    namoshi: {
        greetMessage: 'Heyyy Nemo!!',
        media: [
          { type: 'image', src: 'image2.jpg' },
          { type: 'video', src: 'video2.mp4' },
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
  
  function showPasswordField() {
    var passwordField = document.getElementById('passwordField');
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
  
  function loadGallery(media) {
    var galleryContainer = document.getElementById('gallery');
    galleryContainer.innerHTML = '';
  
    media.forEach(function (item) {
      var galleryItem = document.createElement('div');
      galleryItem.className = 'gallery-item';
  
      if (item.type === 'image') {
        var imageElement = document.createElement('img');
        imageElement.width = 100;
        imageElement.src = item.src;
        imageElement.alt = 'Gallery Image';
        galleryItem.appendChild(imageElement);
      } else if (item.type === 'video') {
        var videoElement = document.createElement('video');
        videoElement.src = item.src;
        videoElement.controls = true;
        galleryItem.appendChild(videoElement);
      }
  
      galleryContainer.appendChild(galleryItem);
    });
  }
  
  function submitForm() {
    alert('');
  }
  