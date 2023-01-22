<script setup>

</script>

<template>
  <div id="headerContainer">
    <h1 class="Title">Moviscape</h1>
    <button @click="$router.push('/Login')">Login</button>
  </div>
</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
}

#headerContainer {
  display: flex;
  background-color: black;
  border-bottom: solid 4px rgb(159, 92, 221)
}

button {
  background-color: black;
  border: solid 5px rgb(159, 92, 221);
  border-radius: 1rem;
  font-size: 2rem;
  color: rgb(159, 92, 221);
  margin-right: 4%;
  margin: auto;
  padding: 5px;
  width: 24%;
  font-weight: bold;
}

.Title {
  background-color: black;
  border: solid 5px rgb(159, 92, 221);
  border-radius: 1rem;
  font-size: 2rem;
  color: rgb(159, 92, 221);
  margin-right: 4%;
  margin: auto;
  padding: 5px;
  width: 24%;
}

</style>