document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); 
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'login.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            let response = JSON.parse(xhr.responseText);
            if (response.success) {
                
                displayUserInfo(response.user);
                showSuccessMessage();
            } else {
                displayErrorMessage(response.message);
            };
        };
    };
    xhr.send('username=' + encodeURIComponent(username) + '&password=' + encodeURIComponent(password));
});

function showSuccessMessage() {
    const popup = document.getElementById('popup');
    popup.innerHTML = 'Авторизация прошла успешно <span class="close-btn" onclick="closePopup()">×</span>';
    popup.classList.remove("hide");
    
    setTimeout(function() {
        popup.classList.add("hide");
    }, 10000000);
};

function displayErrorMessage(message) {
    const errorDiv = document.getElementById('popup');
    errorDiv.innerHTML = `${message} <span class="close-btn" onclick="closePopup()">×</span>`;
    errorDiv.classList.remove('hide');
};

function closePopup() {
    const error = document.getElementById("popup");
    if (!error.classList.contains('hide')) {
        error.classList.add("hide");
    };
};

const auth_button = document.querySelector('.auth_button');
auth_button.onclick = () =>{
    setTimeout(function() {
        closePopup();
    }, 5000);
};

setTimeout(function() {
    closePopup();
}, 5000);

function displayUserInfo(user) {
    const app = document.querySelector('.app');
    app.style.backgroundImage = "url('./img/user_back.jpg')";
    app.style.alignItems = "center";
    app.innerHTML = '<div class="box_user"><h2>Добро пожаловать, ' + user.username + '!</h2>' + '<img class="avatar" src="' + user.photo + '" alt="Фото">' + '<p>Дата рождения: ' + user.birthdate + '</p>' + '<button id="logoutButton" class="logout_btn">Выйти</button> '+' <div id="popup" class="popup hide"> </div> ';

    document.getElementById('logoutButton').addEventListener('click', function() {
        window.location.href = 'logout.php';
    });
};

