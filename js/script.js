window.addEventListener('DOMContentLoaded',function(){
    const tabs = document.querySelectorAll('.tabheader__item'),
            tabsParents = document.querySelector('.tabheader__items'),
            tabContent = document.querySelectorAll('.tabcontent');


    function hideTabContent(){
      tabContent.forEach(item=>{
        item.classList.add('none')
        item.classList.remove('show','fide')
      })

      tabs.forEach(item=>{
        item.classList.remove('tabheader__item_active')
      })
    }   
    
    function showTabContent(i = 0){
      tabContent[i].classList.add('show','fade')
      tabContent[i].classList.remove('none')
      tabs[i].classList.add('tabheader__item_active')
    }

    hideTabContent()
    showTabContent()

    tabsParents.addEventListener('click',(event)=>{
      if (event.target && event.target.classList.contains('tabheader__item')){
        tabs.forEach((item, i )=>{
          if(event.target == item){
            hideTabContent()
            showTabContent(i)
          }
        })
      }
    })
})