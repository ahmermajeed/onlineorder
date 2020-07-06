<template>
    <div>
        <b-modal id="add-product" centered @hidden="onHidden" ok-variant="primary" title-tag="h4"   :hide-footer=true  ref="myModalRef" custom-modal no-close-on-backdrop class="custom-modal">

            <h3 v-if="isMenu">Our Menu</h3>
            <h3 v-if="isAllergy">Allery Information</h3>
            <br>
            <div class="row">

                <div class="col text-left">
                    <button v-if="isMenu" @click="openMenu"   class="btn-primary btn">View</button>
                    <button v-if="isAllergy" @click="openAllergy"   class="btn-primary btn">View</button>
                </div>

                <div class="col text-right">
                    <button v-if="isMenu" @click="downloadMenu"  class="btn-primary btn">Download</button>
                    <button v-if="isAllergy" @click="downloadAllery" class="btn-primary btn">Download</button>
                </div>
            </div>

        </b-modal>
    </div>
</template>
<script>
    export default {
        props: ['showModalProp', 'isMenu', 'isAllergy'],
        data: function () {
            return {
            };
        },
        methods: {
            openMenu() {
                this.$emit('HideModalValue');
                javascript:window.open('./../files/our_menu.pdf');
            },
            downloadMenu() {

                this.$emit('HideModalValue');

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
            openAllergy() {
                this.$emit('HideModalValue');
                javascript:window.open('./../files/allergy_info.pdf');
            },
            downloadAllery() {

                this.$emit('HideModalValue');

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

                    fileLink.setAttribute('download', 'Allergy.pdf');
                    document.body.appendChild(fileLink);

                    fileLink.click();
                });
                request.fail(function (jqXHR, textStatus, errorThrown) {

                });
            },
            showModal() {
                this.$refs.myModalRef.show();
            },
            onHidden() {
                this.$emit('HideModalValue');
            },
            hideModal() {
                var self = this;
                this.$refs.myModalRef.hide();
            },
        },
        watch: {
            showModalProp(value) {
                if (value) {
                    this.showModal();
                }
                if (!value) {
                    this.hideModal();
                }
            }
        }
    }
</script>
