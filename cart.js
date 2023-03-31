const products = {
    "1234567890987654321234567890987654321": {
        "img": "images/image1.png",
        "price": "$1000"
    }
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
}

function addToCart(product) {
    const cartCookie = getCookie("cart")

    let cart = null
    if (cartCookie.length == 0) {
        cart = {}
    } else {
        cart = JSON.parse(cartCookie)
    }

    if (cart[product]) {
        alert('you have already added this to your cart')
        return
    }

    cart[product] = true

    setCookie("cart", JSON.stringify(cart), 9999999999)

}

function remToCart(product) {
    const cartCookie = getCookie("cart")

    let cart = null
    if (cartCookie.length == 0) {
        cart = {}
    } else {
        cart = JSON.parse(cartCookie)
    }

    cart[product] = false

    setCookie("cart", JSON.stringify(cart), 9999999999)

}

function showCart() {
    const cartCookie = getCookie("cart")

    let cart = null
    if (cartCookie.length == 0) {
        cart = {}
    } else {
        cart = JSON.parse(cartCookie)
    }

    console.log(cart)

    const cartSection = document.getElementById("cart")

    for (item of Object.keys(cart)) {
        if (cart[item] == true) {
            const p = document.createElement("p")
            const img = document.createElement("img")
            const button = document.createElement("button")
            img.src = products[item].img
            button.setAttribute("onclick", `remToCart('${item}'); location.reload();`)
            img.className="cartimg"
            button.className="cartbut"
            button.innerHTML = "Remove"
            p.className="cartitem"
            p.innerHTML = item
            p.appendChild(img)
            p.appendChild(button)
            console.log(p)
            cartSection.appendChild(p)
        }
    }
}

const cartCookie = getCookie("cart")

let cart = null
if (cartCookie.length == 0) {
    cart = {}
} else {
    cart = JSON.parse(cartCookie)
}

if (cart["1234567890987654321234567890987654321"]) {
    document.getElementById('imag1').innerHTML = 'Added To Cart'
}