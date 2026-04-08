// ===== CART =====
function getCart(){try{return JSON.parse(localStorage.getItem('fr-cart')||'[]');}catch(e){return[];}}
function saveCart(c){localStorage.setItem('fr-cart',JSON.stringify(c));updateCartUI();}
function addToCart(item){
  var c=getCart(), ex=c.find(function(x){return x.id===item.id;});
  if(ex){ex.qty+=1;}else{c.push({id:item.id,name:item.name,price:item.price,img:item.img,qty:1});}
  saveCart(c); showToast('🛒 '+item.name+' added!');
}
function removeFromCart(id){saveCart(getCart().filter(function(c){return c.id!==id;}));}
function updateQty(id,d){
  var c=getCart(),it=c.find(function(x){return x.id===id;});
  if(it){it.qty+=d;if(it.qty<=0)c.splice(c.indexOf(it),1);}
  saveCart(c);
}
function getCartTotal(){return getCart().reduce(function(s,c){return s+c.price*c.qty;},0);}
function getCartCount(){return getCart().reduce(function(s,c){return s+c.qty;},0);}
function updateCartUI(){
  var n=getCartCount();
  document.querySelectorAll('.cart-count').forEach(function(el){
    el.textContent=n; el.classList.toggle('visible',n>0);
  });
}

// ===== TOAST =====
function showToast(msg){
  var t=document.querySelector('.toast');
  if(!t){t=document.createElement('div');t.className='toast';document.body.appendChild(t);}
  t.textContent=msg; t.classList.add('show');
  clearTimeout(t._x); t._x=setTimeout(function(){t.classList.remove('show');},2500);
}

