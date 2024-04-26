const apiUrl = "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json";

async function fetchData() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log("data fetched from the api:", data);

        const container = document.getElementById("productContainer");

        function filterProducts(category) {
            container.innerHTML = '';
            data.categories.forEach((cat) => {
                if (cat.category_name === category) {
                    let productIndex = 0;
                    
                    cat.category_products.forEach((product) => {
                        productIndex++;

                        const productCard = document.createElement("div");
                        productCard.classList.add("product");


                        const image = document.createElement("img");
                        image.src = product.image;
if (productIndex === 1) {
    const weddingSeasonTag = document.createElement("div");
    weddingSeasonTag.textContent = "Wedding Season";
    weddingSeasonTag.classList.add("wedding-season-tag");
    productCard.appendChild(weddingSeasonTag);
} else if (productIndex === 3) {
    const onOfferTag = document.createElement("div");
    onOfferTag.textContent = "On Offer";
    onOfferTag.classList.add("on-offer-tag");
    productCard.appendChild(onOfferTag);
} else if (productIndex === 4) {
    const newSeasonTag = document.createElement("div");
    newSeasonTag.textContent = "New Season";
    newSeasonTag.classList.add("new-season-tag");
    productCard.appendChild(newSeasonTag);
}

productCard.appendChild(image);

                        const productInfo = document.createElement("div");
                        productInfo.classList.add("product-info");


                        const title = document.createElement("h2");
                        title.textContent = product.title;
                        title.classList.add("product-title");
                        productInfo.appendChild(title);

                        const vendor = document.createElement("h3");
                        vendor.textContent = product.vendor;
                        vendor.classList.add("product-vendor");
                        productInfo.appendChild(vendor);

                        

                        productCard.appendChild(productInfo);

                        const priceContainer = document.createElement("div");
                        priceContainer.classList.add("price");

                        const price = document.createElement("h3");
                        price.textContent = ` Rs ${product.price}`;
                        price.classList.add("product-price");
                        priceContainer.appendChild(price);

                        const compareAtPrice = document.createElement("h3");
                        compareAtPrice.textContent = ` ${product.compare_at_price}`;
                        compareAtPrice.classList.add("product-compare-price");
                        priceContainer.appendChild(compareAtPrice);

                        const discountPercentage = Math.round(
                            ((product.compare_at_price - product.price) / product.compare_at_price) * 100
                        );
                        const discountElement = document.createElement("h3");
                        discountElement.textContent = ` ${discountPercentage}% off`;
                        discountElement.style.color = "red"; // Set the color to red
                        priceContainer.appendChild(discountElement);

                        productCard.appendChild(priceContainer);

                        const addToCartBtn = document.createElement("button");
                        addToCartBtn.textContent = "Add to Cart";
                        addToCartBtn.classList.add("add-to-cart-btn"); 
                        productCard.appendChild(addToCartBtn);

                        container.appendChild(productCard);

                    });
                }
            });
        }

        filterProducts('Men');

        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const category = btn.getAttribute('data-category');
                filterProducts(category);
            });
        });   
      //loader function
      setTimeout(() => {
        document.querySelector('.loader').style.display = 'none';
        document.querySelector('.content').style.display = 'block';
    }, 1000); 

function handleFilterClick(event) {
      const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach((button) => {
        button.classList.remove('selected-filter');
    });

   
    event.target.classList.add('selected-filter');
}


const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach((button) => {
    button.addEventListener('click', handleFilterClick);
});



} catch (error) {
    console.error("Error fetching data:", error);
}
}

document.addEventListener("DOMContentLoaded", fetchData);