<?php

namespace Task3\Models;

/**
 * Класс модели пользователя.
 *
 * @method getId()
 * @method getName()
 *
 * @package Task3\Models
 */
class UserModel extends AbstractModel
{
    /**
     * @var int Идентификатор
     */
    protected $id;
    /**
     * @var string Имя
     */
    protected $name;

    /**
     * @param int $id
     * @param string $name
     */
    public function __construct($id, $name)
    {
        $this->id = $id;
        $this->name = $name;
    }
}