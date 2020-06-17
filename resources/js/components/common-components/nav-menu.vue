<template>

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
        <div class="container">
            <a class="navbar-brand" href="#">
                <img src="../../../images/mainlogo.webp" alt="logo" style="    height: 40px;">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                    aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <router-link :to="{ path: '/'}">
                        <a class="nav-link" >Home
                            <span class="sr-only">(current)</span>
                        </a>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ path: 'postal-code'}">
                        <a class="nav-link" >Online Ordering</a>
                        </router-link>
                    </li>

                    <li class="nav-item">
                        <router-link :to="{ path: 'about-us'}">
                            <a class="nav-link" >About Us</a>
                        </router-link>
                    </li>

                    <li class="nav-item">
                        <router-link :to="{ path: 'contact-us'}">
                            <a class="nav-link" >Contact Us</a>
                        </router-link>
                    </li>

                    <li class="nav-item" >
                        <a href="#" class="nav-link" @click="downloadAllery">Allergy Food</a>
                    </li>

                    <li class="nav-item">
                        <a href="#" class="nav-link" @click="downloadMenu">Our Menu</a>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {

            downloadAllery() {

                let self = this;
                let url = 'api/downloadAllergy';
                var request;
                var headers = {
                    'Content-Type': 'application/x-www-form-urlencoded'
                };

                request = $.ajax({
                    url: url,
                    method: "GET",
                    responseType: 'blob',
                    headers: headers
                });
                request.done(function (response, textStatus, jqXHR) {

                    var fileURL = response.data;
                    var fileLink = document.createElement('a');

                    fileLink.href = fileURL;

                    fileLink.setAttribute('download', 'allergy.docx');
                    document.body.appendChild(fileLink);

                    fileLink.click();
                });
                request.fail(function (jqXHR, textStatus, errorThrown) {

                });
            },

            downloadMenu() {

                let self = this;
                let url = 'api/downloadMenu';
                var request;
                var headers = {
                    'Content-Type': 'application/x-www-form-urlencoded'
                };
                request = $.ajax({
                    url: url,
                    method: "GET",
                    responseType: 'blob',
                    headers: headers
                });
                request.done(function (response, textStatus, jqXHR) {

                    var fileURL = response.data;
                    var fileLink = document.createElement('a');

                    fileLink.href = fileURL;

                    fileLink.setAttribute('download', 'Menu.pdf');
                    document.body.appendChild(fileLink);

                    fileLink.click();
                });
                request.fail(function (jqXHR, textStatus, errorThrown) {

                });
            },
        }
    }
</script>