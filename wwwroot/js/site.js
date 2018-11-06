
(function() {
    $(document).ready(function() {
        var app = new Vue({
            el: '#app',
            data: {
              searchParameter: "",
              message: 'Hello Bryan',
              /* Cool is not a representation about how i feel about people */
              tableData: [
                  { id: 1, name: 'Casey Spires', cool: true },
                  { id: 2, name: 'Bryan Bishop', cool: false },
                  { id: 3, name: 'Robert Wine', cool: true },
                  { id: 4, name: 'Meagan White', cool: false },
                  { id: 5, name: 'Ashley Dickerson', cool: true },
                  { id: 6, name: 'Eric Poytner', cool: false },
                  { id: 7, name: 'Matt Elswick', cool: false }
              ]
            },
            methods: {
                unCoolThem: function(id) {
                    var index = this.tableData.map(function(programmer) {
                        return programmer.id;
                    }).indexOf(id);
                    this.tableData[index].cool = !this.tableData[index].cool;
                },
                search: function() {
                    var searchResults = [];
                    for(var i=0; i <  this.tableData.length; i++)
                    {
                        if(this.tableData[i].name.includes(this.searchParameter))
                        {
                            searchResults.push(this.tableData[i]);
                        }
                    }
                    if(searchResults.length !== 0)
                    {
                        this.tableData = searchResults;
                    }
                }
            }
          });
    });
}) ();
