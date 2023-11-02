<template>
    <div>
        <div class="navContainer" ref="navContainer">
            <div class="navigation" ref="navContent" @scroll="handleScroll" :class="{leftFade: leftFade, rightFade: rightFade}">
                <div v-for="(service,, index) in servicesStore.services" :class="{'active': pickedService === index}" @click ="pickService(index)">
                    <p>{{service.title}}</p>
                </div>        
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
    import {computed, ref} from "vue"
    const pickedService = ref(0)
    const leftFade = ref(false);
    const rightFade = ref(false);
    const servicesStore = services();
    const navContainer = ref(null);
    const navContent = ref(null)
    pickedService.value = servicesStore.pageindex
    function pickService(index: number) {
        pickedService.value = index
    }
    function handleScroll(event: any) {
      let scrollPositionLeft = event.target.scrollLeft;
      let maxScroll = event.target.scrollWidth - event.target.clientWidth;
      if(event.target.scrollWidth < event.target.clientWidth){
        leftFade.value = false
        rightFade.value = false
        return
      }
      if(scrollPositionLeft === 0){
        leftFade.value = false
        rightFade.value = true
      }
      else if(scrollPositionLeft === maxScroll){
        leftFade.value = true
        rightFade.value = false
      }
      else{
        leftFade.value = true
        rightFade.value = true
      }
    }
    let container = navContainer.value;
    let content = navContent.value;
    console.log(container)
    console.log(content)
    // const isOverflowing = computed(() => {
    //   const container = navContainer.value;
    //   const content = navContent.value;
    //   if(content && container){
    //       //return content.value.scrollWidth > container.value.clientWidth;
    //   }
    // }
</script>
<style lang="scss" scoped>
.navContainer{
    position: relative;
    .navigation{    
        display: flex;
        width: 100%;  
        align-items: center;
        margin-top: 10px;
        @media (min-width: 850px) {
            margin-top: 0px;
            justify-content: space-between;
        }
        height: 40px;
        gap: 5px;
        padding: 0 5px;
        overflow-y: hidden;
        overflow-x: scroll;
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
        &::-webkit-scrollbar{
            display: none;
        }
        &.leftFade,&.rightFade{
            &::before{
                content: "";
                position: absolute;
                top: 0;
                width: 50px;
                height: 100%;
                right: -50px;
                transition: 200ms;
                background: linear-gradient(to right, transparent 0%, black 100%);
            }
            &::after{
                content: "";
                position: absolute;
                top: 0;
                width: 50px;
                height: 100%;
                left: -50px;
                transition: 200ms;
                background: linear-gradient(to left, transparent 0%, black 100%);
            }
        }
        &.rightFade{
            &::before{
                right: 0;            
            }
        }
        &.leftFade{
            &::after{
                left: 0;          
            }
        }
        & > div{
            border-radius: 15px;
            padding: 3px;
            height: 100%;
            width: 140px;
            @media (min-width: 850px) {
                width: auto;
                flex-grow: 1;
                border-radius: 0px;
            }
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
                background: rgba(0, 51, 153, 0.5764705882);
                p{
                    color: white;
                }
            }
            &:hover{
                background: rgba(0, 51, 153, 0.5764705882);
                p{
                    color: white;
                }
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

