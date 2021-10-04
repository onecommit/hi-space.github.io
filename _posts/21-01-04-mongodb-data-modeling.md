---
title: "[MongoDB] Data Modeling"
category: WEB
tags: web backend db
---

mongoDB의 모델링 구조는 크게 2가지로 나눌 수 있다.

- Embedded
- Reference

<!--more-->

# 💬 Document 관계 데이터 저장 유형

mongoDB의 모델링 구조는 크게 2가지로 나눌 수 있다.

## Embedded

![mongodb-embedded](/assets/images/mongodb-embedded.png)

- 2가지 종류의 document가 있을 때, 1개의 document 데이터를 다른 document key의 value에 저장하는 방법
- 자식 객체가 단독으로 사용되지 않고 부모객체 내에서만 사용될 때 사용
- 한번의 Read로 필요한 정보를 모두 읽어옴
- Strong Association

```bash
// Person
{
   _id: "joe",
   name: "Joe Bookreader",
   address: {
      street: "123 Fake Street",
      city: "Faketon",
      state: "MA",
      zip: "12345"
  }
}

// Address
{
   pataron_id: "joe",
   street: "123 Fake Street",
   city: "Faketon",
   state: "MA",
   zip: "12345"
}
```

`Person.address` 에 `Address` document가 통째로 저장되어 있다.

## Reference

![mongodb-reference](/assets/images/mongodb-reference.png)

- Document를 통째로 저장하는 것이 아니라 참조할 수 있도록 ID를 저장
- RDBMS의 정규화와 같은 개념으로 볼 수 있으며 Document를 다른 Collection에 연결하여 서로 참조하도록 구성
- child 객체가 parent 객체와는 별개로 단독으로 사용될 때 사용
- 자식 객체들을 조회하려면 여러번 Read를 해야 함
- 데이터 일관성이 상대적으로 중요할 때 사용
    - `user` document에서 특정 field 값이 변경된다고 가정하자. embedded로 작성된 경우, `contact` document와 `access` document에 있는 `user` 내용이 모두 update가 되어야 해서 일관성을 유지하기가 어려워진다. 하지만 reference로 document가 저장되어 있다면 `user` 의 field 부분만 수정해주면 참조하고 있는 모든 document는 수정하지 않아도 되기 때문에 일관성을 유지할 수 있다.
- Weak Association

```bash
// Publisher
{
   _id: "oreilly",
   name: "O'Reilly Media",
   founded: 1980,
   location: "CA"
}

// Book
{
   _id: 123456789,
   title: "MongoDB: The Definitive Guide",
   author: [ "Kristina Chodorow", "Mike Dirolf" ],
   published_date: ISODate("2010-09-24"),
   pages: 216,
   language: "English",
   **publisher_id: "oreilly" // Publisher._id**
}
```

`Book.publisher._id` 에 `Publisher._id`의 value가 저장되어 있다.

## 시나리오

```bash
// Publisher
{
   _id: "oreilly",
   name: "O'Reilly Media",
   founded: 1980,
   location: "CA"
}

// Book 1
{
   _id: 123456789,
   title: "MongoDB: The Definitive Guide",
   author: [ "Kristina Chodorow", "Mike Dirolf" ],
   published_date: ISODate("2010-09-24"),
   pages: 216,
   language: "English",

   **publisher_id: "oreilly" // Publisher._id**
}

// Book 2
{
   _id: 234567890,
   title: "50 Tips and Tricks for MongoDB Developer",
   author: "Kristina Chodorow",
   published_date: ISODate("2011-05-06"),
   pages: 68,
   language: "English",

   **publisher_id: "oreilly" // Publisher._id**
}
```

### **시나리오 1**

만약 publisher 의 ‘name’ 을 변경하거나 ‘age’ 라는 데이터를 추가해야 하는 경우에 DB를 수정해야 하는데, 어떻게 수정해야 할까요?

Embedded 방식으로 저장된 데이터는 Publisher, Book 의 Document 를 모두 수정해서 데이터의 `일관성`을 유지해야 합니다. 복잡하거나 데이터가 자주 변경되는 상황이 생긴다면 `일관성`을 유지하지가 어려워 질 수 있습니다.

Reference 방식으로 저장된 데이터는 Publisher Document 만 수정해주면 참조하고 있는 모든 Document 는 수정할 필요가 없습니다. 자연스럽게 데이터의 `일관성`이 유지가 됩니다.

