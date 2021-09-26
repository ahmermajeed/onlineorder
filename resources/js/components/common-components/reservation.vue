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
							<form @submit.prevent="onCustomerReservation()">
								<div class="form-details">
									<div class="row">
										<div class="col-md-3">
											<div class="form-group">
												<label for="">Enter Booking Date</label>
												<!-- v-model="formData.booking_date" -->
												<date-picker placeholder="Enter Booking Date" v-model="formData.booking_date" 
												:default-value="new Date()" ></date-picker>
											</div>                      
										</div>
										<!-- <div class="col-md-3 select-time">
											<div class="form-group">
												<label for="">Enter Booking Time</label>
												<date-picker v-model="time2" type="time" placeholder="Enter Booking Time"></date-picker>
											</div>                      
										</div> -->
										<div class="col-md-3 select-person">
											<div class="form-group">
												<label for="">Enter No. of Persons</label>
												<span><i class="fas fa-user-friends"></i></span>
												<select  class="form-control" id="" v-model="formData.persons">
												<option value="1">1 person</option>
												<option value="2">2 people</option>
												<option value="3">3 people</option>
												<option value="4">4 people</option>
												<option value="5">5 people</option>
												</select>   
											</div>                      
										</div>
										<div class="col-md-3">
											<label for="">&nbsp;</label>
											<a class="btn btn-rounded-danger btn-block" v-on:click="checkDate()">
												Book Your Table
											</a>
										</div>
									</div>
								</div>

								<div class="select-reservation-time boxed" id="hide"  v-if="timeSection">
									<h6>Select a Time:</h6>
									<div class="form-group" v-for="(slot, index) in timeSlot">
										<input class="inputTime" type="radio" :id="'time' + index" name="time" :value="slot" @change="showDinerDetail" v-model="formData.booking_time">
										<label class="labelTime" :for="'time' + index"><i class="fas fa-clock mr-2"></i>{{ slot }}</label>
									</div>
								</div>

								<!--  -->
								<div class="diner-details" v-if="dinerDetails">
									<p class="count-down-timer">We’re holding this table for you for
										<Countdown deadline="June 19, 2021"></Countdown>
									</p>
									<h3>Diner Details</h3>
									<div class="row">
										<div class="col-md-3">
											<div class="form-group">
												<label for="">First Name</label>
												<input type="text" class="form-control" placeholder="Enter your First Name" v-model="formData.firstname">
											</div>
										</div>
										<div class="col-md-3">
											<div class="form-group">
												<label for="">Last Name</label>
												<input type="text" class="form-control" placeholder="Enter your Last Name" v-model="formData.lastname">
											</div>
										</div>
										<div class="col-md-3">
											<div class="form-group">
												<label for="">Phone Number</label>
												<input type="number" class="form-control" placeholder="Enter your Phone Number" v-model="formData.phone">
											</div>
										</div>
										<div class="col-md-3">
											<div class="form-group">
												<label for="">Email Address</label>
												<input type="email" class="form-control" placeholder="Enter your Email Address" v-model="formData.email">
											</div>
										</div>
										<div class="col-md-3">
											<div class="form-group">
												<label for="">Special occasion:</label>

												<select name="" id="" class="form-control" v-model="formData.special_occasion">
													<option value="default">Select an occasion (optional)</option>
													<option value="1">Birthday</option>
													<option value="2">Anniversary</option>
													<option value="3">Date night</option>
													<option value="4">Business Meal</option>
													<option value="5">Celebration</option>
												</select>
											</div>
										</div>
										<div class="col-md-3">
											<div class="form-group">
												<label for="">Add a special request:</label>
												<textarea class="form-control" placeholder="Add a special request (optional)" rows="1" v-model="formData.special_request">
												</textarea>
											</div>
										</div>
										<div class="col-md-12 custom-checkbox-input">
											<div class="form-group">
												<input class="form-check-input" type="checkbox" value="" id="defaultCheck1" v-model="formData.restaurant_newsletter">
												<label class="form-check-label" for="defaultCheck1">
													Sign me up to receive dining offers and news from this restaurant by email.
												</label>
											</div>
										</div>
										<div class="col-md-12 custom-checkbox-input">
											<div class="form-group">
												<input class="form-check-input" type="checkbox" value="" id="defaultCheck2" v-model="formData.opentable_newsletter">
												<label class="form-check-label" for="defaultCheck2">
													Sign me up to receive dining offers and news from OpenTable by email.
												</label>
											</div>
										</div>
										<div class="col-md-12 custom-checkbox-input">
											<div class="form-group">
												<input class="form-check-input" type="checkbox" value="" id="defaultCheck3" v-model="formData.reservations_reminder">
												<label class="form-check-label" for="defaultCheck3">
													Yes, I want to get text updates and reminders about my reservations.
												</label>
											</div>
										</div>
										<div class="col-md-3">
											<label for="">&nbsp;</label>
											<button class="btn btn-rounded-danger btn-block" type="submit">
												Complete Reservation
											</button>
										</div>

										<div class="col-md-12 reservation-agreement">
											<p>By clicking “Complete reservation” you agree to the <a href="javascript:;">OpenTable Terms of Use</a> and <a href="javascript:;">Privacy Policy</a>. Standard text message rates may apply. You may opt out of receiving text messages at any time.</p>
										</div>
										<div class="alert alert-success" role="alert" v-if="successMessage">
											{{ successMessage }}
										</div>
										<div class="alert alert-danger" role="alert" v-if="errorMessage">
											{{ errorMessage}}
										</div>
									</div>
								</div>
							</form>
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
        data() {
            return {
                dinerDetails    : false,
                dinerDetailsTime: '',
                timeSection     : false,
				formData: {
                    booking_date			: new Date(),
                    persons     			: null,
					booking_time 			: null,
                    firstname   			: '',
                    lastname    			: '',
                    phone       			: '',
					email                   : '',
					special_occasion        : '',
					special_request         : '',
					restaurant_newsletter   : 0,
					opentable_newsletter    : 0,
					reservations_reminder   : 0
                },
				timeSlot : [],
				successMessage : null,
				errorMessage : null
            };
        },
        mounted() {
		},
        methods: {
			showDinerDetail() {
				let self = this;
				if(self.formData.booking_time != null) {
					self.dinerDetails = true
				}
				else {
					self.dinerDetails = false
				}   
			},
			onCustomerReservation() {
				var self 	 = this;

				console.log(self.formData);
				axios.post('api/reservation', self.formData).then(response => {
				    self.loading 		= false;
				    response 			= response.data;
				    self.successMessage = response.message;
					console.log(self.successMessage);
				    setTimeout(function () {
				        self.successMessage = '';
				    }, 2000);

				}).catch(error => {
				    this.loading = false;
				    error = error.response.data;
				    let errors = error.error;
				});
			},

			checkDate() {
				this.calcTime();
			},
			calcTime() {
				this.timeSection = true; 
				let fromtime = '12:00:00';
				let totime 	 = '23:59:00';

				this.timeSlot = this.returnTimesInBetween(fromtime, totime);
			},
			returnTimesInBetween(start, end) {
				var timesInBetween = [];

				var startH 	= parseInt(start.split(":")[0]);
				var startM 	= parseInt(start.split(":")[1]);
				var endH 	= parseInt(end.split(":")[0]);
				var endM 	= parseInt(end.split(":")[1]);

				if (startM == 30)
					startH++;

				for (var i = startH; i < endH; i++) {
					timesInBetween.push(i < 10 ? "0" + i + ":00" : i + ":00");
					timesInBetween.push(i < 10 ? "0" + i + ":30" : i + ":30");
				}

				timesInBetween.push(endH + ":00");
				if (endM == 30)
					timesInBetween.push(endH + ":30")

				let time = timesInBetween.map((timeString) => {
					let H = +timeString.substr(0, 2);
					let h = (H % 12) || 12;
					let ampm = H < 12 ? " AM" : " PM";
					return timeString = h + timeString.substr(2, 3) + ampm;
				});

				return time;
			}
        },
    }
</script>
<style scoped>

</style>