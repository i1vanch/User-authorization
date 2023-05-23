<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Authorization</title>
    <link rel="stylesheet" href="./index.css">
</head>
<body>
    <div class="app">
        <form id="loginForm" action="login.php" method="POST" class="form">
            <h1 class="title">Авторизация</h1>
            <input type="text" id="username" name="username" class="input" placeholder="Логин" required>
            <input type="password" id="password" name="password" class="input" placeholder="Пароль" required>
            <button type="submit" class="auth_button">Войти</button>
            <div id="popup" class="popup hide"></div>
        </form>
    </div>
    <script src="index.js"></script>
</body>
</html>