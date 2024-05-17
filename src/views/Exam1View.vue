<template>
  <div id="Exam1View">
    <div>
      <h1>Exam1</h1>
      <hr />
      <div class="button-container">
        <p :style="{ fontSize: '30px' }">{{ num }}</p>
      <br>
        <button type="button" @click="increment">++</button>
        <button type="button" @click="decrement">--</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Exam1View",
  data() {
    return {
      num: 0,
    };
  },
  methods: {
    increment() {
      this.num++;
    },
    decrement() {
      this.num--;
    },
  },
};
</script>

<style scoped>
#Exam1View {
  display: flex;
  justify-content: flex-start;
  margin-left: 250px;
}

div {
  margin-left: 10px; /* Adjust the margin as needed */
}

.button-container {
  display: flex;
  align-items: center;
}

p {
  font-size: 30px;
  margin-right: 10px; /* Add some space between the text and buttons */
}

button {
  margin-top: 80px;
  margin-left: 10px; /* Adjust the margin as needed */
  margin-right: 10px;
}

hr {
  width: 800px;
}

h1 {
  text-align: left;
}
</style>
