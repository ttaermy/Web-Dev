import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {

  products: Product[] = [
    {
      id: 1,
      name: 'Iphone 16 pro max',
      description: 'Смартфон Apple iPhone 16 Pro Max 256Gb золотистый',
      price: 717586,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h41/h98/87295491702814.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h41/h98/87295491702814.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h96/ha4/87295491735582.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h3c/h66/87295491768350.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000'
    },
    {
      id: 2,
      name: 'Подушки',
      description: 'Подушка Tomiris 50x70 см, пух искусственный',
      price: 1275,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hbe/he1/87340400803870.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hbe/he1/87340400803870.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pac/p57/89214958.bin?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pa6/p28/83674003.bin?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/podushka-tomiris-tomiris-50-70-puh-iskusstvennyi-50x70-sm-124467190/?c=750000000'
    },
    {
      id: 3,
      name: 'Кровать односпальная',
      description: 'Кровать Den store HD-01 односпальная, 100х200 см белый, коричневый',
      price: 185654,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p98/p06/61649422.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p98/p06/61649422.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p01/pc9/61649423.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p98/p06/61649422.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/krovat-den-store-hd-01-odnospal-naja-100h200-sm-s-matrasom-bez-pod-jomnogo-mehanizma-belyi-korichnevyi-118395608/?c=750000000'
    },
    {
      id: 4,
      name: 'Телевизор Samsung',
      description: 'Телевизор Samsung UE55DU7100UXCE 140 см черный',
      price: 278590,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hdd/h5e/85887766167582.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hdd/h5e/85887766167582.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h9f/h2f/85887766233118.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h95/hf0/85887766298654.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-ue55du7100uxce-140-sm-chernyi-118907988/?c=750000000'
    },
    {
      id: 5,
      name: 'Smeg набор ножей',
      description: 'Smeg набор ножей 676497352, лезвие: нержавеющая сталь 6 шт',
      price: 21619,
      rating: 4.95,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p88/p6e/40055752.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p88/p6e/40055752.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pc0/p6e/40055754.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p15/p6f/40055757.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/smeg-nabor-nozhei-676497352-lezvie-nerzhavejuschaja-stal-6-sht-117821704/?c=750000000'
    },
    {
      id: 6,
      name: 'Bio-collagen mask',
      description: 'Маска для лица гидрогелевая Bio-collagen mask 4 шт',
      price: 1279,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pa1/p2e/38421594.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pa1/p2e/38421594.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd5/pbf/70902563.bin?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pf1/pbf/70902564.bin?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/maska-dlja-litsa-gidrogelevaja-bio-collagen-mask-4-sht-138594998/?c=750000000'
    },
    {
      id: 7,
      name: 'Пижама',
      description: 'Комплект Victoria’s Secret черный',
      price: 45900,
      rating: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pb9/p28/106075084.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pb9/p28/106075084.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p50/p25/106075083.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p23/p2c/106075085.jpeg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/komplekt-victoria-s-secret-697332391-chernyi-m-157219620/?c=750000000'
    },
    {
      id: 8,
      name: 'Чайник',
      description: 'Smeg чайник 2.3 л, алюминий, нержавеющая сталь',
      price: 79995,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1a/h89/85801029402654.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h1a/h89/85801029402654.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h1e/hbb/85801029468190.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/ha9/h52/85801029664798.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/smeg-chainik-stil-50-h-g-g-cklw2001cr-2-3-l-aljuminii-nerzhavejuschaja-stal--118083624/?c=750000000'
    },
    {
      id: 9,
      name: 'Одеяло',
      description: 'Одеяло 684160577 145x200 всесезонное',
      price: 2295,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p12/pd2/9382266.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p12/pd2/9382266.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pa8/pce/9382267.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p3e/pcb/9382268.jpeg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/odejalo-684160577-145x200-vsesezonnoe-130336480/?c=750000000'
    },
    {
      id: 10,
      name: 'Кружка',
      description: 'Чайная пара «Сердечки», 250 мл, керамика',
      price: 3295,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb6/h46/87279118417950.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hb6/h46/87279118417950.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/had/he2/87279118483486.jpg?format=gallery-medium',
        'https://tse2.mm.bing.net/th/id/OIP.7qBCd75ypJNRsU6Uj4sS5wHaJ3?pid=ImgDet&w=159&h=211&c=7&o=7&rm=3'
      ],
      link: ''
    },
  ];
}
