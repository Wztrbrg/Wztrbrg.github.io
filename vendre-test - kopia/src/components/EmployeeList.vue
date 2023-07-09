<template>
  <div class="wrapper">
    <div class="employee-container">
      <div v-for="item in list" :key="item.id" class="employee-card">
        <img :src="item.avatar" />
        <p>{{ item.first_name }} {{ item.last_name }}</p>
        <a href="mailto:{{ item.email }}" target="_blank"><button>Skicka mail</button></a>
      </div>
    </div>
    <div class="pagination-container">
        <button @click="changePage(1)">1</button>
        <button @click="changePage(2)">2</button>
    </div>
  </div>
</template>

<script>
import axios from "axios"

let url = "https://reqres.in/api/users"


export default {
  name: "EmployeeList",
  data() {
    return {
      list: []
    }
  },
  methods: {
    //Laddar in första sidan av anställda när sidan laddas in
    loadDefault() {
      axios.get(url).then(response => this.list = response.data.data);
    },
    //Hanterar bytet av sidor genom att ta respektive knapps nummer som en query till url:en
    changePage(page) {
      let query = `?page=${page}`;
      axios.get(url + (query)).then(response => this.list = response.data.data);
    }
  },
  mounted() {
    this.loadDefault();
  }
}
</script>

<style scoped>

.wrapper {
  width: 100%;
  min-height: calc(100vh - 58px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
}
.employee-container {
    width: 100%;
    padding: 16px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
}

.employee-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding: 24px 18px;
    width: 236px;
    border: 3px solid #060606;
    background-color: #f6f6f6;
    box-shadow: 3px 3px #060606;
}

.employee-card img {
    width: 200px;
    height: 200px;
    border: 3px solid #060606;
    border-radius: 5000px;
    object-fit: cover;
    object-position: center;
}

.employee-card p {
    font-size: 20px;
    font-weight: 700;
    color: #060606;
}

.employee-card button {
    border: none;
    width: 164px;
    font-size: 16px;
    font-weight: 700;
    padding: 12px 16px;
    background-color: #4f1bbe;
    color: white;
}

.employee-card button:hover {
    cursor: pointer;
    background-color: #835ed1;
    transition: .3s;
}

.pagination-container {
    display: flex;
    justify-content: center;
    gap: 16px;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 16px;
    overflow: hidden;
}

.pagination-container button {
    width: 48px;
    height: 48px;
    border: none;
    border-radius: 200px;
    color: #4f1bbe;
    background-color: #dfd0fc;
    font-size: 18px;
    font-weight: 700;
    /* text-decoration: underline; */
}

.pagination-container button:hover {
  cursor: pointer;
  background-color: #d1bbfd;
  transition: .2s;
}
</style>