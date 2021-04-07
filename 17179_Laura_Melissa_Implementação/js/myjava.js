if (window.XMLHttpRequest) mission = new XMLHttpRequest();
if (window.XMLHttpRequest) computadores = new XMLHttpRequest();
if (window.XMLHttpRequest) mobi = new XMLHttpRequest();
if (window.XMLHttpRequest) peri = new XMLHttpRequest();
if (window.XMLHttpRequest) compo = new XMLHttpRequest();
if (window.XMLHttpRequest) doados = new XMLHttpRequest();
if (window.XMLHttpRequest) cat = new XMLHttpRequest();


//adiciona o produto às doações
function addItem() {
    var title = document.getElementById('inputTitle').value
    var text = document.getElementById('categoria').innerText
    var img = document.getElementById('inputImg').value
    var par = '<a><img class="" src="../img/'+img+'.png" style="width:235px;height:235px"></a>';
    document.getElementById("aaaa").insertAdjacentHTML("afterbegin","<h5 class=\"breadcrumb-header\" id=\"produto\">Nome do produto: " + title + "</h5> "
        + "<h5 class=\"breadcrumb-header\" id=\"text\">Categoria: " + text + "</h5>" + par)

}

// quando é adicionado um produto ao carrinho
    var doar = 0
    function addtocar(id){
        for (i = 0; i < 4 ; i++) {
            if (id === "additC"+i) {
                computadores.open("GET", "../json/productsComp.json", false);
                computadores.onreadystatechange = function () {
                    if (computadores.readyState === 4 && computadores.status === 200) {
                        var items = JSON.parse(computadores.responseText);
                        if (sessionStorage.getItem("itemAdd") === null) {
                            sessionStorage["itemAdd"] = "                        <div class=\"order-col\">\n" +
                                "                            <div class=\"order-products order-col\">\n" +
                                "                            <img class=\"product-img\" src='" + items[i].img + "' \n" +
                                "                                 width=\"100\" height=\"100\">\n" +
                                "                            <span class=\"product-name\">"+items[i].name+"</span>\n" +
                                "                        </div>\n" +
                                "                            <div class=\"price\" typeof=\"number\" id=\"preco1\">"+items[i].price+"</div>\n" +
                                "                        </div>"
                        } else {
                            sessionStorage["itemAdd"] += "                        <div class=\"order-col\">\n" +
                                "                            <div class=\"order-products order-col\">\n" +
                                "                            <img class=\"product-img\" src='" + items[i].img + "' \n" +
                                "                                 width=\"100\" height=\"100\">\n" +
                                "                            <span class=\"product-name\">"+items[i].name+"</span>\n" +
                                "                        </div>\n" +
                                "                            <div class=\"price\" typeof=\"number\" id=\"preco1\">"+items[i].price+"</div>\n" +
                                "                        </div>"
                        }
                        if(sessionStorage.getItem("valorTotal") === null){
                            sessionStorage["valorTotal"] = parseInt(items[i].price)
                        }
                        else{
                            sessionStorage["valorTotal"] = parseInt(sessionStorage["valorTotal"]) + parseInt(items[i].price)
                        }
                    }
                }
                computadores.send();
            }
            else if(id === "additM"+i){
                mobi.open("GET", "../json/productsMobi.json", false);
                mobi.onreadystatechange = function () {
                    if (mobi.readyState === 4 && mobi.status === 200) {
                        var items = JSON.parse(mobi.responseText);
                        if (sessionStorage.getItem("itemAdd") === null) {
                            sessionStorage["itemAdd"] = "                        <div class=\"order-col\">\n" +
                                "                            <div class=\"order-products order-col\">\n" +
                                "                            <img class=\"product-img\" src='" + items[i].img + "' \n" +
                                "                                 width=\"100\" height=\"100\">\n" +
                                "                            <span class=\"product-name\">"+items[i].name+"</span>\n" +
                                "                        </div>\n" +
                                "                            <div class=\"price\" typeof=\"number\" id=\"preco1\">"+items[i].price+"</div>\n" +
                                "                        </div>"
                        } else {
                            sessionStorage["itemAdd"] += "                        <div class=\"order-col\">\n" +
                                "                            <div class=\"order-products order-col\">\n" +
                                "                            <img class=\"product-img\" src='" + items[i].img + "' \n" +
                                "                                 width=\"100\" height=\"100\">\n" +
                                "                            <span class=\"product-name\">"+items[i].name+"</span>\n" +
                                "                        </div>\n" +
                                "                            <div class=\"price\" typeof=\"number\" id=\"preco1\">"+items[i].price+"</div>\n" +
                                "                        </div>"
                        }
                        if(sessionStorage.getItem("valorTotal") === null){

                            sessionStorage["valorTotal"] = parseInt(items[i].price)
                        }
                        else{
                            sessionStorage["valorTotal"] = parseInt(sessionStorage["valorTotal"]) + parseInt(items[i].price)
                        }
                    }
                }
                mobi.send();
            }
            else if(id === "additP"+i){
                peri.open("GET", "../json/productsPerif.json", false);
                peri.onreadystatechange = function () {
                    if (peri.readyState === 4 && peri.status === 200) {
                        var items = JSON.parse(peri.responseText);
                        if (sessionStorage.getItem("itemAdd") === null) {
                            sessionStorage["itemAdd"] = "                        <div class=\"order-col\">\n" +
                                "                            <div class=\"order-products order-col\">\n" +
                                "                            <img class=\"product-img\" src='" + items[i].img + "' \n" +
                                "                                 width=\"100\" height=\"100\">\n" +
                                "                            <span class=\"product-name\">"+items[i].name+"</span>\n" +
                                "                        </div>\n" +
                                "                            <div class=\"price\" typeof=\"number\" id=\"preco1\">"+items[i].price+"</div>\n" +
                                "                        </div>"
                        } else {
                            sessionStorage["itemAdd"] += "                        <div class=\"order-col\">\n" +
                                "                            <div class=\"order-products order-col\">\n" +
                                "                            <img class=\"product-img\" src='" + items[i].img + "' \n" +
                                "                                 width=\"100\" height=\"100\">\n" +
                                "                            <span class=\"product-name\">"+items[i].name+"</span>\n" +
                                "                        </div>\n" +
                                "                            <div class=\"price\" typeof=\"number\" id=\"preco1\">"+items[i].price+"</div>\n" +
                                "                        </div>"
                        }
                        if(sessionStorage.getItem("valorTotal") === null){
                            sessionStorage["valorTotal"] = parseInt(items[i].price)
                        }
                        else{
                            sessionStorage["valorTotal"] = parseInt(sessionStorage["valorTotal"]) + parseInt(items[i].price)
                        }
                    }
                }
                peri.send();
            }
            else if(id === "additCom"+i){
                compo.open("GET", "../json/productsComponentes.json", false);
                compo.onreadystatechange = function () {
                    if (compo.readyState === 4 && compo.status === 200) {
                        var items = JSON.parse(compo.responseText);
                        if (sessionStorage.getItem("itemAdd") === null) {
                            sessionStorage["itemAdd"] = "                        <div class=\"order-col\">\n" +
                                "                            <div class=\"order-products order-col\">\n" +
                                "                            <img class=\"product-img\" src='" + items[i].img + "' \n" +
                                "                                 width=\"100\" height=\"100\">\n" +
                                "                            <span class=\"product-name\">"+items[i].name+"</span>\n" +
                                "                        </div>\n" +
                                "                            <div class=\"price\" typeof=\"number\" id=\"preco1\">"+items[i].price+"</div>\n" +
                                "                        </div>"
                        } else {
                            sessionStorage["itemAdd"] += "                        <div class=\"order-col\">\n" +
                                "                            <div class=\"order-products order-col\">\n" +
                                "                            <img class=\"product-img\" src='" + items[i].img + "' \n" +
                                "                                 width=\"100\" height=\"100\">\n" +
                                "                            <span class=\"product-name\">"+items[i].name+"</span>\n" +
                                "                        </div>\n" +
                                "                            <div class=\"price\" typeof=\"number\" id=\"preco1\">"+items[i].price+"</div>\n" +
                                "                        </div>"
                        }
                        if(sessionStorage.getItem("valorTotal") === null){
                            sessionStorage["valorTotal"] = parseInt(items[i].price)
                        }
                        else{
                            sessionStorage["valorTotal"] = parseInt(sessionStorage["valorTotal"]) + parseInt(items[i].price)
                        }
                    }
                }
                compo.send();
            }
        }
    }


