import faker from 'faker';



const mount = (anchorEl) => {
  let products = '';

  for(let i = 0; i < 5; i ++){
    const name = faker.commerce.productName();
    products += `<p>${name}</p>`;
  }
  
  anchorEl.innerHTML = products;
}

if(process.env.NODE_ENV === 'development'){
  const anchorEl = document.querySelector('#dev-products');
  
  if(anchorEl){
    mount(anchorEl);
  }

}

export { mount };
