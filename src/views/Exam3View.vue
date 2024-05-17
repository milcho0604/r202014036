<template>
  <div>
    <div class="exam-view" id="Exam3View">
      <h1>Exam3</h1>
      <table>
        <tr>
          <td>ID</td>
          <td>제목</td>
          <td></td>
        </tr>
        <tr v-for="book in books" :key="book.id">
          <td>{{ book.id }}</td>
          <td>{{ book.title }}</td>
          <td><button type="button" @click="remove(book.id)">삭제</button></td>
        </tr>
      </table>
      <input type="text" placeholder="제목을 입력하세요." v-model="book.title" />
      <button type="button" @click="save">저장</button>
    </div>
  </div>
</template>

<script>
import { loadBooks, deleteBook, insertBook } from '../bookService';

export default {
  name: "Exam3View",
  data() {
    return {
      books: [],
      book: {
        title: ''
      },
    };
  },
  async mounted() {
    await this.reload();
  },
  methods: {
    async reload() {
      this.books = await loadBooks();
    },
    async remove(bookId) {
      const selectedBook = this.books.find(book => book.id === bookId);
      if (confirm(`삭제하시겠습니까?`)) {
        await deleteBook(selectedBook.id);
        this.reload();
      }
    },
    async save() {
      await insertBook(this.book);
      this.book = { title: '' };
      this.reload();
    },
  },
};
</script>

<style scoped>
h1 { border-bottom: 1px solid gray; text-align: left; }
.exam-view {
  padding: 30px;
  margin: 30px auto;
  width: 400px;
  border: 1px solid #ccc;
  box-shadow: 3px 3px 3px #aaa;
}
table {
  border-collapse: collapse;
  margin: 20px 0;
  border-collapse: collapse; 
  width: 100%; 
  margin : 10px auto; 
}
tr:nth-child(1) {
  background-color: #eee;
  text-align: center;
}
td {
  border: 1px solid gray;
  padding: 6px;
  text-align: center;
}
td:nth-child(1) {
  text-align: center;
  width: 30px;
}
td:nth-child(3) {
  text-align: center;
  width: 70px;
}
input[type=text] {
  padding: 5px;
  margin-right: 5px;
  width: 300px;
}
button {
  padding: 0.3em 1.5em;
}
</style>
