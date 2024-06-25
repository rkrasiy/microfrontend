import faker from 'faker';

const mount = ( anchorEl ) => {
  const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;

  anchorEl.innerHTML = cartText;
}

if(process.env.NODE_ENV === 'development'){
  const anchorEl = document.querySelector('#dev-cart');

  if(anchorEl){
    mount(anchorEl);
  }
}

export { mount };