var priceSlider = document.getElementById('price-slider');
if (priceSlider) {
    noUiSlider.create(priceSlider, {
        start: [1, 999],
        connect: true,
        step: 1,
        range: {
            'min': 1,
            'max': 999
        }
    });

    priceSlider.noUiSlider.on('update', function( values, handle ) {
        var value = values[handle];
        handle ? priceInputMax.value = value : priceInputMin.value = value
    });
}

//a minha missao
function loadMission() {
    mission.open("GET", "../json/items.json", false)
    mission.onreadystatechange = function () {
        if(mission.readyState === 4 && mission.status===200){
            var items = JSON.parse(mission.responseText);

            var par= ''

            for (i = 0; i < items.length; i++){
                par = '<div class="col-lg-9">';
                par += '<h7 class="breadcrumb-header">'+items[i].txt+'</h7>';
                par += '</div>';

                document.getElementById("spot").innerHTML += par;
            }
        }
    }
    mission.send();
}

//adicionar produtos
function loadCart() {
        document.getElementById("listProducts").innerHTML = sessionStorage["itemAdd"]
    var total = (document.cookie)*100
    document.getElementById("total").insertAdjacentHTML("afterbegin","                            <strong class=\"order-total\" typeof=\"number\" id=\"valortotal\">"+sessionStorage.getItem("valorTotal")+"</strong>\n")
    document.getElementById("botoes").insertAdjacentHTML("afterbegin","<a class=\"primary-btn order-submit\" onclick='apagarCarrinho()'>Apagar Carrinho</a>\n <a href=\"Compras.html\" class=\"primary-btn order-submit\">Terminar encomenda</a>\n")

}

