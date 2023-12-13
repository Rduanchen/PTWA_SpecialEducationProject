<template>
    <div class="container">
        <div class="row align-items-center">
        <div class="col-7">
            <div class="card">
                <div class="card-body">
                    <img class="card-img-top" src="@/assets/images/pics/cover_info.jpeg" alt="Card image cap">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
        <div class="col-4">
            <div class="row">
                <div class="card">
                <div class="card-body">
                    <p>這裡是題目</p>
                </div>
                </div>
            </div>
            <div class="row d-flex justify-content-center">
                <button type="button" class="btn btn-primary">Primary</button>
                <button type="button" class="btn btn-primary">Primary</button>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    name: 'TrueFalseGame',
    data(){
        return {
            TestData: [],
            level: 1,
            answers: [],
        }
    },
    props: {
        questions: {
            type: Array,
            required: true
        },
        source: {
            type: Array,
            required: true
        },   
    },
    methods: {
        PostTestData(arrarydatas) {
            this.$emit('PostTestData', this.TestData);
            console.log("PostTestData");
        },
        NextQuestion() {
            console.log("NextQuestion");
        },
        PreviosQuestion() {
            console.log("PreviosQuestion");
        },
        CheckAnswer() {
            console.log("CheckAnswer");
        }
        //Other Game Methods
    },
}
</script>
<style scoped>
.card {
    border-style: solid;
}

</style>