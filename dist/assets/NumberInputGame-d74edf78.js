import n from"./VirtualNumPad-3aab94f9.js";import{_ as i}from"./_plugin-vue_export-helper-c27b6911.js";import{r as d,o as _,c as u,a as e,t as l,b as m}from"./index-232fff01.js";function p(t,s){return t==s}const h={name:"NumberInputGame",data(){return{imageUrl:""}},props:{imgsrc:{type:String,required:!0},question:{type:String,required:!0},answer:{type:String,required:!0}},methods:{GetSubmitData(t){console.log("get"+t),this.CheckAnswer(t)},CheckAnswer(t){var s=p(t,this.answer);this.$emit("check-answer",s)}},created(){this.imageUrl=new URL(this.imgsrc,import.meta.url).href},components:{VirtualNumPad:n}},f={class:"container"},g={class:"row"},v={class:"col-8"},b={class:"card"},y={class:"card-body"},w=["src"],N={class:"col-4 align-self-center justify-content-center"},S={class:"card"},k={class:"card-body"},q={class:"h2"};function C(t,s,r,G,o,c){const a=d("VirtualNumPad");return _(),u("div",f,[e("div",g,[e("div",v,[e("div",b,[e("div",y,[e("img",{class:"card-img-top",src:o.imageUrl,alt:"Card image cap"},null,8,w)])])]),e("div",N,[e("div",S,[e("div",k,[e("p",q,l(r.question),1)])]),m(a,{onSubmit:c.GetSubmitData},null,8,["onSubmit"])])])])}const U=i(h,[["render",C],["__scopeId","data-v-1c85f055"]]);export{U as default};