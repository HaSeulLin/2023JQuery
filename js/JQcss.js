// html head에 cdn으로 값을 가져온 후
// 다른 JS에서도 제이쿼리에 접근할 수 있다

// .css()를 이용해서 style값을 바꿀 수 있다
$("#header").css("color","blue");
// 값을 여러개 넣고 싶을 때는 객체형태로 작성
// 속성 이름을 적을 때 -하이픈 있다면 첫글자 대문자로 작성
// 값안에 변수나 자바스크립트 계산식을 `${}`로 넣을 수 있다
$("#header").css({
    // 객체 이름에 "" 써도 되고 안 써도 됨
    backgroundColor: "gray",
    "fontSize": `${3}rem`
});

// 버튼을 클릭했을 때, hidden 클래스 추가
$("#btn").on("click", function(){
    // 형제 태그를 통해서 p태그를 찾고 클래스 추가
    // this 통해서 현재 이벤트가 실행된 태그를 가져올 수 있다
    $(this).prev().addClass("hidden");
    console.log($(this));
})

// 버튼을 클릭했을 때, header가 숨김/보임
$("#btn2").on("click", function(){
    $("#header").toggleClass("hidden");
})

// 체크박스 클릭 li 디자인 바꿈
$("#todo").children().eq(0).on("click", function(e) {
    console.log(e.target.checked);

    // this를 통해서 이벤트가 발생한 태그를 가져올 수 있음
    // .prop(속성이름)을 통해서 속성값을 가져올 수 있다
    console.log($(this).prop("checked"));
    if(e.target.checked){
        $("#todo").css("color","gray").addClass("checked");
    }
    else {
        $("#todo").css("color","").removeClass("checked");
    }
    // $("#todo").toggleClass("checkLiStyle");
})

// table button 스타일 바꾸기
// 1) JS 이용하기 >> 요소 전부 들고와야 하니 All 사용해 배열 처리
/*
const btns = document.querySelectorAll("#number-btns button");
for (let i=0; i<btns.length; i++){
    btns[i].addEventListener("click", function(e){
        e.target.style.color = "red";
        e.target.disabled = "true";
    })
};
*/

// 2) JQ 이용하기
// 제이쿼리로 접근한 여러개의 태그는
// 배열로 처리하지 않고 바로 메소드를 이용해 모두 적용할 수 있다
$("#number-btns button").on("click", function(){
    $(this).css("color","red").prop("disabled","true");
});