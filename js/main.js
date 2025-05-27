const basketStarterEL = document.querySelector('header .basket-starter');
const basketEL = basketStarterEL.querySelector('header .basket');

basketStarterEL.addEventListener('click', function(event){
  event.stopPropagation(); // 이벤트 전파를 막음(버블링 방지)
  // basketStarter 영역을 클릭했을 때
  if (basketEL.classList.contains('show')){ // contains는 존재하는지 T/F로 반환
    // hide인 상태
    hideBasket(); // show 클래스를 제거
  } else {
    // show인 상태
    showBasket();// show 클래스를 추가
  }
});
basketEL.addEventListener('click', function(event){
  event.stopPropagation(); // 이벤트 전파를 막음(버블링 방지)
  // basket 영역을 클릭했을 때 아무것도 하지 않음 => 외부 영역을 눌러도 영향X
});
window.addEventListener('click', function(){
  basketEL.classList.remove('show'); 
  // show 클래스를 제거 => 외부 영역을 눌러도 영향X
});

const headerEL = document.querySelector('header');
const searchWrapEL = headerEL.querySelector('.search-wrap');
const searchStarterEL = headerEL.querySelector('.search-starter');
const searchCloserEL = searchWrapEL.querySelector('.search-closer');
const searchShadowEL = searchWrapEL.querySelector('.shadow');

searchStarterEL.addEventListener('click',function(){
  showSearch(); // show 클래스를 추가
})
searchCloserEL.addEventListener('click',function(){
  hideSearch(); // show 클래스를 제거
})
searchShadowEL.addEventListener('click',function(){
  hideSearch(); // show 클래스를 제거
})


// 추상화 
function showBasket () {basketEL.classList.add('show')}; 
function hideBasket () {basketEL.classList.remove('show')}; 
function showSearch () {
  headerEL.classList.add('searching')
}; 
function hideSearch () {
  headerEL.classList.remove('searching')
}; 
