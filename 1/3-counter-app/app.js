const app = Vue.createApp({
    data() {
        return {
            counter : 0 ,
            counter2 : 0
        }
    },
    methods : {

    },
    computed : {
        getCounterResult(){
            console.log("counter1 çalıştı");
            return this.counter > 5 ? 'Büyük' : 'Küçük';
        },
        getCounter2Result(){
            console.log("counter2 çalıştı");
            return this.counter2 > 5 ? 'Büyük' : 'Küçük';
        }

    },
    watch: {
        counter(newValue, oldValue){
            console.log("counter", oldValue, "=>", newValue);
        },
        counter2(newValue, oldValue){
            console.log("counter2", oldValue, "=>", newValue);
        },
        getCounterResult(newValue, oldValue){
            console.log("RESULT", oldValue, "=>", newValue);
        },
        getCounter2Result(newValue, oldValue){
            console.log("RESULT", oldValue, "=>", newValue);
        },

    }

}).mount("#app")