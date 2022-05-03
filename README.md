## 웹개발 종합반 강의 진행사항
- [x] 1주차 : HTML, CSS, Javascript 기본 이해하기(+부트스트랩 사용법) / 팬명록 페이지 만들기 과제
- [x] 2주차 : jQuery, Ajax로 API 데이터 가져오기(미세먼지, 따릉이, 서울기온) / 팬명록 페이지에 현재 서울 기온 삽입
- [x] 3주차 : python, MongoDB / 웹스크래핑(지니 홈페이지 노래 1위~50위 순위, 제목, 가수명 불러오기)
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
> 
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
```
>
> ### 회고
> > 배우고, 내 손으로 무언가를 만들어 가는 것. 내가 개발을 다시 공부하게 된 이유 중 하나이다. 항해99를 준비하면서 "무조건 해내겠다."라는 의지 뚜렸해지고, 좋아하는 공부를 한다는 설레임이 너무 좋다. 물론 어렵기도 하지만, 꼭 이겨내겠다는 다짐을 한다. 


---

## 3주차
> ### 요약
> mongoDB 기본 세팅 : 개발환경에 따라 아래와 같은 오류가 나서 해결
> 
> 'certifi' 패키지 추가 설정 및 불러오기 및 client 변수 끝에 tlsCAFile=ca 값 추가
> 
<img src="https://github.com/YooJinRa/preparation_hanghae_8th/blob/main/image01.png" width=1000px>

```
from pymongo import MongoClient
import certifi

ca = certifi.where()

client = MongoClient('mongodb+srv://test:sparta@cluster0.svgu3.mongodb.net/cluster0?retryWrites=true&w=majority', tlsCAFile=ca)
db = client.dbsparta

# 저장 - 예시
doc = {'name':'bobby','age':21}
db.users.insert_one(doc)

# 한 개 찾기 - 예시
user = db.users.find_one({'name':'bobby'})

# 여러개 찾기 - 예시 ( _id 값은 제외하고 출력)
all_users = list(db.users.find({},{'_id':False}))

# 바꾸기 - 예시
db.users.update_one({'name':'bobby'},{'$set':{'age':19}})

# 지우기 - 예시
db.users.delete_one({'name':'bobby'})
```
> 웹 스트래핑

```
import requests
from bs4 import BeautifulSoup

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
data = requests.get('https://www.genie.co.kr/chart/top200?ditc=M&rtm=N&ymd=20210701', headers=headers)
soup = BeautifulSoup(data.text, 'html.parser')

songs = soup.select('#body-content > div.newest-list > div > table > tbody > tr')

for song in songs:
    num = song.select_one('td.number').text[0:2].strip()
    title = song.select_one('td.info > a.title.ellipsis').text.strip()
    singer = song.select_one('td.info > a.artist.ellipsis').text
    print(num, title, singer)
```

