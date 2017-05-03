<?php

namespace Task3\Models;

/**
 * Класс модели статьи.
 *
 * @method getId()
 * @method getTitle()
 * @method getText()
 *
 * @package Task3\Models
 */
class ArticleModel extends AbstractModel
{
    /**
     * @var int Идентификатор
     */
    protected $id;
    /**
     * @var string Заголовок
     */
    protected $title;
    /**
     * @var string Содержание
     */
    protected $text;
    /**
     * @var UserModel Автор
     */
    protected $author;

    /**
     * @param int $id
     * @param string $title
     * @param string $text
     * @param UserModel $author
     */
    public function __construct($id, $title, $text, UserModel $author)
    {
        $this->id = $id;
        $this->title = $title;
        $this->text = $text;
        $this->author = $author;
    }

    /**
     * Установить автора.
     *
     * @param UserModel $author
     */
    public function setAuthor(UserModel $author)
    {
        $this->author = $author;
    }

    /**
     * Получить автора.
     *
     * @return UserModel
     */
    public function getAuthor()
    {
        return $this->author;
    }
}