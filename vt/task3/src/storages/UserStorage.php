<?php

namespace Task3\Storage;

use Task3\Contracts\StorageContract;
use Task3\Models\UserModel;

/**
 * Класс хранилища пользователей.
 *
 * @package Task3\Storage
 */
class UserStorage implements StorageContract
{
    /**
     * @var UserModel[] коллекция сохраненных пользователей
     */
    private static $storedUsers = [];

    /**
     * Добавить пользователя.
     *
     * @param string $name Имя
     * @return UserModel
     */
    public static function add($name)
    {
        $id = count(static::$storedUsers) + 1;
        static::$storedUsers[$id] = new UserModel($id, $name);

        return static::$storedUsers[$id];
    }

    /**
     * Получить всех пользователей.
     *
     * @return UserModel[]
     */
    public static function getAll()
    {
        return static::$storedUsers;
    }

    /**
     * Получить пользователя по идентификатору.
     *
     * @param int $id Идентификатор
     * @return UserModel|null
     */
    public static function getById($id)
    {
        return static::$storedUsers[$id] ?? null;
    }
}