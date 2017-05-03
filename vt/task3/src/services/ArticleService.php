<?php

namespace Task3\Services;

use Task3\Models\UserModel;
use Task3\Models\ArticleModel;
use Task3\Storage\ArticleStorage;

/**
 * Класс сервиса статей.
 *
 * @package Task3\Services
 */
class ArticleService
{
    /**
     * Добавить статью.
     *
     * @param string $title Заголовок
     * @param string $text Содержание
     * @param UserModel $author Автор
     * @return ArticleModel
     */
    public function create($title, $text, UserModel $author)
    {
        return ArticleStorage::add($title, $text, $author);
    }

    /**
     * Получить статьи автора.
     *
     * @param UserModel $author Автор
     * @return ArticleModel[]
     */
    public function getByAuthor($author)
    {
        return ArticleStorage::getByAuthor($author);
    }
}