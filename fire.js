const firebaseConfig = {
  apiKey: "AIzaSyD7eBfNQ6GIhkn8VERWs_hEYH5M-eUMU-c",
  authDomain: "shy-c6d34.firebaseapp.com",
  databaseURL: "https://shy-c6d34-default-rtdb.firebaseio.com",
  projectId: "shy-c6d34",
  storageBucket: "shy-c6d34.appspot.com",
  messagingSenderId: "125621899006",
  appId: "1:125621899006:web:019e91b4c9d75a20b69faf"
};

//initialize firebase
firebase.initializeApp(firebaseConfig);

//reference database
var formdb = firebase.database().ref('2023shy');

document.getElementById('contact-form').addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault(); // prevent page refresh
  var name = getElementVal('name')
  var friend = getElementVal('friend')
  var message = getElementVal('message')
  //console.log(name);
  saveMessages(name, friend, message);
  document.querySelector('.alert').style.display = 'block';
}

const saveMessages = (name, friend, message) => {
  var newinput = formdb.push();
  newinput.set({
    name: name,
    relation: friend,
    msg: message,
  });
}

const getElementVal = (id) => {
  return document.getElementById(id).value;
}
