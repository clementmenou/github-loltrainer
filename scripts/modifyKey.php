<?php
$json = json_decode(file_get_contents('../players_datas/keys.json'));

$input_data = file_get_contents('php://input');

if(isset($input_data)){ // If value recieved
    // Transform in STRING
    $datas = json_decode($input_data);
    
    // Split datas to be more understandable
    $keyDatas = $datas->keyDatas;
    $keyId = $datas->keyId;
    
    // Update values
    $json[$keyId]->key = $keyDatas->key;
    $json[$keyId]->input = $keyDatas->input;
    
    // Transform back in JSON
    $json = json_encode($json);

    // Put content in .json
    file_put_contents('../players_datas/keys.json', $json);
}