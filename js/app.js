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
        div.innerHTML = `
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

// product details function 
const productDetails = (id) => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;

// fetch single product url 
    fetch(url)
        .then(res => res.json())
        .then(data => singleProductDetails(data.data))
}

const singleProductDetails = (details) => {
    const singleProductDetailsShow = document.getElementById('single-product-show');
    const div = document.createElement('div');
    div.classList.add('row');
    div.innerHTML= `
        <div class="col-lg-6 d-flex justify-content-center">
            <img src="${details.image}" class=" rounded-start" alt="...">
        </div>
        <div class="col-lg-6 d-flex text-center">
            <div class="card-body">
                <h5 >Name : <span class="fw-bold">${details.name}</span></h5>
                <h5 >Brand : <span class="fw-bold">${details.brand}</span></h5>
                <h5 >Storage : <span class="fw-bold">${details.mainFeatures.storage}</span></h5>
                <h5 >Display Size : <span class="fw-bold">${details.mainFeatures.displaySize}</span></h5>
                <h5 >Memory : <span class="fw-bold">${details.mainFeatures.memory}</span></h5>
                <h5 >WLAN : <span class="fw-bold">${details.others.WLAN}</span></h5>
                <h5 >Bluetooth : <span class="fw-bold">${details.others.Bluetooth}</span></h5>
                <h5 >GPS : <span class="fw-bold">${details.others.GPS}</span></h5>
                <h5 >NFC : <span class="fw-bold">${details.others.NFC}</span></h5>
                <h5 >Radio : <span class="fw-bold">${details.others.Radio}</span></h5>
                <h5 >USB : <span class="fw-bold">${details.others.USB}</span></h5>

                <h5 >Release Date : <span class="fw-bold">${details.releaseDate}</span></h5>
        </div>
    `
    // console.log(details.releaseDate)
    singleProductDetailsShow.appendChild(div)
}
