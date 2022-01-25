//Display info header & footer
function infoHeaderFooter(): void {
    const companyName: string = "Vagabond";
    const owner: string = "&copy; Copyright 2021 Martin Obermayer";

    //Copyright
    let coprightHTML: HTMLElement = document.querySelector(".owner");
    coprightHTML.innerHTML = owner;

    //Company name
    let nodeList = document.querySelectorAll(".companyName");
    for (let i: number = 0; i < nodeList.length; i++) {
        nodeList[i].innerHTML = companyName;
    }
}

//Container Locations
let locations: Array<MyLocation> = [];

//Objects
class MyLocation {
    protected title: string;
    protected creationDate: Date;
    protected city: string;
    protected zipCode: string;
    protected streetName: string;
    protected image: string;
    protected icon: string;

    constructor(title: string, creationDate: string, city: string, zipCode: string, streetName: string, image: string, icon: string) {
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
    stringToDateTime(dateTime: string): Date {
        //new Date(2011, 3, 1, 2, 3, 4, 567) = Fri Apr 01 2011 02:03:04
        let dateNtime: Array<string> = dateTime.split(",");
        let dateArr: Array<string> = dateNtime[0].split(".");
        let timeArr: Array<string> = dateNtime[1].split(":");
        //year month+1 day hour minute sec milli
        return new Date(Number(dateArr[2]), Number(dateArr[1]) + 1, Number(dateArr[0]), Number(timeArr[0]), Number(timeArr[1]), Number(timeArr[2]), 0);
    }

    display(): void {

        //card structure
        //outer card container
        let cardsContainer: HTMLElement = document.querySelector(".cardsContainer");
        let outerCardContainer: HTMLElement = document.createElement("div");
        cardsContainer.appendChild(outerCardContainer);
        outerCardContainer.classList.add("col", "outerCardContainer");

        //card container
        let cardContainer: HTMLElement = document.createElement("div");
        outerCardContainer.appendChild(cardContainer);
        cardContainer.classList.add("card", "h-100", /*"shadow",*/ "border-0", "rounded-0", "cardContainer");

        //card image container
        let cardImgContainer: HTMLElement = document.createElement("div");
        cardContainer.appendChild(cardImgContainer);
        cardImgContainer.classList.add("cardImgContainer");

        //img
        let img: HTMLElement = document.createElement("img");
        cardImgContainer.appendChild(img);
        img.classList.add("cardImg");
        img.setAttribute("src", this.image);

        //text container
        let txtContainer: HTMLElement = document.createElement("div");
        cardContainer.appendChild(txtContainer);
        txtContainer.classList.add("card-body", "py-0");

        //card title
        let cardTitle: HTMLElement = document.createElement("p");
        let cardTitleTxt: Text = document.createTextNode(this.title);
        cardTitle.appendChild(cardTitleTxt);
        txtContainer.appendChild(cardTitle);
        cardTitle.classList.add("card-title", "mb-0", "text-center", "cardTitle");

        //card address
        let cardAddress: HTMLElement = document.createElement("p");
        let cardAddressTxt: Text = document.createTextNode(`${this.city} | ${this.zipCode} | ${this.streetName}`);
        cardAddress.appendChild(cardAddressTxt);
        txtContainer.appendChild(cardAddress);
        cardAddress.classList.add("card-text", "text-center", "cardTxt");

        //stamp container
        let stampContainer: HTMLElement = document.createElement("div");
        cardContainer.appendChild(stampContainer);
        stampContainer.classList.add("stampContainer");

        //stamp
        let stamp: HTMLElement = document.createElement("img");
        stampContainer.appendChild(stamp);
        stamp.classList.add("stampImg");
        stamp.setAttribute("src", this.icon);

        //top date text 
        let cardDateTxt: HTMLElement = document.createElement("p");
        let cardDateTxtNode: Text = document.createTextNode(this.creationDate.getDay() + "." +
            this.creationDate.getMonth() + "." + this.creationDate.getFullYear() + " " + this.creationDate.getHours() + ":" +
            this.creationDate.getMinutes() + ":" + this.creationDate.getSeconds());
        cardDateTxt.appendChild(cardDateTxtNode);
        cardContainer.appendChild(cardDateTxt);
        cardDateTxt.classList.add("card-text", "text-center", "cardDate");
    }

    getCreationDate(): Date {
        return this.creationDate;
    }
}

class Restaurant extends MyLocation {
    cuisine: string;
    website: string;
    telephone: string;

