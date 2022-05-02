## 웹개발 종합반 강의 진행사항
- [x] 1주차 : HTML, CSS, Javascript 기본 이해하기(+부트스트랩 사용법) / 팬명록 페이지 만들기 과제
- [x] 2주차 : jQuery, Ajax로 API 데이터 가져오기(미세먼지, 따릉이, 서울기온) / 팬명록 페이지에 현재 서울 기온 삽입
- [ ] 3주차
- [ ] 4주차
- [ ] 5주차

## 1주차
> ### 요약
> [부트스트랩](https://getbootstrap.com/docs/5.0/getting-started/introduction/) 기본설정 : 
```
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"></script>
    <title>title</title>
</head>
<body></body>
</html>
```
> [구글 웹폰트](https://fonts.google.com/?subset=korean)
> CSS : 내용 가운데 정렬하기
```
display: flex;
flex-direction: column; /* row : 나란히 */
justify-content: center;
align-items: center;
```
> Javascript : 변수, 자료형, 함수, 조건문, 반복문

---

## 2주차
> ### 요약
> jQuery : hide() / show() / empty() / append() / attr() / text() / includes() / split()
> Ajax 기본 구조
```
$.ajax({
  type: "GET",
  url: "URL입력",
  data: {},
  success: function(response){
    console.log(response)
  }
})
```
>for문
```
for(let i = 0; i < a.length; i++){
    console.log(a);
}


