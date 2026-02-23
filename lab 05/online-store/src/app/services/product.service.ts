import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  categories: Category[] = [
    {
      id: 1,
      name: 'Bedroom sets',
      products: [
        {
          id: 1,
          name: 'Grand Miks Бостон  2 4Д',
          description: 'предметов в наборе 6 шт, кровать 160х200 см, белый однотонный',
          price: 249948,
          rating: 4.9,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/hbc/h52/86065640570910.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/grand-miks-boston-2-4d-predmetov-v-nabore-6-sht-krovat-160h200-sm-belyi-odnotonnyi-106434148/?c=750000000',
          likes: 0
        },
        {
          id: 2,
          name: 'Азия Бренд 2121',
          description: 'Гарнитур Азия Бренд 2121, спальное место 180х200 см дуб вотан',
          price: 268700,
          rating: 4.9,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h94/85613627080734.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/azija-brend-2121-sp-mesto-180h200-sm-dub-votan-118009931/?c=750000000',
          likes: 0
        },
        {
          id: 3,
          name: 'AsiaBrand Луна 6Д',
          description: 'Гарнитур AsiaBrand Луна 6Д, предметов в наборе 6 шт, кровать 160x200 см',
          price: 279999,
          rating: 4.9,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/hc4/hcb/86675905445918.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/asiabrand-luna-6d-predmetov-v-nabore-6-sht-krovat-160x200-sm-116965798/?c=750000000',
          likes: 0
        },
        {
          id: 4,
          name: 'Эдем Lara',
          description: 'Гарнитур Эдем Lara 949072627, предметов в наборе 6 шт белый, кровать 180х200',
          price: 488370,
          rating: 4.95,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/p33/p9e/53177041.jpeg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/edem-lara-949072627-predmetov-v-nabore-6-sht-belyi-142566503/?c=750000000',
          likes: 0
        },
        {
          id: 5,
          name: 'Мебель Азии Туран',
          description: 'Гарнитур Мебель Азии Туран 160 2КП, предметов в наборе 5 шт однотонный',
          price: 171990,
          rating: 4.9,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/p7a/p66/25650991.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/mebel-azii-turan-160-2kp-predmetov-v-nabore-5-sht-odnotonnyi-134919152/?c=750000000',
          likes: 0
        }
      ]
    },

    {
      id: 2,
      name: 'Aroma candles',
      products: [
        {
          id: 6,
          name: 'Home Dark Amber',
          description: 'Ароматическая свеча Zara Home Dark Amber 8432/705 8 см',
          price: 16990,
          rating: 5.0,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h5c/h47/83673753387038.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/aromaticheskaja-svecha-zara-home-dark-amber-8432-705-8-sm-1-sht-113240551/?c=750000000',
          likes: 0
        },
        {
          id: 7,
          name: 'Absolute Linen',
          description: 'Ароматическая свеча Zara Home Absolute Linen 8436/705 12 см',
          price: 24990,
          rating: 4.9,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h60/hbe/83673600426014.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/aromaticheskaja-svecha-zara-home-absolute-linen-8436-705-12-sm-1-sht-113240428/?c=750000000',
          likes: 0
        },
        {
          id: 8,
          name: 'Black Vanilla',
          description: 'Ароматическая свеча Zara Home Black Vanilla 8433/705 8 см',
          price: 25990,
          rating: 5.0,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/hb7/hb7/83673661603870.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/aromaticheskaja-svecha-zara-home-black-vanilla-8433-705-8-sm-1-sht-113240474/?c=750000000',
          likes: 0
        },
        {
          id: 9,
          name: 'White Jasmine',
          description: 'Ароматическая свеча Zara Home White Jasmine 8 см',
          price: 16990,
          rating: 0.0,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/hb3/hf0/64154970226718.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/aromaticheskaja-svecha-zara-home-white-jasmine-8-sm-1-sht-105713419/?c=750000000',
          likes: 0
        },
        {
          id: 10,
          name: 'Poetic Mind',
          description: 'Диффузор Zara Home Poetic Mind 8402/703 100 мл',
          price: 20990,
          rating: 5.0,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/ha8/h83/84619382849566.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/zara-home-poetic-mind-8402-703-100-ml-115011313/?c=750000000',
          likes: 0
        }
      ]
    },

    {
      id: 3,
      name: 'Skin Care',
      products: [
        {
          id: 11,
          name: 'крем 345 Relief',
          description: 'Dr. Althea крем 345 Relief для лица 50 мл',
          price: 1099,
          rating: 4.8,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h59/h3b/86726530400286.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/dr-althea-krem-345-relief-dlja-litsa-50-ml-115616909/?c=750000000',
          likes: 0
        },
        {
          id: 12,
          name: 'AXIS-Y сыворотка',
          description: 'AXIS-Y сыворотка Dark Spot Correcting Glow для лица 50 мл',
          price: 887,
          rating: 4.9,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/p07/p1e/57519040.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/axis-y-syvorotka-dark-spot-correcting-glow-dlja-litsa-50-ml-104067981/?c=750000000',
          likes: 0
        },
        {
          id: 13,
          name: 'AXIS-Y сыворотка Vegan Collagen',
          description: 'AXIS-Y сыворотка Vegan Collagen для области вокруг глаз 10 мл',
          price: 1450,
          rating: 4.8,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/pda/p6d/17762042.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/axis-y-syvorotka-vegan-collagen-dlja-oblasti-vokrug-glaz-10-ml-122443334/?c=750000000',
          likes: 0
        },
        {
          id: 14,
          name: 'The VitaA Retinol Shot Tightening Serum',
          description: 'Celimax сыворотка The VitaA Retinol Shot Tightening Serum Лифтинг Сыворотка с Ретинолом 30ml',
          price: 1643,
          rating: 4.9,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/pd4/p6e/47542237.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/celimax-syvorotka-the-vitaa-retinol-shot-tightening-serum-lifting-syvorotka-s-retinolom-30ml-dlja-litsa-30-ml-124551925/?c=750000000',
          likes: 0
        },
        {
          id: 15,
          name: 'Dual Barrier Skin Wearable Cream',
          description: 'Celimax крем Dual Barrier Skin Wearable Cream для лица 50 мл',
          price: 1645,
          rating: 4.9,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/pe2/p49/38926604.png?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/celimax-krem-dual-barrier-skin-wearable-cream-dlja-litsa-50-ml-108389249/?c=750000000&tab=reviews',
          likes: 0
        }
      ]
    },

    {
      id: 4,
      name: 'Kitchen',
      products: [
        {
          id: 16,
          name: 'Термокружка Smeg',
          description: 'Термокружка Smeg 1240465670 0.24 л бежевый',
          price: 2957,
          rating: 4.96,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/p2f/p47/28631460.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/termokruzhka-smeg-1240465670-0-24-l-bezhevyi-115859050/?c=750000000',
          likes: 0
        },
        {
          id: 17,
          name: 'Smeg набор ножей',
          description: 'Smeg набор ножей 676497352, лезвие: нержавеющая сталь 6 шт',
          price: 21017,
          rating: 4.98,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/p88/p6e/40055752.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/smeg-nabor-nozhei-676497352-lezvie-nerzhavejuschaja-stal-6-sht-117821704/?c=750000000',
          likes: 0
        },
        {
          id: 18,
          name: 'Smeg чайник',
          description: 'Smeg чайник Стиль 50-х г.г. CKLW2001CR 2.3 л, алюминий, нержавеющая сталь',
          price: 79995,
          rating: 4.9,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h1a/h89/85801029402654.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/smeg-chainik-stil-50-h-g-g-cklw2001cr-2-3-l-aljuminii-nerzhavejuschaja-stal--118083624/?c=750000000',
          likes: 0
        },
        {
          id: 19,
          name: 'Тостер Smeg',
          description: 'Тостер Smeg TSF01CREU бежевый',
          price: 98875,
          rating: 5.0,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/pac/p7e/18157859.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/smeg-tsf01creu-bezhevyi-11000154/?c=750000000',
          likes: 0
        },
        {
          id: 20,
          name: 'Smeg Кастрюля',
          description: 'Кастрюля 4.2 л, Smeg 589060 чугун',
          price: 43003,
          rating: 4.98,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/p2f/p36/48594509.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/smeg-kastrjulja-589060-chugun-4-2-115129243/?c=750000000',
          likes: 0
        }
      ]
    }
  ];

  getCategories(): Category[] {
    return this.categories;
  }
}
