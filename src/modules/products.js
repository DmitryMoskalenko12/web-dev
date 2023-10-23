const products = () => {
const wrapper = document.querySelector('.products__wrapper');
const viewBlock = document.querySelectorAll('.products__view-block');
const shareBlock = document.querySelectorAll('.products__like-share');
const cards = document.querySelectorAll('.products__card');

cards.forEach((card, i) => {
  card.addEventListener('mouseenter', (event) => {
    if (event.target.getAttribute('data-id') === String(i)) {
      viewBlock[i]?.classList.add('products__view-block_active');
      shareBlock[i]?.classList.add('products__like-share_active');
    }
  });

  card.addEventListener('mouseleave', (event) => {
    if (event.target.getAttribute('data-id') === String(i)) {
      viewBlock[i]?.classList.remove('products__view-block_active');
      shareBlock[i]?.classList.remove('products__like-share_active');
    }
  });
});
}

export default products;