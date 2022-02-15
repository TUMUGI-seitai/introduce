//querySelectorAll() で全ての luminous3 クラスを指定した a 要素を取得
const luminousGalleryElems = document.querySelectorAll('.gallery');
// または getElementsByClassName() を使ってもほぼ同じ（※）
//const luminousGalleryElems = document.getElementsByClassName('luminous3');
 //取得した要素の数が 0 より大きければ
if( luminousGalleryElems.length > 0 ) {
  // LuminousGallery で初期化
  new LuminousGallery(luminousGalleryElems);
}
