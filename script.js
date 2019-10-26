Vue.component('information', {
    template: `
        <div class="card">
            <strong>Informasi</strong>
            <hr>
            <slot>Tanpa informasi</slot>
        </div>
    `
})

var vue = new Vue({
    el: '#app',
});