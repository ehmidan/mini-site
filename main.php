<?php
if (isset($_POST['info'])) {
    $info = explode(",", $_POST['info']);
    //$data= 
    $data = (object)[
        "date expose" => $info[0],
        "sujet" => $info[1], "lien" => $info[2],
        "tags" => $_POST['tags'],
        "membres" => $_POST["membres"]
    ];

    $users = file_get_contents('users.json');


    /**Convert to array because array_push working with array**/
    $tempArray = json_decode($users, true);

    array_push($tempArray, $data);
    print_r($tempArray);
    echo '<hr>';

    $jsonData = json_encode($tempArray);

    file_put_contents('users.json', $jsonData);

    print($jsonData);
} else
    echo "No Names";
