<?php

/**
 * Функция производит следующие действия со ссылкой:
 * 1) удаляет параметры со значением “3”;
 * 2) сортирует параметры по значению;
 * 3) добавляет параметр url со значением из переданной ссылки без параметров;
 * 4) формирует и возвращает валидный URL на корень указанного в ссылке хоста.
 *
 * @param string $url
 * @return string
 */
function changeUrl($url)
{
    $url_parts = parse_url($url);
    parse_str($url_parts['query'], $params);
    // 1
    $params = array_filter($params, function ($val) {
        return $val !== '3';
    });
    // 2
    asort($params, SORT_NUMERIC);
    // 3
    $params['url'] = $url_parts['path'];
    // 4
    $url_parts['scheme'] = isset($url_parts['scheme']) ? $url_parts['scheme'] . '://' : '';

    return $url_parts['scheme'] . $url_parts['host'] . '/?' . http_build_query($params);
}
