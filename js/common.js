//검색
// 검색창 요소(.search) 찾기.
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');


// 검색창 요소를 클릭하면 실행.
searchEl.addEventListener('click', function(){
    searchInputEl.focus();
});

// 검색창 요소 내부 실제 input 요소에 포커스되면 실행.
searchInputEl.addEventListener('focus',function(){
    searchEl.classList.add('focused'); //focused 클래스 추가
    searchInputEl.setAttribute('placeholder','통합검색'); //html속성 지정('이름','값')
});

// 검색창 요소 내부 실제 input 요소에서 포커스가 해제(블러)되면 실행.
searchInputEl.addEventListener('blur',function(){
    searchEl.classList.remove('focused'); //focused 클래스 삭제
    searchInputEl.setAttribute('placeholder',''); //html속성 지정('이름','값')
});

//푸터에 현재 연도 출력
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //2021
