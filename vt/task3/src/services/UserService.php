<?php

namespace Task3\Services;

use Task3\Models\UserModel;
use Task3\Storage\UserStorage;

/**
 * Класс сервиса пользователя.
 *
 * @package Task3\Services
 */
class UserService
{
    /**
     * Добавить пользователя.
     *
     * @param string $name Имя
     * @return UserModel
     */
    public function create($name)
    {
        return UserStorage::add($name);
    }
}