//eliminar o carrinho
function apagarCarrinho() {
    sessionStorage["itemAdd"] = ""
    sessionStorage["valorTotal"] = "0"
    location.reload()
    // document.getElementById("listProducts").innerHTML = ""
    // document.getElementById("total").innerHTML = "                            <strong class=\"order-total\" typeof=\"number\" id=\"valortotal\">0</strong>\n"
}

function loadCompras() {
    loadCarrosselComputadores()
    document.getElementById("carrosselComputadores").innerHTML = sessionStorage.getItem("Comp")
    loadCarrosselMobi()
    document.getElementById("carrosselMobilidade").innerHTML = sessionStorage.getItem("Mob")
    loadCarrosselPerifericos()
    document.getElementById("carrosselPerifericos").innerHTML = sessionStorage.getItem("Per")
    loadCarrosselComponentes()
    document.getElementById("carrosselComponentes").innerHTML = sessionStorage.getItem("Compo")
}

function loadDoacoes() {
    loadMission()
    loadDoados()
    loadCat()
    document.getElementById("aaaa").innerHTML = sessionStorage.getItem("Doados")

}

function loadCat() {
    cat.open("GET","../json/cate.json", false);
    cat.onreadystatechange = function () {
        if(cat.readyState === 4 && cat.status === 200){
            var items = JSON.parse(cat.responseText);
            var par = ""
            for (i = 0; i <items.length ; i++) {
                par += "                    <option id='categoria'>"+items[i].cat+"</option>\n"
            }
        }
        document.getElementById("inputText").innerHTML = par
    }
    cat.send();
}

