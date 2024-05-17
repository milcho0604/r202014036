<template>
  <div>
    <h1>Exam2</h1>
    <table>
      <tr><td>ID</td><td>제목</td></tr>
      <tr v-for="book in books" v-bind:key="book.id">
        <td>{{ book.id }}</td>
        <td>{{ book.title }}</td>
      </tr>
    </table>
    <input type="text" placeholder="제목을 입력하세요." v-model="title" />
    <button type="button" v-on:click="addBook">저장</button>
  </div>

</template>

<script>

export default {
  name: "MyBook",
  data() {
    return {
      books: [
        { id: 1, title: "토지" },
        { id: 2, title: "죄와벌" }
      ],
      title: "",
      lastId: 2
    }
  },
  methods: {
    addBook: function() {
      this.books.push({id: ++this.lastId, title: this.title});
      this.title = "";
    }
  }
}
</script>

<style scoped>
h1 { border-bottom: 1px solid gray; text-align: left; }
div { padding: 30px; margin: 30px auto; width: 400px;
  border: 1px solid #ccc; box-shadow: 3px 3px 3px #aaa; }
table { border-collapse: collapse; margin: 20px 0; width: 100%; }
tr:nth-child(1) { background-color: #eee; text-align: center; }
td { border: 1px solid gray; padding: 6px; text-align: center; }
td:nth-child(1) { text-align: center; width: 30px; }
input[type=text] { padding: 5px; margin-right: 5px; width: 300px; }
button { padding: 0.3em 1.5em; }
</style>
