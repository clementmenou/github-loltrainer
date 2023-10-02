<?php
$json = json_decode(file_get_contents('../players_datas/cam.json'));

$input_data = file_get_contents('php://input');

if(isset($input_data)){ // If value recieved
    // Transform in STRING
    $datas = json_decode($input_data);
    
    // Split datas to be more understandable
    $camDatas = $datas->camDatas;
    $camId = $datas->camId;
    
    // Update values
    $json[$camId]->key = $camDatas->key;
    $json[$camId]->input = $camDatas->input;
    
    // Transform back in JSON
    $json = json_encode($json);

    // Put content in .json
    file_put_contents('../players_datas/cam.json', $json);
}