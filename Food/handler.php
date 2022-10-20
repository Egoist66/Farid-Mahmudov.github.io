<?php 

// header('Content-Type: application/json; charset=utf-8');

// $input = json_decode(file_get_contents("php://input"), true);
// $response = '';



// if(trim($input["name"]) === "Farid Makhmudov" && trim($input["phone"]) === "111"){
//     $response = array(
//         "Data" => "Valid",
//         "User" => " User is successfully saved",
//         "Status" => "200",
//     );

//     echo json_encode($response);
// }
// else {
//     $response = array(
//         "Data" => "InValid",
//         "User" => " User is not saved",
//         "Status" => "404"
//     );

    
//     echo json_encode($response);
// }


$post_data = array(
"name" => $_POST['name'],
"phone" => $_POST['phone'],
);


$json_parsed_data = json_encode($post_data);

echo $json_parsed_data;