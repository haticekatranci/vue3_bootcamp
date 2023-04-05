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
            },
            owner: "poğaça",

        };
    },
    methods : {
        changeTitle(pTitle){
            this.title= pTitle;
        },
        updateCoords(event){
            console.log(event.x, event.y)

        }

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