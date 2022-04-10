// /**
//  * Include your custom JavaScript here.
//  *
//  * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
//  * changes on product page, you can attach a listener to the document:
//  *
//  * document.addEventListener('variant:changed', function(event) {
//  *   var variant = event.detail.variant; // Gives you access to the whole variant details
//  * });
//  *
//  * You can also add a listener whenever a product is added to the cart:
//  *
//  * document.addEventListener('product:added', function(event) {
//  *   var variant = event.detail.variant; // Get the variant that was added
//  *   var quantity = event.detail.quantity; // Get the quantity that was added
//  * });
//  *
//  * If you are an app developer and requires the theme to re-render the mini-cart, you can trigger your own event. If
//  * you are adding a product, you need to trigger the "product:added" event, and make sure that you pass the quantity
//  * that was added so the theme can properly update the quantity:
//  *
//  * document.documentElement.dispatchEvent(new CustomEvent('product:added', {
//  *   bubbles: true,
//  *   detail: {
//  *     quantity: 1
//  *   }
//  * }));
//  *
//  * If you just want to force refresh the mini-cart without adding a specific product, you can trigger the event
//  * "cart:refresh" in a similar way (in that case, passing the quantity is not necessary):
//  *
//  * document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
//  *   bubbles: true
//  * }));
//  */

 
// var addToCart = function(e) {
// 	// console.dir(this)
// 	// console.dir(e)
// 	var products = this.parentElement.querySelectorAll('H2.product-model')
// 	// console.dir(products)

// 	// console.log('ID Array:--', idArr)
// 	var productsData = [];

// 	products.forEach( function(product) {
// 	    productsData.push({
// 	        quantity: 1,
// 	        id: product.id
// 	    })
// 	})

// 	var data = {
// 	    items: productsData
// 	}

// 	fetch('/cart/add.js', {
// 	    body: JSON.stringify(data),
// 	    credentials: 'same-origin',
// 	    headers: {
// 	        'Content-Type': 'application/json'
// 	    },
// 	    method: 'POST'
// 	}).then((response) => {
// 	    // console.log('response', response.json());
// 	    response.json();
// 	    window.location.reload();
// 	}).then(data => {
// 	    console.log("Success", data)
// 	    // console.log("One more")
// 	}).catch((err) => {
// 	    // console.log('error');
// 	    console.error(err)
// 	});
// }


//     window.addEventListener('load', function(e) {
//         Array.prototype.forEach.call(
//             document.getElementsByClassName('cart-button'), function(element) {
//                 element.addEventListener('click', addToCart)
//             }
//         );
//     });

//     var kitID = document.getElementsByClassName('kit'); // used to set dynamic kit id
//     var kitTotal = document.getElementsByTagName('h4'); // where total kit price will display
//     var h3Tags = document.getElementsByTagName('h3'); // prices per product
//     var price = 0;  
//     var titlePriceId = 0; // Sets an arbitrary id for total section to match to each kit section
//     var kitPriceArray = [];

//     // Sets a unique id for each kit on the page.
//     for(var i = 0; i < kitID.length; i++){
//         kitID[i].id = i;
//         // console.log(Number(kitTotal[i].id) + i)
//     }

//     // Sets unique id for each kit total title.
//     for(var i = 0; i < kitTotal.length; i++){
//         var kitTotalId = kitTotal[i].id = 50 + i;
//         // console.log('Kit Total in for loop', kitTotal)
//     }



//     // Gathering prices of each product and totalling in the kit headline.
//   for(var i = 0; i < h3Tags.length; i++) {

//     // grabs the 'KIT SECTION ID' from the h3Tags of h3 tags of product prices
//     // h3 parent nodes to get to section id's
//     var h3TagsID = Number(h3Tags[i].parentNode.parentNode.parentNode.id); 

//     // console.log('First in for loop', 'h3TagsID', h3TagsID, 'titlePriceId', titlePriceId)
    
//     // grabs individual product prices from list of h3 tags containing product prices.
//     // h3 tags id's contain individual product prices
//     var productPrice = Number(h3Tags[i].id);

//     if(h3TagsID == titlePriceId){
//         kitPriceArray.push(productPrice);
//     }else{
//         titlePriceId++
//         kitPriceArray = [];
//         kitPriceArray.push(productPrice);
//     }

//     var sum = kitPriceArray.reduce(function (x,y){
//         return x + y;
//     }, 0)
    
//     document.getElementById(kitTotalId).innerHTML = 'Total: ' + '$' + (Number(sum) / 100).toFixed(2);
//   }