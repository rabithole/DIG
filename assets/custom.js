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
//     // Adding products to the cart and refreshing the page.
    
//     let formBuildKit = document.getElementById('kit-form');
//     let formValue = document.getElementById('value');
//     let id = document.getElementsByClassName('product-model'); // id of each product placed in the product title h2 element.
//     let idArr = [];

//         // Add each product id to the id array. ( idArr )
//     for(let i = 0; i < id.length; i++) {
//         idArr.push(id[i].id );
//     }

//     console.log('ID Array:--', idArr)
//     let prodData = idArr.map(id => {
//         return {
//             quantity: 1,
//             id: id
//         }
//     })

//     let data = {
//         items: prodData
//     }

// function idSubmit() {
//     console.log('submit')
//     fetch('/cart/add.js', {
//         body: JSON.stringify(data),
//         credentials: 'same-origin',
//         headers: {
//             'Content-Type': 'application/json',
//             'X-Requested-With': 'XMLHttpRequest'
//         },
//         method: 'POST'
//     }).then((response) => {
//         console.log('response', response.json());
//         window.location.reload();
//         response.json();
//     }).then(data => {
//         console.log("Success", data)
//         console.log("One more")
//     }).catch((err) => {
//         console.log('error');
//         console.error(err)
//     });
// }

// function findSku() {
//     var productJS = {{ prod.variants | json }}
//     let prodSku = {{ sku }}
//     console.log('Product from JS: ', productJS[0].sku, prodSku)

//     for(let i = 0; i < productJS.length; i++ ){
//         if(productJS[i].sku == prodSku ){
//             console.log('sku', productJS[i].sku)
//         }
//     }
// }

