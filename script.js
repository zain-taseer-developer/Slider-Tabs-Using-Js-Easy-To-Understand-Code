console.log("cha ma loko");

var childsAll=document.querySelectorAll('.child');
childsAll.forEach((slide,index)=>{
slide.style.left=`${index*100}%`;
})


var counter=0;

function gonext(){
  if(counter<4){
    counter++;
    slideImage();
    console.log(`plus ${counter}`);
  }else{
    console.log("value is greater than 4 now ");
    
}}

function goprev(){
  if(counter>0 ){
    counter--;
  slideImage();
  console.log(`minus ${counter}`);
  }else{
    console.log("value is less than 0");
}}

const slideImage=function(){
  
  childsAll.forEach((slide)=>{
slide.style.transform=`translate(-${counter*100}%)`;
   } )
}






// js for tabs 
var tabsAll= document.querySelectorAll('.tablinks');
for(var i=0; i<tabsAll.length; i++){
  tabsAll[i].addEventListener('click',function(e){
    let tabsId=e.target.dataset.tab;
    let activeTab=e.target;
    console.log(tabsId)

    var getClickedTabData=document.getElementById(tabsId);
   var tabsContentTohideothers=document.querySelectorAll('.tabs_content');
   console.log(tabsContentTohideothers);

   for(var j=0; j<tabsContentTohideothers.length;j++){
    tabsContentTohideothers[j].style.display="none";
   }
   for(var a=0; a<tabsAll.length;a++){
    tabsAll[a].classList.remove('active');
   }
    getClickedTabData.style.display="block";
    activeTab.classList.add('active');
  })
}

document.querySelector('.tablinks').click();