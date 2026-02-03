<?php
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get JSON input
    $data = json_decode(file_get_contents("php://input"), true);

    $name = strip_tags(trim($data["name"]));
    $phone = strip_tags(trim($data["phone"]));
    $email = filter_var(trim($data["email"]), FILTER_SANITIZE_EMAIL);

    // Validate data
    if (empty($name) || empty($phone) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(["message" => "Invalid input. Please check your details."]);
        exit;
    }

    // Email Details
    $recipient = "fionaorganics@gmail.com";
    $subject = "New Lead from Fiona Organics Website";
    $email_content = "Name: $name\n";
    $email_content .= "Phone: $phone\n";
    $email_content .= "Email: $email\n";
    
    $email_headers = "From: $name <$email>";

    // Send Email
    if (mail($recipient, $subject, $email_content, $email_headers)) {
        http_response_code(200);
        echo json_encode(["message" => "Thank you! Your request has been sent."]);
    } else {
        http_response_code(500);
        echo json_encode(["message" => "Oops! Something went wrong and we couldn't send your message."]);
    }

} else {
    http_response_code(403);
    echo json_encode(["message" => "There was a problem with your submission, please try again."]);
}
?>