function loadCarrosselComputadores() {
    if(sessionStorage.getItem("counterComp") === null){
        sessionStorage["counterComp"] = 1;
    }
    else{
        sessionStorage["counterComp"] ++;
    }
    computadores.open("GET","../json/productsComp.json", false);
    computadores.onreadystatechange = function () {
        if(computadores.readyState === 4 && computadores.status === 200){
            var items = JSON.parse(computadores.responseText);
            for (i = 0; i <items.length ; i++) {
                if(sessionStorage.getItem("Comp") === null){
                    sessionStorage["Comp"] = "                                <!-- product -->\n" +
                        "                                <div class=\"product\" id='product"+sessionStorage["counterComp"]+"' name=\"product_name\">\n" +
                        "                                    <div class=\"product-img\">\n" +
                        "                                        <img src='"+items[i].img+"' alt=\"\">\n" +
                        "                                    </div>\n" +
                        "                                    <div class=\"product-body\">\n" +
                        "                                        <h3 class=\"product-name\" id='productName"+sessionStorage["counterComp"]+"' name=\"product_name\"><a href=\"#\">"+items[i].name+"</a></h3>\n" +
                        "                                        <h4 class=\"product-price\">"+items[i].price+"€</h4>\n" +
                        "                                    </div>\n" +
                        "                                    <div class=\"add-to-cart\">.\n" +
                        "                                        <button class=\"add-to-cart-btn\" id='additC"+i+"' onclick=\"addtocar(this.id)\"> <i class=\"fa fa-shopping-cart\"></i>Comprar</button>\n" +
                        "                                    </div>\n" +
                        "                                </div>"
                }
                else{
                    sessionStorage["Comp"] +="                                <!-- product -->\n" +
                        "                                <div class=\"product\" id='product"+sessionStorage["counterComp"]+"' name=\"product_name\">\n" +
                        "                                    <div class=\"product-img\">\n" +
                        "                                        <img src='"+items[i].img+"' alt=\"\">\n" +
                        "                                    </div>\n" +
                        "                                    <div class=\"product-body\">\n" +
                        "                                        <h3 class=\"product-name\" id='productName"+sessionStorage["counterComp"]+"' name=\"product_name\"><a href=\"#\">"+items[i].name+"</a></h3>\n" +
                        "                                        <h4 class=\"product-price\">"+items[i].price+"€</h4>\n" +
                        "                                    </div>\n" +
                        "                                    <div class=\"add-to-cart\">.\n" +
                        "                                        <button class=\"add-to-cart-btn\" id='additC"+i+"' onclick=\"addtocar(this.id)\"> <i class=\"fa fa-shopping-cart\"></i>Comprar</button>\n" +
                        "                                    </div>\n" +
                        "                                </div>"
                }
            }
        }
    }
    computadores.send();
}


function loadCarrosselMobi() {
    if(sessionStorage.getItem("counterMobi") === null){
        sessionStorage["counterMobi"] = 1;
    }
    else{
        sessionStorage["counterMobi"] ++;
    }
    mobi.open("GET","../json/productsMobi.json", false);
    mobi.onreadystatechange = function () {
        if(mobi.readyState === 4 && mobi.status === 200){
            var items = JSON.parse(mobi.responseText);
            for (i = 0; i <items.length ; i++) {
                if(sessionStorage.getItem("Mob") === null){
                    sessionStorage["Mob"] = "                                <!-- product -->\n" +
                        "                                <div class=\"product\" id='product"+sessionStorage["counterMobi"]+"' name=\"product_name\">\n" +
                        "                                    <div class=\"product-img\">\n" +
                        "                                        <img src='"+items[i].img+"' alt=\"\">\n" +
                        "                                    </div>\n" +
                        "                                    <div class=\"product-body\">\n" +
                        "                                        <h3 class=\"product-name\" id='productName"+sessionStorage["counterMobi"]+"' name=\"product_name\"><a href=\"#\">"+items[i].name+"</a></h3>\n" +
                        "                                        <h4 class=\"product-price\">"+items[i].price+"€</h4>\n" +
                        "                                    </div>\n" +
                        "                                    <div class=\"add-to-cart\">.\n" +
                        "                                        <button class=\"add-to-cart-btn\" id='additM"+i+"' onclick=\"addtocar(this.id)\"> <i class=\"fa fa-shopping-cart\"></i>Comprar</button>\n" +
                        "                                    </div>\n" +
                        "                                </div>"
                }
                else{
                    sessionStorage["Mob"] +="                                <!-- product -->\n" +
                        "                                <div class=\"product\" id='product"+sessionStorage["counterMobi"]+"' name=\"product_name\">\n" +
                        "                                    <div class=\"product-img\">\n" +
                        "                                        <img src='"+items[i].img+"' alt=\"\">\n" +
                        "                                    </div>\n" +
                        "                                    <div class=\"product-body\">\n" +
                        "                                        <h3 class=\"product-name\" id='productName"+sessionStorage["counterMobi"]+"' name=\"product_name\"><a href=\"#\">"+items[i].name+"</a></h3>\n" +
                        "                                        <h4 class=\"product-price\">"+items[i].price+"€</h4>\n" +
                        "                                    </div>\n" +
                        "                                    <div class=\"add-to-cart\">.\n" +
                        "                                        <button class=\"add-to-cart-btn\" id='additM"+i+"' onclick=\"addtocar(this.id)\"> <i class=\"fa fa-shopping-cart\"></i>Comprar</button>\n" +
                        "                                    </div>\n" +
                        "                                </div>"
                }
            }
        }
    }
    mobi.send();
}

