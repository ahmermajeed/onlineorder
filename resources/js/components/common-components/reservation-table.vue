<template>
    <div>
        <section class="section-fullwidth reservation-section">
            <div class="container">
                <div class="deal-content">
                    <div class="offers-head">
                         <h2 class="text-center">Book your Reservation</h2>
                    </div>

                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-details">
                                <div class="row">
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label for="">Enter Booking Date</label>
                                            <date-picker v-model="time1" type="date" placeholder="Enter Booking Date"></date-picker>
                                        </div>                      
                                    </div>
                                    <div class="col-md-3 select-time">
                                        <div class="form-group">
                                            <label for="">Enter Booking Time</label>
                                            <date-picker v-model="time2" type="time" placeholder="Enter Booking Time"></date-picker>
                                        </div>                      
                                    </div>
                                    <div class="col-md-3 select-person">
                                        <div class="form-group">
                                            <label for="">Enter No. of Persons</label>
                                            <span><i class="fas fa-user-friends"></i></span>
                                            <select  class="form-control" id="">
                                              <option>1 person</option>
                                              <option>2 people</option>
                                              <option>3 people</option>
                                              <option>4 people</option>
                                              <option>5 people</option>
                                            </select>   
                                        </div>                      
                                    </div>
                                    <div class="col-md-3">
                                        <label for="">&nbsp;</label>
                                        <button class="btn btn-rounded-danger btn-block" v-on:click="timeSection = !timeSection">
                                            Book Your Table
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div class="select-reservation-time boxed" v-if="timeSection" id="hide">
                                <h6>Select a Time:</h6>
                                <input type="radio" id="time1" name="time" value="time1" @change="showDinerDetail" v-model="dinerDetailsTime">
                                <label for="time1"><i class="fas fa-clock mr-2"></i>7:30 PM</label>

                                <input type="radio" id="time2" name="time" value="time2" @change="showDinerDetail" v-model="dinerDetailsTime">
                                <label for="time2"><i class="fas fa-clock mr-2"></i>8:00 PM </label>

                                <input type="radio" id="time3" name="time" value="time3" @change="showDinerDetail" v-model="dinerDetailsTime">
                                <label for="time3"><i class="fas fa-clock mr-2"></i>8:30 PM </label>
                            </div>

                            <div class="diner-details" v-if="dinerDetails">
                                <p class="count-down-timer">We’re holding this table for you for
                                    <Countdown deadline="June 19, 2021"></Countdown>
                                </p>
                                <h3>Diner Details</h3>
                                <div class="row">
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label for="">First Name</label>
                                            <input type="text" class="form-control" placeholder="Enter your First Name">
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label for="">Last Name</label>
                                            <input type="text" class="form-control" placeholder="Enter your Last Name">
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label for="">Phone Number</label>
                                            <input type="number" class="form-control" placeholder="Enter your Phone Number">
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label for="">Email Address</label>
                                            <input type="email" class="form-control" placeholder="Enter your Email Address">
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label for="">Special occasion:</label>

                                            <select name="" id="" class="form-control">
                                                <option value="default">Select an occasion (optional)</option>
                                                <option value="birthday">Birthday</option><option value="anniversary">Anniversary</option>
                                                <option value="date">Date night</option>
                                                <option value="business_meal">Business Meal</option>
                                                <option value="special_occasion">Celebration</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label for="">Add a special request:</label>

                                            <textarea class="form-control" placeholder="Add a special request (optional)" rows="1">
                                            </textarea>
                                        </div>
                                    </div>
                                    <div class="col-md-12 custom-checkbox-input">
                                        <div class="form-group">
                                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                            <label class="form-check-label" for="defaultCheck1">
                                                Sign me up to receive dining offers and news from this restaurant by email.
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-md-12 custom-checkbox-input">
                                        <div class="form-group">
                                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck2">
                                            <label class="form-check-label" for="defaultCheck2">
                                                Sign me up to receive dining offers and news from OpenTable by email.
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-md-12 custom-checkbox-input">
                                        <div class="form-group">
                                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck3">
                                            <label class="form-check-label" for="defaultCheck3">
                                                Yes, I want to get text updates and reminders about my reservations.
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <label for="">&nbsp;</label>
                                        <button class="btn btn-rounded-danger btn-block">
                                            Complete Reservation
                                        </button>
                                    </div>
                                    <div class="col-md-12 reservation-agreement">
                                        <p>By clicking “Complete reservation” you agree to the <a href="javascript:;">OpenTable Terms of Use</a> and <a href="javascript:;">Privacy Policy</a>. Standard text message rates may apply. You may opt out of receiving text messages at any time.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import DatePicker from 'vue2-datepicker';
    import Countdown from 'vuejs-countdown';
    import 'vue2-datepicker/index.css';


    export default {
        components: {
            DatePicker, 
            Countdown,
        },
        data: function () {
            return {
                time1: null,
                time2: null,
                timerCount: 60,
                dinerDetails: false,
                dinerDetailsTime:'',
                timeSection: false
            };
        },
        mounted() {
        },
        methods: {
            showDinerDetail() {
                let self = this;
                    if(self.dinerDetailsTime == "time1") {
                        self.dinerDetails = true
                    }
                    else {
                        self.dinerDetails = false
                    }   
                },
            },

    }
</script>