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

const searchInputEL = searchWrapEL.querySelector('input');

const headerMenuELS = [...headerEL.querySelectorAll('ul.menu > li')]; // 얕은 복사
const searchDelayELS = [...searchWrapEL.querySelectorAll('li')];

searchStarterEL.addEventListener('click',showSearch);
searchCloserEL.addEventListener('click',hideSearch); 
searchShadowEL.addEventListener('click',hideSearch); 


// 추상화 
function showBasket () {basketEL.classList.add('show')}; 
function hideBasket () {basketEL.classList.remove('show')}; 
function showSearch () {
  headerEL.classList.add('searching')
  document.documentElement.classList.add('fixed')
  headerMenuELS.reverse().forEach(function(el,index){
    el.style.transitionDelay = index * .4 / headerMenuELS.length + 's'; // transition-delay를 length에 따라 설정
  })
  searchDelayELS.forEach(function(el,index){
    el.style.transitionDelay = index * .4 / searchDelayELS.length + 's'; // transition-delay를 length에 따라 설정
  })
  setTimeout(function (){
    searchInputEL.focus(); // 600ms 후에 input에 focus
  },600) // 600ms 후에 실행
}; 
function hideSearch () {
  headerEL.classList.remove('searching')
  document.documentElement.classList.remove('fixed')
  headerMenuELS.reverse().forEach(function(el,index){
    el.style.transitionDelay = index * .4 / headerMenuELS.length + 's'; // transition-delay를 length에 따라 설정
  })
  searchDelayELS.forEach(function(el,index){
    el.style.transitionDelay = index * .4 / searchDelayELS.length + 's'; // transition-delay를 length에 따라 설정
  })
  searchDelayELS.reverse()
  searchInputEL.value = ''; // input의 value를 초기화
}; 