    constructor(title: string, creationDate: string, city: string, zipCode: string, streetName: string, image: string, icon: string,
        cuisine: string, website: string, telephone: string) {
        super(title, creationDate, city, zipCode, streetName, image, icon);

        this.cuisine = cuisine;
        this.website = website;
        this.telephone = telephone;
    }

    display(): void {

        //card structure
        //outer card container
        let cardsContainer: HTMLElement = document.querySelector(".cardsContainer");
        let outerCardContainer: HTMLElement = document.createElement("div");
        cardsContainer.appendChild(outerCardContainer);
        outerCardContainer.classList.add("col", "outerCardContainer");

        //card container
        let cardContainer: HTMLElement = document.createElement("div");
        outerCardContainer.appendChild(cardContainer);
        cardContainer.classList.add("card", "h-100", /*"shadow",*/ "border-0", "rounded-0", "cardContainer");

        //card image container
        let cardImgContainer: HTMLElement = document.createElement("div");
        cardContainer.appendChild(cardImgContainer);
        cardImgContainer.classList.add("cardImgContainer");

        //img
        let img: HTMLElement = document.createElement("img");
        cardImgContainer.appendChild(img);
        img.classList.add("cardImg");
        img.setAttribute("src", this.image);

        //text container
        let txtContainer: HTMLElement = document.createElement("div");
        cardContainer.appendChild(txtContainer);
        txtContainer.classList.add("card-body", "py-0");

        //card title
        let cardTitle: HTMLElement = document.createElement("p");
        let cardTitleTxt: Text = document.createTextNode(this.title);
        cardTitle.appendChild(cardTitleTxt);
        txtContainer.appendChild(cardTitle);
        cardTitle.classList.add("card-title", "mb-0", "text-center", "cardTitle");

        //card subtitle
        let cardSubtitle: HTMLElement = document.createElement("p");
        let cardSubtitleTxt: Text = document.createTextNode(`${this.cuisine} cuisine`);
        cardSubtitle.appendChild(cardSubtitleTxt);
        txtContainer.appendChild(cardSubtitle);
        cardSubtitle.classList.add("card-text", "text-center", "cardSubtitle");

        //card hlink
        let cardHlink: HTMLElement = document.createElement("p");
        let cardHlinkTxt: Text = document.createTextNode(this.website);
        cardHlink.appendChild(cardHlinkTxt);
        txtContainer.appendChild(cardHlink);
        cardHlink.classList.add("card-text", "text-center", "cardHlink");

        //card tel
        let cardTel: HTMLElement = document.createElement("p");
        let cardTelTxt: Text = document.createTextNode(`tel: ${this.telephone}`);
        cardTel.appendChild(cardTelTxt);
        txtContainer.appendChild(cardTel);
        cardTel.classList.add("card-text", "text-center", "cardTel");

        //card address
        let cardAddress: HTMLElement = document.createElement("p");
        let cardAddressTxt: Text = document.createTextNode(`${this.city} | ${this.zipCode} | ${this.streetName}`);
        cardAddress.appendChild(cardAddressTxt);
        txtContainer.appendChild(cardAddress);
        cardAddress.classList.add("card-text", "text-center", "cardTxt");

        //stamp container
        let stampContainer: HTMLElement = document.createElement("div");
        cardContainer.appendChild(stampContainer);
        stampContainer.classList.add("stampContainer");

        //stamp
        let stamp: HTMLElement = document.createElement("img");
        stampContainer.appendChild(stamp);
        stamp.classList.add("stampImg");
        stamp.setAttribute("src", this.icon);

        //top date text 
        let cardDateTxt: HTMLElement = document.createElement("p");
        let cardDateTxtNode: Text = document.createTextNode(this.creationDate.getDay() + "." +
            this.creationDate.getMonth() + "." + this.creationDate.getFullYear() + " " + this.creationDate.getHours() + ":" +
            this.creationDate.getMinutes() + ":" + this.creationDate.getSeconds());
        cardDateTxt.appendChild(cardDateTxtNode);
        cardContainer.appendChild(cardDateTxt);
        cardDateTxt.classList.add("card-text", "text-center", "cardDate");
    }
}

class MyEvent extends MyLocation {
    kindOfEvent: string;
    eventDate: Date;
    price: number;

