<template>
  <div>
    <h1>Budget</h1>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Mission ID</th>
          <th>Budget Amount</th>
          <th>Presented Budget Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="budgetItem in budget" :key="budgetItem.id">
          <td>{{ budgetItem.id }}</td>
          <td>{{ budgetItem.mission_id }}</td>
          <td>{{ budgetItem.budget_amount }}</td>
          <td>{{ budgetItem.budget_date }}</td>
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
    const budget = ref([]);

    onMounted(async () => {
      try {
        const response = await axios.get('budget.json'); // Replace with the actual path
        budget.value = response.data.budget;
      } catch (error) {
        console.error('Error fetching budget:', error);
      }
    });

    return {
      budget,
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
