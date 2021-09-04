---
title: "[MongoDB] JS Mongoose"
category: WEB
tags: web backend db
---

<!--more-->

# Schema

| Data Type  |  Description |
|---|---|
|  String |   |
|  Number |   |
|  Boolean |   |
|  Buffer |   |
|  Date |   |
|  Array |   |
|  Schema.types.ObjectId |   |
|  Schema.types.Mixed |   |


- 모델: DB의 데이터와 직접 연결되는 object
- 스키마: 이 데이터의 구조 혹은 구성 내용

# Populate

- 하나의 document가 다른 document의 ObjectId를 쓰는 경우, ObjectId를 실제 객체로 치환하는 작업이 필요하다. 이것을 해주는 것이 populate 이다.

이와 같이 schema가 정의 되어 있는 경우,

```graphql
const userSchema = new mongoose.Schema({
  name: String,
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  bestFriend: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});
mongoose.model('User', userSchema);
```

아래와 같이 `populate` 를 사용해 `bestFriend` 를 가리키면,

```jsx
User.findOne({
  name: 'Yoo'
}).populate('bestFriend').exec((err, data) => {
  console.log(data);
});
```

`bestFriend` 의 document가 치환되어 얻어진다.

```graphql
{
  _id: { $oid: '574e9c0f9f663a1700fbe06e' },
  name: 'Yoo',
  friends: [{ $oid: '59a66f8372262500184b5363' }, { $oid: '574e8f46c9100617001c9cb9' }],
  bestFriend: {
    _id: { $oid: '574e8f46c9100617001c9cb9' },
    name: 'hero',
    friends: [{ $oid: '59a66f8372262500184b5363' }, { $oid: '574e9c0f9f663a1700fbe06e' }],
    bestFriend: { $oid: '59a66f8372262500184b5363' }
  }
}
```

reference 된 documnet의 특정 field만 보고 싶으면, 뒤에 param 값을 추가한다.
아래의 경우 `name` 과 `bestFriend` 값만 보고 싶다고 요청한 것이다.

```jsx
User.findOne({
  name: 'zero'
}).populate('bestFriend', 'name bestFriend').exec((err, data) => {
  console.log(data);
});
```

```jsx
User.findOne({
  name: 'zero'
}).populate({
  path: 'bestFriend',
  populate: {
    path: 'bestFriend',
    select: 'name friends'
  },
}).exec((err, data) => {
  console.log(data);
});
```

```jsx
{
  _id: { $oid: '574e9c0f9f663a1700fbe06e' },
  name: 'zero',
  friends: [{ $oid: '59a66f8372262500184b5363' }, { $oid: '574e8f46c9100617001c9cb9' }],
  bestFriend: {
    _id: { $oid: '574e8f46c9100617001c9cb9' },
    name: 'hero',
    bestFriend: { $oid: '59a66f8372262500184b5363' }
  }
}
```

DB 자체에서 JOIN 처럼 합쳐주는 것이 아니라 js 단에서 합쳐서 결과값을 return 해주는 것이기 때문에 성능이 좋지는 않다. 특히 중첩되면 성능이 크게 저하된다.

---

## Reference

- [https://darrengwon.tistory.com/188](https://darrengwon.tistory.com/188)
- [https://poiemaweb.com/mongoose](https://poiemaweb.com/mongoose)
