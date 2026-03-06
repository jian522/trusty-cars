// Car data types
export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  priceUSD: number;
  mileage: string;
  transmission: string;
  fuelType: string;
  emission: string;
  color: string;
  location: string;
  images: string[];
  description: string;
  descriptionEn: string;
  exportCountries: string[];
  featured: boolean;
  battery?: string;
  range?: string;
}

export interface CarBrand {
  id: string;
  name: string;
  nameEn: string;
  logo: string;
  models: string[];
}

export const popularBrands: CarBrand[] = [
  { id: 'toyota', name: '丰田', nameEn: 'Toyota', logo: '/brands/toyota.png', models: ['Corolla', 'Camry', 'RAV4', 'Prado', 'Landcruiser', 'Hiace', 'Alphard', 'Fortuner'] },
  { id: 'bmw', name: '宝马', nameEn: 'BMW', logo: '/brands/bmw.png', models: ['3 Series', '5 Series', 'X3', 'X5'] },
  { id: 'mercedes', name: '奔驰', nameEn: 'Mercedes-Benz', logo: '/brands/mercedes.png', models: ['C-Class', 'E-Class', 'GLC', 'GLE'] },
  { id: 'lexus', name: '雷克萨斯', nameEn: 'Lexus', logo: '/brands/lexus.png', models: ['ES', 'RX', 'NX', 'LX'] },
  { id: 'honda', name: '本田', nameEn: 'Honda', logo: '/brands/honda.png', models: ['Accord', 'Civic', 'CR-V'] },
];

export const exportHotCars: Car[] = [
  { id: '1', brand: '丰田', model: '卡罗拉', year: 2024, price: 98000, priceUSD: 13800, mileage: '0.5万公里', transmission: '自动', fuelType: '汽油', emission: '国VI', color: '白色', location: '广州', images: [], description: '2024款 1.2T', descriptionEn: '2024 Toyota Corolla', exportCountries: ['非洲', '中东', '东南亚'], featured: true },
  { id: '2', brand: '丰田', model: '凯美瑞', year: 2023, price: 145000, priceUSD: 20400, mileage: '2.8万公里', transmission: '自动', fuelType: '混动', emission: '国VI', color: '白色', location: '广州', images: [], description: '2023款 2.5L', descriptionEn: '2023 Toyota Camry', exportCountries: ['中东', '非洲', '欧美'], featured: true },
  { id: '3', brand: '丰田', model: 'RAV4', year: 2023, price: 175000, priceUSD: 24600, mileage: '1.8万公里', transmission: '自动', fuelType: '汽油', emission: '国VI', color: '白色', location: '深圳', images: [], description: '2023款 2.0L', descriptionEn: '2023 Toyota RAV4', exportCountries: ['澳洲', '东南亚', '中东'], featured: true },
  { id: '4', brand: '丰田', model: '普拉多', year: 2022, price: 288000, priceUSD: 40500, mileage: '3.5万公里', transmission: '自动', fuelType: '柴油', emission: '国VI', color: '黑色', location: '天津', images: [], description: '2022款 3.0L', descriptionEn: '2022 Toyota Prado', exportCountries: ['中东', '非洲', '东南亚'], featured: true },
  { id: '5', brand: '丰田', model: '埃尔法', year: 2023, price: 358000, priceUSD: 50400, mileage: '2.0万公里', transmission: '自动', fuelType: '混动', emission: '国VI', color: '黑色', location: '广州', images: [], description: '2023款 2.5L', descriptionEn: '2023 Toyota Alphard', exportCountries: ['东南亚', '中东', '港澳'], featured: true },
  { id: '6', brand: '宝马', model: '3系', year: 2023, price: 268000, priceUSD: 37700, mileage: '2.5万公里', transmission: '自动', fuelType: '汽油', emission: '国VI', color: '黑色', location: '上海', images: [], description: '2023款 325Li', descriptionEn: '2023 BMW 3 Series', exportCountries: ['欧美', '东南亚', '中东'], featured: true },
  { id: '7', brand: '奔驰', model: 'C级', year: 2023, price: 298000, priceUSD: 42000, mileage: '1.5万公里', transmission: '自动', fuelType: '汽油', emission: '国VI', color: '白色', location: '北京', images: [], description: '2023款 C260L', descriptionEn: '2023 Mercedes C-Class', exportCountries: ['中东', '欧美', '东南亚'], featured: true },
  { id: '8', brand: '雷克萨斯', model: 'ES', year: 2023, price: 328000, priceUSD: 46200, mileage: '2.2万公里', transmission: '自动', fuelType: '混动', emission: '国VI', color: '银色', location: '深圳', images: [], description: '2023款 ES300h', descriptionEn: '2023 Lexus ES', exportCountries: ['欧美', '中东', '东南亚'], featured: true },
  { id: '9', brand: '丰田', model: '兰德酷路泽', year: 2022, price: 458000, priceUSD: 64500, mileage: '4.0万公里', transmission: '自动', fuelType: '汽油', emission: '国VI', color: '白色', location: '天津', images: [], description: '2022款 3.5L', descriptionEn: '2022 Toyota Landcruiser', exportCountries: ['中东', '非洲', '俄罗斯'], featured: true },
  { id: '10', brand: '路虎', model: '揽胜', year: 2023, price: 1280000, priceUSD: 180200, mileage: '1.0万公里', transmission: '自动', fuelType: '汽油', emission: '国VI', color: '黑色', location: '上海', images: [], description: '2023款 3.0L', descriptionEn: '2023 Range Rover', exportCountries: ['欧美', '中东', '俄罗斯'], featured: true },
];

