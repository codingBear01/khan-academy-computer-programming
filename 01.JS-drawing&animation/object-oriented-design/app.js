//<객체지향 프로그래밍>
//프로퍼티의 합 = 인스턴스

//추상 자료형을 정의할 땐 헝가리안법
//생성자
var Winston = function (nickname, age) {
  //this = 현재의 객체 인스턴스
  //this.property 쓰지 않으면 undefined 오류 남.
  //밑의 this문만 수정하면 모든 property에 해당 수정사항 적용. (ex. this.age = age + "years old"하면 모든 age 뒤에 "years old"가 붙음.)
  this.nickname = nickname;
  this.age = age;
};

//객체 지향 프로그래밍의 예
//전달 받은 properties를 생성자로 대입하여 새로운 instances 생성
var winstonTeen = new Winston("Winsteen", 15);
var winstonAdult = new Winston("Mr. Winst", 40);

//기존 상수형 프로그래밍
// var winstonTeen = {
//     "nickname": "Winsteen",
//     "age": "15",
// }
// var winstonAdult = {
//     "nickname": "Mr. Winst",
//     "age": "40",
// }
