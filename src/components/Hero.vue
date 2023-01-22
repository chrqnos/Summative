<script setup>

</script>

<template>
  <div id="heroContainer">
    <h1 class="Title">Welcome To Moviscape</h1>
    <img
      src="https://imgs.search.brave.com/DBLvJeRqSfE87iW2_OXXgZ7nXfJMYJQF5M64bs5OHwA/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDI2MDE5/MDkuanBn">
  </div>
</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
}

#heroContainer {
  display: flex;
  background-color: black;
  border-bottom: solid 4px rgb(159, 92, 221);
}

img {
  border: solid 5px rgb(159, 92, 221);
  border-radius: 1rem;
  margin-left: 18%;
}

.Title {
  position: absolute;
  background-color: black;
  border: solid 5px rgb(159, 92, 221);
  border-radius: 1rem;
  font-size: 2rem;
  color: rgb(159, 92, 221);
  margin: auto;
  padding: 5px;
  width: 24%;
  margin-left: 38%;
  margin-top: 13%;
}

</style>
