const src1 = 'https://www.jamesb.com/wp-content/uploads/2016/05/peles-well-wawaloli-james-brandon.jpg';
const src = 'https://i.pinimg.com/564x/81/56/2d/81562dac52b0e7d179fa51d930ffffd4--dc-comic-comic-art.jpg';
const src2 = 'https://cdn.vox-cdn.com/thumbor/FW2lDMzZL3FpKpMdo1CRLL58xIQ=/0x0:3840x2160/1200x800/filters:focal(1562x816:2176x1430)/cdn.vox-cdn.com/uploads/chorus_image/image/57642853/Roadster_Front_58.0.jpg';

const addSrc = 'http://bit.ly/2DDvgSf';


export const data = [
  {
    id: 'newImage',
    source: addSrc,
    tags: []
  },
  {
    id: 1,
    source: src1,
    tags: ['home','island','hawaii']
  },
  {
    id: 2,
    source: src2,
    tags: ['tesla','car','goals']
  },
  {
    id: 3,
    source: src,
    tags: ['anime','babe','super','car']
  }
];

export const noteData = [
  {
    id: 1,
    title: 'Note 1',
    date: '25/Jan/2017',
    tags:['Ipsum','seed','text'],
    body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
    
  },
  {
    id: 2,
    title: 'Note 1',
    date: '25/Mar/2017',
    tags:['Ipsum','seed','text'],
    body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
    
  }
];