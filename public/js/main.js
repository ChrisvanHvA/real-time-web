const chatForm = document.getElementById('chat-form');
const chatMessages = document.querySelector('.chat-messages');
const roomName = document.getElementById('room-name');

const userList = document.getElementById('users');



// Get username and room from URL
let { username, room, beast} = Qs.parse(location.search, {
  ignoreQueryPrefix: true,
});

function checkbeast() {
  
  // if (beast == 'cat') {
  //   beast = 'lief poesje '
    
  // }
  // else if (beast == 'dog') {
  //   beast = 'klein hondje '
    
  // }
  // else if (beast == 'bear') {
  //   beast = 'brommende beer '
    
  // }
  // else if (beast == 'deer') {
  //   beast = 'huppelend hertje'
  // }
  //   else if (beast === undefined) {
  //     beast = 'de wijze'
  // }
  switch(beast) {
    case 'bear':    beast = 'brommende beer '
    break;
    case 'dog':    beast = 'klein hondje '
    break;
    case 'cat':    beast = 'lief poesje '
    break;
    case 'deer':    beast = 'huppelend hertje '
    break;
    case 'wizard':    beast = 'de wijze, sterke, machtige en onverslaanbare '
    break;
  }
}
checkbeast();
const socket = io();

// Join chatroom
socket.emit('joinRoom', { username, room, beast });

// Get room and users
socket.on('roomUsers', ({ room, users, beast}) => {
  outputRoomName(room);
  outputUsers(users);
});

// Message from server
socket.on('message', (message) => {
  console.log(message);
  
  outputMessage(message);

  // Scroll down
  chatMessages.scrollTop = chatMessages.scrollHeight;
});

// Message submit
chatForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get message text
  let msg = e.target.elements.msg.value;

  msg = msg.trim();

  if (!msg) {
    return false;
  }

  // Emit message to server
  socket.emit('chatMessage', msg);

  // Clear input
  e.target.elements.msg.value = '';
  e.target.elements.msg.focus();
});
// 
// Output message to DOM
function outputMessage(message) {
  const div = document.createElement('div');
  div.classList.add('message');

  console.log(message);
cleanchat();
  const p = document.createElement('p');
  p.classList.add('meta');

  if  (message.currentUser.beast == undefined) {
    p.innerText = message.messageObject.username;
    p.innerHTML += `<span>${message.messageObject.time}
    </span>`;
   }

 else {
  p.innerText = message.currentUser.beast + " " +message.messageObject.username;
  p.innerHTML += `<span>${message.messageObject.time}</span>`;
 }

  div.appendChild(p);

  const para = document.createElement('p');
  para.classList.add('text');
  para.innerText = message.messageObject.text;

  div.appendChild(para);
  document.querySelector('.chat-messages').appendChild(div);


}


// Add room name to DOM
function outputRoomName(room) {
  roomName.innerText = room;
}

// Add users to DOM
function outputUsers(users) {
  userList.innerHTML = '';
  users.forEach((user) => {
    const li = document.createElement('li');
    
    li.innerHTML = `<img src="https://i.pinimg.com/736x/d7/7f/f9/d77ff9ceb27d06353cab3db955a189d6.jpg"> <p>` + user.beast + `</p><p>` + user.username + `</p>`;
    userList.appendChild(li);
    
  });
  addleave()
}
function addleave() {
    const leave = document.createElement('li');
    leave.innerHTML = ` <a href="index.html" id="leavebtn" class="leavebtn">Leave Room</a>`
    userList.appendChild(leave);
}


document.getElementById("catbutton").addEventListener("click", load_pic);

  async function load_pic() {
    const url = 'https://cataas.com/cat'
    const options = {
        method: "GET"
    }

    let response = await fetch(url, options)

    if (response.status === 200) {
        
        const imageBlob = await response.blob()
        const imageObjectURL = URL.createObjectURL(imageBlob);

        const image = document.createElement('img')
        image.src = imageObjectURL
       
        const container = document.querySelector('.chat-messages')
        container.append(image)
       cleanchat();
  }
    else {
        console.log("HTTP-Error: " + response.status)
    }
    chatMessages.scrollTop = chatMessages.scrollHeight;
}
function cleanchat() {
  var numb = document.querySelector('.chat-messages').childElementCount;
maxnumb = document.querySelector('.chat-messages');
  console.log(numb);

if (numb > 19) {
maxnumb.removeChild(maxnumb.firstChild);
console.log("cleaning messages");
 } else {
console.log("cleaning messages soon");
}
}