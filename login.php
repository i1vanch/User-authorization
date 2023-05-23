<?php
session_start();
$username = $_POST['username'];
$password = $_POST['password'];

$server_name = 'localhost';
$db_username = 'root';
$db_password = '1111';
$dbname = 'form';

$conn = new mysqli($server_name, $db_username, $db_password, $dbname);
if ($conn->connect_error) {
    die('Ошибка подключения к базе данных: ' . $conn->connect_error);
};

// Подготовленный запрос для выборки пользователя из базы данных
$stmt = $conn->prepare('SELECT * FROM users WHERE username = ?');
$stmt->bind_param('s', $username);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 1) {
    $row = $result->fetch_assoc();
    if ($password === $row['password']) {
        $_SESSION['user'] = array(
            'id' => $row['id'],
            'username' => $row['username'],
            'photo' => $row['photo'],
            'birthdate' => $row['birthdate']
        );
        $response = array('success' => true, 'user' => $_SESSION['user']);
    } else {
        $response = array('success' => false, 'message' => 'Неверный логин или пароль');
    }
} else {
    $response = array('success' => false, 'message' => 'Неверный логин или пароль');
}

echo json_encode($response);
$stmt->close();
$conn->close();
?>
