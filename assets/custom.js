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



// Code from theme for choosing variant of a given product
{/*<div class="product-form__variants">
  {%- for option in prod.options_with_values -%}
    {%- assign downcase_option = option.name | downcase -%}
    {%- capture option_name -%}{{ section.id }}-{{ prod.id }}-{{ forloop.index }}{%- endcapture -%}

    {%- assign option_selector_type = 'select' -%}

    {%- if section.settings.color_mode != 'block' and section.settings.color_mode != 'dropdown' and color_label contains downcase_option -%}
      {%- comment -%}NOTE: even if the merchant is using the mode to display variant images, if ALL variant do not have an associated image, we fallback to color{%- endcomment -%}

      {%- assign has_image_attached_to_all_variants = true -%}

      {%- for variant in prod.variants -%}
        {%- unless variant.image -%}
          {%- assign has_image_attached_to_all_variants = false -%}
          {%- break -%}
        {%- endunless -%}
      {%- endfor -%}

      {%- if section.settings.color_mode == 'color' or has_image_attached_to_all_variants == false -%}
        {%- assign option_selector_type = 'color' -%}
      {%- else -%}
        {%- assign option_selector_type = 'variant' -%}
      {%- endif -%}
    {%- else -%}
      {%- if color_label contains downcase_option -%}
        {%- if section.settings.color_mode == 'block' -%}
          {%- assign option_selector_type = 'block' -%}
        {%- endif -%}
      {%- elsif section.settings.selector_mode == 'block' -%}
        {%- assign option_selector_type = 'block' -%}
      {%- endif -%}
    {%- endif -%}

    <div class="product-form__option" data-selector-type="{{ option_selector_type }}">
      {%- case option_selector_type -%}
        {%- when 'color' -%}
          <span class="product-form__option-name text--strong">{{ option.name }}: <span class="product-form__selected-value">{{ option.selected_value }}</span></span>

          <div class="color-swatch-list color-swatch-list--large">
            {%- for value in option.values -%}
              {%- assign downcased_value = value | downcase -%}
              {%- capture color_id -%}{{ option_name }}-{{ forloop.index }}{%- endcapture -%}

              {%- assign color_swatch_name = value | handle | append: '.png' -%}
              {%- assign color_swatch_image = images[color_swatch_name] -%}

              <div class="color-swatch {% if downcased_value == 'white' or downcased_value == 'blanc' %}color-swatch--white{% endif %}">
                <input class="color-swatch__radio product-form__single-selector" type="radio" name="{{ option_name }}" id="{{ color_id }}" value="{{ value | escape }}" {% if option.selected_value == value %}checked{% endif %} data-option-position="{{ option.position }}" aria-hidden="true">
                <label class="color-swatch__item" for="{{ color_id }}" style="{% if color_swatch_image != blank %}background-image: url({{ color_swatch_image | img_url: '64x64' }}){% else %}background-color: {{ value | replace: ' ', '' | downcase }}{% endif %}" title="{{ value | escape }}">{% render 'icon', icon: 'cross-sold-out' %}</label>
              </div>
            {%- endfor -%}
          </div>
        {%- when 'variant' -%}
          <span class="product-form__option-name text--strong">{{ option.name }}: <span class="product-form__selected-value">{{ option.selected_value }}</span></span>

          <div class="variant-swatch-list">
            {%- capture option_name -%}option{{ option.position }}{%- endcapture -%}

            {%- for value in option.values -%}
              {%- capture variant_swatch_id -%}{{ option_name }}-{{ forloop.index }}{%- endcapture -%}

              {%- for variant in prod.variants -%}
                {%- if variant[option_name] == value and variant.image -%}
                  <div class="variant-swatch">
                    <input class="variant-swatch__radio product-form__single-selector" type="radio" name="{{ option_name }}" id="{{ variant_swatch_id }}" value="{{ value | escape }}" {% if option.selected_value == value %}checked{% endif %} data-option-position="{{ option.position }}">

                    <label class="variant-swatch__item" for="{{ variant_swatch_id }}" title="{{ value | escape }}">
                      <div class="aspect-ratio" style="padding-bottom: {{ 100.0 | divided_by: variant.image.aspect_ratio }}%">
                        <img src="{{ variant.image | img_url: '120x' }}" alt="{{ variant.image.alt | escape }}">
                      </div>

                      {% render 'icon', icon: 'cross-sold-out' %}
                    </label>
                  </div>

                  {%- break -%}
                {%- endif -%}
              {%- endfor -%}
            {%- endfor -%}
          </div>
        {%- when 'block' -%}
          <span class="product-form__option-name text--strong">{{ option.name }}: <span class="product-form__selected-value">{{ option.selected_value }}</span></span>



          <div class="block-swatch-list">
            {%- for value in option.values -%}
              {%- capture block_swatch_id -%}{{ option_name }}-{{ forloop.index }}{%- endcapture -%}

              <div class="block-swatch">
                <input 
                  class="block-swatch__radio product-form__single-selector" 
                  type="radio" 
                  name="{{ option_name }}" 
                  id="{{ block_swatch_id }}" 
                  value="{{ value | escape }}" 
                  {% if option.selected_value == value %}
                  checked
                  {% endif %} 
                  data-option-position="{{ option.position }}" 
                  aria-hidden="true">
                <label class="block-swatch__item" for="{{ block_swatch_id }}" title="{{ value | escape }}">
                  <span class="block-swatch__item-text">{{ value }}</span>
                </label>
              </div>
            {%- endfor -%}
          </div>
        {%- when 'select' -%}
          <label for="{{ option_name }}" class="product-form__option-name text--strong">{{ option.name }}: <span class="product-form__selected-value">{{ option.selected_value }}</span></label>

          <div class="select-wrapper select-wrapper--primary">
            {%- render 'icon', icon: 'arrow-bottom' -%}

            <select class="product-form__single-selector" name="{{ option_name }}" id="{{ option_name }}" data-option-position="{{ option.position }}">
              {%- for value in option.values -%}
                <option value="{{ value | escape }}" {% if value == option.selected_value %}selected="selected"{% endif %}>{{ value }}</option>
              {%- endfor -%}
            </select>
          </div>
      {%- endcase -%}
    </div>
  {%- endfor -%}

  <div class="no-js product-form__option">
    <label for="product-select-{{ prod.id }}">{{ 'prod.form.variant' | t }}</label>

    <div class="select-wrapper select-wrapper--primary">
      <select id="product-select-{{ prod.id }}" name="id">
        {%- for variant in prod.variants -%}
          <option {% if variant == selected_variant %}selected="selected"{% endif %} {% unless variant.available %}disabled="disabled"{% endunless %} value="{{ variant.id }}" data-sku="{{ variant.sku }}">{{ variant.title }} - {{ variant.price | money }}</option>
        {%- endfor -%}
      </select>
    </div>
  </div>
</div>*/}


// var changeProduct = function(e) {
//  var product = this.querySelectorAll('select');
//  var index = product[0].selectedIndex;

//  console.log('Index', index)

//  var test = document.getElementById('testing');
//  console.log('Test--- ', test)
//  test.innerHTML = 'zero';
//    // test.innerHTML = 'One, one, one';
//  }

// Working but forbidden storefront api call with graphql
// const graphData = 
//     `
//       {
//         shop 
//         {
//           name
//         }
//       }
    
//     ` 

//   fetch('https://discount-indoor-gardening.myshopify.com/api/2020-07/graphql.json', {
//     'method': 'POST',
//     'mode': 'no-cors',
//     'headers': {
//       'Content-Type': 'application/JSON',
//       'X-Shopify-Access-Token': "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"
//     },
//     'body': JSON.stringify(graphData)
//   }).then((res) => {
//     // res.json();
//     // console.log("Response", res.json())
//     console.log("response", res)
//   }).then((graphData) => {
//     console.log(graphData)
//   }).catch((err) => {
//     console.log(err)
//   })