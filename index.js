import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

// Variabelen
const app = express();
const port = 3000;
// Variabelen voor kleren
let hoodies = [
    {
        title: 'Hoodie - Loose Fit',
        description: "Blanco hoodie",
        colour: "Blauw",
        imageUrl: '../img/hoodie_blauw.jpg',
        price: '€20,-'
    },
    {
        title: 'Hoodie - Loose Fit',
        description: "Blanco hoodie",
        colour: "Bruin",
        imageUrl: '../img/hoodie_bruin.jpg',
        price: '€20,-'
    },
    {
        title: 'Hoodie - Loose Fit',
        description: "Blanco hoodie",
        colour: "Donker blauw",
        imageUrl: '../img/hoodie_donker_blauw.jpg',
        price: '€20,-'
    },
    {
        title: 'Hoodie - Loose Fit',
        description: "Blanco hoodie",
        colour: "Donker groen",
        imageUrl: '../img/hoodie_donker_groen.jpg',
        price: '€20,-'
    },
    {
        title: 'Hoodie - Loose Fit',
        description: "Blanco hoodie",
        colour: "Geel",
        imageUrl: '../img/hoodie_geel.jpg',
        price: '€20,-'
    },
    {
        title: 'Hoodie - Loose Fit',
        description: "Blanco hoodie",
        colour: "Donker grijs",
        imageUrl: '../img/hoodie_grijs.jpg',
        price: '€20,-'
    },
    {
        title: 'Hoodie - Loose Fit',
        description: "Blanco hoodie",
        colour: "Groen",
        imageUrl: '../img/hoodie_groen.jpg',
        price: '€20,-'
    },
    {
        title: 'Hoodie - Loose Fit',
        description: "Blanco hoodie",
        colour: "Rood",
        imageUrl: '../img/hoodie_rood.jpg',
        price: '€20,-'
    },
    {
        title: 'Hoodie - Loose Fit',
        description: "Blanco hoodie",
        colour: "Roze",
        imageUrl: '../img/hoodie_roze.jpg',
        price: '€20,-'
    },
    {
        title: 'Hoodie - Loose Fit',
        description: "Blanco hoodie",
        colour: "Wit",
        imageUrl: '../img/hoodie_wit.jpg',
        price: '€20,-'
    },
    {
        title: 'Hoodie - Loose Fit',
        description: "Blanco hoodie",
        colour: "Zwart",
        imageUrl: '../img/hoodie_zwart.jpg',
        price: '€20,-'
    }
];
let tshirts = [
    {
        title: "T-Shirt",
        description: "T-shirt met logoborduring.",
        colour: "Zwart",
        imageUrl: "https:\/\/cdn-1.debijenkorf.nl\/web_detail\/calvin-klein-t-shirt-met-logoborduring\/?reference=091\/250\/0912501000712002_pro_mod_det_01_1108_1528_1673621412.jpg",
        price: '€15,-'
    },
    {
        title: "Overshirt",
        description: "Overshirt met relaxed fit en borstzakken.",
        colour: "Lichtblauw",
        imageUrl: "https:\/\/cdn-1.debijenkorf.nl\/web_detail\/calvin-klein-overshirt-met-relaxed-fit-en-borstzakken\/?reference=074\/750\/0747501003191002_pro_mod_det_01_1108_1528_1674122911.jpg",
        price: '€15,-'
    },
    {
        title: "T-Shirt",
        description: "T-shirt met borstzak en stretch .",
        colour: "Rood",
        imageUrl: "https:\/\/cdn-1.debijenkorf.nl\/web_detail\/calvin-klein-t-shirt-met-borstzak-en-stretch\/?reference=074\/750\/0747508001641002_pro_mod_det_01_1108_1528_7311859.jpg",
        price: '€30,-'
    }
];
let jeans = [
    {
        title: "Cargobroek",
        description: "XX slim tapered fit cargobroek met opgestikte zakken.",
        colour: "Zwart",
        imageUrl: "https:\/\/cdn-1.debijenkorf.nl\/web_detail\/levi-s-xx-slim-tapered-fit-cargobroek-met-opgestikte-zakken\/?reference=058\/340\/0583407521200000_pro_mod_det_01_1108_1528_6148376.jpg",
        price: '€40,-'
    },
    {
        title: "Chino",
        description: "Tapered fit chino van corduroy met steekzakken.",
        colour: "Bruin",
        imageUrl: "https:\/\/cdn-1.debijenkorf.nl\/web_detail\/levi-s-tapered-fit-chino-van-corduroy-met-steekzakken\/?reference=058\/340\/0583408068900000_pro_mod_det_01_1108_1528_1669816937.jpg",
        price: '€40,-'
    },
    {
        title: "Korte broek",
        description: "Straight fit korte broek van corduroy met steekzakken.",
        colour: "Beige", "imageUrl": "https:\/\/cdn-1.debijenkorf.nl\/web_detail\/levi-s-straight-fit-korte-broek-van-corduroy-met-steekzakken\/?reference=058\/340\/0583407628000000_pro_mod_det_01_1108_1528_6808993.jpg",
        price: '€40,-'
    }
];

