<!DOCTYPE html>
<head>
    <title>Verification</title>
</head>
<body>
    <h1>Welcone {{ $user->fname }}</h1>
    <p>your verification code is {{ $user->activation_code }}</p>
</body>