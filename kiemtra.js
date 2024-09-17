function addProduct() {
    var imageFile = document.getElementById('image').files[0];
    var pname = document.getElementById('pname').value;
    var newPrice = parseInt(document.getElementById('newPrice').value);
    var oldPrice = parseInt(document.getElementById('oldPrice').value);
    var type = document.getElementById('type').value;
    var code = document.getElementById('code').value;
    var reader = new FileReader();
    var productCard = '<div class="product-card">' +
                '<img src="' + imageUrl + '" alt="' + pname + '">' +
                '<h3>' + pname + ' - ' + code + '</h3>' +
                '<div class="price-container">' +
                '<p class="new-price">' + newPrice + '.000 vnđ</p>' +
                '<p class="old-price">' + oldPrice + '.000 vnđ</p>' +
                '</div>' +
                '<button class="buy-button">Đặt Mua</button>' +
                '</div>';
        if (type === 'nam') {
            document.getElementById('maleProductList').innerHTML += productCard;
        } else {
            document.getElementById('femaleProductList').innerHTML += productCard;
        }
        document.getElementById('productForm').reset();

    reader.readAsDataURL(imageFile);
}