import{o as e,c as l,a as t,k as u,v as c}from"./index-2e826f01.js";import{_ as b}from"./_plugin-vue_export-helper-c27b6911.js";const a={name:"VirtualNumPad",data(){return{Num:""}},methods:{input(i){this.Num+=i},deleat(){this.Num=""},submit(){this.$emit("submit",this.Num),console.log("Sent "+this.Num+"to parent")}}},m={class:"container"},r={class:"row mt-2"},v={class:"row"},_={class:"col-12 mb-2"},w={class:"row"},p={class:"col-4 mb-2"},k={class:"col-4 mb-2"},y={class:"col-4 mb-2"},C={class:"row"},N={class:"col-4 mb-2"},f={class:"col-4 mb-2"},x={class:"col-4 mb-2"},V={class:"row"},g={class:"col-4 mb-2"},B={class:"col-4 mb-2"},P={class:"col-4 mb-2"},$={class:"row"},h={class:"col-4 mb-2"},I={class:"col-4 mb-2"},D={class:"col-4 mb-2"};function E(i,s,M,S,d,o){return e(),l("div",m,[t("div",r,[t("div",v,[t("div",_,[u(t("input",{type:"text",class:"form-control rtl-input",id:"keyboardInput","onUpdate:modelValue":s[0]||(s[0]=n=>d.Num=n)},null,512),[[c,d.Num]])])]),t("div",w,[t("div",p,[t("button",{class:"btn btn-secondary w-100",id:"num1",onClick:s[1]||(s[1]=n=>o.input("1"))},"1")]),t("div",k,[t("button",{class:"btn btn-secondary w-100",id:"num2",onClick:s[2]||(s[2]=n=>o.input("2"))},"2")]),t("div",y,[t("button",{class:"btn btn-secondary w-100",id:"num3",onClick:s[3]||(s[3]=n=>o.input("3"))},"3")])]),t("div",C,[t("div",N,[t("button",{class:"btn btn-secondary w-100",id:"num4",onClick:s[4]||(s[4]=n=>o.input("4"))},"4")]),t("div",f,[t("button",{class:"btn btn-secondary w-100",id:"num5",onClick:s[5]||(s[5]=n=>o.input("5"))},"5")]),t("div",x,[t("button",{class:"btn btn-secondary w-100",id:"num6",onClick:s[6]||(s[6]=n=>o.input("6"))},"6")])]),t("div",V,[t("div",g,[t("button",{class:"btn btn-secondary w-100",id:"num7",onClick:s[7]||(s[7]=n=>o.input("7"))},"7")]),t("div",B,[t("button",{class:"btn btn-secondary w-100",id:"num8",onClick:s[8]||(s[8]=n=>o.input("8"))},"8")]),t("div",P,[t("button",{class:"btn btn-secondary w-100",id:"num9",onClick:s[9]||(s[9]=n=>o.input("9"))},"9")])]),t("div",$,[t("div",h,[t("button",{class:"btn btn-danger w-100",id:"backspace",onClick:s[10]||(s[10]=n=>o.deleat())},"清除")]),t("div",I,[t("button",{class:"btn btn-secondary w-100",id:"num0",onClick:s[11]||(s[11]=n=>o.input("0"))},"0")]),t("div",D,[t("button",{class:"btn btn-success w-100",id:"submit",onClick:s[12]||(s[12]=n=>o.submit())},"送出")])])])])}const j=b(a,[["render",E],["__scopeId","data-v-77b59f33"]]);export{j as default};
