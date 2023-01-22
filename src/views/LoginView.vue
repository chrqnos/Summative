<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const username = ref("");
const password = ref("");
const error = ref(false);

const login = () => {
  if (username.value === "tmdb" && password.value === "movies") {
    router.push("/purchase");
  } else {
    error.value = true;
  }
};
</script>

<template>
  <div>
    <div class="login-container">
      <h1>Login to Moviscape</h1>
      <br>
      <form @submit.prevent="login()">
        <input type="text" v-model="username" placeholder="Username" id="username" />
        <input type="password" v-model="password" placeholder="Password" id="password" />
        <input type="submit" value="Login" id="login" />
      </form>
      <br>
      <div v-if="error" class="error">
        <p>Incorrect username/password!</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100vw;
  height: 80vh;
  color: rgb(159, 92, 221);
}

h1 {
  font-size: 2.5rem;
}

form {
  flex-direction: column;
  padding-bottom: 5%;
}

#username {
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  margin-left: auto;
  margin-right: auto;
}

#password {
  margin-left: auto;
  margin-right: auto;
}

#login {
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  border: rgb(159, 92, 221) solid 5px;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
}

#login:hover {
  background-color: rgb(159, 92, 221);
  border: rgb(159, 92, 221) solid 5px;
  color: black;
}

form input {
  margin: 0% auto;
  box-shadow: 0px 0px 15px rgb(159, 92, 221);
  text-align: center;
  width: 80%;
  height: 40%;
  min-height: 35px;
  font-size: 180%;
  border: rgb(159, 92, 221) solid 5px;
}

form input {
  padding: 0.25rem;
  margin-left: 10%;
  margin-right: 10%;
  font-size: 1.5rem;
  font-weight: bold;
}

p {
  text-align: center;
  display: block;
}
</style>