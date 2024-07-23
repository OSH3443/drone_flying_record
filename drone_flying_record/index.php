<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $config = @parse_ini_file('./config.txt');

    if (!$config) {
        $error = "설정 파일이 없거나 읽을 수 없습니다.";
    } else {

        $username = $_POST['username'];
        $password = $_POST['password'];

        if ($username === $config['username'] && $password === $config['password']) {
            $_SESSION['logged_in'] = true;
            header('Location: ./flyingRecord.html');
            exit();
        } else {
            $error = "아이디 또는 비밀번호가 올바르지 않습니다.";
        }
    }
}
?>

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>METARPAS_FLIGHT_LOG</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f0f0f0;
        }
        form {
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            width: 90%;
            max-width: 400px;
        }
        label {
            display: block;
            margin-bottom: 8px;
        }
        input[type="text"],
        input[type="password"] {
            width: calc(100% - 20px);
            padding: 8px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 16px;
        }
        input[type="submit"] {
            width: 100%;
            padding: 10px;
            margin-top: 10px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 4px;
            font-size: 18px;
            cursor: pointer;
        }
        input[type="submit"]:hover {
            background-color: #0056b3;
        }
        p.error-message {
            color: red;
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <?php if (isset($error)): ?>
        <p class="error-message"><?php echo $error; ?></p>
    <?php endif; ?>
    <form method="post">
        <label for="username">아이디:</label>
        <input type="text" id="username" name="username" required><br><br>
        <label for="password">비밀번호:</label>
        <input type="password" id="password" name="password" required><br><br>
        <input type="submit" value="로그인">
    </form>
</body>
</html>