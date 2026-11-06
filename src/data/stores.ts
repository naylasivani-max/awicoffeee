import { Store } from '../types/content';

export const stores: Store[] = [
{
  id: 'surabaya',
  city: 'Surabaya',
  region: 'East Java',
  listingName: 'Awi Coffee',
  address:
  'Jl. Raya Darmo Permai III No. A15, Pradahkalikendal, Dukuhpakis, Surabaya, East Java 60188',
  mapsUrl:
  'https://google.com/maps?q=Awi+Coffee,+Jl.+Raya+Darmo+Permai+III+No.A15,+Pradahkalikendal,+Dukuhpakis,+Surabaya,+East+Java+60188&ftid=0x2dd7fd3874840c2b:0x346cb3f33acec0a1&entry=gps',
  embedQuery: 'Awi Coffee, Jl. Raya Darmo Permai III No.A15, Surabaya',
  verified: true
},
{
  id: 'jakarta',
  city: 'Jakarta',
  region: 'North Jakarta',
  listingName: 'AWI COFFEE',
  address: 'Jl. Muara Karang Raya Z 4 S No. 30, Pluit, Penjaringan, North Jakarta, Jakarta 14450',
  mapsUrl:
  'https://www.google.com/maps?q=AWI+COFFEE,+Jl.+Muara+Karang+Raya+Z+4+S+no.+30,+RT.11/RW.3,+Pluit,+Penjaringan,+North+Jakarta+City,+Jakarta+14450&ftid=0x2e6a1d326b895f07:0x52036ba462307fa9&hl=en-ID&gl=id&shorturl=1',
  embedQuery: 'AWI COFFEE, Jl. Muara Karang Raya Z 4 S no. 30, Pluit, Jakarta',
  verified: true
},
{
  id: 'medan',
  city: 'Medan',
  region: 'North Sumatra',
  listingName: 'Kopi Sidikalang',
  address: 'Jl. Mojopahit No. 75 C, Petisah Tengah, Medan Petisah, Medan, North Sumatra 20111',
  mapsUrl:
  'https://www.google.com/maps?q=Kopi+Sidikalang,+Jl.+Mojopahit+No.75+C,+Petisah+Tengah,+Medan+Petisah,+Kota+Medan,+Sumatera+Utara+20111&ftid=0x303131d147d108a9:0x91df753cdd8363cb&hl=en-ID&gl=id&shorturl=1',
  embedQuery: 'Kopi Sidikalang, Jl. Mojopahit No.75 C, Medan',
  verified: false,
  note:
  'Supplied as “Binjai / Medan”. The map listing shows “Kopi Sidikalang” in Medan, not Binjai. detikFinance reports AWICOFFEE opened a Medan branch on Jl. Mojopahit in 2009. Please confirm the store name and address before publication.'
}];