### **시나리오 2**

다음과 같이 Document 가 모두 관계가 저장되어 있습니다.

- Publisher Document 개수: 100개
- Book Document 개수: 100만개

극단적으로 100만개의 Book Document 를 Publisher 정보를 포함하여 불러오려고 할 때, 어떤 차이점을 발견 할 수 있을까요?

Embedded 방식으로 저장된 데이터는 아무런 어려움 없이 Book Document 를 가져 올 때, Publisher 정보를 통째로 가져올 수 있습니다.

Reference 방식으로 저장된 데이터는 `Publisher_id` 에 해당되는 Publisher 정보를 포함하도록 요청해서 가져와야 하기 때문에 한번의 요청만으로는 Publisher 정보를 가져 올 수는 없을 것입니다. 즉, 추가적인 요청을 해야만 Publisher 정보를 가져 올 수 있다는 말입니다.

단편적으로 시나리오 1과 2만을 같이 고려 할 때, Embedded 또는 Reference 둘 중 어떠한 저장 방법이 효율적일지는 서비스의 기획에 따라 달라 질 것 같습니다. 퍼포먼스의 중점을 둔다면 시나리오1을 선택하여 빠른 시간내에 데이터를 불러와야 할 것이고 개발의 속도(효율성, 편의성)에 중점을 둔다면 시나리오2를 선택할 수 있을 것입니다.

---

# 💬 관계 유형

3가지 방법으로 관계를 정의 할 수 있다.

- One to Few
- One to Many
- One to Squillions

## One-to-Few

```bash
// person
{
  name: "Edward Kim",
  hometown: "Jeju",
  addresses: [
    { street: 'Samdoil-Dong', city: 'Jeju', cc: 'KOR' },
    { street: 'Albert Rd', city: 'South Melbourne', cc: 'AUS' }
  ]
}
```

- 쿼리 한번에 모든 정보를 가질 수 있지만, 내포된 entity만 독자적으로 불러올 수 없다.

## One-to-Many

```bash
// parts
{
  _id: ObjectID('AAAA'),
  partno: '123-aff-456',
  name: 'Awesometel 100Ghz CPU',
  qty: 102,
  cost: 1.21,
  price: 3.99
}

// products
{
  name: 'Weird Computer WC-3020',
  manufacturer: 'Haruair Eng.',
  catalog_number: 1234,
  parts: [
    **ObjectID('AAAA'),
    ObjectID('DEFO'),
    ObjectID('EJFW')**
  ]
}
```

- 각각의 문서를 독자적으로 다룰 수 있어서 쉽게 추가, 갱신, 삭제가 가능하지만 여러번 호출해야 하는 단점이 있다.
- 위의 경우, category number를 기준으로 products를 찾고, product의 parts 배열에 담긴 모든 parts를 찾는 방식으로 여러번의 Read가 필요하다.
    - `products`의 `parts` 배열을 가지고올 때, 한번의 요청으로는 데이터를 읽을 수 없고 reference 된 곳에 추가적인 요청을 해야만 데이터를 가져올 수 있다.

```bash
// products
{
  name: 'Weird Computer WC-3020',
  manufacturer: 'Haruair Eng.',
  catalog_number: 1234,
  parts: [
    **{ id: ObjectID('AAAA'), name: 'Awesometel 100Ghz CPU' }, // 부품 이름 비정규화
    { id: ObjectID('DEFO'), name: 'AwesomeSize 100TB SSD' },
    { id: ObjectID('EJFW'), name: 'Magical Mouse' }**
  ]
}
```

- 필수적으로 2번 이상 쿼리를 해야 하는 형태를 벗어나기 위해 `name`을 위와 같이 비정규화 할 수 있다.
- 매번 데이터를 불러오는 비용을 줄일 수 있는 장점이 있다.
- `part` 의 `name` 을 변경할 때는 모든 `products` 에 포함된 이름도 변경해야 하는 단점이 있다. 그래서 업데이트가 적고 읽는 비율이 높을 때 유리하다.

## One-to-Squillions

```bash
// host
{
  _id : ObjectID('AAAB'),
  name : 'goofy.example.com',
  ipaddr : '127.66.66.66'
}

// logmsg
{
  time : ISODate("2015-09-02T09:10:09.032Z"),
  message : 'cpu is on fire!',
  **host: ObjectID('AAAB')**       // Host 문서를 참조
}
```

