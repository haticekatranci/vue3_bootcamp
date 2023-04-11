const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            counter2: 0,
            itemList: [],
        };
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
    methods: {
        getResult() {
            console.log("Counter1 Çalıştı..");
            return this.counter > 0
                ? "Pozitif"
                : this.counter < 0
                    ? "Negatif"
                    : "Sıfır";
        },
        getResult2() {
            console.log("Counter2 Çalıştı..");
            return this.counter2 > 0
                ? "Pozitif"
                : this.counter2 < 0
                    ? "Negatif"
                    : "Sıfır";
        },
        addItem(){
            this.itemList.push(new Date().getTime());
        }
    },
    watch: {
      counter(newValue,oldValue){
        console.log("counter watcher çalştı..", newValue, oldValue)

      },
      getResult(newValue,oldValue){
          console.log(`Watcher : Result ${oldValue} => ${newValue}`);

      },
      itemList: {
          deep:true,
          handler(itemList){
              console.log("itemList :>> ", itemList);

          }
      } ,
        // itemList(itemLİst){
        //   console.log("itemList :>>", itemList);
        // }
    },
    beforeCreate() {
        console.log("beforeCreate çalıştı");
    },
    created() {
        // console.log("created çalıştı");
        // setTimeout(() => {
        //     this.itemList = [1, 2, 3, 4, 5, 6, 7];
        // }, 2000);
    },
    beforeMount() {
        console.log("beforeMount çalıştı");
    },
    mounted() {
        console.log("mounted çalıştı");
    },
    beforeUpdate() {
        console.log("beforeUpdate çalıştı");
    },
    updated() {
        console.log("updated çalıştı");
    },
    beforeUnmount() {
        console.log("beforeUnmount çalıştı");
    },
    unmounted() {
        console.log("unmounted çalıştı");
    },
});

app.mount("#app");