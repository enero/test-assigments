<?php

namespace Task3\Storage;

use Task3\Contracts\StorageContract;
use Task3\Models\ArticleModel;
use Task3\Models\UserModel;

/**
 * Класс хранилища статей.
 *
 * @package Task3\Storage
 */
class ArticleStorage implements StorageContract
{
    /**
     * @var ArticleModel[] коллекция сохраненных статей
     */
    private static $storedArticles = [];

    /**
     * Добавить статью.
     *
     * @param string $title Заголовок
     * @param string $text Содержание
     * @param UserModel $author Автор
     * @return ArticleModel
     */
    public static function add($title, $text, UserModel $author)
    {
        echo $id = count(static::$storedArticles) + 1;
        static::$storedArticles[$id] = new ArticleModel($id, $title, $text, $author);

        return static::$storedArticles[$id];
    }

    /**
     * Получить все статьи.
     *
     * @return ArticleModel[]
     */
    public static function getAll()
    {
        return static::$storedArticles;
    }

    /**
     * Получить статью по идентификатору.
     *
     * @param int $id Идентификатор
     * @return ArticleModel|null
     */
    public static function getById($id)
    {
        return static::$storedArticles[$id] ?? null;
    }

    /**
     * Получить все статьи автора.
     *
     * @param UserModel $author Автор
     * @return ArticleModel[]
     */
    public static function getByAuthor(UserModel $author)
    {
        return array_filter(static::$storedArticles, function (ArticleModel $article) use ($author) {
            return $article->getAuthor()->getId() === $author->getId();
        });
    }
}