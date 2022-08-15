var listProduct = []

function addProduct() {
    listProduct = JSON.parse(localStorage.getItem("Product")) ?? [];
    let product = document.getElementById("newProduct").value;
    if (product)
        listProduct.push(product);
    localStorage.setItem("Product", JSON.stringify(listProduct));
    displayProduct();
}

function editProduct(idEdit) {
    listProduct = JSON.parse(localStorage.getItem("Product")) ?? [];
    let editProduct = prompt("sua ten san pham");
    for (let i = 0; i < listProduct.length; i++) {
        if (i = idEdit) {
            listProduct[i] = editProduct;
            break;
        }
    }
    localStorage.setItem("Product", JSON.stringify(listProduct));
    displayProduct();

}

function delProduct(idDel) {
    listProduct = JSON.parse(localStorage.getItem("Product")) ?? [];
    listProduct.splice(idDel, 1);
    localStorage.setItem("Product", JSON.stringify(listProduct));
    displayProduct();
}

function displayProduct() {
    let i = 0;
    let count = listProduct.length;
    var display = "<table border='0' width='500' cellspacing='0' cellpadding='3'>"
    for (i; i < listProduct.length; i++) {
        display += "<tr>"
        display = display + '<td style="width: 400px">' + listProduct[i] + "</td>";
        display = display + '<td style="width: 50px">' + `<button onclick='editProduct(${i})'>` + "Edit" + "</button>" + "</td>";
        display = display + '<td style="width: 50px">' + `<button onclick='delProduct(${i})'>` + "Del" + "</button>" + "</td>";
    }
    display += "</tr>"
    display += "</table>"
    document.getElementById("count").innerHTML = count + " product";
    document.getElementById("display").innerHTML = display;
}



