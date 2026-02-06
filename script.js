
        // Массив товаров (более 100 товаров)
        const products = [
            // Категория 1: Автоаксессуары (35 товаров)
            { id: 1, name: "Розовый коврик для авто", category: "accessories", price: 1590, image: "https://avatars.mds.yandex.net/i?id=15ac805c87b07aa6280b7cb1ba881c5d_l-5222634-images-thumbs&n=13", isFavorite: false, inCart: 0 },
            { id: 2, name: "Зеркало заднего вида", category: "accessories", price: 2450, image: "https://avatars.mds.yandex.net/i?id=a82275669f10e9fd824a35462c19abda71f9fad7-11512273-images-thumbs&n=13", isFavorite: false, inCart: 0 },
            { id: 3, name: "Чехол на руль розовый", category: "accessories", price: 1290, image: "https://ir.ozone.ru/s3/multimedia-8/6832334780.jpg", isFavorite: false, inCart: 0 },
            { id: 4, name: "Подвеска для зеркала", category: "accessories", price: 890, image: "https://avatars.mds.yandex.net/get-mpic/5213758/2a00000193bda087c1adb921c21760beec17/orig", isFavorite: false, inCart: 0 },
            { id: 5, name: "Чехол на сиденье", category: "accessories", price: 3290, image: "https://avatars.mds.yandex.net/i?id=249373e5aec185efc25108c9bcf5640e_l-5107667-images-thumbs&n=13", isFavorite: false, inCart: 0 },
            { id: 6, name: "Органайзер для багажника", category: "accessories", price: 2790, image: "https://cdn1.ozone.ru/s3/multimedia-1-1/7868308537.jpg", isFavorite: false, inCart: 0 },
            { id: 7, name: "Держатель для телефона", category: "accessories", price: 990, image: "https://cdn.100sp.ru/pictures/1395628168", isFavorite: false, inCart: 0 },
            { id: 8, name: "Ароматизатор", category: "accessories", price: 590, image: "https://avatars.mds.yandex.net/i?id=23de8e7a2a9130a15022aa06d07dd63d_l-4219930-images-thumbs&n=13", isFavorite: false, inCart: 0 },
            { id: 9, name: "Чехол на ремень", category: "accessories", price: 790, image: "https://avatars.mds.yandex.net/i?id=8345dbd6780de8c0e63d4bc73a929cc1_l-4468494-images-thumbs&n=13", isFavorite: false, inCart: 0 },
            { id: 10, name: "Коврик в багажник", category: "accessories", price: 1890, image: "https://avatars.mds.yandex.net/i?id=72b72c082ed78a7f7413dfe6200468d983be012b-4590460-images-thumbs&n=13", isFavorite: false, inCart: 0 },
            { id: 11, name: "Чехол на подголовник", category: "accessories", price: 1190, image: "https://img.joomcdn.net/1cb9fd583b1a7b6ea452db3ff544742ea75779aa_original.jpeg", isFavorite: false, inCart: 0 },
            { id: 12, name: "Карман на спинку сиденья", category: "accessories", price: 890, image: "https://img.joomcdn.net/b832ff643d27cbd39fc0b3e12032bab2eb6a55f8_original.jpeg", isFavorite: false, inCart: 0 },
            { id: 13, name: "Сумка-органайзер в салон", category: "accessories", price: 1590, image: "https://avatars.mds.yandex.net/i?id=2a0000019b666464b3368ee3450893e87e67-16299100-yarec&n=13", isFavorite: false, inCart: 0 },
            { id: 14, name: "Подлокотник розовый", category: "accessories", price: 2190, image: "https://ir.ozone.ru/s3/multimedia-l/6714191289.jpg", isFavorite: false, inCart: 0 },
            { id: 15, name: "Защита от солнца", category: "accessories", price: 1290, image: "https://avatars.mds.yandex.net/i?id=0b9a3f3dcf8bfcc9d29551eb9adadc06_l-5220588-images-thumbs&n=13", isFavorite: false, inCart: 0 },
            { id: 16, name: "Коврики в салон 4 шт", category: "accessories", price: 2890, image: "https://avatars.mds.yandex.net/i?id=54017664dcb78fcf0c1652f2d7571cdd_l-10700059-images-thumbs&n=13", isFavorite: false, inCart: 0 },
            { id: 17, name: "Накладки на педали", category: "accessories", price: 1590, image: "https://cdn1.ozone.ru/s3/multimedia-p/6218013685.jpg", isFavorite: false, inCart: 0 },
            { id: 18, name: "Чехол на рычаг КПП", category: "accessories", price: 690, image: "https://avatars.mds.yandex.net/get-mpic/4709279/img_id7460942838975590682.jpeg/orig", isFavorite: false, inCart: 0 },
            { id: 19, name: "Подстаканник с подсветкой", category: "accessories", price: 1290, image: "https://avatars.mds.yandex.net/i?id=2a0000019b6c6ef4c0d8f724605537545960-16151195-yarec&n=13", isFavorite: false, inCart: 0 },
            { id: 20, name: "Козырек от солнца", category: "accessories", price: 890, image: "https://cdn1.ozone.ru/s3/multimedia-d/6370518277.jpg", isFavorite: false, inCart: 0 },
            { id: 21, name: "Органайзер для мелочей", category: "accessories", price: 790, image: "https://avatars.mds.yandex.net/get-mpic/12225658/2a000001937fbe8c0642325f67135809e24c/orig", isFavorite: false, inCart: 0 },
            { id: 22, name: "Чехол на ключ", category: "accessories", price: 490, image: "https://avatars.mds.yandex.net/get-mpic/5259100/img_id2775887134684998604.jpeg/orig", isFavorite: false, inCart: 0 },
            { id: 23, name: "Подставка для кофе", category: "accessories", price: 990, image: "https://cdn.100sp.ru/pictures/861959707", isFavorite: false, inCart: 0 },
            { id: 24, name: "Чехол на козырек", category: "accessories", price: 590, image: "https://img.joomcdn.net/84957c0e92e771017269b94df13fa8ece79857bd_original.jpeg", isFavorite: false, inCart: 0 },
            { id: 25, name: "Коврик под ноги водителя", category: "accessories", price: 1190, image: "https://avatars.mds.yandex.net/i?id=529af6e9c6c9fab84153ca6b8c8ef454_l-5232915-images-thumbs&n=13", isFavorite: false, inCart: 0 },
            { id: 26, name: "Сумка для документов авто", category: "accessories", price: 1590, image: "https://avatars.mds.yandex.net/get-mpic/3699263/img_id8336584929275521965.jpeg/orig", isFavorite: false, inCart: 0 },
            { id: 27, name: "Органайзер в бардачок", category: "accessories", price: 890, image: "https://i.pinimg.com/736x/61/e2/cd/61e2cd0d61151ce6f389dc95e6b81ac2.jpg", isFavorite: false, inCart: 0 },
            { id: 28, name: "Чехол на ручник", category: "accessories", price: 590, image: "https://cdn.100sp.ru/pictures/1109431166", isFavorite: false, inCart: 0 },
            { id: 29, name: "Подголовник массажный", category: "accessories", price: 2390, image: "https://avatars.mds.yandex.net/get-mpic/14816102/2a00000199338b55406e69a40e0a80d1f130/orig", isFavorite: false, inCart: 0 },
            { id: 30, name: "Сетка-ограничитель", category: "accessories", price: 1790, image: "https://universalmotors.ru/accessory/luggage/luggage-net-starks-net-pink/1042170392019-sx1920x1080i617495.jpg", isFavorite: false, inCart: 0 },
            { id: 31, name: "Держатель для планшета", category: "accessories", price: 1390, image: "https://img.joomcdn.net/852d46808a8e23acaa6fcf2bbb055077449d091a_original.jpeg", isFavorite: false, inCart: 0 },
            { id: 32, name: "Органайзер на сиденья", category: "accessories", price: 1290, image: "https://cdn1.ozone.ru/s3/multimedia-1-0/6907550400.jpg", isFavorite: false, inCart: 0 },
            { id: 33, name: "Коврик для собаки в авто", category: "accessories", price: 1990, image: "https://static.insales-cdn.com/images/products/1/7343/266345647/0a13a59a859d923a4cbad4345aeff315.jpg", isFavorite: false, inCart: 0 },
            { id: 34, name: "Чехол на ремень со стразами", category: "accessories", price: 990, image: "https://img.joomcdn.net/8d062ff2686177979181dabefc9009e5aa05c6fc_original.jpeg", isFavorite: false, inCart: 0 },
            { id: 35, name: "Подставка для телефона", category: "accessories", price: 2190, image: "https://cdn1.ozone.ru/s3/multimedia-1-z/7465914755.jpg", isFavorite: false, inCart: 0 },
            
            // Категория 2: Уход за авто (35 товаров)
            { id: 36, name: "Шампунь для авто розовый", category: "care", price: 890, image: "https://avatars.mds.yandex.net/i?id=2a0000019b68059114329915bfe483693c5a-16612502-yarec&n=13", isFavorite: false, inCart: 0 },
            { id: 37, name: "Воск для блеска кузова", category: "care", price: 1290, image: "https://images.petrosoff.ru/images/3-1000-shop-20250620/37209.jpg?time=1750408487", isFavorite: false, inCart: 0 },
            { id: 38, name: "Салфетки для ухода", category: "care", price: 590, image: "https://ir.ozone.ru/multimedia/c1000/1015984365.jpg", isFavorite: false, inCart: 0 },
            { id: 39, name: "Очиститель стекол", category: "care", price: 690, image: "https://cdn.vseinstrumenti.ru/images/goods/oborudovanie-dlya-avtoservisa-i-garazha/avtohimiya/1732321/2400x1600/62209416.jpg", isFavorite: false, inCart: 0 },
            { id: 40, name: "Полироль для пластика", category: "care", price: 790, image: "https://basket-17.wbbasket.ru/vol2807/part280724/280724854/images/big/1.webp", isFavorite: false, inCart: 0 },
            { id: 41, name: "Щетка для мойки авто", category: "care", price: 990, image: "https://ir.ozone.ru/s3/multimedia-w/6451472252.jpg", isFavorite: false, inCart: 0 },
            { id: 42, name: "Спрей для шин", category: "care", price: 890, image: "https://sc03.alicdn.com/kf/H8f15927a99c24d8f8b11ccf4aff9f6bf2.png", isFavorite: false, inCart: 0 },
            { id: 43, name: "Очиститель для кожи салона", category: "care", price: 1190, image: "https://basket-22.wbbasket.ru/vol3813/part381379/381379810/images/big/1.webp", isFavorite: false, inCart: 0 },
            { id: 44, name: "Набор для ухода за авто", category: "care", price: 3490, image: "https://cdn1.ozone.ru/multimedia/1036979597.jpg", isFavorite: false, inCart: 0 },
            { id: 45, name: "Очиститель для колес", category: "care", price: 990, image: "https://ir.ozone.ru/s3/multimedia-v/6243564079.jpg", isFavorite: false, inCart: 0 },
            { id: 46, name: "Воск для фар", category: "care", price: 790, image: "https://cdn.star-tex.ru/unsafe/fit-in/804x1004/filters:upscale():fill(fff)/https://star-tex.ru/media/items/simaland/3250484__1.webp", isFavorite: false, inCart: 0 },
            { id: 47, name: "Средство для стекол", category: "care", price: 690, image: "https://basket-19.wbbasket.ru/vol3187/part318742/318742794/images/big/1.webp", isFavorite: false, inCart: 0 },
            { id: 48, name: "Полироль для металла", category: "care", price: 1190, image: "https://image.made-in-china.com/2f0j00LbhePvzFAVqH/F397-Flamingo-Anti-Corrosion-Wax-Emulsion-Coating-Polyethylene-Protective-Wax-Polymer-Coating-Polymeric-Coating-Wax.webp", isFavorite: false, inCart: 0 },
            { id: 49, name: "Щетка для чистки салона", category: "care", price: 590, image: "https://cdn1.ozone.ru/s3/multimedia-e/c600/6174524378.jpg", isFavorite: false, inCart: 0 },
            { id: 50, name: "Кондиционер для кожи", category: "care", price: 1390, image: "https://basket-22.wbbasket.ru/vol3813/part381379/381379810/images/big/1.webp", isFavorite: false, inCart: 0 },
            { id: 51, name: "Набор салфеток микрофибра", category: "care", price: 890, image: "https://cdn1.ozone.ru/s3/multimedia-1-0/7224855732.jpg", isFavorite: false, inCart: 0 },
            { id: 52, name: "Очиститель для сидений", category: "care", price: 990, image: "https://cdn.vseinstrumenti.ru/images/goods/oborudovanie-dlya-avtoservisa-i-garazha/avtohimiya/1188778/2400x1600/207572600.jpg", isFavorite: false, inCart: 0 },
            { id: 53, name: "Спрей для удаления царапин", category: "care", price: 1490, image: "https://img-edg.joomcdn.net/1e12f5c8211cde62823b99f72911e8f0aa3c1041_original.jpeg", isFavorite: false, inCart: 0 },
            { id: 54, name: "Воск для деталей", category: "care", price: 1190, image: "https://ir.ozone.ru/s3/multimedia-f/6672339231.jpg", isFavorite: false, inCart: 0 },
            { id: 55, name: "Набор для химчистки салона", category: "care", price: 2390, image: "https://avatars.mds.yandex.net/get-mpic/12523877/2a00000194034af484811bb77aea60dae022/orig", isFavorite: false, inCart: 0 },
            { id: 56, name: "Очиститель кондиционера", category: "care", price: 1290, image: "https://avatars.mds.yandex.net/get-mpic/5287649/2a0000019385dabef3693b6ddbba722bf619/orig", isFavorite: false, inCart: 0 },
            { id: 57, name: "Полироль для резины", category: "care", price: 890, image: "https://basket-34.wbbasket.ru/vol7143/part714385/714385654/images/big/1.webp", isFavorite: false, inCart: 0 },
            { id: 58, name: "Средство антистатик", category: "care", price: 790, image: "https://ir.ozone.ru/s3/multimedia-1-p/c1000/7413444997.jpg", isFavorite: false, inCart: 0 },
            { id: 59, name: "Щетка для колесных дисков", category: "care", price: 690, image: "https://cdn1.ozone.ru/s3/multimedia-c/6276489912.jpg", isFavorite: false, inCart: 0 },
            { id: 60, name: "Концентрат для мойки авто", category: "care", price: 1590, image: "https://avatars.mds.yandex.net/get-mpic/12626365/2a0000018e739b848000888defe98db570b4/orig", isFavorite: false, inCart: 0 },
            { id: 61, name: "Губка для нанесения воска", category: "care", price: 390, image: "https://cdn1.ozone.ru/multimedia/1015225837.jpg", isFavorite: false, inCart: 0 },
            { id: 62, name: "Спрей для защиты от дождя", category: "care", price: 990, image: "https://avatars.mds.yandex.net/get-mpic/17397089/2a0000019aa64f07ad6f9ecb9f0be9c85f33/orig", isFavorite: false, inCart: 0 },
            { id: 63, name: "Набор для полировки кузова", category: "care", price: 2890, image: "https://avatars.mds.yandex.net/get-mpic/11470463/2a0000019a00f732a99dd6d5cd7fa3aa0a86/orig", isFavorite: false, inCart: 0 },
            { id: 64, name: "Очиститель для трубы", category: "care", price: 1190, image: "https://avatars.mds.yandex.net/i?id=54540ae21ced4598ea972893f0c4270c_l-5042086-images-thumbs&n=13", isFavorite: false, inCart: 0 },
            { id: 65, name: "Салфетки для стекол", category: "care", price: 590, image: "https://avatars.mds.yandex.net/get-marketpic/202381/pica03360be71a6f1968ff58f4319514f5e/orig", isFavorite: false, inCart: 0 },
            { id: 66, name: "Кондиционер для пластика", category: "care", price: 890, image: "https://damcdn.samokat.ru/dam-storage-ext-env-prod/2025/09/0e6baade-cebd-4037-8d2a-18da63001392", isFavorite: false, inCart: 0 },
            { id: 67, name: "Спрей от скрипов", category: "care", price: 790, image: "https://main-cdn.sbermegamarket.ru/big2/hlr-system/336/259/147/102/019/24/600004872123b0.jpeg", isFavorite: false, inCart: 0 },
            { id: 68, name: "Щетка для радиатора", category: "care", price: 590, image: "https://3259404.ru/upload/iblock/2b2/2b2d18264f48f2f4160ef6878d73cf64.png", isFavorite: false, inCart: 0 },
            { id: 69, name: "Набор для чистки кожи", category: "care", price: 1890, image: "https://avatars.mds.yandex.net/get-mpic/15303770/2a00000198079728508927918e9068a43f4d/orig", isFavorite: false, inCart: 0 },
            { id: 70, name: "Очиститель для замков", category: "care", price: 690, image: "https://ir.ozone.ru/s3/multimedia-y/6092171014.jpg", isFavorite: false, inCart: 0 },
            
            // Категория 3: Безопасность и комфорт (30 товаров)
            { id: 71, name: "Видеорегистратор", category: "safety", price: 4590, image: "https://avatars.mds.yandex.net/get-mpic/15588396/2a0000019852bf68da71d88fd72434031df0/orig", isFavorite: false, inCart: 0 },
            { id: 72, name: "GPS-навигатор", category: "safety", price: 5890, image: "https://img.mvideo.ru/Pdb/11006665b.jpg", isFavorite: false, inCart: 0 },
            { id: 73, name: "Компрессор для шин", category: "safety", price: 2490, image: "https://avatars.mds.yandex.net/get-mpic/5219133/img_id1327078332808420346.jpeg/orig", isFavorite: false, inCart: 0 },
            { id: 74, name: "Огнетушитель", category: "safety", price: 1290, image: "https://cdn1.ozone.ru/s3/multimedia-b/6381762443.jpg", isFavorite: false, inCart: 0 },
            { id: 75, name: "Знак аварийной остановки", category: "safety", price: 890, image: "https://ir.ozone.ru/s3/multimedia-7/6396991519.jpg", isFavorite: false, inCart: 0 },
            { id: 76, name: "Аптечка автомобильная", category: "safety", price: 1590, image: "https://cdn.vseinstrumenti.ru/images/goods/oborudovanie-dlya-avtoservisa-i-garazha/avtoaksessuary/19604550/1000x1000/199279674.jpg", isFavorite: false, inCart: 0 },
            { id: 77, name: "Аккумуляторная батарея", category: "safety", price: 5890, image: "https://cdn1.ozone.ru/s3/multimedia-i/6016100190.jpg", isFavorite: false, inCart: 0 },
            { id: 78, name: "Автомобильный холодильник", category: "safety", price: 6890, image: "https://avatars.mds.yandex.net/get-mpic/12222123/2a000001905830526713e2d746a40331ee8c/orig", isFavorite: false, inCart: 0 },
            { id: 79, name: "Портативный обогреватель", category: "safety", price: 2390, image: "https://cdn1.ozone.ru/s3/multimedia-l/6710582685.jpg", isFavorite: false, inCart: 0 },
            { id: 80, name: "Автономный отопитель", category: "safety", price: 7890, image: "https://ulan-ude.autoventuri.ru/upload/iblock/59f/s0zauk4jqdh9eiv9n4u3srf9obajv2vv.jpeg", isFavorite: false, inCart: 0 },
            { id: 81, name: "Зарядка для телефона", category: "safety", price: 990, image: "https://cdn.vseinstrumenti.ru/images/goods/oborudovanie-dlya-avtoservisa-i-garazha/avtoaksessuary/1646239/1000x1000/52961666.jpg", isFavorite: false, inCart: 0 },
            { id: 82, name: "Камера заднего вида", category: "safety", price: 3890, image: "https://img.joomcdn.net/b8f77147e96150535d1ba7d2bc46b8fe2fe9f25a_original.jpeg", isFavorite: false, inCart: 0 },
            { id: 83, name: "Система контроля давления", category: "safety", price: 4890, image: "https://avatars.mds.yandex.net/get-mpic/16866742/k_plus_glI5SZlrxXcipvzqsYRO/orig", isFavorite: false, inCart: 0 },
            { id: 84, name: "Парктроник с дисплеем", category: "safety", price: 3490, image: "https://cdn1.ozone.ru/s3/multimedia-r/6100693575.jpg", isFavorite: false, inCart: 0 },
            { id: 85, name: "Автомобильный пылесос", category: "safety", price: 1890, image: "https://ir.ozone.ru/s3/multimedia-d/6715429177.jpg", isFavorite: false, inCart: 0 },
            { id: 86, name: "Инвертор 12V/220V", category: "safety", price: 3290, image: "https://avatars.mds.yandex.net/get-mpic/16418886/2a000001968a4aeae6d6b77a137a49d629e5/orig", isFavorite: false, inCart: 0 },
            { id: 87, name: "Пусковое устройство для авто", category: "safety", price: 4590, image: "https://avatars.mds.yandex.net/get-mpic/16277195/2a000001990f8d90fbf03904d2939de62baa/orig", isFavorite: false, inCart: 0 },
            { id: 88, name: "Антирадар", category: "safety", price: 5890, image: "https://tolyatti.express-shina.ru/images/model/Antiradar/Stinger/S500_ST/S500_ST.jpg", isFavorite: false, inCart: 0 },
            { id: 89, name: "Сигнализация с автозапуском", category: "safety", price: 7890, image: "https://static.baza.farpost.ru/v/1630014576910_bulletin", isFavorite: false, inCart: 0 },
            { id: 90, name: "Иммобилайзер", category: "safety", price: 3890, image: "https://avatars.mds.yandex.net/get-mpic/13714821/2a0000019676b6f375b2ce06ee6198c11dab/orig", isFavorite: false, inCart: 0 },
            { id: 91, name: "Блокировка руля", category: "safety", price: 2490, image: "https://basket-05.wbbasket.ru/vol965/part96567/96567313/images/big/1.webp", isFavorite: false, inCart: 0 },
            { id: 92, name: "Противоугонная система", category: "safety", price: 6890, image: "https://img.joomcdn.net/2f2933b8099877d4479f7eb0f2b976d4cdab6951_original.jpeg", isFavorite: false, inCart: 0 },
            { id: 93, name: "Датчик удара", category: "safety", price: 1890, image: "https://shop-sovenok.ru/upload/iblock/49c/0ful4zo8sld4eimxi5m2y3c4wv7wr1o3.jpg", isFavorite: false, inCart: 0 },
            { id: 94, name: "GPS-трекер", category: "safety", price: 3290, image: "https://avatars.mds.yandex.net/get-mpic/11631775/2a00000193b8ecf2126b894ac17f757bf8a5/orig", isFavorite: false, inCart: 0 },
            { id: 95, name: "Солнечная батарея для авто", category: "safety", price: 4590, image: "https://avatars.mds.yandex.net/i?id=2a0000019b71f4fd462ea0eca95c965595f3-16131609-yarec&n=13", isFavorite: false, inCart: 0 },
            { id: 96, name: "Автомобильный вентилятор", category: "safety", price: 1290, image: "https://cdn.100sp.ru/pictures/120621245", isFavorite: false, inCart: 0 },
            { id: 97, name: "Увлажнитель воздуха в авто", category: "safety", price: 1890, image: "https://cdn.100sp.ru/pictures/628204884", isFavorite: false, inCart: 0 },
            { id: 98, name: "Ионизатор воздуха", category: "safety", price: 2390, image: "https://ir.ozone.ru/s3/multimedia-5/c1000/6303998873.jpg", isFavorite: false, inCart: 0 },
            { id: 99, name: "Очиститель воздуха", category: "safety", price: 2890, image: "https://avatars.mds.yandex.net/get-mpic/12363834/2a00000197b0bc42e66aa2d8c0f99f13d6ad/orig", isFavorite: false, inCart: 0 },
            { id: 100, name: "Подогреватель сиденья", category: "safety", price: 3490, image: "https://cdn1.ozone.ru/s3/multimedia-l/6766606857.jpg", isFavorite: false, inCart: 0 },
            { id: 101, name: "Массажер для спины в авто", category: "safety", price: 2890, image: "https://avatars.mds.yandex.net/get-mpic/1726038/img_id504280284349278637.jpeg/orig", isFavorite: false, inCart: 0 },
            { id: 102, name: "Подстаканник с подогревом", category: "safety", price: 1890, image: "https://ir.ozone.ru/multimedia/1026347858.jpg", isFavorite: false, inCart: 0 },
            { id: 103, name: "Холодильник для напитков", category: "safety", price: 2390, image: "https://avatars.mds.yandex.net/i?id=2a0000019b6aad6ec021980da442686dc48d-18301347-yarec&n=13", isFavorite: false, inCart: 0 },
            { id: 104, name: "Грелка для рук", category: "safety", price: 990, image: "https://img.joomcdn.net/22447694ba3b0cad9beebd663c967e692ab44e97_original.jpeg", isFavorite: false, inCart: 0 },
            { id: 105, name: "Охладитель для напитков", category: "safety", price: 1590, image: "https://ir.ozone.ru/s3/multimedia-1/6014865913.jpg", isFavorite: false, inCart: 0 }
        ];

        // Категории товаров
        const categories = [
            { id: "all", name: "Все товары" },
            { id: "accessories", name: "Автоаксессуары" },
            { id: "care", name: "Уход за авто" },
            { id: "safety", name: "Безопасность и комфорт" }
        ];

        // Данные приложения
        let currentPage = "home";
        let currentCategory = "all";
        let cart = JSON.parse(localStorage.getItem('motoria-cart')) || [];
        let favorites = JSON.parse(localStorage.getItem('motoria-favorites')) || [];
        let orders = JSON.parse(localStorage.getItem('motoria-orders')) || [];
        let checkoutStep = 1; // 1 - просмотр корзины, 2 - заполнение данных, 3 - подтверждение
        let checkoutData = {}; // Для сохранения данных из формы оформления заказа
        
        // Пагинация и поиск
        let currentPageNumber = 1;
        const itemsPerPage = 12; // Товаров на странице
        let searchQuery = ""; // Текущий поисковый запрос

        // Инициализация приложения
        document.addEventListener('DOMContentLoaded', function() {
            initApp();
        });

        function initApp() {
            // Обновляем счетчики корзины и избранного
            updateCartCount();
            updateFavoritesCount();
            
            // Отображаем главную страницу
            showPage('home');
            
            // Инициализируем сайдбар с категориями
            initSidebar();
            
            // Назначаем обработчики событий
            setupEventListeners();
        }

        function initSidebar() {
            const categoriesList = document.getElementById('categories-list');
            categoriesList.innerHTML = '';
            
            categories.forEach(category => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = '#';
                a.textContent = category.name;
                a.dataset.category = category.id;
                a.classList.add('category-link');
                
                if (category.id === 'all') {
                    a.classList.add('active');
                }
                
                a.addEventListener('click', function(e) {
                    e.preventDefault();
                    document.querySelectorAll('.category-link').forEach(link => {
                        link.classList.remove('active');
                    });
                    this.classList.add('active');
                    currentCategory = category.id;
                    currentPageNumber = 1; // Сбрасываем на первую страницу при смене категории
                    searchQuery = ""; // Сбрасываем поисковый запрос
                    showPage('catalog');
                });
                
                li.appendChild(a);
                categoriesList.appendChild(li);
            });
        }

        function setupEventListeners() {
            // Навигация
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const page = this.dataset.page;
                    showPage(page);
                    
                    // Закрываем мобильное меню, если оно открыто
                    document.getElementById('mobile-nav').classList.remove('active');
                });
            });
            
            // Смайлик админки
            document.getElementById('admin-link').addEventListener('click', function(e) {
                e.preventDefault();
                const page = this.dataset.page;
                showPage(page);
                document.getElementById('mobile-nav').classList.remove('active');
            });
            
            // Бургер-меню
            document.getElementById('burger-menu').addEventListener('click', function() {
                document.getElementById('mobile-nav').classList.add('active');
            });
            
            // Закрытие мобильного меню
            document.getElementById('close-menu').addEventListener('click', function() {
                document.getElementById('mobile-nav').classList.remove('active');
            });
            
            // Ссылки на корзину и избранное в шапке
            document.getElementById('cart-link').addEventListener('click', function(e) {
                e.preventDefault();
                showPage('cart');
            });
            
            document.getElementById('favorites-link').addEventListener('click', function(e) {
                e.preventDefault();
                showPage('favorites');
            });
        }

        function showPage(page) {
            currentPage = page;
            // Сбрасываем шаг оформления заказа только при переходе с других страниц
            if (page !== 'cart') {
                checkoutStep = 1;
                checkoutData = {}; // Очищаем данные оформления заказа
            }
            
            const content = document.getElementById('content');
            
            // Обновляем активную ссылку в навигации
            document.querySelectorAll('.nav-link').forEach(link => {
                if (link.dataset.page === page) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
            
            // Отображаем соответствующую страницу
            switch(page) {
                case 'home':
                    content.innerHTML = getHomePage();
                    renderPopularProducts();
                    break;
                case 'catalog':
                    content.innerHTML = getCatalogPage();
                    renderProducts();
                    break;
                case 'about':
                    content.innerHTML = getAboutPage();
                    break;
                case 'contacts':
                    content.innerHTML = getContactsPage();
                    setupContactForm();
                    break;
                case 'delivery':
                    content.innerHTML = getDeliveryPage();
                    break;
                case 'cart':
                    content.innerHTML = getCartPage();
                    renderCart();
                    break;
                case 'favorites':
                    content.innerHTML = getFavoritesPage();
                    renderFavorites();
                    break;
                case 'admin':
                    content.innerHTML = getAdminPage();
                    setupAdminPanel();
                    break;
            }
        }

        function getHomePage() {
            return `
                <div class="hero">
                    <h1>Motoria - Masterpiece Of Taste On Road Innovations Aesthetics</h1>
                    <p>Преобразите свой автомобиль с нашими эксклюзивными аксессуарами в розовых тонах. Качество, комфорт и эстетика в каждой детали.</p>
                    <button class="btn" id="go-to-catalog">Перейти в каталог</button>
                </div>
                
                <h2 class="section-title">Почему выбирают нас</h2>
                
                <div class="features">
                    <div class="feature">
                        <i class="fas fa-star"></i>
                        <h3>Высокое качество</h3>
                        <p>Все товары проходят строгий контроль качества перед отправкой.</p>
                    </div>
                    <div class="feature">
                        <i class="fas fa-truck"></i>
                        <h3>Быстрая доставка</h3>
                        <p>Доставляем заказы по всей России в кратчайшие сроки.</p>
                    </div>
                    <div class="feature">
                        <i class="fas fa-shield-alt"></i>
                        <h3>Гарантия возврата</h3>
                        <p>Возврат товара в течение 14 дней без объяснения причин.</p>
                    </div>
                </div>
                
                <h2 class="section-title">Популярные товары</h2>
                
                <div class="products-grid" id="popular-products">
                    <!-- 6 популярных товаров будут загружены здесь -->
                </div>
            `;
        }

        function renderPopularProducts() {
            const container = document.getElementById('popular-products');
            if (!container) return;
            
            // Выбираем 6 случайных товаров как "популярные"
            const popularProducts = [...products]
                .sort(() => Math.random() - 0.5)
                .slice(0, 6);
            
            container.innerHTML = popularProducts.map(product => `
                <div class="product-card" data-id="${product.id}">
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/300x200/FFC0CB/333333?text=${encodeURIComponent(product.name)}'">
                    </div>
                    <div class="product-info">
                        <div class="product-title">${product.name}</div>
                        <div class="product-price">${product.price.toLocaleString()} руб.</div>
                        <div class="product-actions">
                            <button class="btn add-to-cart-btn" data-id="${product.id}">В корзину</button>
                            <button class="favorite-btn ${product.isFavorite ? 'active' : ''}" data-id="${product.id}">
                                <i class="${product.isFavorite ? 'fas' : 'far'} fa-heart"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');
            
            // Назначаем обработчики для кнопок
            document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const productId = parseInt(this.dataset.id);
                    addToCart(productId);
                });
            });
            
            document.querySelectorAll('.favorite-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const productId = parseInt(this.dataset.id);
                    toggleFavorite(productId);
                });
            });
            
            // Исправленная кнопка "Перейти в каталог"
            const goToCatalogBtn = document.getElementById('go-to-catalog');
            if (goToCatalogBtn) {
                goToCatalogBtn.addEventListener('click', function() {
                    showPage('catalog');
                });
            }
        }

        function getCatalogPage() {
            return `
                <h1 class="section-title">Каталог товаров</h1>
                
                <div class="catalog-header">
                    <div class="search-container">
                        <i class="fas fa-search search-icon"></i>
                        <input type="text" class="search-input" id="search-input" placeholder="Поиск товаров..." value="${searchQuery}">
                    </div>
                    
                    <div class="category-filter">
                        ${categories.map(category => `
                            <div class="category-btn ${category.id === currentCategory ? 'active' : ''}" data-category="${category.id}">
                                ${category.name}
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div id="search-results-info" class="search-results">
                    <!-- Информация о результатах поиска будет здесь -->
                </div>
                
                <div class="products-grid" id="products-container">
                    <!-- Товары будут загружены здесь -->
                </div>
                
                <div class="pagination" id="pagination">
                    <!-- Пагинация будет загружена здесь -->
                </div>
            `;
        }

        function getAboutPage() {
            return `
                <h1 class="section-title">О нас</h1>
                
                <div class="page-content">
                    <h3>Добро пожаловать в Motoria!</h3>
                    <p>Мы - первый в России магазин автотоваров, созданный специально для женщин. Наша миссия - сделать вождение комфортным, безопасным и стильным.</p>
                    
                    <h3>Наша история</h3>
                    <p>Motoria - это современный бренд автотоваров, созданный специально для стильных женщин. С 2026 года мы успешно объединяем функциональность, безопасность и эстетику в каждой детали, предлагая уникальные решения для комфортного и красивого вождения.</p>
                    
                    <h3>Наши ценности</h3>
                    <p><strong>Качество:</strong> Мы тщательно отбираем каждого поставщика и тестируем все товары перед тем, как предложить их вам.</p>
                    <p><strong>Безопасность:</strong> Все наши товары соответствуют стандартам безопасности и не мешают управлению автомобилем.</p>
                    <p><strong>Стиль:</strong> Мы создаем товары, которые радуют глаз и поднимают настроение каждый день.</p>
                    <p><strong>Забота о клиентах:</strong> Наша команда всегда готова помочь с выбором и ответить на все вопросы.</p>
                    
                    <h3>Наша команда</h3>
                    <p>В Motoria работают энтузиасты своего дела: дизайнеры, инженеры и эксперты по автотоварам. Мы постоянно изучаем новые тенденции и разрабатываем уникальные продукты для наших клиенток.</p>
                </div>
            `;
        }

        function getContactsPage() {
            return `
                <h1 class="section-title">Контакты</h1>
                
                <div class="page-content">
                    <p>Мы всегда рады помочь вам с выбором товаров и ответить на все вопросы. Свяжитесь с нами любым удобным способом!</p>
                    
                    <div class="contact-info">
                        <div class="contact-item">
                            <i class="fas fa-phone"></i>
                            <h3>Телефон</h3>
                            <p>+7 (999) 123-45-67</p>
                            <p>Ежедневно с 9:00 до 21:00</p>
                        </div>
                        
                        <div class="contact-item">
                            <i class="fas fa-envelope"></i>
                            <h3>Email</h3>
                            <p>info@motoria.ru</p>
                            <p>Отвечаем в течение 24 часов</p>
                        </div>
                        
                        <div class="contact-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <h3>Адрес</h3>
                            <p>Москва, ул. Автолюбителей, 15</p>
                            <p>Пн-Пт с 10:00 до 19:00</p>
                        </div>
                    </div>
                    
                    <h3>Форма обратной связи</h3>
                    <form id="contact-form">
                        <div class="form-group">
                            <label for="contact-name">Ваше имя</label>
                            <input type="text" id="contact-name" required>
                        </div>
                        <div class="form-group">
                            <label for="contact-email">Ваш email</label>
                            <input type="email" id="contact-email" required>
                        </div>
                        <div class="form-group">
                            <label for="contact-message">Ваше сообщение</label>
                            <textarea id="contact-message" rows="5" required></textarea>
                        </div>
                        <button type="submit" class="btn">Отправить сообщение</button>
                    </form>
                </div>
            `;
        }

        function setupContactForm() {
            const form = document.getElementById('contact-form');
            if (form) {
                form.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    const name = document.getElementById('contact-name').value;
                    const email = document.getElementById('contact-email').value;
                    const message = document.getElementById('contact-message').value;
                    
                    // В реальном приложении здесь была бы отправка данных на сервер
                    alert(`Спасибо, ${name}! Ваше сообщение отправлено. Мы ответим на ${email} в ближайшее время.`);
                    
                    // Очищаем форму
                    form.reset();
                });
            }
        }

        function getDeliveryPage() {
            return `
                <h1 class="section-title">Доставка и оплата</h1>
                
                <div class="page-content">
                    <h3>Способы доставки</h3>
                    <p><strong>Курьерская доставка по Москве:</strong> Доставка в течение 1-2 рабочих дней. Стоимость: 300 руб. При заказе от 3000 руб. - бесплатно.</p>
                    <p><strong>Самовывоз из пункта выдачи:</strong> Более 100 пунктов выдачи по Москве. Срок готовности заказа: 1-3 дня.</p>
                    <p><strong>Доставка по России:</strong> Отправляем заказы транспортными компаниями (СДЭК, Boxberry). Срок доставки: 3-10 дней в зависимости от региона.</p>
                    
                    <h3>Способы оплаты</h3>
                    <p><strong>Онлайн-оплата:</strong> Банковской картой (Visa, MasterCard, Мир) или через Apple Pay/Google Pay.</p>
                    <p><strong>Наличными курьеру:</strong> Оплата при получении заказа (только для Москвы).</p>
                    <p><strong>Банковский перевод:</strong> Для юридических лиц.</p>
                    
                    <h3>Возврат товара</h3>
                    <p>Вы можете вернуть товар в течение 14 дней с момента получения. Товар должен быть в оригинальной упаковке без следов использования.</p>
                    <p>Для оформления возврата свяжитесь с нами по телефону или email, и мы расскажем о дальнейших действиях.</p>
                    
                    <h3>Гарантия</h3>
                    <p>На все товары предоставляется гарантия от 6 месяцев до 2 лет в зависимости от категории товара.</p>
                </div>
            `;
        }

        function getCartPage() {
            if (cart.length === 0) {
                return `
                    <h1 class="section-title">Корзина</h1>
                    <div class="empty-message">Ваша корзина пуста</div>
                `;
            }
            
            if (checkoutStep === 1) {
                return `
                    <h1 class="section-title">Корзина</h1>
                    
                    <div class="cart-items" id="cart-items">
                        <!-- Товары в корзине будут загружены здесь -->
                    </div>
                    
                    <div class="cart-total" id="cart-total">
                        <!-- Итоговая сумма будет загружена здесь -->
                    </div>
                    
                    <div style="text-align: center; margin-top: 30px;">
                        <button class="btn" id="start-checkout">Перейти к оформлению заказа</button>
                    </div>
                `;
            } else if (checkoutStep === 2) {
                return `
                    <h1 class="section-title">Оформление заказа</h1>
                    
                    <div class="checkout-form" id="checkout-form">
                        <div class="form-group">
                            <label for="full-name">ФИО *</label>
                            <input type="text" id="full-name" value="${checkoutData.fullName || ''}" required>
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label for="phone">Телефон *</label>
                                <input type="tel" id="phone" placeholder="+7 (999) 123-45-67" value="${checkoutData.phone || ''}" required>
                            </div>
                            <div class="form-group">
                                <label for="email">Email *</label>
                                <input type="email" id="email" value="${checkoutData.email || ''}" required>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="address">Адрес доставки *</label>
                            <textarea id="address" rows="3" required>${checkoutData.address || ''}</textarea>
                        </div>
                        <div class="form-group">
                            <label for="delivery-method">Способ доставки</label>
                            <select id="delivery-method">
                                <option value="courier" ${checkoutData.deliveryMethod === 'courier' ? 'selected' : ''}>Курьерская доставка (300 руб.)</option>
                                <option value="pickup" ${checkoutData.deliveryMethod === 'pickup' ? 'selected' : ''}>Самовывоз (бесплатно)</option>
                                <option value="post" ${checkoutData.deliveryMethod === 'post' ? 'selected' : ''}>Почта России (от 500 руб.)</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="payment-method">Способ оплаты</label>
                            <select id="payment-method">
                                <option value="card" ${checkoutData.paymentMethod === 'card' ? 'selected' : ''}>Банковская карта онлайн</option>
                                <option value="cash" ${checkoutData.paymentMethod === 'cash' ? 'selected' : ''}>Наличными при получении</option>
                                <option value="transfer" ${checkoutData.paymentMethod === 'transfer' ? 'selected' : ''}>Банковский перевод</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="comment">Комментарий к заказу</label>
                            <textarea id="comment" rows="3">${checkoutData.comment || ''}</textarea>
                        </div>
                        <div style="display: flex; gap: 15px; margin-top: 20px;">
                            <button type="button" class="btn" id="continue-checkout">Продолжить</button>
                            <button type="button" class="btn btn-secondary" id="back-to-cart">Вернуться в корзину</button>
                        </div>
                    </div>
                `;
            } else if (checkoutStep === 3) {
                return `
                    <h1 class="section-title">Подтверждение заказа</h1>
                    
                    <div class="checkout-form" id="checkout-confirmation">
                        <!-- Информация о заказе будет загружена здесь -->
                    </div>
                `;
            }
        }

        function renderCart() {
            const container = document.getElementById('cart-items');
            const totalContainer = document.getElementById('cart-total');
            
            if (cart.length === 0) {
                if (container) container.innerHTML = '<div class="empty-message">Ваша корзина пуста</div>';
                if (totalContainer) totalContainer.innerHTML = '';
                return;
            }
            
            // Рендерим товары в корзине
            if (container) {
                container.innerHTML = cart.map(item => `
                    <div class="cart-item" data-id="${item.id}">
                        <div class="cart-item-image">
                            <img src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/150x150/FFC0CB/333333?text=${encodeURIComponent(item.name)}'">
                        </div>
                        <div class="cart-item-details">
                            <div class="cart-item-title">${item.name}</div>
                            <div class="cart-item-price">${item.price.toLocaleString()} руб. × ${item.quantity} шт.</div>
                        </div>
                        <div class="cart-item-actions">
                            <div class="quantity-control">
                                <button class="quantity-btn decrease-quantity" data-id="${item.id}">-</button>
                                <span>${item.quantity}</span>
                                <button class="quantity-btn increase-quantity" data-id="${item.id}">+</button>
                            </div>
                            <button class="btn remove-from-cart-btn" data-id="${item.id}">Удалить</button>
                        </div>
                    </div>
                `).join('');
            }
            
            // Рассчитываем итоговую сумму
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            if (totalContainer) {
                totalContainer.innerHTML = `
                    <h3>Итого: <span>${total.toLocaleString()} руб.</span></h3>
                `;
            }
            
            // Назначаем обработчики для кнопок
            document.querySelectorAll('.decrease-quantity').forEach(btn => {
                btn.addEventListener('click', function() {
                    const productId = parseInt(this.dataset.id);
                    updateCartQuantity(productId, -1);
                });
            });
            
            document.querySelectorAll('.increase-quantity').forEach(btn => {
                btn.addEventListener('click', function() {
                    const productId = parseInt(this.dataset.id);
                    updateCartQuantity(productId, 1);
                });
            });
            
            document.querySelectorAll('.remove-from-cart-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const productId = parseInt(this.dataset.id);
                    removeFromCart(productId);
                });
            });
            
            // Кнопка перехода к оформлению заказа
            const startCheckoutBtn = document.getElementById('start-checkout');
            if (startCheckoutBtn) {
                startCheckoutBtn.addEventListener('click', function() {
                    checkoutStep = 2;
                    showPage('cart');
                });
            }
            
            // Если мы на шаге 2 (заполнение данных), настраиваем форму
            if (checkoutStep === 2) {
                const continueCheckoutBtn = document.getElementById('continue-checkout');
                if (continueCheckoutBtn) {
                    continueCheckoutBtn.addEventListener('click', function() {
                        const fullName = document.getElementById('full-name').value;
                        const phone = document.getElementById('phone').value;
                        const email = document.getElementById('email').value;
                        const address = document.getElementById('address').value;
                        const deliveryMethod = document.getElementById('delivery-method').value;
                        const paymentMethod = document.getElementById('payment-method').value;
                        const comment = document.getElementById('comment').value;
                        
                        // Простая валидация
                        if (!fullName || !phone || !email || !address) {
                            alert('Пожалуйста, заполните все обязательные поля (отмечены *)');
                            return;
                        }
                        
                        // Сохраняем данные из формы
                        checkoutData = {
                            fullName: fullName,
                            phone: phone,
                            email: email,
                            address: address,
                            deliveryMethod: deliveryMethod,
                            paymentMethod: paymentMethod,
                            comment: comment
                        };
                        
                        // Переходим к шагу подтверждения
                        checkoutStep = 3;
                        showPage('cart');
                        renderCheckoutConfirmation();
                    });
                }
                
                const backToCartBtn = document.getElementById('back-to-cart');
                if (backToCartBtn) {
                    backToCartBtn.addEventListener('click', function() {
                        // Сохраняем данные из формы перед возвратом
                        const fullName = document.getElementById('full-name').value;
                        const phone = document.getElementById('phone').value;
                        const email = document.getElementById('email').value;
                        const address = document.getElementById('address').value;
                        const deliveryMethod = document.getElementById('delivery-method').value;
                        const paymentMethod = document.getElementById('payment-method').value;
                        const comment = document.getElementById('comment').value;
                        
                        checkoutData = {
                            fullName: fullName,
                            phone: phone,
                            email: email,
                            address: address,
                            deliveryMethod: deliveryMethod,
                            paymentMethod: paymentMethod,
                            comment: comment
                        };
                        
                        checkoutStep = 1;
                        showPage('cart');
                    });
                }
            }
        }

        function renderCheckoutConfirmation() {
            const container = document.getElementById('checkout-confirmation');
            if (!container) return;
            
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            
            // Получаем данные из сохраненного объекта checkoutData
            const fullName = checkoutData.fullName || 'Не указано';
            const phone = checkoutData.phone || 'Не указано';
            const email = checkoutData.email || 'Не указано';
            const address = checkoutData.address || 'Не указано';
            
            // Определяем текст способа доставки
            let deliveryText = 'Не указано';
            if (checkoutData.deliveryMethod === 'courier') deliveryText = 'Курьерская доставка (300 руб.)';
            if (checkoutData.deliveryMethod === 'pickup') deliveryText = 'Самовывоз (бесплатно)';
            if (checkoutData.deliveryMethod === 'post') deliveryText = 'Почта России (от 500 руб.)';
            
            // Определяем текст способа оплаты
            let paymentText = 'Не указано';
            if (checkoutData.paymentMethod === 'card') paymentText = 'Банковская карта онлайн';
            if (checkoutData.paymentMethod === 'cash') paymentText = 'Наличными при получении';
            if (checkoutData.paymentMethod === 'transfer') paymentText = 'Банковский перевод';
            
            const comment = checkoutData.comment || 'Нет комментария';
            
            container.innerHTML = `
                <div class="form-group">
                    <h4>Детали заказа:</h4>
                    <div style="background-color: var(--light-gray); padding: 15px; border-radius: 5px;">
                        ${cart.map(item => `
                            <div style="margin-bottom: 8px;">${item.name} - ${item.quantity} × ${item.price.toLocaleString()} руб. = ${(item.quantity * item.price).toLocaleString()} руб.</div>
                        `).join('')}
                        <div style="margin-top: 10px; font-weight: bold; font-size: 1.2rem;">
                            Итого: ${total.toLocaleString()} руб.
                        </div>
                    </div>
                </div>
                
                <div class="form-group">
                    <h4>Данные для доставки:</h4>
                    <div style="background-color: var(--light-gray); padding: 15px; border-radius: 5px;">
                        <div style="margin-bottom: 5px;"><strong>ФИО:</strong> ${fullName}</div>
                        <div style="margin-bottom: 5px;"><strong>Телефон:</strong> ${phone}</div>
                        <div style="margin-bottom: 5px;"><strong>Email:</strong> ${email}</div>
                        <div style="margin-bottom: 5px;"><strong>Адрес:</strong> ${address}</div>
                        <div style="margin-bottom: 5px;"><strong>Способ доставки:</strong> ${deliveryText}</div>
                        <div style="margin-bottom: 5px;"><strong>Способ оплаты:</strong> ${paymentText}</div>
                        <div><strong>Комментарий:</strong> ${comment}</div>
                    </div>
                </div>
                
                <div style="display: flex; gap: 15px; margin-top: 30px;">
                    <button type="button" class="btn" id="confirm-order-btn">Подтвердить и оплатить заказ</button>
                    <button type="button" class="btn btn-secondary" id="edit-order-btn">Изменить данные</button>
                </div>
            `;
            
            // Назначаем обработчики для кнопок
            const confirmOrderBtn = document.getElementById('confirm-order-btn');
            if (confirmOrderBtn) {
                confirmOrderBtn.addEventListener('click', function() {
                    confirmOrder();
                });
            }
            
            const editOrderBtn = document.getElementById('edit-order-btn');
            if (editOrderBtn) {
                editOrderBtn.addEventListener('click', function() {
                    checkoutStep = 2;
                    showPage('cart');
                });
            }
        }

        function confirmOrder() {
            // Создаем заказ
            const orderId = Date.now();
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            
            const order = {
                id: orderId,
                date: new Date().toLocaleString(),
                customer: {
                    name: checkoutData.fullName,
                    phone: checkoutData.phone,
                    email: checkoutData.email,
                    address: checkoutData.address
                },
                delivery: checkoutData.deliveryMethod,
                payment: checkoutData.paymentMethod,
                items: [...cart],
                total: total,
                status: 'Новый',
                comment: checkoutData.comment
            };
            
            // Сохраняем заказ
            orders.push(order);
            localStorage.setItem('motoria-orders', JSON.stringify(orders));
            
            // Очищаем корзину
            cart = [];
            localStorage.setItem('motoria-cart', JSON.stringify(cart));
            updateCartCount();
            
            // Сбрасываем шаг оформления заказа и данные
            checkoutStep = 1;
            checkoutData = {};
            
            // Показываем сообщение об успешном оформлении
            alert(`Заказ №${orderId} успешно оформлен! Спасибо за покупку! Мы свяжемся с вами в ближайшее время для подтверждения.`);
            
            // Возвращаемся на страницу корзины
            showPage('cart');
        }

        function getFavoritesPage() {
            return `
                <h1 class="section-title">Избранное</h1>
                
                <div class="favorites-items" id="favorites-items">
                    <!-- Избранные товары будут загружены здесь -->
                </div>
            `;
        }

        function renderFavorites() {
            const container = document.getElementById('favorites-items');
            
            if (!container) return;
            
            if (favorites.length === 0) {
                container.innerHTML = '<div class="empty-message">В избранном пока ничего нет</div>';
                return;
            }
            
            // Рендерим избранные товары
            container.innerHTML = favorites.map(item => `
                <div class="favorite-item" data-id="${item.id}">
                    <div class="favorite-item-image">
                        <img src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/150x150/FFC0CB/333333?text=${encodeURIComponent(item.name)}'">
                    </div>
                    <div class="favorite-item-details">
                        <div class="favorite-item-title">${item.name}</div>
                        <div class="favorite-item-price">${item.price.toLocaleString()} руб.</div>
                    </div>
                    <div class="favorite-item-actions">
                        <button class="btn add-to-cart-from-fav" data-id="${item.id}">В корзину</button>
                        <button class="btn remove-from-favorites-btn" data-id="${item.id}">Удалить</button>
                    </div>
                </div>
            `).join('');
            
            // Назначаем обработчики для кнопок
            document.querySelectorAll('.add-to-cart-from-fav').forEach(btn => {
                btn.addEventListener('click', function() {
                    const productId = parseInt(this.dataset.id);
                    addToCart(productId);
                });
            });
            
            document.querySelectorAll('.remove-from-favorites-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const productId = parseInt(this.dataset.id);
                    toggleFavorite(productId);
                });
            });
        }

        function getAdminPage() {
            return `
                <h1 class="section-title">Админ-панель</h1>
                
                <div class="admin-panel">
                    <div class="admin-nav">
                        <ul>
                            <li><a href="#" class="admin-nav-link active" data-tab="orders">Заказы</a></li>
                            <li><a href="#" class="admin-nav-link" data-tab="products">Товары</a></li>
                            <li><a href="#" class="admin-nav-link" data-tab="statistics">Статистика</a></li>
                            <li><a href="#" class="admin-nav-link" data-tab="settings">Настройки</a></li>
                        </ul>
                    </div>
                    
                    <div class="admin-content">
                        <div id="admin-tab-content">
                            <!-- Содержимое вкладок будет загружено здесь -->
                        </div>
                    </div>
                </div>
            `;
        }

        function setupAdminPanel() {
            const tabContent = document.getElementById('admin-tab-content');
            if (!tabContent) return;
            
            // По умолчанию показываем вкладку "Заказы"
            showAdminTab('orders');
            
            // Назначаем обработчики для вкладок
            document.querySelectorAll('.admin-nav-link').forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    // Убираем активный класс у всех вкладок
                    document.querySelectorAll('.admin-nav-link').forEach(l => l.classList.remove('active'));
                    
                    // Добавляем активный класс текущей вкладке
                    this.classList.add('active');
                    
                    // Показываем выбранную вкладку
                    const tab = this.dataset.tab;
                    showAdminTab(tab);
                });
            });
        }

        function showAdminTab(tab) {
            const tabContent = document.getElementById('admin-tab-content');
            if (!tabContent) return;
            
            switch(tab) {
                case 'orders':
                    tabContent.innerHTML = getOrdersTab();
                    renderOrdersTable();
                    break;
                case 'products':
                    tabContent.innerHTML = getProductsTab();
                    renderProductsTable();
                    break;
                case 'statistics':
                    tabContent.innerHTML = getStatisticsTab();
                    renderStatistics();
                    break;
                case 'settings':
                    tabContent.innerHTML = getSettingsTab();
                    break;
            }
        }

        function getOrdersTab() {
            return `
                <h3>Управление заказами</h3>
                <p>Здесь вы можете просматривать и управлять заказами клиентов.</p>
                
                <table class="admin-table" id="orders-table">
                    <thead>
                        <tr>
                            <th>ID заказа</th>
                            <th>Дата</th>
                            <th>Клиент</th>
                            <th>Сумма</th>
                            <th>Статус</th>
                            <th>Действия</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- Заказы будут загружены здесь -->
                    </tbody>
                </table>
            `;
        }

        function renderOrdersTable() {
            const tableBody = document.querySelector('#orders-table tbody');
            if (!tableBody) return;
            
            if (orders.length === 0) {
                tableBody.innerHTML = `<tr><td colspan="6" style="text-align: center;">Нет заказов</td></tr>`;
                return;
            }
            
            tableBody.innerHTML = orders.map(order => `
                <tr>
                    <td>#${order.id}</td>
                    <td>${order.date}</td>
                    <td>${order.customer.name}<br>${order.customer.phone}</td>
                    <td>${order.total.toLocaleString()} руб.</td>
                    <td><span class="order-status">${order.status}</span></td>
                    <td>
                        <div class="admin-actions">
                            <button class="admin-action-btn status-btn" data-id="${order.id}">Изменить статус</button>
                            <button class="admin-action-btn edit-btn" data-id="${order.id}">Просмотр</button>
                            <button class="admin-action-btn delete-btn" data-id="${order.id}">Удалить</button>
                        </div>
                    </td>
                </tr>
            `).join('');
            
            // Назначаем обработчики для кнопок действий
            document.querySelectorAll('.admin-action-btn.status-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const orderId = parseInt(this.dataset.id);
                    changeOrderStatus(orderId);
                });
            });
            
            document.querySelectorAll('.admin-action-btn.edit-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const orderId = parseInt(this.dataset.id);
                    viewOrderDetails(orderId);
                });
            });
            
            document.querySelectorAll('.admin-action-btn.delete-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const orderId = parseInt(this.dataset.id);
                    if (confirm('Вы уверены, что хотите удалить этот заказ?')) {
                        deleteOrder(orderId);
                    }
                });
            });
        }

        function changeOrderStatus(orderId) {
            const order = orders.find(o => o.id === orderId);
            if (!order) return;
            
            const statuses = ['Новый', 'В обработке', 'Оплачен', 'Отправлен', 'Доставлен', 'Отменен'];
            const newStatus = prompt(`Изменить статус заказа #${orderId}. Текущий статус: ${order.status}. Выберите новый статус:`, statuses.join(', '));
            
            if (newStatus && statuses.includes(newStatus)) {
                order.status = newStatus;
                localStorage.setItem('motoria-orders', JSON.stringify(orders));
                renderOrdersTable();
                showNotification(`Статус заказа #${orderId} изменен на "${newStatus}"`);
            }
        }

        function viewOrderDetails(orderId) {
            const order = orders.find(o => o.id === orderId);
            if (!order) return;
            
            let itemsHtml = '';
            order.items.forEach(item => {
                itemsHtml += `<div>${item.name} - ${item.quantity} × ${item.price.toLocaleString()} руб.</div>`;
            });
            
            alert(`
                Детали заказа #${order.id}
                Дата: ${order.date}
                Статус: ${order.status}
                
                Информация о клиенте:
                ФИО: ${order.customer.name}
                Телефон: ${order.customer.phone}
                Email: ${order.customer.email}
                Адрес: ${order.customer.address}
                
                Товары:
                ${itemsHtml}
                
                Итого: ${order.total.toLocaleString()} руб.
                Способ доставки: ${order.delivery}
                Способ оплаты: ${order.payment}
                Комментарий: ${order.comment || 'нет'}
            `);
        }

        function deleteOrder(orderId) {
            const orderIndex = orders.findIndex(o => o.id === orderId);
            if (orderIndex !== -1) {
                orders.splice(orderIndex, 1);
                localStorage.setItem('motoria-orders', JSON.stringify(orders));
                renderOrdersTable();
                showNotification(`Заказ #${orderId} удален`);
            }
        }

        function getProductsTab() {
            return `
                <h3>Управление товарами</h3>
                <p>Здесь вы можете управлять товарами в каталоге.</p>
                
                <div style="margin-bottom: 20px;">
                    <button class="btn" id="add-product-btn">Добавить товар</button>
                </div>
                
                <table class="admin-table" id="products-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Название</th>
                            <th>Категория</th>
                            <th>Цена</th>
                            <th>Действия</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- Товары будут загружены здесь -->
                    </tbody>
                </table>
            `;
        }

        function renderProductsTable() {
            const tableBody = document.querySelector('#products-table tbody');
            if (!tableBody) return;
            
            tableBody.innerHTML = products.map(product => `
                <tr>
                    <td>${product.id}</td>
                    <td>${product.name}</td>
                    <td>${getCategoryName(product.category)}</td>
                    <td>${product.price.toLocaleString()} руб.</td>
                    <td>
                        <div class="admin-actions">
                            <button class="admin-action-btn edit-btn" data-id="${product.id}">Редактировать</button>
                            <button class="admin-action-btn delete-btn" data-id="${product.id}">Удалить</button>
                        </div>
                    </td>
                </tr>
            `).join('');
            
            // Назначаем обработчик для кнопки добавления товара
            document.getElementById('add-product-btn')?.addEventListener('click', function() {
                addProduct();
            });
            
            // Назначаем обработчики для кнопок действий
            document.querySelectorAll('.admin-action-btn.edit-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const productId = parseInt(this.dataset.id);
                    editProduct(productId);
                });
            });
            
            document.querySelectorAll('.admin-action-btn.delete-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const productId = parseInt(this.dataset.id);
                    if (confirm('Вы уверены, что хотите удалить этот товар?')) {
                        deleteProduct(productId);
                    }
                });
            });
        }

        function getCategoryName(categoryId) {
            const category = categories.find(c => c.id === categoryId);
            return category ? category.name : 'Неизвестно';
        }

        function addProduct() {
            const name = prompt('Введите название товара:');
            if (!name) return;
            
            const category = prompt('Введите категорию (accessories, care, safety):');
            if (!category) return;
            
            const price = parseFloat(prompt('Введите цену товара:'));
            if (isNaN(price)) return;
            
            const newId = Math.max(...products.map(p => p.id)) + 1;
            
            products.push({
                id: newId,
                name: name,
                category: category,
                price: price,
                image: `https://via.placeholder.com/300x200/FFC0CB/333333?text=${encodeURIComponent(name)}`,
                isFavorite: false,
                inCart: 0
            });
            
            renderProductsTable();
            showNotification(`Товар "${name}" добавлен`);
        }

        function editProduct(productId) {
            const product = products.find(p => p.id === productId);
            if (!product) return;
            
            const newName = prompt('Введите новое название товара:', product.name);
            if (!newName) return;
            
            const newCategory = prompt('Введите новую категорию (accessories, care, safety):', product.category);
            if (!newCategory) return;
            
            const newPrice = parseFloat(prompt('Введите новую цену товара:', product.price));
            if (isNaN(newPrice)) return;
            
            product.name = newName;
            product.category = newCategory;
            product.price = newPrice;
            
            renderProductsTable();
            showNotification(`Товар "${newName}" обновлен`);
        }

        function deleteProduct(productId) {
            const productIndex = products.findIndex(p => p.id === productId);
            if (productIndex !== -1) {
                const productName = products[productIndex].name;
                products.splice(productIndex, 1);
                renderProductsTable();
                showNotification(`Товар "${productName}" удален`);
            }
        }

        function getStatisticsTab() {
            return `
                <h3>Статистика</h3>
                <p>Общая статистика магазина.</p>
                
                <div class="stats-grid" id="stats-grid">
                    <!-- Статистика будет загружена здесь -->
                </div>
            `;
        }

        function renderStatistics() {
            const statsGrid = document.getElementById('stats-grid');
            if (!statsGrid) return;
            
            const totalOrders = orders.length;
            const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
            const avgOrderValue = totalOrders > 0 ? totalRevenue / totalOrders : 0;
            const totalProducts = products.length;
            
            statsGrid.innerHTML = `
                <div class="stat-card">
                    <i class="fas fa-shopping-cart"></i>
                    <div class="stat-number">${totalOrders}</div>
                    <div class="stat-label">Всего заказов</div>
                </div>
                <div class="stat-card">
                    <i class="fas fa-ruble-sign"></i>
                    <div class="stat-number">${totalRevenue.toLocaleString()}</div>
                    <div class="stat-label">Общая выручка (руб.)</div>
                </div>
                <div class="stat-card">
                    <i class="fas fa-chart-line"></i>
                    <div class="stat-number">${avgOrderValue.toLocaleString()}</div>
                    <div class="stat-label">Средний чек (руб.)</div>
                </div>
                <div class="stat-card">
                    <i class="fas fa-box"></i>
                    <div class="stat-number">${totalProducts}</div>
                    <div class="stat-label">Товаров в каталоге</div>
                </div>
            `;
        }

        function getSettingsTab() {
            return `
                <h3>Настройки магазина</h3>
                <p>Настройки вашего интернет-магазина.</p>
                
                <div class="checkout-form">
                    <div class="form-group">
                        <label for="store-name">Название магазина</label>
                        <input type="text" id="store-name" value="Motoria">
                    </div>
                    <div class="form-group">
                        <label for="store-email">Email магазина</label>
                        <input type="email" id="store-email" value="info@motoria.ru">
                    </div>
                    <div class="form-group">
                        <label for="store-phone">Телефон магазина</label>
                        <input type="tel" id="store-phone" value="+7 (999) 123-45-67">
                    </div>
                    <div class="form-group">
                        <label for="free-shipping">Бесплатная доставка от (руб.)</label>
                        <input type="number" id="free-shipping" value="3000">
                    </div>
                    <button class="btn" id="save-settings">Сохранить настройки</button>
                </div>
            `;
        }

        function renderProducts() {
            const container = document.getElementById('products-container');
            const paginationContainer = document.getElementById('pagination');
            const searchInfoContainer = document.getElementById('search-results-info');
            
            if (!container) return;
            
            // Фильтруем товары по категории и поисковому запросу
            let filteredProducts = products;
            
            // Фильтрация по категории
            if (currentCategory !== 'all') {
                filteredProducts = filteredProducts.filter(product => product.category === currentCategory);
            }
            
            // Фильтрация по поисковому запросу
            if (searchQuery.trim() !== '') {
                const query = searchQuery.toLowerCase();
                filteredProducts = filteredProducts.filter(product => 
                    product.name.toLowerCase().includes(query) ||
                    product.category.toLowerCase().includes(query)
                );
            }
            
            // Показываем информацию о результатах поиска
            if (searchInfoContainer) {
                if (searchQuery.trim() !== '') {
                    searchInfoContainer.innerHTML = `
                        <p>Результаты поиска по запросу: "<strong>${searchQuery}</strong>". Найдено товаров: ${filteredProducts.length}</p>
                    `;
                } else {
                    searchInfoContainer.innerHTML = '';
                }
            }
            
            // Рассчитываем общее количество страниц
            const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
            
            // Проверяем корректность текущей страницы
            if (currentPageNumber > totalPages) {
                currentPageNumber = totalPages;
            }
            if (currentPageNumber < 1) {
                currentPageNumber = 1;
            }
            
            // Получаем товары для текущей страницы
            const startIndex = (currentPageNumber - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            const currentProducts = filteredProducts.slice(startIndex, endIndex);
            
            // Рендерим товары или сообщение, если ничего не найдено
            if (currentProducts.length === 0) {
                container.innerHTML = `
                    <div class="no-results">
                        <i class="fas fa-search"></i>
                        <h3>Товары не найдены</h3>
                        <p>Попробуйте изменить поисковый запрос или выбрать другую категорию.</p>
                    </div>
                `;
                
                // Скрываем пагинацию, если нет товаров
                if (paginationContainer) {
                    paginationContainer.innerHTML = '';
                }
                
                return;
            }
            
            // Рендерим товары
            container.innerHTML = currentProducts.map(product => `
                <div class="product-card" data-id="${product.id}">
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/300x200/FFC0CB/333333?text=${encodeURIComponent(product.name)}'">
                    </div>
                    <div class="product-info">
                        <div class="product-title">${product.name}</div>
                        <div class="product-price">${product.price.toLocaleString()} руб.</div>
                        <div class="product-actions">
                            <button class="btn add-to-cart-btn" data-id="${product.id}">В корзину</button>
                            <button class="favorite-btn ${product.isFavorite ? 'active' : ''}" data-id="${product.id}">
                                <i class="${product.isFavorite ? 'fas' : 'far'} fa-heart"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');
            
            // Рендерим пагинацию
            if (paginationContainer) {
                paginationContainer.innerHTML = getPaginationHTML(totalPages);
                
                // Назначаем обработчики для кнопок пагинации
                document.querySelectorAll('.pagination-btn').forEach(btn => {
                    btn.addEventListener('click', function() {
                        if (this.dataset.page === 'prev') {
                            if (currentPageNumber > 1) {
                                currentPageNumber--;
                                renderProducts();
                            }
                        } else if (this.dataset.page === 'next') {
                            if (currentPageNumber < totalPages) {
                                currentPageNumber++;
                                renderProducts();
                            }
                        } else {
                            currentPageNumber = parseInt(this.dataset.page);
                            renderProducts();
                        }
                    });
                });
            }
            
            // Назначаем обработчики для кнопок товаров
            document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const productId = parseInt(this.dataset.id);
                    addToCart(productId);
                });
            });
            
            document.querySelectorAll('.favorite-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const productId = parseInt(this.dataset.id);
                    toggleFavorite(productId);
                });
            });
            
            // Обработчики для кнопок категорий
            document.querySelectorAll('.category-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                    currentCategory = this.dataset.category;
                    currentPageNumber = 1; // Сбрасываем на первую страницу
                    searchQuery = ""; // Сбрасываем поисковый запрос
                    
                    // Обновляем поле поиска
                    const searchInput = document.getElementById('search-input');
                    if (searchInput) {
                        searchInput.value = "";
                    }
                    
                    renderProducts();
                });
            });
            
            // Обработчик для поля поиска
            const searchInput = document.getElementById('search-input');
            if (searchInput) {
                // Обработчик для ввода с задержкой (debounce)
                let searchTimeout;
                searchInput.addEventListener('input', function() {
                    clearTimeout(searchTimeout);
                    searchTimeout = setTimeout(() => {
                        searchQuery = this.value;
                        currentPageNumber = 1; // Сбрасываем на первую страницу при поиске
                        renderProducts();
                    }, 300); // Задержка 300мс
                });
                
                // Обработчик для нажатия Enter
                searchInput.addEventListener('keypress', function(e) {
                    if (e.key === 'Enter') {
                        searchQuery = this.value;
                        currentPageNumber = 1;
                        renderProducts();
                    }
                });
            }
        }

        function getPaginationHTML(totalPages) {
            if (totalPages <= 1) {
                return '<div class="pagination-info">Страница 1 из 1</div>';
            }
            
            let buttons = '';
            
            // Кнопка "Предыдущая"
            buttons += `<button class="pagination-btn" data-page="prev" ${currentPageNumber === 1 ? 'disabled' : ''}>&laquo;</button>`;
            
            // Кнопки страниц
            // Показываем первую страницу
            buttons += `<button class="pagination-btn ${currentPageNumber === 1 ? 'active' : ''}" data-page="1">1</button>`;
            
            // Показываем многоточие после первой страницы, если нужно
            if (currentPageNumber > 3) {
                buttons += `<span class="pagination-info">...</span>`;
            }
            
            // Показываем страницы вокруг текущей
            for (let i = Math.max(2, currentPageNumber - 1); i <= Math.min(totalPages - 1, currentPageNumber + 1); i++) {
                if (i > 1 && i < totalPages) {
                    buttons += `<button class="pagination-btn ${currentPageNumber === i ? 'active' : ''}" data-page="${i}">${i}</button>`;
                }
            }
            
            // Показываем многоточие перед последней страницей, если нужно
            if (currentPageNumber < totalPages - 2) {
                buttons += `<span class="pagination-info">...</span>`;
            }
            
            // Показываем последнюю страницу, если есть больше одной страницы
            if (totalPages > 1) {
                buttons += `<button class="pagination-btn ${currentPageNumber === totalPages ? 'active' : ''}" data-page="${totalPages}">${totalPages}</button>`;
            }
            
            // Кнопка "Следующая"
            buttons += `<button class="pagination-btn" data-page="next" ${currentPageNumber === totalPages ? 'disabled' : ''}>&raquo;</button>`;
            
            // Информация о текущей странице
            buttons += `<div class="pagination-info">Страница ${currentPageNumber} из ${totalPages}</div>`;
            
            return buttons;
        }

        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            if (!product) return;
            
            // Находим товар в корзине
            const cartItem = cart.find(item => item.id === productId);
            
            if (cartItem) {
                // Увеличиваем количество, если товар уже в корзине
                cartItem.quantity += 1;
            } else {
                // Добавляем новый товар в корзину
                cart.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    quantity: 1
                });
            }
            
            // Сохраняем корзину в localStorage
            localStorage.setItem('motoria-cart', JSON.stringify(cart));
            
            // Обновляем счетчик корзины
            updateCartCount();
            
            // Показываем уведомление
            showNotification(`Товар "${product.name}" добавлен в корзину!`);
            
            // Если мы на странице корзины, обновляем ее
            if (currentPage === 'cart') {
                renderCart();
            }
        }

        function toggleFavorite(productId) {
            const product = products.find(p => p.id === productId);
            if (!product) return;
            
            // Находим товар в избранном
            const favoriteIndex = favorites.findIndex(item => item.id === productId);
            
            if (favoriteIndex !== -1) {
                // Удаляем из избранного
                favorites.splice(favoriteIndex, 1);
                product.isFavorite = false;
            } else {
                // Добавляем в избранное
                favorites.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image
                });
                product.isFavorite = true;
            }
            
            // Сохраняем избранное в localStorage
            localStorage.setItem('motoria-favorites', JSON.stringify(favorites));
            
            // Обновляем счетчик избранного
            updateFavoritesCount();
            
            // Обновляем отображение товаров
            if (currentPage === 'catalog') {
                renderProducts();
            } else if (currentPage === 'favorites') {
                renderFavorites();
            }
        }

        function updateCartQuantity(productId, change) {
            const cartItem = cart.find(item => item.id === productId);
            if (!cartItem) return;
            
            cartItem.quantity += change;
            
            // Если количество стало 0 или меньше, удаляем товар из корзины
            if (cartItem.quantity <= 0) {
                removeFromCart(productId);
                return;
            }
            
            // Сохраняем обновленную корзину
            localStorage.setItem('motoria-cart', JSON.stringify(cart));
            
            // Обновляем счетчик корзины
            updateCartCount();
            
            // Обновляем отображение корзины
            renderCart();
        }

        function removeFromCart(productId) {
            // Удаляем товар из корзины
            const itemIndex = cart.findIndex(item => item.id === productId);
            if (itemIndex !== -1) {
                cart.splice(itemIndex, 1);
            }
            
            // Сохраняем обновленную корзину
            localStorage.setItem('motoria-cart', JSON.stringify(cart));
            
            // Обновляем счетчик корзины
            updateCartCount();
            
            // Обновляем отображение корзины
            renderCart();
            
            // Показываем уведомление
            const product = products.find(p => p.id === productId);
            if (product) {
                showNotification(`Товар "${product.name}" удален из корзины`);
            }
        }

        function updateCartCount() {
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            document.querySelectorAll('.cart-count').forEach(element => {
                element.textContent = totalItems;
            });
        }

        function updateFavoritesCount() {
            document.querySelectorAll('.favorites-count').forEach(element => {
                element.textContent = favorites.length;
            });
        }

        function showNotification(message) {
            // Создаем элемент уведомления
            const notification = document.createElement('div');
            notification.textContent = message;
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background-color: var(--primary-pink);
                color: white;
                padding: 15px 20px;
                border-radius: 5px;
                box-shadow: var(--shadow);
                z-index: 10000;
                animation: slideIn 0.3s ease;
            `;
            
            // Добавляем уведомление на страницу
            document.body.appendChild(notification);
            
            // Удаляем уведомление через 3 секунды
            setTimeout(() => {
                notification.style.animation = 'slideOut 0.3s ease';
                setTimeout(() => {
                    document.body.removeChild(notification);
                }, 300);
            }, 3000);
        }

        // Добавляем стили для анимации уведомлений
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
            
            .order-status {
                padding: 5px 10px;
                border-radius: 3px;
                font-size: 0.9rem;
                font-weight: 600;
            }
        `;
        document.head.appendChild(style);