// New Energy Cars
export const neCars: Car[] = [
  { id: 'ne1', brand: '比亚迪', model: '汉', year: 2024, price: 168000, priceUSD: 23600, mileage: '0.3万公里', transmission: '自动', fuelType: '纯电动', emission: '电动', color: '黑色', location: '深圳', battery: '85.4kWh', range: '610km', images: [], description: '2024款 EV', descriptionEn: '2024 BYD Han', exportCountries: ['欧洲', '东南亚', '中东'], featured: true },
  { id: 'ne2', brand: '比亚迪', model: '秦PLUS', year: 2024, price: 98000, priceUSD: 13800, mileage: '0.5万公里', transmission: '自动', fuelType: '插电混动', emission: '电动', color: '白色', location: '广州', battery: '18.3kWh', range: '120km', images: [], description: '2024款 DM-i', descriptionEn: '2024 BYD Qin', exportCountries: ['欧洲', '东南亚', '非洲'], featured: true },
  { id: 'ne3', brand: '比亚迪', model: '海豹', year: 2024, price: 158000, priceUSD: 22200, mileage: '0.4万公里', transmission: '自动', fuelType: '纯电动', emission: '电动', color: '蓝色', location: '深圳', battery: '82.5kWh', range: '650km', images: [], description: '2024款', descriptionEn: '2024 BYD Seal', exportCountries: ['欧洲', '东南亚', '中东'], featured: true },
  { id: 'ne4', brand: '比亚迪', model: '宋PLUS', year: 2024, price: 138000, priceUSD: 19400, mileage: '0.6万公里', transmission: '自动', fuelType: '插电混动', emission: '电动', color: '白色', location: '杭州', battery: '26.6kWh', range: '150km', images: [], description: '2024款 DM-i', descriptionEn: '2024 BYD Song', exportCountries: ['欧洲', '东南亚', '中东'], featured: true },
  { id: 'ne5', brand: '特斯拉', model: 'Model 3', year: 2023, price: 228000, priceUSD: 32100, mileage: '1.5万公里', transmission: '自动', fuelType: '纯电动', emission: '电动', color: '白色', location: '上海', battery: '60kWh', range: '556km', images: [], description: '2023款', descriptionEn: '2023 Tesla Model 3', exportCountries: ['欧洲', '北美', '东南亚'], featured: true },
  { id: 'ne6', brand: '特斯拉', model: 'Model Y', year: 2023, price: 268000, priceUSD: 37700, mileage: '1.8万公里', transmission: '自动', fuelType: '纯电动', emission: '电动', color: '黑色', location: '北京', battery: '75kWh', range: '554km', images: [], description: '2023款', descriptionEn: '2023 Tesla Model Y', exportCountries: ['欧洲', '北美', '中东'], featured: true },
  { id: 'ne7', brand: '小鹏', model: 'P7', year: 2024, price: 198000, priceUSD: 27900, mileage: '0.8万公里', transmission: '自动', fuelType: '纯电动', emission: '电动', color: '银色', location: '广州', battery: '86.2kWh', range: '702km', images: [], description: '2024款', descriptionEn: '2024 XPeng P7', exportCountries: ['欧洲', '东南亚', '中东'], featured: true },
  { id: 'ne8', brand: '小鹏', model: 'G9', year: 2024, price: 268000, priceUSD: 37700, mileage: '0.6万公里', transmission: '自动', fuelType: '纯电动', emission: '电动', color: '白色', location: '深圳', battery: '98kWh', range: '650km', images: [], description: '2024款', descriptionEn: '2024 XPeng G9', exportCountries: ['欧洲', '东南亚', '中东'], featured: true },
  { id: 'ne9', brand: '蔚来', model: 'ET5', year: 2024, price: 298000, priceUSD: 42000, mileage: '0.5万公里', transmission: '自动', fuelType: '纯电动', emission: '电动', color: '蓝色', location: '上海', battery: '100kWh', range: '700km', images: [], description: '2024款', descriptionEn: '2024 NIO ET5', exportCountries: ['欧洲', '东南亚'], featured: true },
  { id: 'ne10', brand: '蔚来', model: 'ES6', year: 2024, price: 328000, priceUSD: 46200, mileage: '0.7万公里', transmission: '自动', fuelType: '纯电动', emission: '电动', color: '白色', location: '北京', battery: '100kWh', range: '610km', images: [], description: '2024款', descriptionEn: '2024 NIO ES6', exportCountries: ['欧洲', '东南亚'], featured: true },
  { id: 'ne11', brand: '理想', model: 'L7', year: 2024, price: 288000, priceUSD: 40500, mileage: '0.4万公里', transmission: '自动', fuelType: '增程式', emission: '电动', color: '白色', location: '广州', battery: '42.8kWh', range: '215km', images: [], description: '2024款', descriptionEn: '2024 Li Auto L7', exportCountries: ['中东', '东南亚', '非洲'], featured: true },
  { id: 'ne12', brand: '理想', model: 'L8', year: 2024, price: 328000, priceUSD: 46200, mileage: '0.5万公里', transmission: '自动', fuelType: '增程式', emission: '电动', color: '黑色', location: '深圳', battery: '42.8kWh', range: '210km', images: [], description: '2024款', descriptionEn: '2024 Li Auto L8', exportCountries: ['中东', '东南亚', '非洲'], featured: false },
  { id: 'ne13', brand: '广汽埃安', model: 'AION Y', year: 2024, price: 118000, priceUSD: 16600, mileage: '0.4万公里', transmission: '自动', fuelType: '纯电动', emission: '电动', color: '白色', location: '广州', battery: '61.7kWh', range: '510km', images: [], description: '2024款', descriptionEn: '2024 AION Y', exportCountries: ['东南亚', '非洲', '中东'], featured: false },
  { id: 'ne14', brand: '广汽埃安', model: 'AION V', year: 2024, price: 148000, priceUSD: 20800, mileage: '0.5万公里', transmission: '自动', fuelType: '纯电动', emission: '电动', color: '银色', location: '佛山', battery: '72.1kWh', range: '520km', images: [], description: '2024款', descriptionEn: '2024 AION V', exportCountries: ['东南亚', '非洲', '中东'], featured: false },
  { id: 'ne15', brand: '吉利', model: '极氪001', year: 2024, price: 268000, priceUSD: 37700, mileage: '0.6万公里', transmission: '自动', fuelType: '纯电动', emission: '电动', color: '白色', location: '宁波', battery: '100kWh', range: '656km', images: [], description: '2024款', descriptionEn: '2024 Zeekr 001', exportCountries: ['欧洲', '东南亚'], featured: false },
  { id: 'ne16', brand: '吉利', model: '极氪007', year: 2024, price: 228000, priceUSD: 32100, mileage: '0.3万公里', transmission: '自动', fuelType: '纯电动', emission: '电动', color: '黑色', location: '杭州', battery: '75kWh', range: '688km', images: [], description: '2024款', descriptionEn: '2024 Zeekr 007', exportCountries: ['欧洲', '东南亚'], featured: false },
  { id: 'ne17', brand: '宝马', model: 'i3', year: 2024, price: 288000, priceUSD: 40500, mileage: '0.8万公里', transmission: '自动', fuelType: '纯电动', emission: '电动', color: '蓝色', location: '北京', battery: '70kWh', range: '526km', images: [], description: '2024款', descriptionEn: '2024 BMW i3', exportCountries: ['欧洲', '北美', '东南亚'], featured: false },
  { id: 'ne18', brand: '宝马', model: 'iX3', year: 2024, price: 388000, priceUSD: 54600, mileage: '0.6万公里', transmission: '自动', fuelType: '纯电动', emission: '电动', color: '黑色', location: '上海', battery: '80kWh', range: '550km', images: [], description: '2024款', descriptionEn: '2024 BMW iX3', exportCountries: ['欧洲', '北美', '东南亚'], featured: false },
  { id: 'ne19', brand: '奔驰', model: 'EQE', year: 2024, price: 488000, priceUSD: 68700, mileage: '0.5万公里', transmission: '自动', fuelType: '纯电动', emission: '电动', color: '白色', location: '北京', battery: '96.1kWh', range: '717km', images: [], description: '2024款', descriptionEn: '2024 Mercedes EQE', exportCountries: ['欧洲', '北美', '中东'], featured: false },
  { id: 'ne20', brand: '奔驰', model: 'EQB', year: 2024, price: 358000, priceUSD: 50400, mileage: '0.6万公里', transmission: '自动', fuelType: '纯电动', emission: '电动', color: '白色', location: '上海', battery: '73.5kWh', range: '512km', images: [], description: '2024款', descriptionEn: '2024 Mercedes EQB', exportCountries: ['欧洲', '中东', '东南亚'], featured: false },
  { id: 'ne21', brand: '小米', model: 'SU7', year: 2024, price: 298000, priceUSD: 42000, mileage: '0.2万公里', transmission: '自动', fuelType: '纯电动', emission: '电动', color: '海湾蓝', location: '北京', battery: '101kWh', range: '800km', images: [], description: '2024款', descriptionEn: '2024 Xiaomi SU7', exportCountries: ['欧洲', '东南亚', '中东'], featured: true },
  { id: 'ne22', brand: '特斯拉', model: 'Model S', year: 2023, price: 688000, priceUSD: 96900, mileage: '2.0万公里', transmission: '自动', fuelType: '纯电动', emission: '电动', color: '黑色', location: '上海', battery: '100kWh', range: '715km', images: [], description: '2023款', descriptionEn: '2023 Tesla Model S', exportCountries: ['北美', '欧洲', '中东'], featured: false },
  { id: 'ne23', brand: '特斯拉', model: 'Model X', year: 2023, price: 888000, priceUSD: 125100, mileage: '1.5万公里', transmission: '自动', fuelType: '纯电动', emission: '电动', color: '白色', location: '北京', battery: '100kWh', range: '700km', images: [], description: '2023款', descriptionEn: '2023 Tesla Model X', exportCountries: ['北美', '欧洲', '中东'], featured: false },
  { id: 'ne24', brand: '大众', model: 'ID.4', year: 2024, price: 158000, priceUSD: 22200, mileage: '0.8万公里', transmission: '自动', fuelType: '纯电动', emission: '电动', color: '白色', location: '长春', battery: '84.8kWh', range: '600km', images: [], description: '2024款', descriptionEn: '2024 VW ID.4', exportCountries: ['欧洲', '俄罗斯', '东南亚'], featured: false },
  { id: 'ne25', brand: '大众', model: 'ID.6', year: 2024, price: 228000, priceUSD: 32100, mileage: '0.6万公里', transmission: '自动', fuelType: '纯电动', emission: '电动', color: '白色', location: '佛山', battery: '84.8kWh', range: '617km', images: [], description: '2024款', descriptionEn: '2024 VW ID.6', exportCountries: ['欧洲', '俄罗斯', '东南亚'], featured: false },
  { id: 'ne26', brand: '腾势', model: 'D9', year: 2024, price: 328000, priceUSD: 46200, mileage: '0.5万公里', transmission: '自动', fuelType: '插电混动', emission: '电动', color: '白色', location: '广州', battery: '40.1kWh', range: '180km', images: [], description: '2024款', descriptionEn: '2024 Denza D9', exportCountries: ['东南亚', '中东', '欧洲'], featured: false },
  { id: 'ne27', brand: '智己', model: 'LS6', year: 2024, price: 228000, priceUSD: 32100, mileage: '0.3万公里', transmission: '自动', fuelType: '纯电动', emission: '电动', color: '白色', location: '上海', battery: '100kWh', range: '760km', images: [], description: '2024款', descriptionEn: '2024 IM LS6', exportCountries: ['欧洲', '东南亚'], featured: false },
  { id: 'ne28', brand: '阿维塔', model: '11', year: 2024, price: 318000, priceUSD: 44800, mileage: '0.4万公里', transmission: '自动', fuelType: '纯电动', emission: '电动', color: '白色', location: '重庆', battery: '116kWh', range: '730km', images: [], description: '2024款', descriptionEn: '2024 Avatr 11', exportCountries: ['欧洲', '东南亚'], featured: false },
  { id: 'ne29', brand: '长安', model: '深蓝SL03', year: 2024, price: 138000, priceUSD: 19400, mileage: '0.5万公里', transmission: '自动', fuelType: '增程式', emission: '电动', color: '白色', location: '重庆', battery: '28.4kWh', range: '200km', images: [], description: '2024款', descriptionEn: '2024 Changan Deepal', exportCountries: ['东南亚', '非洲', '中东'], featured: false },
  { id: 'ne30', brand: '哪吒', model: '哪吒S', year: 2024, price: 198000, priceUSD: 27900, mileage: '0.5万公里', transmission: '自动', fuelType: '纯电动', emission: '电动', color: '白色', location: '嘉兴', battery: '91kWh', range: '715km', images: [], description: '2024款', descriptionEn: '2024 NETA S', exportCountries: ['东南亚', '非洲'], featured: false },
  { id: 'ne31', brand: '零跑', model: 'C11', year: 2024, price: 158000, priceUSD: 22200, mileage: '0.4万公里', transmission: '自动', fuelType: '增程式', emission: '电动', color: '白色', location: '杭州', battery: '43.7kWh', range: '300km', images: [], description: '2024款', descriptionEn: '2024 Leapmotor C11', exportCountries: ['东南亚', '非洲', '中东'], featured: false },
  { id: 'ne32', brand: '上汽', model: '飞凡F7', year: 2024, price: 188000, priceUSD: 26500, mileage: '0.4万公里', transmission: '自动', fuelType: '纯电动', emission: '电动', color: '白色', location: '上海', battery: '77kWh', range: '602km', images: [], description: '2024款', descriptionEn: '2024 Rising Auto F7', exportCountries: ['欧洲', '东南亚'], featured: false },
  { id: 'ne33', brand: '东风', model: '岚图FREE', year: 2024, price: 268000, priceUSD: 37700, mileage: '0.6万公里', transmission: '自动', fuelType: '增程式', emission: '电动', color: '白色', location: '武汉', battery: '39kWh', range: '210km', images: [], description: '2024款', descriptionEn: '2024 Voyah FREE', exportCountries: ['欧洲', '东南亚'], featured: false },
  { id: 'ne34', brand: '昊铂', model: 'HT', year: 2024, price: 218000, priceUSD: 30700, mileage: '0.4万公里', transmission: '自动', fuelType: '纯电动', emission: '电动', color: '白色', location: '广州', battery: '80kWh', range: '660km', images: [], description: '2024款', descriptionEn: '2024 Hyper HT', exportCountries: ['东南亚', '欧洲'], featured: false },
  { id: 'ne35', brand: '高合', model: 'HiPhi Y', year: 2024, price: 338000, priceUSD: 47600, mileage: '0.3万公里', transmission: '自动', fuelType: '纯电动', emission: '电动', color: '白色', location: '上海', battery: '115kWh', range: '765km', images: [], description: '2024款', descriptionEn: '2024 HiPhi Y', exportCountries: ['欧洲', '中东'], featured: false },
  { id: 'ne36', brand: '比亚迪', model: '海狮', year: 2024, price: 188000, priceUSD: 26500, mileage: '0.3万公里', transmission: '自动', fuelType: '纯电动', emission: '电动', color: '白色', location: '深圳', battery: '82.5kWh', range: '610km', images: [], description: '2024款', descriptionEn: '2024 BYD Sea Lion', exportCountries: ['欧洲', '东南亚'], featured: false },
  { id: 'ne37', brand: '腾势', model: 'N7', year: 2024, price: 288000, priceUSD: 40500, mileage: '0.4万公里', transmission: '自动', fuelType: '纯电动', emission: '电动', color: '蓝色', location: '杭州', battery: '91.3kWh', range: '630km', images: [], description: '2024款', descriptionEn: '2024 Denza N7', exportCountries: ['欧洲', '东南亚'], featured: false },
  { id: 'ne38', brand: '智己', model: 'L6', year: 2024, price: 218000, priceUSD: 30700, mileage: '0.2万公里', transmission: '自动', fuelType: '纯电动', emission: '电动', color: '灰色', location: '苏州', battery: '100kWh', range: '770km', images: [], description: '2024款', descriptionEn: '2024 IM L6', exportCountries: ['欧洲', '东南亚'], featured: false },
  { id: 'ne39', brand: '阿维塔', model: '12', year: 2024, price: 288000, priceUSD: 40500, mileage: '0.3万公里', transmission: '自动', fuelType: '纯电动', emission: '电动', color: '黑色', location: '成都', battery: '94.5kWh', range: '650km', images: [], description: '2024款', descriptionEn: '2024 Avatr 12', exportCountries: ['欧洲', '东南亚'], featured: false },
  { id: 'ne40', brand: '极越', model: '01', year: 2024, price: 258000, priceUSD: 36300, mileage: '0.4万公里', transmission: '自动', fuelType: '纯电动', emission: '电动', color: '白色', location: '宁波', battery: '100kWh', range: '720km', images: [], description: '2024款', descriptionEn: '2024 Robo-01', exportCountries: ['欧洲', '东南亚'], featured: false },
  { id: 'ne41', brand: '广汽埃安', model: 'AION LX', year: 2024, price: 228000, priceUSD: 32100, mileage: '0.5万公里', transmission: '自动', fuelType: '纯电动', emission: '电动', color: '白色', location: '广州', battery: '93.3kWh', range: '650km', images: [], description: '2024款', descriptionEn: '2024 AION LX', exportCountries: ['欧洲', '东南亚'], featured: false },
  { id: 'ne42', brand: '广汽埃安', model: 'AION S', year: 2024, price: 138000, priceUSD: 19400, mileage: '0.5万公里', transmission: '自动', fuelType: '纯电动', emission: '电动', color: '白色', location: '佛山', battery: '59.4kWh', range: '480km', images: [], description: '2024款', descriptionEn: '2024 AION S', exportCountries: ['东南亚', '非洲'], featured: false },
  { id: 'ne43', brand: '长安', model: 'Lumin', year: 2024, price: 58000, priceUSD: 8200, mileage: '0.4万公里', transmission: '自动', fuelType: '纯电动', emission: '电动', color: '白色', location: '重庆', battery: '28.08kWh', range: '301km', images: [], description: '2024款', descriptionEn: '2024 Changan Lumin', exportCountries: ['东南亚', '非洲'], featured: false },
  { id: 'ne44', brand: '哪吒', model: '哪吒U', year: 2024, price: 118000, priceUSD: 16600, mileage: '0.6万公里', transmission: '自动', fuelType: '纯电动', emission: '电动', color: '白色', location: '南宁', battery: '68.2kWh', range: '501km', images: [], description: '2024款', descriptionEn: '2024 NETA U', exportCountries: ['东南亚', '非洲'], featured: false },
  { id: 'ne45', brand: '零跑', model: 'C01', year: 2024, price: 148000, priceUSD: 20800, mileage: '0.5万公里', transmission: '自动', fuelType: '纯电动', emission: '电动', color: '银色', location: '金华', battery: '90kWh', range: '717km', images: [], description: '2024款', descriptionEn: '2024 Leapmotor C01', exportCountries: ['东南亚', '欧洲'], featured: false },
  { id: 'ne46', brand: '上汽', model: '飞凡R7', year: 2024, price: 218000, priceUSD: 30700, mileage: '0.5万公里', transmission: '自动', fuelType: '纯电动', emission: '电动', color: '黑色', location: '苏州', battery: '90kWh', range: '642km', images: [], description: '2024款', descriptionEn: '2024 Rising Auto R7', exportCountries: ['欧洲', '东南亚'], featured: false },
  { id: 'ne47', brand: '东风', model: '岚图追光', year: 2024, price: 288000, priceUSD: 40500, mileage: '0.3万公里', transmission: '自动', fuelType: '纯电动', emission: '电动', color: '蓝色', location: '武汉', battery: '108kWh', range: '730km', images: [], description: '2024款', descriptionEn: '2024 Voyah', exportCountries: ['欧洲', '东南亚'], featured: false },
  { id: 'ne48', brand: '昊铂', model: 'GT', year: 2024, price: 198000, priceUSD: 27900, mileage: '0.5万公里', transmission: '自动', fuelType: '纯电动', emission: '电动', color: '红色', location: '深圳', battery: '80kWh', range: '710km', images: [], description: '2024款', descriptionEn: '2024 Hyper GT', exportCountries: ['东南亚', '欧洲'], featured: false },
  { id: 'ne49', brand: '高合', model: 'Z', year: 2024, price: 588000, priceUSD: 82800, mileage: '0.4万公里', transmission: '自动', fuelType: '纯电动', emission: '电动', color: '银色', location: '北京', battery: '120kWh', range: '705km', images: [], description: '2024款', descriptionEn: '2024 HiPhi Z', exportCountries: ['欧洲', '中东'], featured: false },
  { id: 'ne50', brand: '凯迪拉克', model: 'LYRIQ', year: 2024, price: 388000, priceUSD: 54600, mileage: '0.5万公里', transmission: '自动', fuelType: '纯电动', emission: '电动', color: '黑色', location: '上海', battery: '95.4kWh', range: '653km', images: [], description: '2024款', descriptionEn: '2024 Cadillac LYRIQ', exportCountries: ['北美', '欧洲', '中东'], featured: false },
];

export const contactInfo = {
  whatsapp: '+8618079079999',
  wechat: '+8618079079999',
  email: 'jian5222@gmail.com',
  facebook: 'Trusty Used Cars',
  address: '广州，中国',
};

export const languages = [
  { code: 'zh', name: '中文', nameEn: 'Chinese' },
  { code: 'en', name: 'English', nameEn: 'English' },
  { code: 'ar', name: 'العربية', nameEn: 'Arabic' },
  { code: 'fr', name: 'Français', nameEn: 'French' },
  { code: 'ru', name: 'Русский', nameEn: 'Russian' },
  { code: 'id', name: 'Bahasa Indonesia', nameEn: 'Indonesian' },
];
