const app = Vue.createApp({
    // template: '<h2>I am the template , ok</h2>'
    data() {
        return {
            showBooks: true,
            title: 'The final empire',
            author: 'Brandon Sanderson',
            age: 25,
            x: 0,
            y: 0,
            books: [
                { id: 1, title: 'berry', author: 'berry', img: 'assets/1.jpg', isFav: true, isHovered: false },
                { id: 1, title: 'nanda', author: 'nanda', img: 'assets/2.jpg', isFav: false, isHovered: false },
                { id: 1, title: 'jarwo', author: 'jarwo', img: 'assets/3.jpg', isFav: true, isHovered: false }
            ],
            url: "https://vuejs.org/guide/quick-start.html"
        }
    },
    methods: {
        changeTitle(title) {
            // console.log('test')
            // this.title = 'Words Of Random'
            this.title = title
        },
        toggleShowBooks() {
            // this.showBooks = false
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data) {
            console.log(e, e.type)
            if (data) {
                console.log(data)
            }
        },
        handleMouseMove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        },
        hoverBorder(book) {
            book.isHovered = true
        },
        removeBorder(book) {
            book.isHovered = false
        }
    },
    computed: {
        filteredBooks() {
            // return 'hai'
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')