export const FAVORITE_IDS = [
  28941, // omena
  300, // porkkana
  11049, // banaani
  11062, // päärynä
  447, // mansikka
  442, // mustikka
  448, // vadelma
  355, // paprika
  11056, // ananas
  33, // suklaa
]

interface Favorite {
  name: string
  url: string
}

export const FAVORITES: Record<number, Favorite> = {
  28941: {
    name: 'Omena',
    url: 'https://www.satotukku.fi/i/o/jonagold.jpg',
  },
  300: {
    name: 'Porkkana',
    url: 'https://images.ctfassets.net/kt8yvydomzor/2Tqr2rhJPic8yycou2WMSO/5b030c1ce56c942900335bf320cd2cc3/Porkkanat_1440x550.png?w=1440&h=550&fit=fill&f=top&q=80&fm=jpg',
  },
  11049: {
    name: 'Banaani',
    url: 'https://www.satotukku.fi//i/o/banaani.jpg',
  },
  11062: {
    name: 'Päärynä',
    url: 'https://www.satotukku.fi//i/t/forelle_paaryna.8ee8a02c75.jpg',
  },
  447: {
    name: 'Mansikka',
    url: 'https://www.satotukku.fi//i/t/mansikka.8ee8a02c75.jpg',
  },
  442: {
    name: 'Mustikka',
    url: 'https://www.satotukku.fi//i/t/mustikka.8ee8a02c75.jpg',
  },
  448: {
    name: 'Vadelma',
    url: 'https://www.satotukku.fi//i/t/vadelma.8ee8a02c75.jpg',
  },
  355: {
    name: 'Paprika',
    url: 'https://www.satotukku.fi//i/t/paprika.8ee8a02c75.jpg',
  },
  11056: {
    name: 'Ananas',
    url: 'https://im.mtvuutiset.fi/image/2323438/landscape16_9/792/446/d1673db12e6bce651b7e068b6f60c06e/wK/1748059.jpg',
  },
  33: {
    name: 'Suklaa',
    url: 'https://www.fazer.fi/globalassets/global/fazer-fi/tuotteet/suklaa/suklaanpakkaus_860_390.jpg',
  },
}
