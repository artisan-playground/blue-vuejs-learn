<template>
  <div>
    <h1>
      <p align=center>
      PROFILE
      <br>
      ประวัติส่วนตัว
      </p>
    </h1>
    
      <img src="../assets/me.jpg" width="500" height="500">
     <div class="right">
       ชื่อ: ณัฐภัทร ญาติฝูง
       <br>
       ชื่อเล่น: บลู
     </div>
              
  </div>
</template>

<script>
export default {
   name: 'profile'
}
</script>

<style>
.right {
  position: absolute;
  right: 500px;
  width: 300px;
  border: 3px solid #73AD21;
  padding: 10px;
}
</style>