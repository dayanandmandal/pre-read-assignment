let Student = {
    id : 1,
    name : "Dayanand",
    city : "Delhi",

    nameExists : function() {
        if(this.name === "")
            return false;
        else
            return true;
    },

    updateId : function(id){
        this.id = id;
    }
};


Student.updateId(2);
console.log(Student);
