Vue.component('information', {
    template: `
        <div class="card">
            <slot name="judul"></slot>
            <hr>
            <slot name="isi">Tanpa informasi</slot>
        </div>
    `
})

var vue = new Vue({
    el: '#app',
});