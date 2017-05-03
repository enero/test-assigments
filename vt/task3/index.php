<?php

require "vendor/autoload.php";

use Task3\Services\UserService;
use Task3\Services\ArticleService;

$userService = new UserService();
$articleService = new ArticleService();

$user1 = $userService->create('Иванов Иван');
$user2 = $userService->create('Петров Петр');

// Возможность для пользователя создать новую статью
$article1 = $articleService->create('Статья 1', 'Содержание 1', $user1);
$article2 = $articleService->create('Статья 2', 'Содержание 2', $user1);
$article3 = $articleService->create('Статья 3', 'Содержание 3', $user2);

echo '========== Создание статей 1, 2 и 3 ==========' . "\n";
var_dump($article1);
var_dump($article2);
var_dump($article3);

// Возможность получить автора статьи
echo '========== Автор статьи 3 ==========' . "\n";
var_dump($article3->getAuthor());

// Возможность получить все статьи конкретного пользователя
$allArticlesUser1 = $articleService->getByAuthor($user1);

echo '========== Статьи пользователя 1 ==========' . "\n";
var_dump($allArticlesUser1);

// Возможность сменить автора статьи
foreach ($allArticlesUser1 as $article) {
   $article->setAuthor($user2);
}

echo '========== Для статей поменяли автора на пользователя 2 ==========' . "\n";
var_dump($allArticlesUser1);
