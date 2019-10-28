Vue.component('alert', {
    data() {
        return {
            defaultAlert: 'Awas Bahaya'
        }
    },

    template: `
        <div class="card">
            <slot :defaultJudul="defaultAlert">{{ defaultAlert }}</slot>
        </div>
    `
})

var vue = new Vue({
    el: '#app',
});