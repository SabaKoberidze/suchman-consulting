<template>
    <div>
        <div class="navigation">
            <div v-for="(service,, index) in servicesStore.services" :class="{'active': pickedService === index}" @click ="pickService(index)">
                <p>{{service.title}}</p>
            </div>        
        </div>
        <article> 
            <template  v-for="(service,, index) in servicesStore.services">
                    <div class="serviceBody" v-if="pickedService === index">
                        <div class="texts">
                            <p class="mainText">{{service.serviceInfo.mainHeader}}</p>
                            <div v-for="(data, index) in service.serviceInfo.headers">
                                <p class="title" v-if="data">{{data}}</p>               
                                <p class="description" v-for="(data) in service.serviceInfo.articles[index]">{{data}}</p>           
                            </div>
                        </div>
                        <div class="images">
                            <img v-if="pickedService ===  3" src="../assets/images/services/geodesy.jpg"/>
                            <img v-if="pickedService ===  2" src="../assets/images/services/geology.jpg"/>
                            <img v-if="pickedService ===  1" src="../assets/images/services/geophysics.jpg"/>
                            <img v-if="pickedService ===  1" src="../assets/images/services/geophysics2.jpg"/>
                        </div>                    
                    </div>
                </template>
        </article>
    </div>
        
</template>
<script lang="ts" setup>
    import { services } from "../stores/services";
    import {ref} from "vue"
    const pickedService = ref(0)
    const servicesStore = services();
    pickedService.value = servicesStore.pageindex
    function pickService(index: number) {
        pickedService.value = index
    }
</script>
<style lang="scss" scoped>

.navigation{    
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    height: 40px;
    & > div{
        height: 100%;
        width: 100%;
        background: rgba(255, 255, 255, 0.849);
        display: flex;
        align-items: center;
        justify-content: center;
        color: black;
        transition: 200ms;
        cursor: pointer;
        p{
            @media (max-width: 700px){
                font-size: 12px;
            }
        }
        &.active{
            background: black;
            p{
                color: white;
            }
        }
        &:hover{
            background: black;
            p{
                color: white;
            }
        }
    }
}
article{
    .serviceBody{
        color: white;
        display: flex;
        width: 100%;
        @media (max-width: 700px){
            flex-direction: column;
        }
        .title{
            font-size: 21px;    
            @media (max-width: 700px){
                font-size: 18px;  
            }     
        }
        .texts{
           
            .mainText{
                width: 100%;
                font-size: 24px;
                font-weight: 600;
                height: 10vh;
                @media (max-width: 700px){
                    height: 15vh;
                }
                display: flex;
                justify-content: center;
                align-items: center;
                @media (max-width: 700px){
                    font-size: 18px;
                }
            }
        }
        .images{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 10px;
            padding: 35px 10px 0 0;
            width: 40%;    
            @media (max-width: 700px){
                padding: 10px;
                width: 100%;    
            }
            height: fit-content;
            img{
                width: 100%;
                border-radius: 2%;
                filter: grayscale(0.5);
            }
        }
        & > div{    
            width: 60%;      
            @media (max-width: 700px){
                width: 100%;    
            }
            & > div{
                display: flex;
                flex-direction: column;
                gap: 30px;
                @media (max-width: 700px){
                    gap: 10px;  
                }
                padding: 20px;
                @media (max-width: 700px){
                    padding: 0 20px
                }
                width: 100%;
                .description{ 
                    opacity: 0.75;;               
                    display: list-item;        
                    list-style-type:    circle;    
                    list-style-position: inside; 
                    &:last-child{
                        margin-bottom: 20px;
                    }
                }
            }
          
        }
       
    }
}
</style>

