<template>
  <div id="app">
    
    <div class="nav">
    <div class="logo">
            <img src="https://cdn.wallpapersafari.com/72/34/ECT6hw.png" alt="logo">
    </div>  
    <div class="header">
      <h1 class="title" >National Aeronautics and Space Administration</h1>
    </div>
    <div class="nav-links">
      <router-link class="nav-link" to="/personnels">Personnel</router-link>
      <router-link class="nav-link" to="/missions">Mission</router-link>
      <router-link class="nav-link" to="/budgets">Budgets</router-link>
    </div>
    </div>
    

    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
.title {
  text-align: center;
}
.logo {
  text-align: center;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
}
.nav {
  background-color: rgba(192, 192, 192, 0.822);
  color: #ffffff;
  list-style-type: none;
  padding: 0;
  justify-content: center;
  padding: 15px;
}
#app {
  flex-direction: column;
  font-family: 'Arial', sans-serif;
  background-image: url('https://www.tripsavvy.com/thmb/TCsmO1_jNE6JScoq4buhipd5kx0=/3741x2499/filters:fill(auto,1)/us-space-history-apollo-1152683403-d27ff1ecee084f1f9ee753f3cc1928d2.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0;
  padding: 0;
}

.header {
  margin-bottom: 20px;
  text-align: center;
  color: whitesmoke;
}

.nav-links {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
}

.nav-link {
  text-decoration: none;
  color: black;
  padding: 12px;
  border-radius: 8px;
  transition: background-color 0.1s ease;
  margin-right: 20px;
}

.nav-link:hover {
  background-color: #97a1a8;
  color: #fff;
  transform: scale(1.05);
}

.content {
  width: 100%;
}
img {
  height: 100px;
}
</style>