// ===== MENU DATA =====
var MENU={
  pizza:[
    {id:'p1',name:'Margherita Classic',desc:'San Marzano tomato sauce, fresh fior di latte mozzarella, fresh basil & olive oil',price:299,img:'/images/pizza1.avif',badge:'hot',rating:4.8,reviews:210,time:'25 min'},
    {id:'p3',name:'Paneer Paradise',desc:'Tandoori paneer tikka, tri-colour capsicum, sweet corn & herb cream cheese',price:349,img:'/images/pizza2.avif',badge:'veg',rating:4.6,reviews:180,time:'22 min'},
    {id:'p4',name:'Pepperoni Blast',desc:'Double layer pepperoni, Kalamata olives, extra mozzarella & oregano dust',price:449,img:'/images/pizza3.avif',badge:'hot',rating:4.9,reviews:450,time:'25 min'},
    {id:'p5',name:'Veggie Delight',desc:'Seasonal fresh vegetables, mushrooms, sun-dried tomatoes & pesto base',price:319,img:'/images/pizza4.avif',badge:'veg',rating:4.5,reviews:140,time:'20 min'},
    {id:'p6',name:'Farmhouse Fresh',desc:'Mushroom, red onion, capsicum, tomato & garlic white sauce',price:369,img:'/images/pizza5.avif',badge:'new',rating:4.6,reviews:95,time:'22 min'}
  ],
  burger:[
    {id:'b1',name:'Classic Smash',desc:'Double smash patty, American cheese, pickles, house sauce & brioche bun',price:199,img:'/images/burger1.avif',badge:'best',rating:4.8,reviews:380,time:'15 min'},
    {id:'b2',name:'Crispy Chicken',desc:'Southern fried chicken fillet, creamy coleslaw, sriracha mayo & sesame bun',price:229,img:'/images/burger2.avif',badge:'hot',rating:4.7,reviews:290,time:'18 min'},
    {id:'b3',name:'Spicy Veggie',desc:'Crunchy aloo tikki, lettuce, tomato, mint chutney & spicy mayo',price:169,img:'/images/burger3.avif',badge:'veg',rating:4.5,reviews:200,time:'15 min'},
    {id:'b4',name:'Mushroom Swiss',desc:'Sautéed wild mushrooms, melted Swiss cheese & garlic herb aioli',price:249,img:'/images/burger4.avif',badge:'new',rating:4.6,reviews:120,time:'18 min'},
    {id:'b5',name:'BBQ Bacon Monster',desc:'Smoked beef patty, streaky bacon, BBQ onion rings & cheddar',price:299,img:'/images/burger5.avif',badge:'hot',rating:4.9,reviews:310,time:'20 min'},
    {id:'b6',name:'Falafel Burger',desc:'Crispy chickpea falafel, hummus, tahini, pickled red onion & pita',price:189,img:'/images/burger6.avif',badge:'veg',rating:4.4,reviews:88,time:'15 min'}
  ],
  maincourse:[
    {id:'m1',name:'Butter Chicken',desc:'Tender chicken in velvety tomato-butter gravy, served with butter naan',price:349,img:'/images/main1.avif',badge:'best',rating:4.9,reviews:520,time:'30 min'},
    {id:'m2',name:'Dal Makhani',desc:'Slow-simmered black lentils, butter, cream & aromatic spices',price:249,img:'/images/main2.avif',badge:'veg',rating:4.7,reviews:310,time:'35 min'},
    {id:'m3',name:'Paneer Tikka Masala',desc:'Char-grilled cottage cheese cubes in rich, spiced masala gravy',price:299,img:'/images/main3.avif',badge:'veg',rating:4.8,reviews:280,time:'28 min'},
    {id:'m4',name:'Chicken Biryani',desc:'Aged basmati rice, saffron, whole spices, slow-cooked chicken & raita',price:399,img:'/images/main4.avif',badge:'hot',rating:4.9,reviews:610,time:'40 min'},
    {id:'m5',name:'Lamb Rogan Josh',desc:'Kashmiri-style slow-braised lamb in aromatic whole spice gravy',price:449,img:'/images/main5.avif',badge:'hot',rating:4.8,reviews:190,time:'45 min'},
    {id:'m6',name:'Veg Thali',desc:'5 rotating curries, dal, steamed rice, roti, pickle & dessert',price:299,img:'/images/main6.avif',badge:'best',rating:4.6,reviews:420,time:'30 min'}
  ],
  pasta:[
    {id:'pa1',name:'Spaghetti Carbonara',desc:'Egg yolk sauce, crispy pancetta, pecorino romano & cracked black pepper',price:329,img:'/images/pasta1.avif',badge:'best',rating:4.7,reviews:240,time:'22 min'},
    {id:'pa2',name:'Penne Arrabbiata',desc:'Fiery San Marzano tomato sauce, garlic, chilli flakes & fresh basil',price:279,img:'/images/pasta2.avif',badge:'hot',rating:4.5,reviews:180,time:'20 min'},
    {id:'pa3',name:'Creamy Mushroom',desc:'Sautéed porcini & button mushrooms in garlic cream sauce, truffle oil',price:299,img:'/images/pasta3.avif',badge:'veg',rating:4.6,reviews:160,time:'20 min'},
    {id:'pa4',name:'Chicken Pesto',desc:'Grilled chicken breast, house basil pesto, cherry tomatoes & parmesan',price:349,img:'/images/pasta4.avif',badge:'new',rating:4.7,reviews:130,time:'22 min'}
  ],
  sushi:[
    {id:'s1',name:'Salmon Nigiri (x4)',desc:'Wild Atlantic salmon slices over hand-pressed seasoned sushi rice',price:449,img:'/images/sushi1.avif',badge:'best',rating:4.9,reviews:280,time:'20 min'},
    {id:'s2',name:'Dragon Roll',desc:'Tempura shrimp, avocado, cucumber, topped with eel & sweet eel sauce',price:549,img:'/images/sushi2.avif',badge:'hot',rating:4.8,reviews:210,time:'25 min'},
    {id:'s3',name:'Spicy Tuna Roll',desc:'Sushi-grade tuna, sriracha mayo, cucumber & sesame seeds',price:499,img:'/images/sushi3.avif',badge:'hot',rating:4.7,reviews:190,time:'22 min'},
    {id:'s4',name:'Veggie Futomaki',desc:'Creamy avocado, cucumber, carrot, pickled daikon & sesame',price:399,img:'/images/sushi4.avif',badge:'veg',rating:4.5,reviews:120,time:'20 min'}
  ],
  sweets:[
    {id:'sw1',name:'Gulab Jamun',desc:'Soft khoya dumplings, simmered in rose-cardamom sugar syrup — served warm',price:99,img:'/images/sweet1.avif',badge:'best',rating:4.9,reviews:590,time:'10 min'},
    {id:'sw2',name:'Chocolate Lava Cake',desc:'Warm dark chocolate fondant, molten center, served with vanilla ice cream',price:199,img:'/images/sweet2.avif',badge:'hot',rating:4.8,reviews:340,time:'15 min'},
    {id:'sw3',name:'Mango Cheesecake',desc:'New York-style baked cheesecake topped with fresh Alphonso mango compote',price:179,img:'/images/sweet3.avif',badge:'new',rating:4.7,reviews:220,time:'10 min'},
    {id:'sw4',name:'Rasmalai',desc:'Soft chenna dumplings, chilled in reduced saffron milk with pistachios',price:129,img:'/images/sweet4.avif',badge:'veg',rating:4.8,reviews:410,time:'10 min'},
    {id:'sw5',name:'Brownie Sundae',desc:'Warm walnut brownie, two scoops vanilla ice cream, salted caramel drizzle',price:219,img:'/images/sweet5.avif',badge:'hot',rating:4.7,reviews:290,time:'12 min'},
    {id:'sw6',name:'Kulfi Falooda',desc:'Malai kulfi, rose falooda noodles, basil seeds, rose syrup & pistachios',price:149,img:'/images/sweet6.avif',badge:'best',rating:4.9,reviews:360,time:'8 min'}
  ],
  drinks:[
    {id:'d1',name:'Mango Lassi',desc:'Chilled Alphonso mango, thick yogurt, cardamom & a touch of rose water',price:99,img:'/images/drink1.avif',badge:'best',rating:4.8,reviews:450,time:'5 min'},
    {id:'d2',name:'Cold Brew Coffee',desc:'12-hour slow-steeped dark roast, smooth & naturally sweet, served over ice',price:149,img:'/images/drink2.avif',badge:'new',rating:4.7,reviews:180,time:'5 min'},
    {id:'d3',name:'Fresh Lime Soda',desc:'Hand-squeezed lime, sparkling water, chat masala — sweet or salted',price:79,img:'/images/drink3.avif',badge:'veg',rating:4.5,reviews:320,time:'5 min'},
    {id:'d4',name:'Strawberry Shake',desc:'Farm-fresh strawberries, whole milk, ice cream & whipped cream',price:179,img:'/images/drink4.avif',badge:'hot',rating:4.7,reviews:260,time:'8 min'}
  ]
};

function renderCard(item){
  return '<div class="food-card">'
    +(item.badge?'<span class="badge badge-'+item.badge+'">'+item.badge.toUpperCase()+'</span>':'')
    +'<div class="food-card-img"><img src="'+item.img+'" alt="'+item.name+'" loading="lazy"/></div>'
    +'<div class="food-card-body">'
    +'<div class="food-card-name">'+item.name+'</div>'
    +'<div class="food-rating"><span class="star">★</span>'+item.rating+' <span style="opacity:.6">('+item.reviews+')</span>'
    +'<span style="margin-left:auto;font-size:.75rem">⏱ '+item.time+'</span></div>'
    +'<div class="food-card-desc">'+item.desc+'</div>'
    +'<div class="food-card-footer">'
    +'<span class="food-price">₹'+item.price+'</span>'
    +'<button class="add-btn" onclick=\'addToCart({id:"'+item.id+'",name:"'+item.name.replace(/"/g,"'")+'",price:'+item.price+',img:"'+item.img+'"})\'>+</button>'
    +'</div></div></div>';
}

document.addEventListener('DOMContentLoaded',function(){updateCartUI();});
