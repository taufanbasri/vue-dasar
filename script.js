var BookComponent = {
    data() {
        return {
            classCard: 'card'
        }
    },
    
    props: ['book'],

    template : `
                    <div :class="classCard">
                        <h3>{{ book.title }}</h3>
                        <p v-html="book.description"></p>
                    </div>
                `
}

var vue = new Vue({
    el: '#app',
    
    components: {
        'book': BookComponent
    },

    data: {
        books : [
            {
                id: 99,
                title: 'C++ High Performance',
                description: 'Write code that scales across CPU registers, multi-core, and machine clusters',
                authors: 'Viktor Sehr, Björn Andrist',
                publish_year: 2018,
                price: 100000,
            },
            {
                id: 100,
                title: 'Mastering Linux Security and Hardening',
                description: 'A comprehensive guide to mastering the art of preventing your Linux system from getting compromised',
                authors: 'Donald A. Tevault',
                publish_year: 2018,
                price: 125000,
            },
            {
                id: 101,
                title: 'Mastering PostgreSQL 10',
                description: 'Master the capabilities of PostgreSQL 10 to efficiently manage and maintain your database',
                authors: 'Hans-Jürgen Schönig',
                publish_year: 2016,
                price: 90000,
            },
            {
                id: 102,
                title: 'Python Programming Blueprints',
                description: 'How to build useful, real-world applications in the Python programming language',
                authors: 'Daniel Furtado, Marcus Pennington',
                publish_year: 2017,
                price: 75000,
            },
        ]
    }
});