function loadCarrosselPerifericos() {
    if(sessionStorage.getItem("counterPer") === null){
        sessionStorage["counterPer"] = 1;
    }
    else{
        sessionStorage["counterPer"] ++;
    }
    peri.open("GET","../json/productsPerif.json", false);
    peri.onreadystatechange = function () {
        if(peri.readyState === 4 && peri.status === 200){
            var items = JSON.parse(peri.responseText);
            for (i = 0; i <items.length ; i++) {
                if(sessionStorage.getItem("Per") === null){
                    sessionStorage["Per"] = "                                <!-- product -->\n" +
                        "                                <div class=\"product\" id='product"+sessionStorage["counterPer"]+"' name=\"product_name\">\n" +
                        "                                    <div class=\"product-img\">\n" +
                        "                                        <img src='"+items[i].img+"' alt=\"\">\n" +
                        "                                    </div>\n" +
                        "                                    <div class=\"product-body\">\n" +
                        "                                        <h3 class=\"product-name\" id='productName"+sessionStorage["counterPer"]+"' name=\"product_name\"><a href=\"#\">"+items[i].name+"</a></h3>\n" +
                        "                                        <h4 class=\"product-price\">"+items[i].price+"€</h4>\n" +
                        "                                    </div>\n" +
                        "                                    <div class=\"add-to-cart\">.\n" +
                        "                                        <button class=\"add-to-cart-btn\" id='additP"+i+"' onclick=\"addtocar(this.id)\"> <i class=\"fa fa-shopping-cart\"></i>Comprar</button>\n" +
                        "                                    </div>\n" +
                        "                                </div>"
                }
                else{
                    sessionStorage["Per"] +="                                <!-- product -->\n" +
                        "                                <div class=\"product\" id='product"+sessionStorage["counterPer"]+"' name=\"product_name\">\n" +
                        "                                    <div class=\"product-img\">\n" +
                        "                                        <img src='"+items[i].img+"' alt=\"\">\n" +
                        "                                    </div>\n" +
                        "                                    <div class=\"product-body\">\n" +
                        "                                        <h3 class=\"product-name\" id='productName"+i+"' name=\"product_name\"><a href=\"#\">"+items[i].name+"</a></h3>\n" +
                        "                                        <h4 class=\"product-price\">"+items[i].price+"€</h4>\n" +
                        "                                    </div>\n" +
                        "                                    <div class=\"add-to-cart\">.\n" +
                        "                                        <button class=\"add-to-cart-btn\" id='additP"+sessionStorage["counterPer"]+"' onclick=\"addtocar(this.id)\"> <i class=\"fa fa-shopping-cart\"></i>Comprar</button>\n" +
                        "                                    </div>\n" +
                        "                                </div>"
                }
            }
        }
    }
    peri.send();
}

