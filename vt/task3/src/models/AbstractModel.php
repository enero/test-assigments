<?php

namespace Task3\Models;

/**
 * Абстрактный класс модели.
 *
 * @package Task3\Models
 */
abstract class AbstractModel
{
    /**
     * @param string $name Название метода
     * @param array $arguments Аргументы метода
     * @return mixed
     * @throws \ErrorException
     */
    public function __call($name, array $arguments = [])
    {
        if (substr($name, 0, 3) === 'get') {
            $field = strtolower(substr($name, 3));
            try {
                return $this->$field;
            } catch (\ErrorException $e) {
                throw $e;
            }
        } else {
            throw new \ErrorException('Вызван несуществующий метод');
        }
    }
}