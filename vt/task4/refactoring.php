<?php

/**
 * Загрузить данные пользователей.
 *
 * @param string $userIds
 * @return array
 */
function load_users_data($userIds)
{
    $db = mysqli_connect("localhost", "root", "123123", "database");

    $userIdsArr = explode(',', $userIds);
    $userIdsArr = array_filter($userIdsArr, function($value) {
        return filter_var($value, FILTER_VALIDATE_INT) !== false;
    });
    $userIds = implode(',', $userIdsArr);

    $data = [];
    $sql = mysqli_query($db, "SELECT `id`, `name` FROM `users` WHERE `id` IN (" . $userIds . ")");
    while ($obj = $sql->fetch_object()) {
        $data[$obj->id] = $obj->name;
    }

    mysqli_close($db);

    return $data;
}

// Как правило, в $_GET['user_ids'] должна приходить строка
// с номерами пользователей через запятую, например: 1,2,17,48
$data = load_users_data($_GET['user_ids']);
foreach ($data as $userId => $name) {
    echo '<a href="/show_user.php?id=' . htmlspecialchars($userId) . '">' . htmlspecialchars($name) . '</a>';
}