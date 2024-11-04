import{r as u,o as c,h as d,w as o,b as r,a as s,e as a,d as _}from"./app-KU_pikFZ.js";import{u as v}from"./useNotifications-Li6rxoHk.js";import{_ as x}from"./Panel-CwDzJkQI.js";import{_ as g}from"./Input-D26Si0az.js";import{_ as $}from"./PrimaryButton-BbeE6h-R.js";import{_ as y}from"./HorizontalGroup-Cdo3MHXW.js";import{_ as T}from"./Error-CtH2oalQ.js";import{_ as k}from"./ReadDocHelp-D_8FCUtV.js";import{T as V}from"./Services-CW8GTBtw.js";import"./PageHeader-KKwuuNWr.js";import"./Tab-BYet4s42.js";import"./ProviderIcon-BoaHXo_6.js";const b={class:"flex items-center"},C={class:"mr-xs"},E={__name:"TenorServiceForm",props:{form:{required:!0,type:Object}},setup(l){const i=l,{notify:m}=v(),t=u({}),p=()=>{t.value={},_.put(route("mixpost.services.update",{service:"tenor"}),i.form,{preserveScroll:!0,onSuccess(){m("success","Tenor credentials have been saved")},onError:n=>{t.value=n}})};return(n,e)=>(c(),d(x,null,{title:o(()=>[r("div",b,[r("span",C,[s(V)]),e[1]||(e[1]=a(" Tenor "))])]),description:o(()=>[e[2]||(e[2]=r("p",null,"With Tenor you can use GIF's directly in Mixpost.",-1)),e[3]||(e[3]=r("p",null,[r("a",{href:"https://console.cloud.google.com/",class:"link",target:"_blank"},"Create an App on Google Console"),a(". ")],-1)),s(k,{href:`${n.$page.props.mixpost.docs_link}/services/media/tenor`,class:"mt-xs"},null,8,["href"])]),default:o(()=>[s(y,{class:"mt-lg"},{title:o(()=>e[4]||(e[4]=[a("API Key")])),footer:o(()=>[s(T,{message:t.value.client_id},null,8,["message"])]),default:o(()=>[s(g,{modelValue:l.form.client_id,"onUpdate:modelValue":e[0]||(e[0]=f=>l.form.client_id=f),error:t.value.hasOwnProperty("client_id"),type:"text",autocomplete:"off"},null,8,["modelValue","error"])]),_:1}),s($,{onClick:p,class:"mt-lg"},{default:o(()=>e[5]||(e[5]=[a("Save")])),_:1})]),_:1}))}};export{E as default};