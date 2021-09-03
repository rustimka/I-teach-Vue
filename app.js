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
        // inputChangerHandler(event) {
        //    this.inputValue = event.target.value

        // },
        // Замена  17 и 18 строке (17) v-bind:value='inputValue', (18) @input='inputChangerHandler'


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
        
        

        toUpperCase(item) {
            return item.toUpperCase()
        },
        deleteNote(index) {
            this.notes.splice(index, 1)
            
        }
        
    },
    computed: {
        doubleCountComputed() {
            console.log('doubleCountComputed')
            return this.notes.length * 2

        }

    },
    watch: {
        inputValue(value) {
            if (value.length > 15 ) {
                this.inputValue = ''
            }
            console.log('input value changed', value )
        }
        //Слежка за переменной inputValue которая находится в обекте//
        //Условия если строчка водимая превышает 10 символов то удалится//


    },
});