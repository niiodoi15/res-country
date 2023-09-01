<script setup>

</script>

<template>
    <div class="header">
        <h3 class="heading">Where in the world?</h3>
        <button class="btn"><i class="fa fa-moon"></i> Light Mode</button>
    </div>
</template>

<style scoped>
    .header{
        background: #2B3844;
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.06);
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #FFF;
        padding: 23px 8%;
    }
    .heading{
        font-size: 24px;
        font-weight: 800;
    }
    .btn{
        background-color: transparent;
        border: none;
        color: #FFF;
        font-size: 16px;
        font-weight: 600;
    }
</style>