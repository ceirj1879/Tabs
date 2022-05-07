'use strict';
function tabs(){
    const tabs=document.querySelectorAll('.tabheader__item'),
tabsParent=document.querySelector('.tabheader__items'),
tabsContent=document.querySelectorAll('.tabcontent'),
head=document.querySelector('.tabheader');


function hideTabContent(){
    tabsContent.forEach(item =>{
        item.classList.add('hide');
        item.classList.remove('show','fade');
        
    });
    tabs.forEach(item=> {
        item.classList.remove('tabheader__item_active');
    });
}

function showTabContent (i=0){
    
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active');
}

hideTabContent();
showTabContent();



    let u=0;
tabsParent.addEventListener('click',(e)=>{
    const target=e.target;
if(target&&target.classList.contains('tabheader__item')){
    
    tabs.forEach((item,i)=>{
        if(target==item){
            hideTabContent();
            showTabContent(i);
            u=i;
            
        }
    }
    );
}

}

);

tabs.forEach((i,w)=>{
    i.addEventListener('mouseenter',(m)=>{
        
        tabs.forEach((t,y)=>{
            tabs[y].classList.remove('tabheader__item_active');
                tabs[w].classList.add('tabheader__item_active');
                /* console.log(y); */
           
        });
             
            }

        );
        
    });

    
}

export default tabs;