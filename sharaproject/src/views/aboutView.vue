<template>
    <div>
        <p>{{$t('about1')}}</p>
        <p>{{$t('about2')}}</p>
        <p>{{$t('about3')}}</p>
        <p>{{$t('about4')}}</p>
        <p>{{$t('about5')}}</p>
        <p>{{$t('about6')}}</p>
        <p>{{$t('about7')}}</p>
        <p>{{$t('about8')}}</p>
    </div>
</template>
<script lang="ts" setup>

</script>
<style lang="scss" scoped>
    div{
        padding: 50px;
        display: flex;
        flex-direction: column;
        gap: 40px;
        p{
            font-size: 20px;
            color: white;
        }
    }
</style>