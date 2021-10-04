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
							<div id="messages">
								<div class="alert alert-success" role="alert" v-if="successMessage">
									{{ successMessage }}
								</div>
								<div class="alert alert-danger" role="alert" v-if="errorMessage">
									{{ errorMessage}}
								</div>
							</div>
							<form @submit.prevent="validateBeforeSubmit()">
								<div class="form-details">
									<div class="row">
										<div class="col-md-3">
											<div class="form-group">
												<label for="">Enter Booking Date <span style="color:red">*</span></label>
												<datepicker placeholder="Enter Booking Date" @selected="selectedFromDate"
													:highlighted="highlighted" :format="customFormatter"
													class="form-control-datepicker"
													v-model="formData.booking_date"
													:disabled-dates="disabledDates">
												</datepicker>
											</div>                      
										</div>
										
										<div class="col-md-4 select-person">
											<div class="form-group">
												<label for="">Enter No. of Persons <span style="color:red">*</span></label>
												<span><i class="fas fa-user-friends"></i></span>
												<select  class="form-control" id="" v-model="formData.persons" >
													<option value="null" selected disabled>Select No Of Persons</option>
													<option v-for="(person, index) in noOfperson"  :value="person">{{ person }}</option>
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
									<h6>Select a Time: <span style="color:red">*</span></h6>
									<div class="form-group" v-for="(slot, index) in timeSlot">
										<input class="inputTime" type="radio" :id="'time' + index" name="time" :value="slot" @change="showDinerDetail" v-model="formData.booking_time">
										<label class="labelTime" :for="'time' + index"><i class="fas fa-clock mr-2"></i>{{ slot }}</label>
									</div>
								</div>

								<div class="diner-details" v-if="dinerDetails">
									<!-- <p class="count-down-timer">We’re holding this table for you for
										<Countdown deadline="June 19, 2021"></Countdown>
									</p> -->
									<h3>Diner Details</h3>
									<div class="row">
										<div class="col-md-3">
											<div class="form-group">
												<label for="">First Name <span style="color:red">*</span></label>
												<input type="text" class="form-control" placeholder="Enter your First Name" v-model="formData.firstname">
											</div>
										</div>
										<div class="col-md-3">
											<div class="form-group">
												<label for="">Last Name <span style="color:red">*</span></label>
												<input type="text" class="form-control" placeholder="Enter your Last Name" v-model="formData.lastname">
											</div>
										</div>
										<div class="col-md-3">
											<div class="form-group">
												<label for="">Phone Number <span style="color:red">*</span></label>
												<input type="number" class="form-control" placeholder="07XXXXXXXXX" v-model="formData.phone" >
											</div>
										</div>
										<div class="col-md-3">
											<div class="form-group">
												<label for="">Email Address <span style="color:red">*</span></label>
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
    import Countdown from 'vuejs-countdown';
	import Datepicker from 'vuejs-datepicker';

    export default {
        components: {
            Datepicker, 
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
				successMessage: null,
				errorMessage  : null,
				highlighted: {
                    "daysOfMonth": [
                        parseInt(moment(new Date()).format('DD'))
                    ]
                },
				disabledDates: {
					to: new Date(), // Disable all dates up to specific date
				},
				restaurantTimes: [],
				selectedTime   : null,
				noOfperson     : [],
            };
        },
        mounted() {
			this.getRestaurantTime();
			this.getRestaurantPersons();
		},
        methods: {
		 	selectedToDate(date){
                this.formData.to_date = moment(date).format('YYYY-MM-DD');
            },
            selectedFromDate(date){
                this.formData.from_date = moment(date).format('YYYY-MM-DD');
            },
            customFormatter(date) {
                return moment(date).format('DD, MMM YYYY');
            },
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

				axios.post('api/reservation', self.formData).then(response => {
					console.log('response');
					console.log(response);

				    self.loading 		= false;
				    response 			= response.data;
				    self.successMessage = response.message;
					self.scrollToTop();
					setTimeout(function () {
				        self.successMessage = '';
						self.resetForm
				    }, 3000);

				}).catch(error => {
					
					if (Object.keys(error.response.data).length > 0) {
						self.errorMessage = error.response.data.error.message;
						self.scrollToTop();
						setTimeout(function () {
							self.errorMessage = '';
						}, 5000);
						
						return;
					}
					
				});
			},
			checkDate() {
				var self 	 = this;
				let day = moment(this.formData.booking_date).format('dddd');
				this.restaurantTimes.forEach(function(item, index) {
					if (day == item.day) {
						self.selectedTime  = item
					}
				});
				
				if (Object.keys(self.selectedTime).length > 0) {
					if (self.selectedTime.shop_close == 1) {
						this.calcTime(self.selectedTime.start_time, self.selectedTime.end_time );
					} else {
						self.errorMessage = 'Sorry!!! Restaurant Is Close.';
						self.scrollToTop();
					}
				} else {
					self.errorMessage = 'Please Select Proper Booking Date.';
					self.scrollToTop();
				}
				setTimeout(function () {
					self.errorMessage = '';
				}, 3000);
				
			},
			calcTime(startTime = 0, endTime = 0) {
				this.timeSection = true; 
				if (startTime == 0 || endTime == 0) {
					return false;
				}
				this.timeSlot = this.returnTimesInBetween(startTime, endTime);
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
			},
			getRestaurantTime() {
				var self 	 = this;
				axios.get('api/restuarant_time').then(response => {
				    response 			= response.data;
					self.restaurantTimes = response.data
				}).catch(error => {
					self.errorMessage = 'Something went wrong.';
					self.scrollToTop();
					setTimeout(function () {
						self.errorMessage = '';
					}, 3000);
				});
			},
			getRestaurantPersons() {
				var self 	 = this;
				axios.get('api/no_of_persons').then(response => {
				    response 	   = response.data;
					let persons = response.data;

					for (let i = 1; i <= persons; i++) {
						self.noOfperson.push(i);
					}
				}).catch(error => {
					self.errorMessage = 'Something went wrong.';
					self.scrollToTop();
					setTimeout(function () {
						self.errorMessage = '';
					}, 3000);
				});
			},
			validateBeforeSubmit() {
				var self 	 = this;
				let error 	 = false;
				if (self.formData.booking_date == null) {
					self.errorMessage = 'Booking Date is required';
					error = true;
					self.scrollToTop();
					return;
				}
				if (self.formData.booking_time == null) {
					self.errorMessage = 'Booking Time is required';
					error = true;
					self.scrollToTop();
					return;
				}
				
				if (self.formData.firstname == null || self.formData.firstname == '') {
					self.errorMessage = 'First Name is required';
					error = true;
					self.scrollToTop();
					return;
				}
				if (self.formData.lastname == null || self.formData.lastname == '') {
					self.errorMessage = 'Last Name is required';
					error = true;
					self.scrollToTop();
					return;
				}
				if (self.formData.phone == null || self.formData.phone == '') {
					self.errorMessage = 'Phone is required';
					error = true;
					self.scrollToTop();
					return;
				}
				if (self.formData.email == null || self.formData.email == '') {
					self.errorMessage = 'Email is required';
					error = true;
					self.scrollToTop();
					return;
				}
				if (!this.validateEmail(self.formData.email)) {
					self.errorMessage = 'Email is must be a valid email';
					error = true;
					self.scrollToTop();
					return;
				}

				if (error == false) {
					self.onCustomerReservation();
				} 
			},
			validateEmail(email) {
                var re = /\S+@\S+\.\S+/;
                return re.test(email);
            },
			resetForm() {
				var self 	 = this;
				self.formData = {
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
                };
			},
			scrollToTop() {
                $('html, body').animate({
					scrollTop: $("div#messages").offset().top
				}, 2000);
            },
        },
    }
</script>
<style scoped>

</style>