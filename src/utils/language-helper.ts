import langData from "../../public/lang-v1/lang.json"
let lang:string

export const getString = (str:string)=>{
    if(!lang){
        if(!localStorage.getItem("lang"))
            localStorage.setItem('lang','en')
        lang=localStorage.getItem("lang")
    }
    return langData[lang][str]
}