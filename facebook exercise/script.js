var database = [
  {
    id: "Jake",
    pw: "qwerty"
  },
  {
    id: "Louise",
    pw: "123"
  },
  {
    id: "Nigel",
    pw: "qwerty123"
  },
];

var newsfeed = [
  {
    id: "Jake",
    feed: "I am hungry"
  },
  {
    id: "Tim",
    feed: "I am tired"
  },
  {
    id: "Angela",
    feed: "I am bored"
  }
];

var idPrompt = prompt("ID: ");
var pwPrompt = prompt("Password: ");

function isUserValid(id, pw) {
  for (var i=0; i < database.length; i++) {
    if(database[i].id === id &&
    database[i].pw === pw) {
      return true;
    }
  }
  return false;
}

function signIn (id, pw) {
  if(isUserValid(id,pw)) {
        console.log(newsfeed);
      } else {
        alert("Sorry, wrong id and pw!");
      }
}

signIn(idPrompt, pwPrompt);