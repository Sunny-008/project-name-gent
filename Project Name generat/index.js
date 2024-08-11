// const nam=document.getElementById("name");
// const nam3=document.querySelector(".tags");
// const addname=()=>{
    // console.log(nam.value);
//     const tag=document.createElement=("div");
//     tag.setAttribute("class","tag");
//     tag.innerText=`Hey,I am ${nam.value}`;
//     nam3.append(tag);
// };
const name=document.getElementById("name");
const tagscontainer=document.querySelector(".tags");
const addname=()=>{
    if (name.value==="") {
       alert("Please enter name");
        return null;
    }
    const tag=document.createElement("div");
    tag.setAttribute("class","tag");
    tag.innerText=`Hey,I am ${name.value}`;
    tagscontainer.append(tag);
};