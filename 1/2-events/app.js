const app = Vue.createApp({
    data(){
        return {
            fullName : "küpeli",
        }

    },
    methods : {
        updateValue(event){
            this.fullName = event.target.value;
            // fullname değerini getirmeyi sağladı
        },
    },
}).mount("#app");