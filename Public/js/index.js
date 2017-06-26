var list = document.body.getElementsByTagName('li');
var home = list[0];
var about = list[1];
var contact = list[2];
var products = list[3];

home.addEventListener('click',function(){
  window.location.href = '/'
});

about.addEventListener('click',function(){
  window.location.href = '/about'
});

contact.addEventListener('click',function(){
  window.location.href = '/contact'
});

products.addEventListener('click',function(){
  window.location.href = '/products'
});