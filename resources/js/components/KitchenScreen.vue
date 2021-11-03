<template>
    <div>

        <section class="header">
            <div class="menu">
                <a href="#">
                    <img src="imgs/menu.png">
                </a>
            </div>
            <div class="main-menu">
                <ul>
                    <li>
                        <a href="#">
                            All Active
                            <span>
						09
					</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            New
                            <span>
						01
					</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Preparing
                            <span>
						03
					</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Done
                            <span>
						05
					</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Archived
                            <span>
						14
					</span>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
        <section class="dish-listing">
            <div class="container-fluid">
                <ol class="dish-wrap">

                    <li class="dish-box" ondrop="drop(event)" ondragover="allowDrop(event)" v-for="(item, index) in orders.orders" >

                        <div class="box-status status-done" draggable="true" ondragstart="drag(event)" id="drag1">
                            <div class="d-title">
                                <div class="top">
                                    <div class="status">
                                        <span>1</span>
                                        {{item.status}}
                                    </div>
                                    <div class="time">
                                        {{item.created_at}}
                                    </div>
                                </div>
                                <div class="bottom">
                                    <div class="table">
                                        <span> Order ID:{{item.id}}</span>
                                    </div>
                                    <div class="persons">
                                        <span>Reference {{item.reference}}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="dishes" >

                                <ul>
                                    <li  v-for="(product, pindex) in item.details" >
                                        <span>{{product.quantity}}</span>
                                        {{product.product_name}}
                                        <p v-if="product.extras" v-html="getExtrasData(product.extras)"> </p>
                                        <p v-if="product.special_instructions"> {{product.special_instructions}}</p>

                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div class="table-count">
                            <span class="no">01</span>
                            <span class="t">table</span>
                        </div>
                    </li>
