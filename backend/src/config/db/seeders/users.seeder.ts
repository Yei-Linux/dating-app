const passwordHashed =
  '$2b$10$KRutgCkNIcsqsiAQhRVBk.mUz5jkOiq7lgM7EF8CcYy98KyXYPSuS';

export const usersSeeder = [
  {
    id: 1,
    email: 'andrewtate@gmail.com',
    name: 'Andrew',
    lastName: 'Tate',
    age: 36,
    description: 'Top G',
    profileImg:
      'https://img.asmedia.epimg.net/resizer/6PGLeILjDug_Fm3k2n2FXOltLcI=/1472x1104/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/YO3EXANZVFB6RBQVH5AT4NSTTY.png',
    countryId: 1,
    genderId: 2,
    genderToMatchId: 1,
    password: passwordHashed,
  },
  {
    id: 2,
    email: 'leomessi@gmail.com',
    name: 'Leonel',
    lastName: 'Messi',
    age: 36,
    description: 'The GOAT',
    profileImg:
      'https://fotografias.antena3.com/clipping/cmsimages02/2022/12/23/61C0B7E6-300F-407A-AE9A-FD8548D6FF07/messi-copa-mundo_104.jpg?crop=2095,2095,x337,y0&width=1200&height=1200&optimize=low&format=webply',
    countryId: 2,
    genderId: 2,
    genderToMatchId: 1,
    password: passwordHashed,
  },
  {
    id: 3,
    email: 'jordanPeterson@gmail.com',
    name: 'Jordan',
    lastName: 'Peterson',
    age: 61,
    description: '',
    profileImg:
      'https://media.licdn.com/dms/image/C4D03AQGrk6TtUakefA/profile-displayphoto-shrink_800_800/0/1649854039220?e=2147483647&v=beta&t=bYsBViVCE6yfKiI42iXx_fjYYbGLN7YisGkuFbAg37Y',
    countryId: 1,
    genderId: 2,
    genderToMatchId: 1,
    password: passwordHashed,
  },
  {
    id: 4,
    email: 'anna@gmail.com',
    name: 'Anna',
    lastName: 'Salud',
    age: 22,
    description: '',
    profileImg:
      'https://cdn.pixabay.com/photo/2022/12/28/17/48/persephone-7683492_1280.jpg',
    countryId: 1,
    genderId: 1,
    genderToMatchId: 2,
    password: passwordHashed,
  },
  {
    id: 5,
    email: 'siri@gmail.com',
    name: 'Siri',
    lastName: 'Voice',
    age: 25,
    description: '',
    profileImg:
      'https://static.india.com/wp-content/uploads/2016/07/13063060_1009916129100260_6763847525397891655_o.jpg',
    countryId: 1,
    genderId: 1,
    genderToMatchId: 2,
    password: passwordHashed,
  },
  {
    id: 6,
    email: 'lilith@gmail.com',
    name: 'Lilith',
    lastName: 'Ada',
    age: 23,
    description: '',
    profileImg:
      'https://phantom-marca.unidadeditorial.es/44ef8eb9ae1e6ebf56caca3d0a8dbe5b/resize/828/f/jpg/assets/multimedia/imagenes/2023/06/15/16868246750166.jpg',
    countryId: 1,
    genderId: 1,
    genderToMatchId: 2,
    password: passwordHashed,
  },
];
