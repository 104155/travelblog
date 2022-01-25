var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Display info header & footer
function infoHeaderFooter() {
    var companyName = "Vagabond";
    var owner = "&copy; Copyright 2021 Martin Obermayer";
    //Copyright
    var coprightHTML = document.querySelector(".owner");
    coprightHTML.innerHTML = owner;
    //Company name
    var nodeList = document.querySelectorAll(".companyName");
    for (var i = 0; i < nodeList.length; i++) {
        nodeList[i].innerHTML = companyName;
    }
}
//Container Locations
var locations = [];
//Objects
var MyLocation = /** @class */ (function () {
    function MyLocation(title, creationDate, city, zipCode, streetName, image, icon) {
        this.title = title;
        this.creationDate = this.stringToDateTime(creationDate);
        this.city = city;
        this.zipCode = zipCode;
        this.streetName = streetName;
        this.image = image;
        this.icon = icon;
        locations.push(this);
    }
    //23.1.2021,23:13:1
    MyLocation.prototype.stringToDateTime = function (dateTime) {
        //new Date(2011, 3, 1, 2, 3, 4, 567) = Fri Apr 01 2011 02:03:04
        var dateNtime = dateTime.split(",");
        var dateArr = dateNtime[0].split(".");
        var timeArr = dateNtime[1].split(":");
        //year month+1 day hour minute sec milli
        return new Date(Number(dateArr[2]), Number(dateArr[1]) + 1, Number(dateArr[0]), Number(timeArr[0]), Number(timeArr[1]), Number(timeArr[2]), 0);
    };
    MyLocation.prototype.display = function () {
        //card structure
        //outer card container
        var cardsContainer = document.querySelector(".cardsContainer");
        var outerCardContainer = document.createElement("div");
        cardsContainer.appendChild(outerCardContainer);
        outerCardContainer.classList.add("col", "outerCardContainer");
        //card container
        var cardContainer = document.createElement("div");
        outerCardContainer.appendChild(cardContainer);
        cardContainer.classList.add("card", "h-100", /*"shadow",*/ "border-0", "rounded-0", "cardContainer");
        //card image container
        var cardImgContainer = document.createElement("div");
        cardContainer.appendChild(cardImgContainer);
        cardImgContainer.classList.add("cardImgContainer");
        //img
        var img = document.createElement("img");
        cardImgContainer.appendChild(img);
        img.classList.add("cardImg");
        img.setAttribute("src", this.image);
        //text container
        var txtContainer = document.createElement("div");
        cardContainer.appendChild(txtContainer);
        txtContainer.classList.add("card-body", "py-0");
        //card title
        var cardTitle = document.createElement("p");
        var cardTitleTxt = document.createTextNode(this.title);
        cardTitle.appendChild(cardTitleTxt);
        txtContainer.appendChild(cardTitle);
        cardTitle.classList.add("card-title", "mb-0", "text-center", "cardTitle");
        //card address
        var cardAddress = document.createElement("p");
        var cardAddressTxt = document.createTextNode(this.city + " | " + this.zipCode + " | " + this.streetName);
        cardAddress.appendChild(cardAddressTxt);
        txtContainer.appendChild(cardAddress);
        cardAddress.classList.add("card-text", "text-center", "cardTxt");
        //stamp container
        var stampContainer = document.createElement("div");
        cardContainer.appendChild(stampContainer);
        stampContainer.classList.add("stampContainer");
        //stamp
        var stamp = document.createElement("img");
        stampContainer.appendChild(stamp);
        stamp.classList.add("stampImg");
        stamp.setAttribute("src", this.icon);
        //top date text 
        var cardDateTxt = document.createElement("p");
        var cardDateTxtNode = document.createTextNode(this.creationDate.getDay() + "." +
            this.creationDate.getMonth() + "." + this.creationDate.getFullYear() + " " + this.creationDate.getHours() + ":" +
            this.creationDate.getMinutes() + ":" + this.creationDate.getSeconds());
        cardDateTxt.appendChild(cardDateTxtNode);
        cardContainer.appendChild(cardDateTxt);
        cardDateTxt.classList.add("card-text", "text-center", "cardDate");
    };
    MyLocation.prototype.getCreationDate = function () {
        return this.creationDate;
    };
    return MyLocation;
}());
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(title, creationDate, city, zipCode, streetName, image, icon, cuisine, website, telephone) {
        var _this = _super.call(this, title, creationDate, city, zipCode, streetName, image, icon) || this;
        _this.cuisine = cuisine;
        _this.website = website;
        _this.telephone = telephone;
        return _this;
    }
    Restaurant.prototype.display = function () {
        //card structure
        //outer card container
        var cardsContainer = document.querySelector(".cardsContainer");
        var outerCardContainer = document.createElement("div");
        cardsContainer.appendChild(outerCardContainer);
        outerCardContainer.classList.add("col", "outerCardContainer");
        //card container
        var cardContainer = document.createElement("div");
        outerCardContainer.appendChild(cardContainer);
        cardContainer.classList.add("card", "h-100", /*"shadow",*/ "border-0", "rounded-0", "cardContainer");
        //card image container
        var cardImgContainer = document.createElement("div");
        cardContainer.appendChild(cardImgContainer);
        cardImgContainer.classList.add("cardImgContainer");
        //img
        var img = document.createElement("img");
        cardImgContainer.appendChild(img);
        img.classList.add("cardImg");
        img.setAttribute("src", this.image);
        //text container
        var txtContainer = document.createElement("div");
        cardContainer.appendChild(txtContainer);
        txtContainer.classList.add("card-body", "py-0");
        //card title
        var cardTitle = document.createElement("p");
        var cardTitleTxt = document.createTextNode(this.title);
        cardTitle.appendChild(cardTitleTxt);
        txtContainer.appendChild(cardTitle);
        cardTitle.classList.add("card-title", "mb-0", "text-center", "cardTitle");
        //card subtitle
        var cardSubtitle = document.createElement("p");
        var cardSubtitleTxt = document.createTextNode(this.cuisine + " cuisine");
        cardSubtitle.appendChild(cardSubtitleTxt);
        txtContainer.appendChild(cardSubtitle);
        cardSubtitle.classList.add("card-text", "text-center", "cardSubtitle");
        //card hlink
        var cardHlink = document.createElement("p");
        var cardHlinkTxt = document.createTextNode(this.website);
        cardHlink.appendChild(cardHlinkTxt);
        txtContainer.appendChild(cardHlink);
        cardHlink.classList.add("card-text", "text-center", "cardHlink");
        //card tel
        var cardTel = document.createElement("p");
        var cardTelTxt = document.createTextNode("tel: " + this.telephone);
        cardTel.appendChild(cardTelTxt);
        txtContainer.appendChild(cardTel);
        cardTel.classList.add("card-text", "text-center", "cardTel");
        //card address
        var cardAddress = document.createElement("p");
        var cardAddressTxt = document.createTextNode(this.city + " | " + this.zipCode + " | " + this.streetName);
        cardAddress.appendChild(cardAddressTxt);
        txtContainer.appendChild(cardAddress);
        cardAddress.classList.add("card-text", "text-center", "cardTxt");
        //stamp container
        var stampContainer = document.createElement("div");
        cardContainer.appendChild(stampContainer);
        stampContainer.classList.add("stampContainer");
        //stamp
        var stamp = document.createElement("img");
        stampContainer.appendChild(stamp);
        stamp.classList.add("stampImg");
        stamp.setAttribute("src", this.icon);
        //top date text 
        var cardDateTxt = document.createElement("p");
        var cardDateTxtNode = document.createTextNode(this.creationDate.getDay() + "." +
            this.creationDate.getMonth() + "." + this.creationDate.getFullYear() + " " + this.creationDate.getHours() + ":" +
            this.creationDate.getMinutes() + ":" + this.creationDate.getSeconds());
        cardDateTxt.appendChild(cardDateTxtNode);
        cardContainer.appendChild(cardDateTxt);
        cardDateTxt.classList.add("card-text", "text-center", "cardDate");
    };
    return Restaurant;
}(MyLocation));
var MyEvent = /** @class */ (function (_super) {
    __extends(MyEvent, _super);
    function MyEvent(title, creationDate, city, zipCode, streetName, image, icon, kindOfEvent, price) {
        var _this = _super.call(this, title, creationDate, city, zipCode, streetName, image, icon) || this;
        _this.kindOfEvent = kindOfEvent;
        _this.eventDate = _this.setEventDate();
        _this.price = price;
        console.log("creation date: " + _this.creationDate);
        console.log("event date: " + _this.eventDate);
        return _this;
    }
    MyEvent.prototype.setEventDate = function () {
        //year month+1 day hour minute sec milli
        return new Date(this.creationDate.getFullYear(), this.creationDate.getMonth(), this.creationDate.getDay(), this.creationDate.getHours() - 3, this.creationDate.getMinutes(), this.creationDate.getSeconds(), 0);
    };
    MyEvent.prototype.display = function () {
        //card structure
        //outer card container
        var cardsContainer = document.querySelector(".cardsContainer");
        var outerCardContainer = document.createElement("div");
        cardsContainer.appendChild(outerCardContainer);
        outerCardContainer.classList.add("col", "outerCardContainer");
        //card container
        var cardContainer = document.createElement("div");
        outerCardContainer.appendChild(cardContainer);
        cardContainer.classList.add("card", "h-100", /*"shadow",*/ "border-0", "rounded-0", "cardContainer");
        //card image container
        var cardImgContainer = document.createElement("div");
        cardContainer.appendChild(cardImgContainer);
        cardImgContainer.classList.add("cardImgContainer");
        //img
        var img = document.createElement("img");
        cardImgContainer.appendChild(img);
        img.classList.add("cardImg");
        img.setAttribute("src", this.image);
        //text container
        var txtContainer = document.createElement("div");
        cardContainer.appendChild(txtContainer);
        txtContainer.classList.add("card-body", "py-0");
        //card title
        var cardTitle = document.createElement("p");
        var cardTitleTxt = document.createTextNode(this.title);
        cardTitle.appendChild(cardTitleTxt);
        txtContainer.appendChild(cardTitle);
        cardTitle.classList.add("card-title", "mb-0", "text-center", "cardTitle");
        //card subtitle
        var cardSubtitle = document.createElement("p");
        var cardSubtitleTxt = document.createTextNode("" + this.kindOfEvent);
        cardSubtitle.appendChild(cardSubtitleTxt);
        txtContainer.appendChild(cardSubtitle);
        cardSubtitle.classList.add("card-text", "text-center", "cardSubtitle");
        //card date & time
        var cardDateTime = document.createElement("p");
        var cardDateTimeTxt = document.createTextNode(this.eventDate.getDay() + "." + this.eventDate.getMonth() + "." +
            this.eventDate.getFullYear() + " | " + this.eventDate.getHours() + ":" + this.eventDate.getMinutes());
        cardDateTime.appendChild(cardDateTimeTxt);
        txtContainer.appendChild(cardDateTime);
        cardDateTime.classList.add("card-text", "text-center", "cardTxt");
        //card price
        var cardPrice = document.createElement("p");
        var cardPriceTxt = document.createTextNode("price: \u20AC" + this.price);
        cardPrice.appendChild(cardPriceTxt);
        txtContainer.appendChild(cardPrice);
        cardPrice.classList.add("card-text", "text-center", "cardPrice");
        //card address
        var cardAddress = document.createElement("p");
        var cardAddressTxt = document.createTextNode(this.city + " | " + this.zipCode + " | " + this.streetName);
        cardAddress.appendChild(cardAddressTxt);
        txtContainer.appendChild(cardAddress);
        cardAddress.classList.add("card-text", "text-center", "cardTxt");
        //stamp container
        var stampContainer = document.createElement("div");
        cardContainer.appendChild(stampContainer);
        stampContainer.classList.add("stampContainer");
        //stamp
        var stamp = document.createElement("img");
        stampContainer.appendChild(stamp);
        stamp.classList.add("stampImg");
        stamp.setAttribute("src", this.icon);
        //top date text 
        var cardDateTxt = document.createElement("p");
        var cardDateTxtNode = document.createTextNode(this.creationDate.getDay() + "." +
            this.creationDate.getMonth() + "." + this.creationDate.getFullYear() + " " + this.creationDate.getHours() + ":" +
            this.creationDate.getMinutes() + ":" + this.creationDate.getSeconds());
        cardDateTxt.appendChild(cardDateTxtNode);
        cardContainer.appendChild(cardDateTxt);
        cardDateTxt.classList.add("card-text", "text-center", "cardDate");
        // //card structure
        // //outer card container
        // let cardsContainer: HTMLElement = document.querySelector(".cardsContainer");
        // let outerCardContainer: HTMLElement = document.createElement("div");
        // cardsContainer.appendChild(outerCardContainer);
        // outerCardContainer.classList.add("col", "outerCardContainer");
        // //card container
        // let cardContainer: HTMLElement = document.createElement("div");
        // outerCardContainer.appendChild(cardContainer);
        // cardContainer.classList.add("card", /*"h-100", "shadow",*/ "border-0", "rounded-0", "cardContainer");
        // //card image container
        // let cardImgContainer: HTMLElement = document.createElement("div");
        // cardContainer.appendChild(cardImgContainer);
        // cardImgContainer.classList.add("cardImgContainer");
        // //img
        // let img: HTMLElement = document.createElement("img");
        // cardImgContainer.appendChild(img);
        // img.classList.add("card-img-top", "rounded-0", "cardImg");
        // img.setAttribute("src", this.image);
        // //text container
        // let txtContainer: HTMLElement = document.createElement("div");
        // cardContainer.appendChild(txtContainer);
        // txtContainer.classList.add("card-body");
        // //title container
        // let cardTitleContainer: HTMLElement = document.createElement("div");
        // txtContainer.appendChild(cardTitleContainer);
        // cardTitleContainer.classList.add("mb-2", "d-flex", "cardTitleContainer");
        // //icon
        // let icon: HTMLElement = document.createElement("img");
        // cardTitleContainer.appendChild(icon);
        // icon.classList.add("img-fluid", "cardIcon");
        // icon.setAttribute("src", this.icon);
        // //title & subtitle container
        // let titleTextContainer: HTMLElement = document.createElement("div");
        // cardTitleContainer.appendChild(titleTextContainer);
        // titleTextContainer.classList.add("ms-3");
        // //card title
        // let cardTitle: HTMLElement = document.createElement("h2");
        // let cardTitleTxt: Text = document.createTextNode(this.title);
        // cardTitle.appendChild(cardTitleTxt);
        // titleTextContainer.appendChild(cardTitle);
        // cardTitle.classList.add("card-title", "my-auto", "fs-5", "fw-bold");
        // //card subtitle
        // let cardSubtitle: HTMLElement = document.createElement("p");
        // let cardSubtitleTxt: Text = document.createTextNode(`${this.kindOfEvent}`);
        // cardSubtitle.appendChild(cardSubtitleTxt);
        // titleTextContainer.appendChild(cardSubtitle);
        // cardSubtitle.classList.add("card-text", "fs-6");
        // //card date & time
        // let cardDateTime: HTMLElement = document.createElement("p");
        // let cardDateTimeTxt: Text = document.createTextNode(this.eventDate.getDay() + "." + this.eventDate.getMonth() + "." +
        //     this.eventDate.getFullYear() + " | " + this.eventDate.getHours() + ":" + this.eventDate.getMinutes());
        // cardDateTime.appendChild(cardDateTimeTxt);
        // txtContainer.appendChild(cardDateTime);
        // cardDateTime.classList.add("card-text", "mb-0");
        // //card price
        // let cardPrice: HTMLElement = document.createElement("p");
        // let cardPriceTxt: Text = document.createTextNode(`price: €${this.price}`);
        // cardPrice.appendChild(cardPriceTxt);
        // txtContainer.appendChild(cardPrice);
        // cardPrice.classList.add("card-text", "mb-0");
        // //card adress
        // let cardAdress: HTMLElement = document.createElement("p");
        // let cardAdressTxt: Text = document.createTextNode(`${this.city} | ${this.zipCode} | ${this.streetName}`);
        // cardAdress.appendChild(cardAdressTxt);
        // txtContainer.appendChild(cardAdress);
        // cardAdress.classList.add("card-text");
        // //card footer
        // let cardFooter: HTMLElement = document.createElement("div");
        // cardContainer.appendChild(cardFooter);
        // cardFooter.classList.add("card-footer", "py-0", "rounded-0", "border-0", "cardFooterEvent");
        // //card footer text
        // let cardFooterTxt: HTMLElement = document.createElement("p");
        // let cardFooterTxtNode: Text = document.createTextNode("Created: " + this.creationDate.getDay() + "." +
        //     this.creationDate.getMonth() + "." + this.creationDate.getFullYear() + " " + this.creationDate.getHours() + ":" +
        //     this.creationDate.getMinutes() + ":" + this.creationDate.getSeconds());
        // cardFooterTxt.appendChild(cardFooterTxtNode);
        // cardFooter.appendChild(cardFooterTxt);
        // cardFooterTxt.classList.add("card-text", "text-center");
    };
    return MyEvent;
}(MyLocation));
//Create MyLocation objects
function createObjs() {
    new Restaurant("Best Schnitzel!", "7.4.2006,12:34:18", "London", "2245", "Fieldway 12", "img/pubBeer.jpeg", "img/restaurant.png", "austrian", "office@schnitzelkönig.at", "43(1)7334 58804");
    new MyEvent("Slipknot", "15.8.2018,20:14:2", "New York", "3443", "Highsquare 23", "img/slipknotConcert.jpg", "img/ticket.png", "concert", 80);
    new Restaurant("Cilly Cafe´", "9.2.2016,19:32:7", "Berlin", "1202", "Berlinstreet 40", "img/pubBoy.webp", "img/restaurant.png", "canadian", "office@chillclub.com", "27(1)7334 58104");
    new MyEvent("Burning Man!!", "14.3.2020,23:27:45", "Nevada", "7001", "Dune rd 4", "img/burningMan.jpg", "img/ticket.png", "festival", 400);
    new MyLocation("Karlsplatz", "28.7.2016,11:23:10", "Vienna", "1010", "Karlsplatz 1", "img/karlsKirche.jpg", "img/location.png");
    new MyLocation("The Seals!", "11.3.2017,12:14:3", "Vienna", "1020", "Schönbrunnerstr 11", "img/zoo.jpg", "img/location.png");
    new Restaurant("Juicy Juicyness", "24.5.2017,15:37:4", "Victoria", "1200", "Highstreet 401", "img/farmersMarket.jpg", "img/restaurant.png", "canadian market", "office@farmersmarket.com", "27(1)444 577704");
    new MyLocation("Chill out", "10.10.2019,12:01:2", "Brighton", "???", "A stroll in the park", "img/park.jpg", "img/location.png");
}
//Add Eventlisteners
function addEventlisteners() {
    //Btn sortDesc
    var sortDescBtn = document.querySelector(".sortDesc");
    sortDescBtn.addEventListener("click", function () {
        sortDesc();
        removeDynHTML();
        documentReady();
    });
    //Btn sortAsc
    var sortAscBtn = document.querySelector(".sortAsc");
    sortAscBtn.addEventListener("click", function () {
        sortAsc();
        removeDynHTML();
        documentReady();
    });
}
//Sort descending
function sortDesc() {
    locations.sort(function (a, b) {
        return +b.getCreationDate() - +a.getCreationDate();
    });
}
//Sort ascending
function sortAsc() {
    locations.sort(function (a, b) {
        return +a.getCreationDate() - +b.getCreationDate();
    });
}
//Create HTML elements
function createDynHTML() {
    for (var i = 0; i < locations.length; i++) {
        locations[i].display();
    }
}
//Remove HTML elements
function removeDynHTML() {
    document.querySelector(".cardsContainer").innerHTML = "";
}
//Serve obj to HTML
function documentReady() {
    infoHeaderFooter();
    addEventlisteners();
    console.log(locations);
    createDynHTML();
}
createObjs();
documentReady();
