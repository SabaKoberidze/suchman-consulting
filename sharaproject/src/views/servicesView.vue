<template>
    <div class="navigation">
        <div v-for="(service, key) in servicesStore.services">
            <p>{{service.title}}</p>
        </div>
    </div>
</template>


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
        &:hover{
            background: black;
            p{
                color: white;
            }
        }
    }
}
</style>

<script lang="ts" setup>
    import { services } from "../stores/services";
    const servicesStore = services();
</script>