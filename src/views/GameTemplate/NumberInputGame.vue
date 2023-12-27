<template>
<div class="container">
    <div class="row">
        <div class="col-8">
            <div class="card">
                <div class="card-body">
                    <img class="card-img-top" :src="imageUrl" alt="Card image cap">
                </div>
            </div>
        </div>
        <div class="col-4 align-self-center justify-content-center">
            <div class="card">
                <div class="card-body">
                    <p class="h2">{{ question }}</p>
                </div>
            </div>
            <VirtualNumPad v-on:submit="GetSubmitData"></VirtualNumPad>
        </div>
    </div>
</div>
</template>

<script>
import VirtualNumPad from '@/components/VirtualNumPad.vue'; 
import * as CA from '@/utilitys/CheckAnswer.js';
export default {
    name: 'NumberInputGame',
    data() {
        return {
            imageUrl : ''
        };
    },
    props: {
        imgsrc:{
            type: String,
            required: true
        },
        question: {
            type: String,
            required: true
        },
        answer: {
            type: String,
            required: true
        }        //Other Game Methods
    },
    methods: {
        GetSubmitData(data){
            console.log('get'+data);
            this.CheckAnswer(data);
        },
        CheckAnswer(data){
            var response=CA.CheckTrueFalseAnswer(data,this.answer)
            this.$emit('check-answer',response,);
        }
    },
    created() {
        this.imageUrl=new URL(this.imgsrc, import.meta.url).href
    },
    components: {
        VirtualNumPad
    }
};
</script>

<style scoped>
/* Your component styles go here */
</style>
