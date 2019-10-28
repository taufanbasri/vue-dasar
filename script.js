import { BookComponent } from './BookComponent.js'

var vue = new Vue({
    el: '#app',

    components: {
        'book': BookComponent,
    },

    data: {
        selectedBook: '',
        books: [
            {
                id: 99,
                title: 'C++ High Performance',
                description: 'Write code that scales across CPU registers, multi-core, and machine clusters',
                authors: 'Viktor Sehr, Björn Andrist',
                publish_year: 2018,
                price: 100000,
                image: 'c++-high-performance.png'
            },
            {
                id: 100,
                title: 'Mastering Linux Security and Hardening',
                description: 'A comprehensive guide to mastering the art of preventing your Linux system from getting compromised',
                authors: 'Donald A. Tevault',
                publish_year: 2018,
                price: 125000,
                image: 'mastering-linux-security-and-hardening.png'
            },
        ]
    }
});