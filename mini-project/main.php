<?php
if (isset($_POST['data'])) {
    //get data
    $data = explode(",", $_POST['data']);
    //create php object
    $obj = (object)[
        "dateExpose" => $data[0],
        "Sujet" => $data[1],
        "Tags" => $data[2],
        "lien" => $data[3],
        "Membres" => $data[4]
    ];

    //stock users.json content to users variable
    $users = file_get_contents("users.json");

    //convert json data to php table
    $tempArray = json_decode($users, true);

    array_push($tempArray, $obj);

    //convert to json
    $newData = json_encode($tempArray);

    //write object in file
    file_put_contents("users.json", $newData);

    echo "Ajouter avec success";
} else
    echo "ERROR!!!!!";
