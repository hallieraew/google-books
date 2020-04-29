  
import axios from "axios";

export default {
  getBooks: function(query) {
    return axios.get("/api/search", { params: { q: query } });
  },

  getSaved: function() {
    return axios.get("api/saved")
  },

  saveBook: function(bookData) {
    return axios.post("/api/saved", bookData);
  },

  deleteBook: function(id) {
    return axios.delete("/api/saved/" + id);
  }

};