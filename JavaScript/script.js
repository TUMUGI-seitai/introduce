// new LuminousGallrey(document.querySelectorAll(".gallery"));

// const luminousElem = document.querySelector('.gallery'); 
// //上記で要素が取得できていれば Luminous を初期化
// if( luminousElem !== null ) {
//   new Luminous(luminousElem);
// }


//querySelectorAll() で全ての luminous2 クラスを指定した a 要素を取得
const luminousElems = document.querySelectorAll('.gallery');
//取得した要素の数が 0 より大きければ
if( luminousElems.length > 0 ) {
  luminousElems.forEach( (elem) => {
    new Luminous(elem);
  });
}

// console.log(luminousElems);