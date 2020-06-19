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
                        <a href="#" @click="openAllergy" class="nav-link">Allergy Information</a>
                    </li>

                    <li class="nav-item">
                        <a href="#" class="nav-link" @click="openMenu">Our Menu</a>
                    </li>

                </ul>
            </div>
        </div>
        <download-menu @HideModalValue="hideModal" :showModalProp="showPopup" :isMenu="menu" :isAllergy="allergy" ></download-menu>
    </nav>
</template>

<script>
    export default {
        data() {
            return {
                showPopup: false,
                menu: false,
                allergy: false
            }
        },
        methods: {

            hideModal() {
                this.showPopup = false;
            },

            openMenu () {
                this.showPopup = true;
                this.menu = true;
                this.allergy = false;
            },

            openAllergy () {
                this.showPopup = true;
                this.allergy = true;
                this.menu = false;
            }
        }
    }
</script>