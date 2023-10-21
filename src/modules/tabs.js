const tabs = () => {
  const tabWrapper = document.querySelector('.tabs__wrapper');
  const tab = document.querySelectorAll('.tabs__number');
  const content = document.querySelectorAll('.tabs__block');
  const background = document.querySelector('.header');
  const background2 = document.querySelector('.tabs');

  function hideTabContent() {
    content.forEach((elem) => {
      elem.style.display = 'none';
      tab.forEach(item=>{
        item.classList.remove('tabs__number-active');
      })
    });
  }

  function showTabContent(i = 0) {
    if (i === 0) {
      background.style.backgroundColor = '#435476';
      background2.style.backgroundColor = '#435476';
    } else if (i === 1) {
      background.style.backgroundColor = '#AB4E3D';
      background2.style.backgroundColor = '#AB4E3D'
    } else if (i === 2) {
      background.style.backgroundColor = '#435476';
      background2.style.backgroundColor = '#435476';
    }

    content[i].style.display = 'block';
    tab[i].classList.add('tabs__number-active');

  }
  hideTabContent();
  showTabContent();

  tabWrapper.addEventListener('click', (e)=>{
    if(e.target && e.target.classList.contains('tabs__number')){
      tab.forEach((item, i)=>{
        if(e.target === item){
          hideTabContent();
          showTabContent(i);
        }
      })
    }
  })
}

export default tabs;