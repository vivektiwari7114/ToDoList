
    
var model = {
        
    data : [],
    id: 0,
    
    'addNotes': function(currItem){
     model.id = model.id + 1;
     var newObj = {
         notesValue: currItem,
         id: model.id
         
     };
     model.data.push(newObj);
 },
    'getAllNotes': function(){
        return model.data;
 },
    'removeNotes': function(currItem){
        for(var i=0; i < model.data.length; i++){
            if(model.data[i].id === parseInt(currItem) ){
                model.data.splice(i,1);
                break;
            }
        }
        
        
    }
    

};
    
   


var view = {
                  
        'init': function(){

            //when add button is clicked

            $('#addNotes').click(function(){
                 var currItem = view.getItem();
                 model.addNotes(currItem);
                 view.render();
            });
            
            $('.displayNotesClass').click(function(event){
               var currIdRemove = event.target.id;
                model.removeNotes(currIdRemove);
                view.render();
                
                
            });
            
            
            
         },
        
        'render': function(){

            var getAllCurrentNotes = model.getAllNotes();
            var displayList = '';
            for(var i=0; i < getAllCurrentNotes.length; i++){
                displayList += '<li id = '+getAllCurrentNotes[i].id +'>' +getAllCurrentNotes[i].notesValue +'</li>';
            }
            $('#appendItem').html('');
            console.log(displayList);
            $('#appendItem').append(displayList);

        },

        'getItem': function(){
            var getCurrentItem = $('#notesItem').val();
            return getCurrentItem;

        },

    
    
};


var controller = {
    
    
};




view.init();


