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
        adNewNote(event) {
            this.notes.push(this.inputValue)
            this.inputValue = ""
        }
    }
});