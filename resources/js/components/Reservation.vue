<template>
    <div>
        <header-menu></header-menu>
        <slider></slider>
        <div class="container">
            <div class="row">
                <div class="col-lg-12 ml-auto mr-auto">
                    <div class="D">
                        <h2 class="text-uppercase text-center res">Book a table</h2>
                        <p class="description">
                            Let us know when you're arriving so that we may get the pots brewing with a smile of anticipation, and leave no stone unturned to elevate your experience to nothing but memorable. Fill up the form given below and feel free to call us to let us know if you need anything else from us before your arrival. Your wish is our command! A Bientôt!
                        </p>
                    </div>

                    <form role="form" method="post" class="reservation-form" id="reservation-form" action="" style="padding-top:10px;" novalidate="novalidate">
                        <div class="row">
                            <div id="reservationMessage" class="col-md-12 col-xs-12 col-sm-12" style="padding:5px 15px 5px 15px; background-color: cornflowerblue; color:white; margin-bottom:10px;">Dear Patrons, online reservation for same day is currently not available on <u>Fridays</u> and <u>Saturdays</u>. Kindly call the restaurant directly after 5 P.M. on these days to reserve a table. Thank you.</div>
                            <div class="col-md-6">
                                <div class="input-group date">
                                    <input type="text" class="form-control datepicker" data-date-format="dd/mm/yyyy" name="r_date" id="bookingDate" placeholder="Date">
                                    <div class="input-group-addon">
                                        <span class="ion-calendar" style="font-size: 46px;"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="input-group">
                                    <input type="text" class="form-control" id="userName" name="r_name" placeholder="Name">
                                    <div class="input-group-addon">
                                        <span class="ion-person" style="font-size: 46px;"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="input-group">
                                    <input type="text" class="form-control" id="EmailId" name="r_email" placeholder="Email Id">
                                    <div class="input-group-addon">
                                        <span class="ion-ios-email" style="font-size: 46px;"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="input-group clockpicker">
                                    <input type="text" class="form-control" name="r_time" id="time" placeholder="Time">
                                    <span class="input-group-addon">
                                        <span class="ion-ios-clock" style="font-size: 46px;"></span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="input-group">
                                    <input type="text" class="form-control" name="r_guest" id="guestCount" placeholder="Guest Count">
                                    <div class="input-group-addon">
                                        <span class="ion-person" style="font-size: 46px;"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="input-group">
                                    <input type="text" class="form-control" name="r_phone_number" id="phoneNo" placeholder="Phone Number">
                                    <div class="input-group-addon">
                                        <span class="ion-android-call" style="font-size: 46px;"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span id="status"></span>
                        <center>
                            <input type="submit" class="btn btn-xl btn-dark" style="width: 202px;" name="r_submit" value="Book Now" onclick="processForm()"><span id="status"></span>

                        </center>

                    </form>
                </div>
            </div>
        </div>
        <footer-menu></footer-menu>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
