<script setup>
import MainHeader from './components/MainHeader.vue';
import EmployeeList from './components/EmployeeList.vue'
</script>

<template>
  <div class="page-wrapper">
    <MainHeader />
    <EmployeeList />
  </div>
</template>



<style scoped>
.page-wrapper {
  height: 100vh;
  width: 100%;
  position: fixed;
  overflow-y: scroll;
  top: 0;
  left: 0;
  background-color: #edebf7;
}

::-webkit-scrollbar {
  display: none;
}
</style>
