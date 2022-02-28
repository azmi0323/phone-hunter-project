const searchProduct = () => {
    const inputField = document.getElementById('input-field');
    const inputFieldText = inputField.value;
    // console.log(inputFieldText);

    const url = `https://openapi.programming-hero.com/api/phones?search=${inputFieldText}`;
    // console.log(url);

    fetch(url)
        .then(res => res.json())
        .then(data => productResult(data.data))

    inputField.value = '';
}

const productResult = (products) => {
    // console.log(products)
    products.forEach(product => {
        // console.log(product)
        const productShow = document.getElementById('product-show');
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML=`
            <div class="card">
                <img class="p-5" src="${product.image}" class="card-img-top" alt="...">
                <div class="card-body p-3">
                    <h4 class="card-title">Phone Name : ${product.phone_name}</h4>
                    <h5 class="card-title">Brand : ${product.brand}</h5>
                    <button onclick="productDetails('${product.slug}')" class="btn btn-primary" type="button">Details</button>
                </div>
            </div>
        `
        productShow.appendChild(div)
    });
}

const productDetails = (details)=>{
    const url =  `https://openapi.programming-hero.com/api/phone/${details}`;

    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))

}