<!--                    <li class="dish-box" ondrop="drop(event)" ondragover="allowDrop(event)">-->
<!--                        <div class="box-status" draggable="true" ondragstart="drag(event)" id="drag2">-->
<!--                            <div class="d-title">-->
<!--                                <div class="top">-->
<!--                                    <div class="status">-->
<!--                                        <span>1</span>-->
<!--                                        New-->
<!--                                    </div>-->
<!--                                    <div class="time">-->
<!--                                        8h:40m-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                <div class="bottom">-->
<!--                                    <div class="table">-->
<!--                                        <span>T-01</span>-->
<!--                                    </div>-->
<!--                                    <div class="persons">-->
<!--                                        <span>#9807654 | Jan</span>-->
<!--                                        <span>04</span>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <div class="dishes">-->
<!--                                <ul>-->
<!--                                    <li>-->
<!--                                        <span>1</span>-->
<!--                                        Margherita-->
<!--                                    </li>-->
<!--                                    <li>-->
<!--                                        <span>1</span>-->
<!--                                        Margherita-->
<!--                                    </li>-->
<!--                                    <li>-->
<!--                                        <span>1</span>-->
<!--                                        Margherita-->
<!--                                    </li>-->
<!--                                    <li>-->
<!--                                        <span>1</span>-->
<!--                                        Margherita-->
<!--                                    </li>-->
<!--                                </ul>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="table-count">-->
<!--                            <span class="no">02</span>-->
<!--                            <span class="t">table</span>-->
<!--                        </div>-->
<!--                    </li>-->
<!--                    <li class="dish-box" ondrop="drop(event)" ondragover="allowDrop(event)">-->
<!--                        <div class="box-status status-prepare" draggable="true" ondragstart="drag(event)" id="drag3">-->
<!--                            <div class="d-title">-->
<!--                                <div class="top">-->
<!--                                    <div class="status">-->
<!--                                        <span>1</span>-->
<!--                                        Preparing-->
<!--                                    </div>-->
<!--                                    <div class="time">-->
<!--                                        8h:40m-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                <div class="bottom">-->
<!--                                    <div class="table">-->
<!--                                        <span>T-01</span>-->
<!--                                    </div>-->
<!--                                    <div class="persons">-->
<!--                                        <span>#9807654 | Jan</span>-->
<!--                                        <span>04</span>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <div class="dishes">-->
<!--                                <ul>-->
<!--                                    <li>-->
<!--                                        <span>1</span>-->
<!--                                        Margherita-->
<!--                                    </li>-->
<!--                                    <li>-->
<!--                                        <span>1</span>-->
<!--                                        Margherita-->
<!--                                    </li>-->
<!--                                    <li>-->
<!--                                        <span>1</span>-->
<!--                                        Margherita-->
<!--                                    </li>-->
<!--                                    <li>-->
<!--                                        <span>1</span>-->
<!--                                        Margherita-->
<!--                                    </li>-->
<!--                                </ul>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="table-count">-->
<!--                            <span class="no">03</span>-->
<!--                            <span class="t">table</span>-->
<!--                        </div>-->
<!--                    </li>-->
<!--                    <li class="dish-box" ondrop="drop(event)" ondragover="allowDrop(event)">-->
<!--                        <div class="table-count">-->
<!--                            <span class="no">04</span>-->
<!--                            <span class="t">table</span>-->
<!--                        </div>-->
<!--                    </li>-->
<!--                    <li class="dish-box" ondrop="drop(event)" ondragover="allowDrop(event)">-->
<!--                        <div class="table-count">-->
<!--                            <span class="no">05</span>-->
<!--                            <span class="t">table</span>-->
<!--                        </div>-->
<!--                    </li>-->
<!--                    <li class="dish-box" ondrop="drop(event)" ondragover="allowDrop(event)">-->
<!--                        <div class="table-count">-->
<!--                            <span class="no">06</span>-->
<!--                            <span class="t">table</span>-->
<!--                        </div>-->
<!--                    </li>-->
<!--                    <li class="dish-box" ondrop="drop(event)" ondragover="allowDrop(event)">-->
<!--                        <div class="table-count">-->
<!--                            <span class="no">07</span>-->
<!--                            <span class="t">table</span>-->
<!--                        </div>-->
<!--                    </li>-->
<!--                    <li class="dish-box" ondrop="drop(event)" ondragover="allowDrop(event)">-->
<!--                        <div class="table-count">-->
<!--                            <span class="no">08</span>-->
<!--                            <span class="t">table</span>-->
<!--                        </div>-->
<!--                    </li>-->
<!--                    <li class="dish-box" ondrop="drop(event)" ondragover="allowDrop(event)">-->
<!--                        <div class="table-count">-->
<!--                            <span class="no">09</span>-->
<!--                            <span class="t">table</span>-->
<!--                        </div>-->
<!--                    </li>-->
<!--                    <li class="dish-box" ondrop="drop(event)" ondragover="allowDrop(event)">-->
<!--                        <div class="table-count">-->
<!--                            <span class="no">10</span>-->
<!--                            <span class="t">table</span>-->
<!--                        </div>-->
<!--                    </li>-->
<!--                    <li class="dish-box" ondrop="drop(event)" ondragover="allowDrop(event)">-->
<!--                        <div class="table-count">-->
<!--                            <span class="no">11</span>-->
<!--                            <span class="t">table</span>-->
<!--                        </div>-->
<!--                    </li>-->
<!--                    <li class="dish-box" ondrop="drop(event)" ondragover="allowDrop(event)">-->
<!--                        <div class="table-count">-->
<!--                            <span class="no">12</span>-->
<!--                            <span class="t">table</span>-->
<!--                        </div>-->
<!--                    </li>-->
                </ol>
            </div>
        </section>



    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                orders:[],
            };
        },
        methods : {
            getOrders(status = null) {
                let _this = this;
                _this.loading = true;
                var url = "https://aisha-cafe.softdemo.co.uk/api/getKitchenOrders";
                if(status){
                    url = "https://aisha-cafe.softdemo.co.uk/api/getKitchenOrders?"+status
                }
                axios.get(url)
                    .then((response) => {
                        _this.orders = response.data.data;
                        console.log(this.orders)
                       // alert("test");
                        _this.loading = false;
                    });
            },

            getExtrasData(value){
                var html;
                let data = JSON.parse(value);
                var arr = [];
                Object.keys(data).forEach(function(itm){
                    arr.push(data[itm].choice);
                });

                html ="<span>" + arr.join(',') +"</span>";
                return html;
            }

        },
        created(){
          this.getOrders();
        }

    }
