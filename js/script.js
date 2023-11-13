const { createApp } = Vue;

const app = createApp({
    data(){
        return{
            message: "A day in a cat-lady's life.",
            innerMessage: "We are cute as hell but we both hate you and just want you to give us food. Stupid hooman.",
            images: [
                {url: "/img/img01.jpeg"},
                {url: "/img/img02.jpeg"},
            ],

        };
    }
});

app.mount(`#app`);