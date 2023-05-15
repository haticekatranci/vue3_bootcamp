const app = Vue.createApp({
    data() {
      return {
        myClass: "text-green bg-orange",
        counter : 0
      };
    },
    created(){
      setInterval(() => {
        this.counter++;
      }, 1000)
     
    },
    
  });
  
  app.mount("#app");