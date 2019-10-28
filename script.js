var list = {
    template: `
        <div class="card">
            <strong>Bahasa Pemrograman</strong>
            <ul>
                <li>JavaScript</li>
                <li>PHP</li>
                <li>Java</li>
            </ul>
        </div>
    `
}

var detail = {
    template: `
        <div class="card">
            <strong>PHP</strong>
            <p>PHP adalah singkatan dari PHP Hypertext Preprocessor.</p>
        </div>
    `
}

var vue = new Vue({
    el: '#app',

    components: {
        'list': list,
        'detail': detail,
    },

    data: {
        currentComponent: 'list'
    }
});