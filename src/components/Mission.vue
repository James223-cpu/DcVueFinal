<template>
  <div>
    <h1>Missions</h1>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Description</th>
          <th>Deadline</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="mission in missions" :key="mission.id">
          <td>{{ mission.id }}</td>
          <td>{{ mission.title }}</td>
          <td>{{ mission.description }}</td>
          <td>{{ mission.deadline }}</td>
          <td>{{ mission.status }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const missions = ref([]);

    onMounted(async () => {
      try {
        const response = await axios.get('mission.json'); // Replace with the actual path
        missions.value = response.data.missions;
      } catch (error) {
        console.error('Error fetching missions:', error);
      }
    });

    return {
      missions,
    };
  },
};
</script>

<style scoped>
h1 {
  color: black;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

td {
  color: whitesmoke;
  background-color: rgba(0, 0, 0, 0.338);
}

th {
  color: skyblue;
    background-color: rgba(0, 0, 0, 0.638);
}

tbody tr:hover {
  background-color: #f5f5f5;
}

/* Optional: Add some additional styling for responsiveness */
@media (max-width: 768px) {
  table {
    overflow-x: auto;
    display: block;
  }

  thead,
  tbody,
  th,
  td,
  tr {
    display: block;
  }

  thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }

  tr {
    margin-bottom: 15px;
  }

  td {
    border: none;
    border-bottom: 1px solid #ddd;
    position: relative;
    padding-left: 50%;
  }

  td:before {
    position: absolute;
    top: 6px;
    left: 6px;
    width: 45%;
    padding-right: 10px;
    white-space: nowrap;
  }
}
</style>