    constructor(title: string, creationDate: string, city: string, zipCode: string, streetName: string, image: string, icon: string,
        kindOfEvent: string, price: number) {
        super(title, creationDate, city, zipCode, streetName, image, icon);

        this.kindOfEvent = kindOfEvent;
        this.eventDate = this.setEventDate();
        this.price = price;

        console.log("creation date: " + this.creationDate);
        console.log("event date: " + this.eventDate);
    }

    setEventDate(): Date {
        //year month+1 day hour minute sec milli
        return new Date(this.creationDate.getFullYear(), this.creationDate.getMonth(),
            this.creationDate.getDay(), this.creationDate.getHours() - 3, this.creationDate.getMinutes(),
            this.creationDate.getSeconds(), 0);
    }

    display(): void {

        //card structure
        //outer card container
        let cardsContainer: HTMLElement = document.querySelector(".cardsContainer");
        let outerCardContainer: HTMLElement = document.createElement("div");
        cardsContainer.appendChild(outerCardContainer);
        outerCardContainer.classList.add("col", "outerCardContainer");

        //card container
        let cardContainer: HTMLElement = document.createElement("div");
        outerCardContainer.appendChild(cardContainer);
        cardContainer.classList.add("card", "h-100", /*"shadow",*/ "border-0", "rounded-0", "cardContainer");

        //card image container
        let cardImgContainer: HTMLElement = document.createElement("div");
        cardContainer.appendChild(cardImgContainer);
        cardImgContainer.classList.add("cardImgContainer");

        //img
        let img: HTMLElement = document.createElement("img");
        cardImgContainer.appendChild(img);
        img.classList.add("cardImg");
        img.setAttribute("src", this.image);

        //text container
        let txtContainer: HTMLElement = document.createElement("div");
        cardContainer.appendChild(txtContainer);
        txtContainer.classList.add("card-body", "py-0");

        //card title
        let cardTitle: HTMLElement = document.createElement("p");
        let cardTitleTxt: Text = document.createTextNode(this.title);
        cardTitle.appendChild(cardTitleTxt);
        txtContainer.appendChild(cardTitle);
        cardTitle.classList.add("card-title", "mb-0", "text-center", "cardTitle");

        //card subtitle
        let cardSubtitle: HTMLElement = document.createElement("p");
        let cardSubtitleTxt: Text = document.createTextNode(`${this.kindOfEvent}`);
        cardSubtitle.appendChild(cardSubtitleTxt);
        txtContainer.appendChild(cardSubtitle);
        cardSubtitle.classList.add("card-text", "text-center", "cardSubtitle");

        //card date & time
        let cardDateTime: HTMLElement = document.createElement("p");
        let cardDateTimeTxt: Text = document.createTextNode(this.eventDate.getDay() + "." + this.eventDate.getMonth() + "." +
            this.eventDate.getFullYear() + " | " + this.eventDate.getHours() + ":" + this.eventDate.getMinutes());
        cardDateTime.appendChild(cardDateTimeTxt);
        txtContainer.appendChild(cardDateTime);
        cardDateTime.classList.add("card-text", "text-center", "cardTxt");

        //card price
        let cardPrice: HTMLElement = document.createElement("p");
        let cardPriceTxt: Text = document.createTextNode(`price: €${this.price}`);
        cardPrice.appendChild(cardPriceTxt);
        txtContainer.appendChild(cardPrice);
        cardPrice.classList.add("card-text", "text-center", "cardPrice");

        //card address
        let cardAddress: HTMLElement = document.createElement("p");
        let cardAddressTxt: Text = document.createTextNode(`${this.city} | ${this.zipCode} | ${this.streetName}`);
        cardAddress.appendChild(cardAddressTxt);
        txtContainer.appendChild(cardAddress);
        cardAddress.classList.add("card-text", "text-center", "cardTxt");

        //stamp container
        let stampContainer: HTMLElement = document.createElement("div");
        cardContainer.appendChild(stampContainer);
        stampContainer.classList.add("stampContainer");

        //stamp
        let stamp: HTMLElement = document.createElement("img");
        stampContainer.appendChild(stamp);
        stamp.classList.add("stampImg");
        stamp.setAttribute("src", this.icon);

        //top date text 
        let cardDateTxt: HTMLElement = document.createElement("p");
        let cardDateTxtNode: Text = document.createTextNode(this.creationDate.getDay() + "." +
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
    }
}

//Create MyLocation objects
function createObjs(): void {
    new Restaurant("Best Schnitzel!", "7.4.2006,12:34:18", "London", "2245", "Fieldway 12", "img/pubBeer.jpeg",
        "img/restaurant.png", "austrian", "office@schnitzelkönig.at", "43(1)7334 58804");

    new MyEvent("Slipknot", "15.8.2018,20:14:2", "New York", "3443", "Highsquare 23", "img/slipknotConcert.jpg",
        "img/ticket.png", "concert", 80);

    new Restaurant("Cilly Cafe´", "9.2.2016,19:32:7", "Berlin", "1202", "Berlinstreet 40", "img/pubBoy.webp",
        "img/restaurant.png", "canadian", "office@chillclub.com", "27(1)7334 58104");

    new MyEvent("Burning Man!!", "14.3.2020,23:27:45", "Nevada", "7001", "Dune rd 4", "img/burningMan.jpg",
        "img/ticket.png", "festival", 400);

    new MyLocation("Karlsplatz", "28.7.2016,11:23:10", "Vienna", "1010", "Karlsplatz 1", "img/karlsKirche.jpg",
        "img/location.png");

    new MyLocation("The Seals!", "11.3.2017,12:14:3", "Vienna", "1020", "Schönbrunnerstr 11", "img/zoo.jpg",
        "img/location.png");

    new Restaurant("Juicy Juicyness", "24.5.2017,15:37:4", "Victoria", "1200", "Highstreet 401", "img/farmersMarket.jpg",
        "img/restaurant.png", "canadian market", "office@farmersmarket.com", "27(1)444 577704");

    new MyLocation("Chill out", "10.10.2019,12:01:2", "Brighton", "???", "A stroll in the park", "img/park.jpg",
        "img/location.png");

}

//Add Eventlisteners
function addEventlisteners(): void {
    //Btn sortDesc
    let sortDescBtn: HTMLElement = document.querySelector(".sortDesc");
    sortDescBtn.addEventListener("click", function () {
        sortDesc();
        removeDynHTML();
        documentReady();
    });

    //Btn sortAsc
    let sortAscBtn: HTMLElement = document.querySelector(".sortAsc");
    sortAscBtn.addEventListener("click", function () {
        sortAsc();
        removeDynHTML();
        documentReady();
    });
}

//Sort descending
function sortDesc(): void {

    locations.sort(function (a: MyLocation, b: MyLocation) {
        return +b.getCreationDate() - +a.getCreationDate();
    });
}

//Sort ascending
function sortAsc(): void {

    locations.sort(function (a: MyLocation, b: MyLocation) {
        return +a.getCreationDate() - +b.getCreationDate();
    });
}

//Create HTML elements
function createDynHTML(): void {

    for (let i: number = 0; i < locations.length; i++) {
        locations[i].display();
    }
}

//Remove HTML elements
function removeDynHTML(): void {
    document.querySelector(".cardsContainer").innerHTML = "";
}

//Serve obj to HTML
function documentReady(): void {
    infoHeaderFooter();

    addEventlisteners();

    console.log(locations);
    createDynHTML();
}

createObjs();
documentReady();