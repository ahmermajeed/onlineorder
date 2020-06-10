<?php
/**
 * @see https://github.com/Edujugon/PushNotification
 */

return [
    'gcm' => [
        'priority' => 'normal',
        'dry_run' => false,
        'apiKey' => 'My_ApiKey',
    ],
    'fcm' => [
        'priority' => 10,
        'dry_run' => false,
        'apiKey' => 'AAAAQx7XXKs:APA91bF3j5qAb6B7EQWSOYwy-P6J0JoPFTqb9t55Lr2wA188VzP4Ibht7_MSeik2-4ksGavileLwtZlgwXgV9IQpAfTq89vTUtmhjvxfZrmgzNi53KhGt3raQ5FycZKGXqrhBwywUTqf',
    ],
    'apn' => [
        'certificate' => __DIR__ . '/iosCertificates/apns-dev-cert.pem',
        'passPhrase' => 'secret', //Optional
        'passFile' => __DIR__ . '/iosCertificates/yourKey.pem', //Optional
        'dry_run' => true,
    ],
];
