const app = new Vue ({
    el: '#app',
        data : {
         counter: 0,
         title: "Список Заметок",
         placeholderString: 'Видите названия заметки',
         inputValue: "",
         notes:['Заметка 1',]


    
    },
    methods:{
        inputChangerHandler(event) {
           this.inputValue = event.target.value

        },
        addNewNote(event) {
            if (this.inputValue !== '') {
                this.notes.push(this.inputValue)
            this.inputValue = ""
            }
           
        },
        // inputKeyPress(event) {
        //    if (event.key === "Enter") {
        //        this.addNewNote()
        //     }
        // }
        // Замена 19 строке v-on:keypress.enter='addNewNote' в место v-on:keypress='inputKeyPress'//
    
        deleteNote(index) {
            this.notes.splice(index, 1)
            
        },
        toUpperCase(item) {
            return item.toUpperCase()
        },
    }
    
});