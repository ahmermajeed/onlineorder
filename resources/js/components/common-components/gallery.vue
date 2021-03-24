<template>
	<div>
		<div class="container">
		    <div class="row">
		        <div class="col-md-12">
		            <div class="about-us">
		                <h2>
		                    Our Gallery
		                </h2>
		                <div class="gallery-images">
		                    <div class="row">
		                        <viewer :images="images">
		                            <img class="col-md-4" v-for="src in images"  :src="src" :key="src">
		                        </viewer>
		                    </div>
		                </div>
		            </div>                     
		        </div>
		    </div>
		</div>
	</div>
</template>