- 이벤트 로그와 같이 많은 데이터가 필요한 경우 단일 document의 크기가 16MB를 넘지 못하기 때문에 parent-referencing 방법을 사용한다.

---

Document를 참조하는 방법은 Manual Reference와 DBRef 를 사용하는 방법 두가지가 있다.

## Manual Reference

- 참조할 다른 document의 ObjectID를 document 내 하나의 key로 저장
- key 값인 id를 통해 참조할 document를 얻어와, 해당 document의 데이터를 얻는 방식
- 같은 collection에 있는 경우 사용
- 일반적인 방법

```bash
db.places.insert({
    name: "Broadway Center",
    url: "bc.example.net"
})

db.people.insert({
    name: "Erin",
    **places_id: db.places.findOne({name: "Broadway Center"})._id,**
    url:  "bc.example.net/Erin"
})
```

![mongodb-manual-reference](/assets/images/mongodb-manual-reference.png)

```bash
> db.places.findOne({ _id: db.people.findOne({name: "Erin"}).places_id }).url
```

- `people` 에서 Erin 이라는 `name`을 가진 document의 `place_id` 를 통해 `place` 의 `url` 을 얻어옴

## DBRef

- 서로 다른 collection에 들어있는 reference 방식을 표현할 때 사용
    - `$ref` : 참조가 되는 document가 속한 collection 이름
    - `$id` : 참조되는 document의 `_id` 필드
    - `$db` : 참조되는 document가 속한 DB 이름 (optional)

`users` 와 `notes` collection에 documents를 아래와 같이 추가해보자.

```bash
> db.users.insert({"_id" : "mike",
										"display_name" : "Mike D"})
> db.users.insert({"_id" : "kristina",
										"display_name" : "Kristina C"})

> db.notes.insert({"_id" : 5,
										"author" : "mike",
										"text" : "MongoDB is fun!"})
> db.notes.insert({"_id" : 20,
										"author" : "kristina",
										"text" : "... and DBRefs are easy, too",
										"references": [
												{"$ref" : "users", "$id" : "mike"},
												{"$ref" : "notes", "$id" : 5}
										]
									})

> db.users.find().pretty()
{ "_id" : "mike", "display_name" : "Mike D" }
{ "_id" : "kristina", "display_name" : "Kristina C" }

> db.notes.find().pretty()
{ "_id" : 5, "author" : "mike", "text" : "MongoDB is fun!" }
{
    "_id" : 20,
    "author" : "kristina",
    "text" : "... and DBRefs are easy, too",
    "references" : [
        DBRef("users", "mike"),
        DBRef("notes", 5)
    ]
}
```

---

# 6가지 원칙

1. 피할 수 없는 이유가 없다면 문서에 포함할 것.
2. 객체에 직접 접근할 필요가 있다면 문서에 포함하지 않아야 함.
3. **배열이 지나치게 커져서는 안됨. 데이터가 크다면 one-to-many로, 더 크다면 one-to-squillions로. 배열의 밀도가 높아진다면 문서에 포함하지 않아야 함.**
4. 애플리케이션 레벨 join을 두려워 말 것. index를 잘 지정했다면 관계 데이터베이스의 join과 비교해도 큰 차이가 없음.
5. **비정규화는 읽기/쓰기 비율을 고려할 것. 읽기를 위해 join을 하는 비용이 각각의 분산된 데이터를 찾아 갱신하는 비용보다 비싸다면 비정규화를 고려해야 함.**
6. MongoDB에서 어떻게 데이터를 모델링 할 것인가는 각각의 애플리케이션 데이터 접근 패턴에 달려있음. 어떻게 읽어서 보여주고, 어떻게 데이터를 갱신한 것인가.

## Reference

- [https://devhaks.github.io/2019/11/30/mongodb-model-relationships/](https://devhaks.github.io/2019/11/30/mongodb-model-relationships/)
- [https://blog.voidmainvoid.net/241](https://blog.voidmainvoid.net/241)
- [https://edykim.com/ko/post/summary-of-six-rules-for-designing-a-mongodb-schema/](https://edykim.com/ko/post/summary-of-six-rules-for-designing-a-mongodb-schema/)