function loadCarrosselComponentes() {
    if(sessionStorage.getItem("counterCompo") === null){
        sessionStorage["counterCompo"] = 1;
    }
    else{
        sessionStorage["counterCompo"] ++;
    }
    compo.open("GET","../json/productsComponentes.json", false);
    compo.onreadystatechange = function () {
        if(compo.readyState === 4 && compo.status === 200){
            var items = JSON.parse(compo.responseText);
            for (i = 0; i <items.length ; i++) {
                if(sessionStorage.getItem("Compo") === null){
                    sessionStorage["Compo"] = "                                <!-- product -->\n" +
                        "                                <div class=\"product\" id='product"+sessionStorage["counterCompo"]+"' name=\"product_name\">\n" +
                        "                                    <div class=\"product-img\">\n" +
                        "                                        <img src='"+items[i].img+"' alt=\"\">\n" +
                        "                                    </div>\n" +
                        "                                    <div class=\"product-body\">\n" +
                        "                                        <h3 class=\"product-name\" id='productName"+sessionStorage["counterCompo"]+"' name=\"product_name\"><a href=\"#\">"+items[i].name+"</a></h3>\n" +
                        "                                        <h4 class=\"product-price\">"+items[i].price+"€</h4>\n" +
                        "                                    </div>\n" +
                        "                                    <div class=\"add-to-cart\">.\n" +
                        "                                        <button class=\"add-to-cart-btn\" id='additCom"+i+"' onclick=\"addtocar(this.id)\"> <i class=\"fa fa-shopping-cart\"></i>Comprar</button>\n" +
                        "                                    </div>\n" +
                        "                                </div>"
                }
                else{
                    sessionStorage["Compo"] +="                                <!-- product -->\n" +
                        "                                <div class=\"product\" id='product"+sessionStorage["counterCompo"]+"' name=\"product_name\">\n" +
                        "                                    <div class=\"product-img\">\n" +
                        "                                        <img src='"+items[i].img+"' alt=\"\">\n" +
                        "                                    </div>\n" +
                        "                                    <div class=\"product-body\">\n" +
                        "                                        <h3 class=\"product-name\" id='productName"+sessionStorage["counterCompo"]+"' name=\"product_name\"><a href=\"#\">"+items[i].name+"</a></h3>\n" +
                        "                                        <h4 class=\"product-price\">"+items[i].price+"€</h4>\n" +
                        "                                    </div>\n" +
                        "                                    <div class=\"add-to-cart\">.\n" +
                        "                                        <button class=\"add-to-cart-btn\" id='additCom"+i+"' onclick=\"addtocar(this.id)\"> <i class=\"fa fa-shopping-cart\"></i>Comprar</button>\n" +
                        "                                    </div>\n" +
                        "                                </div>"
                }
            }
        }
    }
    compo.send();
}

function loadDoados() {
    if(sessionStorage.getItem("counterDoados") === null){
        sessionStorage["counterDoados"] = 1;
    }
    else{
        sessionStorage["counterDoados"] ++;
    }
    doados.open("GET","../json/doados.json", false);
    doados.onreadystatechange = function () {
        if(doados.readyState === 4 && doados.status === 200){
            var items = JSON.parse(doados.responseText);
            for (i = 0; i <items.length ; i++) {
                if(sessionStorage.getItem("Doados") === null){
                    sessionStorage["Doados"] ="<h5 class=\"breadcrumb-header\" id='doados"+sessionStorage["counterDoados"]+"'>" + items[i].tipo + "</h5> "
                        + "<h5 class=\"breadcrumb-header\" id=\"text\"></h5>" + "<img src='"+items[i].img+"' style='width: 235px; height: 235px'>"
                }
                else{
                    sessionStorage["Doados"] +="<h5 class=\"breadcrumb-header\" id='doados"+sessionStorage["counterDoados"]+"'>" + items[i].tipo + "</h5> "
                        + "<h5 class=\"breadcrumb-header\" id=\"text\"></h5>" + "<img src='"+items[i].img+"' style='width: 235px; height: 235px' >"
                }
            }
        }
    }
    doados.send();
}
