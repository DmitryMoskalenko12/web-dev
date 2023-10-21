const tabs = () => {
  const tabWrapper = document.querySelector('.tabs__wrapper');
  const tab = document.querySelectorAll('.tabs__number');
  const content = document.querySelectorAll('.tabs__block');
  const background = document.querySelector('.header');
  const background2 = document.querySelector('.tabs');
  const title = document.querySelector('.header__main-title');

  function hideTabContent() {
    content.forEach((elem) => {
      elem.classList.remove('tabs__block-active');
      tab.forEach(item=>{
        item.classList.remove('tabs__number-active');
      })
    });
  }

  function showTabContent(i = 0) {
    if (i === 0) {
      title.textContent = 'luminaire';
      background.style.backgroundColor = '#435476';
      background2.style.backgroundColor = '#435476';
    } else if (i === 1) {
      background.style.backgroundColor = '#AB4E3D';
      background2.style.backgroundColor = '#AB4E3D';
      title.textContent = 'Capsule';
    } else if (i === 2) {
      background.style.backgroundColor = '#435476';
      background2.style.backgroundColor = '#435476';
      title.textContent = 'luminaire';
    }

    content[i].classList.add('tabs__block-active');
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