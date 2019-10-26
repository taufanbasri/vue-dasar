Vue.component('information', {
    template: `
        <div class="card">
            <strong>Informasi</strong>
            <hr>
            <slot></slot>
        </div>
    `
})

var vue = new Vue({
    el: '#app',
});