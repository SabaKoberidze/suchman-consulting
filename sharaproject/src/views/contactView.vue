<template>
    <div class="contacsContainer">
        <div class="contacts">
            <div id="mobileContact" @click = "contactClicked(0)" ref="mobileContact">
                <div>
                    <img/>
                    <p>ტელ:</p>
                </div>
                <p class="copied" :class="{success: successM}">Copied to clipboard</p>
                <p>+995 577 725 551</p>
            </div>
            <div id="emailContact" @click = "contactClicked(1)" ref="emailContact">
                <div>
                    <img/>
                    <p>ელ ფოსტა:</p>
                </div>
                <p class="copied" :class="{success: successE}">Copied to clipboard</p>
                <a>info@smcgeo.org</a>
            </div>
            <div id="socialMediaContact" @click = "contactClicked(2)">
                <div>
                    <img/>
                    <p>facebook:</p>
                </div>
                <a>fb.com/suchman_consulting</a>
            </div>
        </div>
        <div class="map">
            <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.618127665318!2d44.775332851290344!3d41.707178783969496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440ccdf759836d%3A0x67bbe807c993381c!2zNzEg4YOV4YOQ4YOh4YOY4YOaIOGDkeGDkOGDoOGDnOGDneGDleGDmOGDoSDhg6Xhg6Phg6nhg5AsIOGDl-GDkeGDmOGDmuGDmOGDoeGDmA!5e0!3m2!1ska!2sge!4v1667820487046!5m2!1ska!2sge"></iframe>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';    
    const successE = ref(false)
    const successM = ref(false)
    function contactClicked(index: number){
        switch(index){
            case 0:
                successM.value = true
                setTimeout(()=>{
                    successM.value = false
                }, 500)
                navigator.clipboard.writeText("+995 577 725 551");
                break;
            case 1:
                successE.value = true
                setTimeout(()=>{
                    successE.value = false
                }, 500)
                navigator.clipboard.writeText("info@smcgeo.org");
                break;
            case 2:
                window.location.href = 'https://www.facebook.com/profile.php?id=100086942021704'
                break;
        }
    }
</script>
<style lang="scss" scoped>
    .contacsContainer{
        color: white;
        height: calc(100vh - 80px);
        .contacts{
            font-size: 1.5vw;
            display: flex;
            height: 50%;
            width: 100%;
            justify-content: space-evenly;
            align-items: center;
            @media (max-width: 800px) {
                flex-direction: column; 
               font-size: 4vw; 
               align-items: start;
               margin-left: 3vw;
            }
            img{
                position: absolute;
            }
            & > div{
                p{
                    font-weight: bold;
                }
            }
          
            #mobileContact,#emailContact,#socialMediaContact{
                position: relative;
                cursor: pointer;
                height: 70px;
                .copied{
                    position: absolute;
                    pointer-events: none;
                    color: rgba(255, 255, 255, 0.589);
                    opacity: 0;
                    top: 0;
                    font-size: 16px;
                    @media (max-width: 800px){
                        font-size: 3vw;
                    }
                    white-space: nowrap;
                    transition: 0ms;
                    &.success{                    
                        opacity: 1;
                        top: -30px;
                        transition: 400ms;
                    }
                }
            }
        }
       
        .map{            
            height: 50%;
            width: 100vw;
            display: flex;
            justify-content: center;
            iframe{
                height: 100%;
                width: 100%;
            }
        }
    }
</style>