<!DOCTYPE html>
<html
    lang="en"
    xmlns="http://www.w3.org/1999/xhtml"
    xmlns:o="urn:schemas-microsoft-com:office:office"
>
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="x-apple-disable-message-reformatting" />
        <title>Reservation Email</title>
        <style>
            table,
            td,
            div,
            h1,
            p {
                font-family: Arial, sans-serif;
            }
            .reservation-details ul li {
                list-style: none;
                text-align: left;
                font-size: 15px;
            }
            .reservation-details ul {
                padding: 0;
            }
            @media screen and (max-width: 530px) {
                .unsub {
                    display: block;
                    padding: 8px;
                    margin-top: 14px;
                    border-radius: 6px;
                    background-color: #555555;
                    text-decoration: none !important;
                    font-weight: bold;
                }
                .col-lge {
                    max-width: 100% !important;
                }
                .get-direction-btn {
                    padding: 10px 6px !important;
                }
            }
            @media screen and (min-width: 531px) {
                .col-sml {
                    max-width: 27% !important;
                }
                .col-lge {
                    max-width: 73% !important;
                }
            }
        </style>
    </head>
    <body
        style="margin:0;padding:0;word-spacing:normal;background-color:cornsilk;background-position: center;"
    >
        <div
            role="article"
            aria-roledescription="email"
            lang="en"
            style="text-size-adjust:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;"
        >
            <table
                role="presentation"
                style="width:100%;border:none;border-spacing:0;"
            >
                <tr>
                    <td align="center" style="padding:0;">
                        <table
                            role="presentation"
                            style="width:auto;max-width:600px;border:none;border-spacing:0;text-align:left;font-family:Arial,sans-serif;font-size:16px;line-height:22px;color:#363636; margin: 50px;">
                            <tr>
                                <td
                                    style="padding:40px 30px 30px 30px;text-align:center;font-size:24px;font-weight:bold;    background: #ffff;">
                                    <a
                                        href="javascript:;" style="text-decoration:none;" ><img
                                        src="https://i.ibb.co/T2pk2KS/sen-logo.png"
                                        width="200"
                                        alt="Logo"
                                        style="width:80%;max-width:235px;height:auto;border:none;text-decoration:none;color:#ffffff;"/></a>
                                </td>
                            </tr>
                            <!-- <tr>
                                <td
                                    style="padding:0;font-size:24px;line-height:28px;font-weight:bold;"
                                >
                                    <a
                                        href="javascript:;"
                                        style="text-decoration:none;"
                                        ><img
                                            src="https://i.ibb.co/94qrLCd/banner.jpg"
                                            width="600"
                                            alt=""
                                            style="width:100%;height:auto;display:block;border:none;text-decoration:none;color:#363636;"
                                    /></a>
                                </td>
                            </tr> -->
                            <tr>
                                <td
                                    style="padding:35px 30px 11px 30px;font-size:0;background-color:#ffffff;border-bottom:1px solid #f0f0f5;border-color:rgba(201,201,207,.35);"
                                >
                                    <div
                                        style="display:inline-block;width:100%;text-align: center; vertical-align:top;padding-bottom:20px;font-family:Arial,sans-serif;font-size:16px;line-height:22px;color:#6b6b47;"
                                    >
                                        <h2 style="line-height: 1.2;">
                                            Thank you for your Booking request!
                                        </h2>
                                        <div class="reservation-details">
                                           <ul>
                                               <li>
                                                   <span><strong>Full Name:</strong></span>
                                                   <span>{{ $data['name'] }}</span>
                                               </li>
                                               <li>
                                                   <span><strong>Phone Number:</strong></span>
                                                   <span> {{ $data['phone_number'] }}</span>
                                               </li>
                                               <li>
                                                   <span><strong>Email Address:</strong></span>
                                                   <span>{{ $data['email'] }}</span>
                                               </li>
                                                <li>
                                                   <span><strong>Enter Booking Date:</strong></span>
                                                   <span>{{ $data['booking_date'] }}</span>
                                               </li>
                                               <li>
                                                    <span><strong>Enter Booking Time:</strong></span>
                                                    <span>{{ $data['booking_time'] }} /span>
                                                </li>
                                                <li>
                                                    <span><strong>No. of Persons:</strong></span>
                                                    <span>{{ $data['persons'] }}</span>
                                                </li>

                                           </ul>
                                       </div>
                                        <p>
                                            We are processing your booking. Please check your email for a booking confirmation from the resturant.
                                        </p>
                    
                                        <p style="margin:0;">
                                            <a
                                                class="get-direction-btn"
                                                href="javascript:;"
                                                style="background: orange; text-decoration: none; padding: 10px 65px; color: #ffffff; border-radius: 4px; display:inline-block; mso-padding-alt:0;text-underline-color:#ff3884"
                                                ><span
                                                    style="mso-text-raise:10pt;font-weight:bold;"
                                                    >Get Direction to Resturant!</span
                                                >
                                            </a>
                                        </p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td
                                    style="padding:30px;text-align:center;font-size:12px;background-color:#e5b052;color:#cccccc;"
                                >
                                    <p style="margin:0 0 8px 0;">
                                        <a
                                            href="http://www.Facebook.com/sentinal-e-pos"
                                            style="text-decoration:none;"
                                            target="_blank"
                                            ><img
                                                src="https://i.ibb.co/NV0N46k/facebook-icon.png"
                                                alt="f"
                                                style="display:inline-block;color:#cccccc; margin-right: 5px;"
                                        /></a>
                                        <a
                                            href="http://www.twitter.com/sentinal-e-pos"
                                            style="text-decoration:none;"
                                            target="_blank"
                                            ><img
                                                src="https://i.ibb.co/rmFbqwf/twitter.png"
                                                alt="t"
                                                style="display:inline-block;color:#cccccc; margin-right: 5px;"
                                        /></a>
                                        <a
                                            href="https://www.instagram.com/sentinal-e-pos/"
                                            style="text-decoration:none;"
                                            target="_blank"
                                            ><img
                                                src="https://i.ibb.co/fD8kkVD/instagram.png"
                                                alt="t"
                                                style="display:inline-block;color:#cccccc; margin-right: 5px;"
                                        /></a>
                                        <a
                                            href="https://www.youtube.com/channel/UCe2QlcYreItmdhgg2Q5DrIw"
                                            style="text-decoration:none;"
                                            target="_blank"
                                            ><img
                                                src="https://i.ibb.co/600dX8p/youtube.png"
                                                alt="t"
                                                style="display:inline-block;color:#cccccc; margin-bottom: -5px;"
                                        /></a>
                                    </p>
                                    <p
                                        style="margin:0;font-size:14px;line-height:20px; color: #fff;"
                                    >
                                        &reg; info@sentinal-e-pos.co, Sentinal-e-pos 2021<br /><a
                                            class="unsub"
                                            href="javascript:;"
                                            style="color:#cccccc;text-decoration:underline; color: #fff;">
                                            Copyright@sentinal-e-pos, All Right Reserved.</a
                                        >
                                    </p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </div>
    </body>
</html>
