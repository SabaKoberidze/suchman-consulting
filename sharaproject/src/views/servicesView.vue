<template>
    <div>
        <div class="navContainer" ref="navContainer">
            <div class="navigation" ref="navContent" @scroll="handleScroll" :class="{leftFade: leftFade, rightFade: rightFade, scrollable: scrollable}">
                <div v-for="(service,, index) in servicesStore.services" :class="{'active': pickedService === index}" @click ="pickService(index)">
                    <p>{{service.title}}</p>   
                    <p>{{text1}}</p>
                    <p>/</p>  
                    <p>{{text2}}</p>                 
                </div>       
                 
            </div>
        </div>
        <article> 
            <template  v-for="(service, name, index) in servicesStore.services">
                    <div class="serviceBody" v-if="pickedService === index">
                        <div class="texts">
                            <div class="serviceHeader">
                                <img :src="`./services/${name}.jpg`">
                                <p class="mainText">{{service.title}}</p>
                            </div>
                            <div v-for="(data, index) in service.serviceInfo.headers">
                                <p class="title" v-if="data">{{data}}</p>               
                                <p class="description" :class="{bulleted: service.serviceInfo.bullets[index]}" v-for="(data) in service.serviceInfo.articles[index]">{{data}}</p>           
                            </div>
                        </div>                                 
                    </div>
            </template>
        </article>
    </div>      
</template>
<script lang="ts" setup>
    import { services } from "../stores/services";
    import {Ref, onMounted, ref} from "vue"
    const pickedService = ref(0)
    const leftFade = ref(false);
    const rightFade = ref(false);
    const servicesStore = services();
    const navContainer = ref(null);
    const navContent:Ref = ref(null);
    const scrollable:Ref = ref(null);

    const text1:Ref = ref(0)
    const text2:Ref = ref(0)
    pickedService.value = servicesStore.pageindex
    function pickService(index: number) {
        pickedService.value = index
    }
    function handleScroll(event: any) {
      let scrollPositionLeft = event.target.scrollLeft;
      let maxScroll = event.target.scrollWidth - event.target.clientWidth;
      text1.value = scrollPositionLeft.toFixed(0)
      text2.value = maxScroll.toFixed(0)
      if(event.target.scrollWidth <= event.target.clientWidth){
        leftFade.value = false
        rightFade.value = false
        scrollable.value = false
        return
      }
      scrollable.value = true
      if(scrollPositionLeft === 0){
        leftFade.value = false
        rightFade.value = true
      }
      else if(Number(scrollPositionLeft.toFixed(0)) === Number(maxScroll.toFixed(0))){
        leftFade.value = true
        rightFade.value = false
      }
      else{
        leftFade.value = true
        rightFade.value = true
      }
    }
    const isOverflowing = () => {
        const scrollEvent = new Event('scroll', {
          bubbles: true,
          cancelable: true
        });        
        navContent?.value?.dispatchEvent(scrollEvent);
    }
    
    onMounted(() => {
        isOverflowing() 
        window.addEventListener('resize', () => {
            isOverflowing()
        })
    })
</script>
<style lang="scss" scoped>
.navContainer{
    position: relative;
    position: sticky;
    top: 80px;
    z-index: 2;
    .navigation{    
        display: flex;
        width: 100%;  
        align-items: center;
        margin-top: 10px;
      
        .scrollable {
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
                pointer-events: none;
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
                pointer-events: none;
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
                border-radius: 5px;
            }
            background: rgba(255, 255, 255, 0.925);
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
                background: rgba(0, 51, 153, 0.76);
                p{
                    color: white;
                }
            }
         
            &:hover{
                @media (min-width:800px) {
                    background: rgba(0, 51, 153, 0.5764705882);
                    p{
                        color: white;
                    }
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
            font-size: 30px;    
            @media (max-width: 700px){
                font-size: 24px;  
            }     
        }
        .texts{
           .serviceHeader{
               margin-top: 10px;
               margin-bottom: 10px;
               width: 100%;
               height: 50vh;
               position: relative;
               display: flex;
               justify-content: center;
               align-items: center;
               overflow: hidden;
               .mainText{
                font-size: 80px;
                font-weight: 600; 
                text-shadow: 0px 0px 10px black;
                z-index: 1;       
                    @media (max-width: 700px){
                        font-size: 10vw;
                    }
                }
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    position: absolute;
                }
           }
           
        }        
        & > div{    
            width: 100%;      
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
                    opacity: 0.75;
                    font-size: 26px;
                    @media (max-width: 700px){
                        font-size: 23px;
                    }
                    &.bulleted{
                        display: list-item;        
                        list-style-type: circle;    
                        list-style-position: inside;
                    }                           
                    &:last-child{
                        margin-bottom: 20px;
                    }
                }
            }
          
        }
       
    }
}
</style>

