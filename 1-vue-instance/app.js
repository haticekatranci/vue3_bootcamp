const app = Vue.createApp({
    data(){
        return{
            title :"test",
            content : "lorem ipsum sit ameyt",
            eduflow : {
                title: "Müfredat kdfkds",
                target : "_blank",
                url : "https://eduflow.kablosuzkedi.com",
                alt: "muf",
            }

        };
    },
}).mount("#app");



//
// vue2 version
// new Vue({
//el: "#app",
//     data: {
//
//     }
// })