</script>



<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,500&display=swap');
    html{
        overflow-x: hidden;
    }
    body{
        font-family: 'Poppins', sans-serif;
        color: #7F7F7F;
    }

    h1, h2, h3, h4, h5, h6{
        font-family: 'Poppins', sans-serif;
    }

    a{
        text-decoration: none;
        color: #000;
    }

    section.header {
        width: 100%;
        position: fixed;
        background: #1e0d00;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 20px;
        z-index: 2;
    }

    section.header ul{
        list-style: none;
        display: flex;
        justify-content: space-between;
        margin-bottom: 0;
    }
    section.header ul li{
        padding: 0 20px;
    }
    section.header ul li a{
        color: #fff;
        font-size: 14px;
        font-weight: 400;
    }

    section.header ul li a span{
        background: #462104;
        font-size: 11px;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        display: inline-block;
        line-height: 20px;
        text-align: center;
    }

    section.dish-listing {
        background: #fef7f2;
        padding: 80px 0 30px 0;
    }

    section.dish-listing ol{
        padding: 0;
    }

    section.dish-listing ol.dish-wrap li{
        border: 2px dashed #c7b299;
        width: 24%;
        background: #fff8f3;
        display: inline-block;
        height: 250px;
        vertical-align: top;
        overflow-y: hidden;
        margin: 0 5px 20px 5px;
        position: relative;

    }
    section.dish-listing ol.dish-wrap li .table-count {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        height: 100%;
    }

    section.dish-listing ol.dish-wrap li .table-count .no{
        font-size: 72px;
        font-weight: bold;
        color: #c7b299;
        line-height: 1;
    }
    section.dish-listing ol.dish-wrap li .table-count .t{
        font-size: 20px;
        font-weight: bold;
        color: #c7b299;
        line-height: 1;
        text-transform: uppercase;
    }

    section.dish-listing ol.dish-wrap li .box-status{
        background: #fff;
    }

    section.dish-listing ol.dish-wrap li .box-status .d-title{
        background: #5ec5bd;
    }

    section.dish-listing ol.dish-wrap li .box-status.status-done .d-title{
        background: #86ba54;
    }

    section.dish-listing ol.dish-wrap li .box-status.status-prepare .d-title{
        background: #ba9554;
    }

    section.dish-listing ol.dish-wrap li .top {
        display: flex;
        justify-content: space-between;
        padding: 10px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.09);
        align-items: center;
    }

    section.dish-listing ol.dish-wrap li .top .status{
        color: #fff;
        font-size: 15px;
        font-weight: 300;
    }

    section.dish-listing ol.dish-wrap li .top .status span{
        background: #fff;
        font-size: 18px;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        display: inline-block;
        line-height: 30px;
        text-align: center;
        color: #000;
        font-weight: bold;
    }

    section.dish-listing ol.dish-wrap li .top .time{
        font-size: 13px;
        color: rgba(0, 0, 0, 0.42);
    }


    section.dish-listing ol.dish-wrap li .bottom{
        padding: 10px;
    }
    section.dish-listing ol.dish-wrap li .bottom .table{
        margin-bottom: 0;
        font-size: 14px;
        font-weight: bold;
        color: rgba(0, 0, 0, 0.42);
    }

    section.dish-listing ol.dish-wrap li .bottom .persons{
        color: rgba(0, 0, 0, 0.42);
        font-size: 12px;
    }

    section.dish-listing ol.dish-wrap li .dishes {
        overflow-y: scroll;
        height: 140px;
        padding: 10px 10px 0 10px;
    }

    section.dish-listing ol.dish-wrap li .dishes ul{
        display: flex;
        align-items: center;
        padding: 0;
        flex-direction: column;
    }

    section.dish-listing ol.dish-wrap li .dishes ul li{
        width: 100%;
        background: #f6f6f6;
        border: none;
        height: auto;
        margin: 0 0 5px 0;
        border-radius: 4px;
        color: #585858;
        font-size: 13px;
    }

    section.dish-listing ol.dish-wrap li .dishes ul li span{
        padding: 5px 12px;
        background: #eeeeee;
        display: inline-block;
        color: #000;
        font-weight: bold;
        font-size: 13px;
    }
</style>
