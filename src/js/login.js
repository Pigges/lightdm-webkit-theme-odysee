setAvatar(lightdm.users[0].image)
setUsername(lightdm.users[0].display_name.toUpperCase());

function setAvatar(avatar) {
    let img = document.createElement('img');
    img.src = avatar;
    document.getElementById('user_avatar').appendChild(img);
}

function setUsername(username) {
    let uname = document.createElement('p');
    uname.innerHTML = username;
    document.getElementById('username').appendChild(uname);
}

