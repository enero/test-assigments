<?php

namespace Task3\Contracts;

/**
 * Интерфейс хранилища.
 *
 * @package Task3\Contracts
 */
interface StorageContract
{
    /**
     * Получить все модели.
     */
    public static function getAll();

    /**
     * Получить модель по идентификатору.
     *
     * @param int $id Идентификатор
     */
    public static function getById($id);
}