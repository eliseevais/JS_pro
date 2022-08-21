const goods = [
  {id: 1, title: 'Африка', price: 5500, img: "https://dostup1.ru/netcat_files/83/34/zhirafy200.jpg"},
  {id: 2, title: 'Антарктида', price: 8500, img: "http://www.biznes-portal.com/images/news/52491_anounce.jpg"},
  {id: 3, title: 'Австралия', price: 6500, img: "https://sun9-76.userapi.com/impf/c627628/v627628305/2ebc6/REK6X57JERA.jpg?size=200x150&quality=96&sign=2a40dbdc3284cb36bcaabbcd292bb61a&c_uniq_tag=lKUVxQtiP4EMBvAa65lUnjiLKi_lQ2z2eNcujGsIzEw&type=album"},
  {id: 4, title: 'Южная Америка', price: 7500, img: "http://4.bp.blogspot.com/_os112ZJsFho/S4HCn0v5pRI/AAAAAAAAAck/X1Ee1kV3SQg/s200/2348882323_d03c196a1c.jpg"},
  {id: 5, title: 'Азия', price: 3500, img: "https://3.bp.blogspot.com/-V1CKXQaFlD0/Wj5y2DoYAOI/AAAAAAAAATU/c0RsP8X-AC8DJ0Gnjcacq5nK8FdSAis5QCLcBGAs/s200/candi-borobudur-jogja.jpg"},
  {id: 6, title: 'Европа', price: 4000, img: "https://i.pinimg.com/custom_covers/200x150/279997370521988910_1428374779.jpg"},
  {id: 7, title: 'Северная Америка', price: 8000, img: "https://us-website.wannar.com/scenics_images/373/373-1_640x480.jpg?x-oss-process=image/resize,w_200"},
  {id: 8, title: 'Арктика', price: 9000, img: "http://www.biznes-portal.com/images/news/58933_anounce.jpg"},
];

const renderGoodsItem = goodItem => {
  return `<div class="goods-item">
            <img src="${goodItem.img}">
            <h3>${goodItem.title}</h3>
            <p>${goodItem.price}</p>
            <button class="buy-btn">Добавить</button>
          </div>`
};

const renderGoodsList = list => {
  let goodsList = list.map(goodItem => renderGoodsItem(goodItem)).join('');
  document.querySelector('.goods-list').innerHTML = goodsList;
}

renderGoodsList(goods);
