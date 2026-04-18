const storeProduct = [
  'High Dunks'
  ,'Jordan'
  , 'Lows dunks'
  , 'Nike Air Force 1'
  , 'Air Jordan 1 Retro High OG'
  , 'Nike Air Force 1 07'
]

storeProductImg = [
  ''
  ,''
  ,''
  ,''
  ,''
  ,''
  ,''
  ,''
  ,''
  ,''
  ,''
]
storeProductImg = [ 'https://i5.walmartimages.com/asr/4497536a-6312-4167-a161-e2852adbdc41.49afc54f39e917e6a6e0114c9199d7ee.png?odnHeight=328&odnWidth=328&odnBg=FFFFFF'
,'https://armorzone.com/cdn/shop/products/BLACK_15f345d7-cfdb-4fc5-8da7-cfbc91391398.webp?v=1696527159'
,'https://bayerteamsports.s8.cdn-upgates.com/_cache/1/5/15bd12b283bb45db77eab93d4495f0d0-cardinal-logo1.png'
,'https://nxtrndusa.com/cdn/shop/files/New-Silver-Main-VZR1_cebe391e-e5cf-4668-9380-7fd6e9880f1d.png?crop=center&height=1200&v=1743693580&width=1200'
                   ,'https://nxtrndusa.com/cdn/shop/files/New-Black-Main-VZR1_a8fbe4e9-4b70-44d0-aeae-81cc991ea9ac.png?v=1743693682'   
                   ,'https://nxtrndusa.com/cdn/shop/files/New-Red-Main-VZR1_77ff9ee0-7363-4ed5-8422-3d76cd709c09.png?v=1743693350&width=2048'  
                   ,'https://nxtrndusa.com/cdn/shop/files/New-Blue-Main-VZR3_46731e3a-50a5-4a71-a8a9-8e921286e008.png?v=1743692741'
                   ,'https://static.nike.com/a/images/t_default/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/9bfc7226-b29c-4d72-a9a6-fd379feb97a4/NIKE+VAPOR+EDGE+360+UT.png' ,'https://cdn.media.amplience.net/i/scheelspoc/87271600728?w=500&h=500&fmt=auto&v=1'
]
/*
for(let i = 0; i < storeProductImg.length; i++) {  
  document.getElementById("product").innerHTML += "<br><br>"+"<img src= '"+storeProductImg[i]+"'>"+'<div>'+storeProduct[i]+'</div>'   
}
/*
/*
Objects are composed of attributes. If and attribute contains a function, it is considered to ebe a method of the objet, otherwise the atribute is considered a property.
*/

let userProfile= {
  firstName: 'Kenny',
  lastName: 'Young',
  age: '15',
  location: 'Minnesota',
  favoriteFoods: ['Hotdogs', 'Soda', 'Big Mac', 'Pizza', 'French'],
};

let storeProducItem={
  Name: 'Football gear',
  colors: ['black', 'white', 'gray'],
  materials: ['leather','plastic'],
  price: 400.00,
  description: 'stylish touch',
}

let storeInventory ={
 item1 : {
    name: 'Schutt F7 White',
  colors: ['White', 'light blue', 'gray'],
  materials: ['Metal','plastic'],
  price: 359.99,
  description: 'stylish touch',
  image: storeProductImg[0]
},

item2: {
  name: 'Ridell Speed Flex Black',
  colors: ['black', 'yellow', 'white'],
  materials: ['leather','plastic'],
  price: 429.99,
  description: 'stylish touch',
  image: storeProductImg[1]
},
item3:{
  name: 'Ridell Axiom Red',
  colors: ['black', 'red', 'blue'],
  materials: ['leather','plastic'],
  price: 989.99,
  description: 'stylish touch',
  image: storeProductImg[2]
},
item4:{
  name: 'NXTRND VZR1 MIRROR',
  colors: ['black','green','white'],
  materials:['leather', 'plastic'],
  price: 45.00,
  description: 'Premium materials',
  image: storeProductImg[3]
},
item5:  {
  name: 'NXTRND VZR3 BLACK',
  colors: ['white'],
  material: ['leather'],
  price: 45.00,
  description:'subtle platform',
  image: storeProductImg[4]
},
item6:  { name: 'NXTRND VZR3 RED',
  colors: ['white'],
  material: ['leather'],
  price: 50.00,
  description:'subtle platform',
  image: storeProductImg[5]},
item7:  { 
  name: 'NXTRND VZR3 BLUE',
  colors: ['white'],
  material: ['leather'],
  price: 50.00,
  description:'subtle platform',
  image: storeProductImg[6]},
item8:  {
  name:'Nike Vapor Edge 360 Untouchable Cleats Black',
  colors: ['white', 'yellow'],
  material: ['leather'],
  price:189.99,
  descrition:' classic details',
  image: storeProductImg[7]},
item9:  {
  name: 'NXTRND G2 Pro Receiver Football Gloves Black',
  colors:['white','light blue','gray'],
  materials: ['leather','plastic'],
  price:50.00,
  description: 'multicourt traction',
  image: storeProductImg[8]},
item10:  {
name:'Nike Zoom Vomero 5',
colors:['white', 'black', 'gray'],
materials:['leather','plastic'],
price:160.00,
description:'easy styling',
image: storeProductImg[9]},
};

  
  
for(let i = 0; i < storeProductImg.length; i++) {  
    document.getElementById("product").innerHTML += 
    "<div class= productnode>"
    +"<img src='"+storeInventory[Object.keys(storeInventory)       [i]].image+"'>"+"<br>"
    +storeInventory[Object.keys(storeInventory)[i]].name+"<br>"
    +"$"+storeInventory[Object.keys(storeInventory)[i]].price+"<br>"
 +"<button id='myButton' class='rounded-button'>add to cart</button>"
    +"</div> "
  
}
