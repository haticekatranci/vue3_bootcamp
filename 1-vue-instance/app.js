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
            x: 0,
            y: 0,
            coords : {},
        };
    },
    methods : {
        changeTitle(pTitle){
            this.title= pTitle;
        },
        updateCoords(message, event){
           console.log(message, event.x, event.y)
            this.changeTitle(`${event.x},${event.y}`);
            this.coords = {
                x: event.x,
                y: event.y,
            };


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