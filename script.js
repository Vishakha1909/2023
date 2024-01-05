// Define user content
var body = document.body;

  // Function to handle scroll events
  function handleScroll() {
    var scrollY = window.scrollY;

    // Add 'scrolled' class to body if scrolled down, remove it otherwise
    if (scrollY > 0) {
      body.classList.add('scrolled');
    } else {
      body.classList.remove('scrolled');
    }
  }

  // Listen for scroll events
  window.addEventListener('scroll', handleScroll);

  // Initial check for scroll position
  handleScroll();
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
        { type: 'image', src: 'snigdha/1.jpg' },
      ],
      paragraph: '',
    },
    sanika: {
      greetMessage: 'Heyyy Sanika Di!',
      media: [
        { type: 'image', src: 'sanika/1.jpg' },
        { type: 'image', src: 'sanika/2.jpg' },
      ],
      paragraph: '',
    },
    mona: {
        greetMessage: 'Yoo Mona!',
        media: [
          { type: 'image', src: 'mona.jpg' },
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
          { type: 'image', src: 'ro/8.png' },
          { type: 'video', src: 'ro/v1.mp4'},
          
        ],
        paragraph: 'Hey! I cant deny that you are probably the best person who came into my life from this year so its a rather long appreciation, you might find it lame/cringe but i love doing this. Crazy how it all started with random show/movie recommendations to how "close" we are now i can say. I have always enjoyed every single call with you and watching all the stuff we have together while managing our timezone differences so well. Avatar, Stranger Things, AOT and like so so much more lol (i will wait to finish GOT with you). Nothing can be better than the music you got me into as well be it hard techno or hardstyle/hardcore stuff too, you showed me worlds i didnt know existed (it was just me and my bollywood before lol, india moment) and i am grateful for that. Still hoping on attending Verknipt with you one fine day (down for amsterdam anytime). Not to forget all the endshows you patiently showed and explained to me and made insane curated playlists. Our watchpubs history is crazy i bet. We have spent so much time together this year and thats let me be open, real and vulnerabale because of chill you are its just easy & comfortable with you, and im glad you have also opened up to me many times. At the same time, i know i have annoyed you quite a bit so im sorry for that lol but thanks for still sticking around. I have had multiple "first" experiences because of you lol, and i enjoyed it all (me with your balls haha :sideeye: ~ WHYBE not so outie). You will always be up there in my priority list and you can always rely on me for anything, I respect and understand you a lot and you know i dont judge or anything. Aight too much to read i know lol. Heres to another epic year ahead, gotta get you to code and shit, lets watch more cool stuff and hang soon please ty. And hope to meet you soon when i move there! Also not to forget, you have a really nice voice haha. Chalo, ok love you cya bye mr all natural.',
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
          { type: 'image', src: 'amazon/1.jpg' },
          { type: 'image', src: 'amazon/2.jpg' },
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
