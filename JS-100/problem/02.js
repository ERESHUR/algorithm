// # 문제2 : 배열의 내장함수
// <pass>부분에 배열 내장함수를 이용하여 코드를 입력하고 다음과 같이 출력되게 하세요.
// 출력 : [200, 100, 10000, 300]
// https://obsidian-scene-3ac.notion.site/2-f1f8d74e9ad141e281069cdd1a51dc87

// 데이터
var arr = [200, 100, 300];
//pass
arr.splice(2, 0, 1000);
// 출력
console.log(arr); // [ 200, 100, 1000, 300 ]
