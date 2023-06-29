import DataJSon from "./data.json";


var DataService = {

    data: DataJSon,
    getTodosPosts : function() {
        return this.data.posts;
    },
    getPost : function(i) {
        return this.data.posts[i];
    },
    getSize: function(){
        return this.data.length;
    }

  };


export default DataService;