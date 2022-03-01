const searchProduct = () => {
    const inputField = document.getElementById('input-field');
    const inputFieldText = inputField.value;
    // console.log(inputFieldText);

    const url = `https://openapi.programming-hero.com/api/phones?search=${inputFieldText}`;
    // console.log(url);
    if (!inputFieldText) {
        document.getElementById('errorBox').innerText = 'fill the box'
    } else {
        document.getElementById('errorBox').innerText = ''
        fetch(url)
            .then(res => res.json())
            .then(data => productResult(data.data))
            .catch(error => console.log(error))
    }

    inputField.value = '';
    // console.log(products)
    document.getElementById('product-show').innerHTML = ''
}

const productResult = (products) => {
    // console.log(products.length === 1)
    const productShow = document.getElementById('product-show');
    if (products.length === 0) {
        document.getElementById('errorBox').innerText = 'NO data found'
    } else {
        document.getElementById('errorBox').innerText = ''
        products.forEach((product, number) => {
            // console.log(product)
            if (number < 20) {
                const div = document.createElement('div');
                div.classList.add('col');
                div.innerHTML = `
                <div class="card">
                    <img class="p-5" src="${product.image}" class="card-img-top" alt="...">
                    <div class="card-body p-3">
                        <h4 class="card-title">${product.phone_name}</h4>
                        <h5 class="card-title">Brand : ${product.brand}</h5>
                        <button onclick="productDetails('${product.slug}')" class="btn btn-primary" type="button">Details</button>
                    </div>
                </div>
            `
                productShow.appendChild(div)
            }
        });
    }


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
    div.innerHTML = `
        <div class="col-lg-6 d-flex justify-content-center">
            <img src="${details.image}" class=" rounded-start" alt="...">
        </div>
        <div class="col-lg-6 d-flex">
            <div class="card-body">
                <h3 ><span class="fw-bold">${details.name}</span></h3>
                <br>
                <h5 class="fw-bold"><u>Fetures</u></h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><p class="mb-0" >Brand : <span class="fw-bold text-danger">${details.brand}</span></p></li>
                    <li class="list-group-item"><p class="mb-0">Storage : <span class="fw-bold text-danger">${details.mainFeatures.storage}</span></p></li>
                    <li class="list-group-item"><p class="mb-0">Display Size : <span class="fw-bold text-danger">${details.mainFeatures.displaySize}</span></p></li>
                    <li class="list-group-item"><p class="mb-0">Memory : <span class="fw-bold text-danger">${details.mainFeatures.memory}</span></p></li>
                </ul>
                <br>
                <h5 class="fw-bold"><u>More Fetures</u></h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><p class="mb-0">WLAN : <span class="fw-bold text-danger">${details.others?.WLAN ? details.others.WLAN : 'No data found'}</span></p></li>
                    <li class="list-group-item"><p class="mb-0">Bluetooth : <span class="fw-bold text-danger">${details.others?.Bluetooth ? details.others.Bluetooth : 'No data found'}</span></p></li>
                    <li class="list-group-item"><p class="mb-0">GPS : <span class="fw-bold text-danger">${details.others?.GPS ? details.others.GPS : 'No data found'}</span></p></li>
                    <li class="list-group-item"><p class="mb-0">NFC : <span class="fw-bold text-danger">${details.others?.NFC ? details.others.NFC : 'No data found'}</span></p></li>
                    <li class="list-group-item"><p class="mb-0">Radio : <span class="fw-bold text-danger">${details.others?.Radio ? details.others.Radio : 'No data found'}</span></p></li>
                    <li class="list-group-item"><p class="mb-0">USB : <span class="fw-bold text-danger">${details.others?.USB ? details.others.USB : 'No data found'}</span></p></li>
                    <li class="list-group-item"><p class="mb-0">Release Date : <span class="fw-bold text-danger">${details.releaseDate ? details.releaseDate : 'No Release Date Found'}</span></p></li>
                </ul>
        </div>
    `
    // console.log(details.releaseDate)
    singleProductDetailsShow.appendChild(div)
}
