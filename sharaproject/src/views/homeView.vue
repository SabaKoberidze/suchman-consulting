<template>
    <article>
        <div class="landingPage">
            <div class="landingPage__intro">
                <img src="../assets/images/logo.png"/>
                <p>
                    Your Trusted Partner in Geosciences and Geoservices
                </p>
            </div>
        </div>
        <div class="services">
            <div v-for="(service, key, index) in servicesStore.services" class="service" @click="pickService(index)">
                <img :src="getImageUrl(key)">
                <p class="title">{{ service.title }}</p>
                <p class="description">{{ service.description }}</p>
                <button>OPEN</button>
            </div>
        </div>
    </article>
</template>
<script lang="ts" setup>
    import { useRouter } from "vue-router";
    import { services } from "../stores/services";
    const router = useRouter();
    const servicesStore = services();
    function getImageUrl(image: string): string {
        let relativePath: string = `../../public/${image}`
        let fullPath: string = new URL(relativePath, import.meta.url).href
        return fullPath + '.png'
    }
    function pickService(index: number): void {  
        servicesStore.pageindex = index
        router.push('/services')
    }

</script>
<style lang="scss" scoped>
    article{
        .landingPage{
            display:flex;
            justify-content: center;
            align-items: center;
            height: 80vh;
            background-image: url("../assets/images/greyground.jpg");
            background-size: cover;
            background-attachment: fixed;
            &__intro{
                padding: 20px;
                display:flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                background-color: rgba(0, 0, 0, 0.212);
                backdrop-filter:blur(3px);
                width: 500px;
                border-radius: 5px;              
                img{
                    width: 100%;
                }
                p{               
                    max-width: 80%;  
                    font-size: 18px;
                    color:  rgba(214, 214, 214, 0.877);
                    font-weight: 400;
                    display:flex;
                    justify-content: center;
                    text-align: center;
                }   
                @media(max-width:600px) {
                    width: 100vw;
                }             
            }
        }
        .services{
            margin-top: 10px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
            max-width: 100vw;
            .service{
                cursor: pointer;
                border-radius: 4px;
                display: flex;
                justify-content: start;
                flex-direction: column;
                align-items: center;
                padding: 15px;
                gap: 10px;
                background: rgba(196, 196, 196, 0.137);               
                color: white;
                transition: 400ms;
                &:hover{
                    background:rgba(236, 236, 236, 0.171);               
                }
                @media(max-width:600px) {
                        width: calc(50vw - 5px);
                } 
                img{
                    width: 20%;
                }
                .title{
                    font-size: 18px;
                    font-weight: 600; 
                    @media(max-width:600px) {
                        font-size: 4vw;
                    }            
                        
                }
                .description{
                    font-size: 16px;
                    @media(max-width:600px) {
                        font-size: 3vw;
                    } 
                }
                button{
                    cursor: pointer;
                    border-radius: 5px 5px 0 0;
                    margin-top: auto;
                    border: 0;
                    outline: 0;
                    padding: 5px 15px;
                    background: rgba(255, 255, 255, 0.945);
                    color: rgba(0, 0, 0, 0.788);                    
                    transition: 200ms;
                    font-size: 14px;
                    font-weight: 500;
                    transform: translateY(15px);
                    display: none;
                    @media(max-width:600px) {
                        font-size: 2.5vw;
                    } 
                    &:hover{
                        color: white;
                        background: #003399;
                    }
                    //&:active{
                    //}
                }
            }
        }
    }
</style>