import { Injectable } from '@angular/core';
import { ProductCategory } from '../classes/productCategory';
import { Product } from '../classes/product';

@Injectable({
    providedIn: 'root'
})
export class ProductListService {

    constructor() { }

    getProducLists() {
        const data = JSON.parse('{"products":[{"id":500,"name":"Koton Bordo Ceket","price":69.99,"salePrice":59.491499999999995,"baseImageUrl":"https://statics.boyner.com.tr/mnresize/325/451/productimages/5002367754_403_01.jpg","sale":true,"new":true,"pictures":["https://statics.boyner.com.tr/mnresize/325/451/productimages/5002367754_403_01.jpg"]},{"id":1000,"name":"Penti Beyaz İç Giyim Atlet","price":33.56,"salePrice":33.56,"baseImageUrl":"https://statics.boyner.com.tr/mnresize/325/451/productimages/5002463240_100_01.jpg","sale":false,"new":false,"pictures":["https://statics.boyner.com.tr/mnresize/325/451/productimages/5002463240_100_01.jpg"]},{"id":1500,"name":"Pierre Cardin Kadın Kalın Topuklu Ayakkabı","price":129.99,"salePrice":110.4915,"baseImageUrl":"https://statics.boyner.com.tr/mnresize/325/451/productimages/5002546506_411_01.jpg","sale":true,"new":false,"pictures":["https://statics.boyner.com.tr/mnresize/325/451/productimages/5002546506_411_01.jpg"]},{"id":2000,"name":"Beymen Çok Renkli Eşarp","price":129.99,"salePrice":129.99,"baseImageUrl":"https://statics.boyner.com.tr/mnresize/325/451/productimages/5000160987_998_01.jpg","sale":false,"new":true,"pictures":["https://statics.boyner.com.tr/mnresize/325/451/productimages/5000160987_998_01.jpg"]},{"id":2500,"name":"Beymen Business Palto","price":499.99,"salePrice":424.9915,"baseImageUrl":"https://statics.boyner.com.tr/mnresize/325/451/productimages/5002462099_411_01.jpg","sale":true,"new":false,"pictures":["https://statics.boyner.com.tr/mnresize/325/451/productimages/5002462099_411_01.jpg"]},{"id":3000,"name":"T-Box Suni Deri Terlik","price":39.99,"salePrice":39.99,"baseImageUrl":"https://statics.boyner.com.tr/mnresize/325/451/productimages/5002546060_001_01.jpg","sale":false,"new":false,"pictures":["https://statics.boyner.com.tr/mnresize/325/451/productimages/5002546060_001_01.jpg"]},{"id":3500,"name":"Fabrika Siyah Kemer","price":59.97,"salePrice":50.9745,"baseImageUrl":"https://statics.boyner.com.tr/mnresize/325/451/productimages/5002501542_020_01.jpg","sale":true,"new":true,"pictures":["https://statics.boyner.com.tr/mnresize/325/451/productimages/5002501542_020_01.jpg"]},{"id":3250,"name":"Beymen Siyah Sırt Çantası","price":761.97,"salePrice":761.97,"baseImageUrl":"https://statics.boyner.com.tr/mnresize/325/451/productimages/5002546362_010_01.jpg","sale":false,"new":false,"pictures":["https://statics.boyner.com.tr/mnresize/325/451/productimages/5002546362_010_01.jpg"]},{"id":3700,"name":"U.S. Polo Assn. Slim Fit Erkek Denim Pantolon","price":143.95,"salePrice":122.35749999999999,"baseImageUrl":"https://statics.boyner.com.tr/mnresize/325/451/productimages/5000061370_X_01.jpg","sale":true,"new":false,"pictures":["https://statics.boyner.com.tr/mnresize/325/451/productimages/5000061370_X_01.jpg"]},{"id":2800,"name":"Ds Damat Pijama Takımı","price":162.6,"salePrice":162.6,"baseImageUrl":"https://statics.boyner.com.tr/mnresize/325/451/productimages/5002443633_410_04.jpg","sale":false,"new":true,"pictures":["https://statics.boyner.com.tr/mnresize/325/451/productimages/5002443633_410_04.jpg"]},{"id":2600,"name":"Only & Sons Mont","price":199.95,"salePrice":169.95749999999998,"baseImageUrl":"https://statics.boyner.com.tr/mnresize/325/451/productimages/5002552911_100_01.jpg","sale":true,"new":false,"pictures":["https://statics.boyner.com.tr/mnresize/325/451/productimages/5002552911_100_01.jpg"]},{"id":1800,"name":"Roberto Botticelli Vizon Sırt Çantası","price":149.95,"salePrice":149.95,"baseImageUrl":"https://statics.boyner.com.tr/mnresize/325/451/productimages/5002545588_100_01.jpg","sale":false,"new":false,"pictures":["https://statics.boyner.com.tr/mnresize/325/451/productimages/5002545588_100_01.jpg"]},{"id":1400,"name":"Limon Fuşya Düz Ayakkabı","price":59.99,"salePrice":50.9915,"baseImageUrl":"https://statics.boyner.com.tr/mnresize/325/451/productimages/5002368882_411_01.jpg","sale":true,"new":true,"pictures":["https://statics.boyner.com.tr/mnresize/325/451/productimages/5002368882_411_01.jpg"]},{"id":280,"name":"Fashion Friends Açık Mavi Pantolon","price":79.99,"salePrice":79.99,"baseImageUrl":"https://statics.boyner.com.tr/mnresize/325/451/productimages/5002497098_001_01.jpg","sale":false,"new":false,"pictures":["https://statics.boyner.com.tr/mnresize/325/451/productimages/5002497098_001_01.jpg"]},{"id":660,"name":"Koton Cepli Beyaz T-Shirt","price":39.99,"salePrice":33.9915,"baseImageUrl":"https://statics.boyner.com.tr/mnresize/325/451/productimages/5002383910_700_01.jpg","sale":true,"new":false,"pictures":["https://statics.boyner.com.tr/mnresize/325/451/productimages/5002383910_700_01.jpg"]},{"id":890,"name":"Nike Antrenman Tayt","price":349.9,"salePrice":349.9,"baseImageUrl":"https://statics.boyner.com.tr/mnresize/325/451/productimages/5002525221_001_01.jpg","sale":false,"new":true,"pictures":["https://statics.boyner.com.tr/mnresize/325/451/productimages/5002525221_001_01.jpg"]},{"id":1420,"name":"Greyder Sandalet","price":179.99,"salePrice":152.9915,"baseImageUrl":"https://statics.boyner.com.tr/mnresize/325/451/productimages/5000211310_100_01.jpg","sale":true,"new":false,"pictures":["https://statics.boyner.com.tr/mnresize/325/451/productimages/5000211310_100_01.jpg"]}],"listing":{"id":0,"name":"Vitrin","description":"Gözde Ürünler","createdDate":"0001-01-01T00:00:00","isActive":false,"products":null}}');
        return data;
    }
}