// Variabelen voor snacks
//Europese snacks array
let europeaan = [
    {
        title: "Toblerone",
        description: "Toblerone is een zwitserse chocolade reep met honing en amandel nougat.",
        img: "../img/toblerone.jpg",
        price: "€ 1,19"
    },
    {
        title: "Stroopwafel",
        description: "Kanjers stroopwafels zijn extra lekkere, extra grote stroopwafels.",
        img: "../img/Stroopwafel.jpg",
        price: "€ 2,89"
    },
    {
        title: "Kinder delice",
        description: "Een zachte chocoladecake met een romige vulling.",
        img: "../img/kinder delice.jpg",
        price: "€ 3,19"
    }
];
//Aziatiche snacks array
let asian = [
    {
        title: "Samyang Zzalduk Extreme Hete Kip Snack",
        description: "Ben jij liefhebber van pittig eten? Dan is de Samyang Zzalduk Exteme Hete Kip Snack iets voor jou!",
        img: "../img/Samyang Zzalduk.png",
        price: "€ 3,45"
    },
    {
        title: "Cozzo Konnyaku Jelly Lychee Smaak",
        description: "Deze verfrissende traktatie biedt een heerlijke smaak van lychee gecombineerd met de unieke textuur van Konnyaku Jelly.",
        img: "../img/Cozzo Konnyaku Jelly Lychee.png",
        price: "€ 2,55"
    },
    {
        title: "Hokka Doraemon Chocolade Koekjes",
        description: "Deze koekjes hebben een heerlijke chocoladesmaak die je zoetekauw zeker zal stillen.",
        img: "../img/Chocolade Koekjes.png",
        price: "€ 4,05"
    }
];
//Amerikaanse snacks array
let american = [
    {
        title: "Oreo Cookies Classic",
        description: "Oreo is een uniek koekje met een heerlijke vanille cremevulling.",
        img: "../img/oreo.jpg",
        price: "€ 1,84"
    },
    {
        title: "Reese's Peanut Butter",
        description: "Reese’s Peanut Butter zijn heerlijke chocoladecups gevuld met pindakaas.",
        img: "../img/reeses.jpg",
        price: "€ 1,17"
    },
    {
        title: "Twinkies Banana",
        description: "De Twinkies Banaan zijn luchtige cakejes met een zoete crèmevulling met banaansmaak.",
        img: "../img/twinkies.jpg",
        price: "€ 2,89"
    }
];

app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// Routes naar de arrays
// Kleren
app.get('/hoodies', (req, res) => {
    res.setHeader('Content-type', 'application/json;charset=UTF-8');
    res.send(
        JSON.stringify(hoodies)
    );
});

app.get('/tshirts', (req, res) => {
    res.setHeader('Content-type', 'application/json;charset=UTF-8');
    res.send(
        JSON.stringify(tshirts)
    );
});

app.get('/jeans', (req, res) => {
    res.setHeader('Content-type', 'application/json;charset=UTF-8');
    res.send(
        JSON.stringify(jeans)
    );
});

// Snacks
app.get('/europeaan', (req, res) => {
    res.setHeader('Content-type', 'application/json;charset=UTF-8');
    res.send(
        JSON.stringify(europeaan)
    );
});

app.get('/asian', (req, res) => {
    res.setHeader('Content-type', 'application/json;charset=UTF-8');
    res.send(
        JSON.stringify(asian)
    );
});

app.get('/american', (req, res) => {
    res.setHeader('Content-type', 'application/json;charset=UTF-8');
    res.send(
        JSON.stringify(american)
    );
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});