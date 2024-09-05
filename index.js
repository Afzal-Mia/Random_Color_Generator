
const getRandomColor=function(){
    const letters='0123456789ABCDEF';
    let color='#';
    for(let i=0;i<6;i++)
    {
        color+=letters[Math.floor(Math.random()*16)];
    }
    return color;
}


//.......................element declaration....................... 
const gBtn=document.getElementById('g-btn');
const itemColorArray=document.getElementsByClassName('item');
const spanArray=document.getElementsByTagName('span');
const palletparent=document.querySelector(".pallet-container");
const copyPopup=document.querySelector(".show-at-copy-container");
 
// Convert NodeList to Array for forEach to work properly
const itemArray = Array.from(itemColorArray); // Array.from creates an array from the NodeList

gBtn.addEventListener("click",()=>{
    itemArray.forEach((element,index) => {
        const randomclr=getRandomColor();
        element.style.backgroundColor=randomclr;
        spanArray[index].innerText=randomclr;
    });
});
//.............here event delegation concept is used.............
palletparent.addEventListener("click",(e)=>{
   const target=document.getElementById(`${e.target.id}`);
   const cpy=document.getElementById("cpy");
   cpy.innerText=target.innerText;
   navigator.clipboard.writeText(target.innerText);
   copyPopup.classList.add("display");
   
});

//removing the popup
copyPopup.addEventListener("click",()=>{
    copyPopup.classList.remove("display");
})