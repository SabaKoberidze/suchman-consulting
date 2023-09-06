<template>
 <header>
  <div class="logo" @click="goToHome()">
    <img src="../assets/images/logo.png"/>
  </div>
  <div class="routes" v-if="!isMobile">
    <router-link class="routes__home" to="/">Home</router-link>
    <router-link class="routes__services" to="/services">Services</router-link>
    <router-link class="routes__contact" to="/contact">Contact</router-link>
    <div class="routes__flag">
      <img @click="flagsAreVisible = !flagsAreVisible" src="../assets/images/flags/georgia.png"/>
      <Transition name="lang">
        <div class="routes__flag__languages" v-show="flagsAreVisible">
          <img src="../assets/images/flags/georgia.png"/>
          <img src="../assets/images/flags/america.png"/>
          <img src="../assets/images/flags/germany.png"/>
        </div>
      </Transition>
    </div>
  </div>
  <div class="burger" v-if="isMobile" @click="menuOpen = !menuOpen">
    <div class="burger__icon" :class="{menuOpen: menuOpen}"></div>
    <div class="burger__menu" v-show="menuOpen">
      <router-link class="routes__home" to="/">Home</router-link>
      <router-link class="routes__services" to="/services">Services</router-link>
      <router-link class="routes__contact" to="/contact">Contact</router-link>
      <div class="burger__flag">
        <img @click="flagsAreVisible = !flagsAreVisible" src="../assets/images/flags/georgia.png"/>
        <!-- <Transition name="lang">
          <div class="routes__flag__languages" v-if="flagsAreVisible">
            <img src="../assets/images/flags/georgia.png"/>
            <img src="../assets/images/flags/america.png"/>
            <img src="../assets/images/flags/germany.png"/>
          </div>
        </Transition> -->
      </div>
  </div>
  </div>
</header>
</template>
<script setup lang="ts">
import { computed , onMounted, ref } from 'vue'
import { useRouter } from "vue-router";
import type { Ref } from 'vue'
let flagsAreVisible:Ref<boolean> = ref(false)
let windowWidth:Ref<number> = ref(innerWidth)
let menuOpen:Ref<boolean> = ref(false)
const router = useRouter()
const isMobile = computed(() => {
    return windowWidth.value <= 700
})
function goToHome(): void{
  router.push('/')
}
onMounted(() => {
  window.addEventListener('resize', () => {
    windowWidth.value = window.innerWidth
    console.log(isMobile.value)
  })
})

</script>
<style lang="scss" scoped>
  .lang-enter-active,
  .lang-leave-active {
    transition: opacity 0.3s ease;
  }

  .lang-enter-from,
  .lang-leave-to {
    opacity: 0;
  }
  header{
    z-index: 2;
    position: sticky;
    top: 0;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    color: #003399;
    font-weight: 700;
    .logo{
      display: flex;      
      align-items: center;
      height: 100%;
      cursor: pointer;
      img{
        height: 100%;
        @media(max-width:600px) {
          height: 60%;
        }
      }
    }
    .routes{
      display: flex;
      height: 100%;
      width: fit-content;
      align-items: center;
      a{
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        width: fit-content;
        width: 100px;
        height: 100%;
        transition: 200ms;
        color: white;
        font-weight: 300;
        text-decoration: none;
        &.active-link,      
        &:hover{
          background-color: #003399;
          color: white;
        }
       
      }
      &__flag{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        position: relative;
        img{
          padding: 5%;
          height: 25%;
          cursor: pointer;
        }
        &__languages{          
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: center;
          top: 100%;
          right: 0;  
          background-color: rgba(53, 53, 53, 0.527);  
          backdrop-filter: blur(5px);
          padding: 5px 0 10px 0;      
          img{
            width: 60%;
          }
        }
      }
    
    }
    .burger{
      cursor: pointer;
      min-width: 100px;
      height: 100%;
      display:flex;
      justify-content: center;
      align-items: center;
      &__icon{
        width: 30px;
        height: 3px;
        background-color: white;
        position: relative;   
        transition: 200ms;    
        &::before{
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: white;
          top: -10px;
          transition: 200ms;  
        }
        &::after{
          content: '';
          position: absolute;
          background-color: white;
          width: 100%;
          height: 100%;
          top: 10px;
          transition: 200ms;  
        }
        &.menuOpen{
          background-color: transparent;
          &::before{
            transform: rotate(45deg);
            top: 0px;
          };
          &::after{
            transform: rotate(-45deg);
            top: 0px;
          }
        }
      }
      &__menu{
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        right:0;
        top:100%;
        width: 100px;
        background-color: rgba(0, 0, 0, 0.562);
        backdrop-filter: blur(5px);
        a{
          display: flex;
          align-items: center;
          text-decoration: none;
          text-align: center;
          justify-content: center;
          color: white;
          height: 60px;
          width: 100%;
          border-bottom: 1px solid rgba(255, 255, 255, 0.164);
          &.active-link,      
          &:hover{
            background-color: #00339993;
            color: white;
          }
        }
      }
      &__flag{
        display: flex;
        justify-content: center;
        width: 100%;
        padding: 15px;
        img{
          width: 50px;
        }
      }
    }
  }
</style>