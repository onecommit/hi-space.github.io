---
title: "[MongoDB] CRUD command"
category: WEB
tags: web backend db
---

```sh
# Insert
db.collection.insertOne()
db.collection.insert Many()
db.collection.insert()

# Read
db.collection.find()

# Update
db.collection.updateOne()
db.collection.updateMany()
db.collection.replaceOne()

# Delete
db.collection.deleteOne()
db.collection.deleteMany()
```

<!--more-->

# Create

---

```bash
db.collection.insertOne()
db.collection.insertMany()
db.collection.insert()
```

![mongodb-create](/assets/images/mongodb-create.png)

# Read

---

```bash
db.collection.find()
```

![mongodb-read](/assets/images/mongodb-read.png)

| operator  |  desc |
|---|---|
| $eq  | (equals) 주어진 값과 일치하는 값  |
| $gt  |  (greater than) 주어진 값보다 큰 값 |
| $gte  |  (greather than or equals) 주어진 값보다 크거나 같은 값 |
| $lt | (less than) 주어진 값보다 작은 값  |
| $lte  | (less than or equals) 주어진 값보다 작거나 같은 값  |
| $ne |(not equal) 주어진 값과 일치하지 않는 값   |
| $in  | 주어진 배열 안에 속하는 값  |
| $nin  | 주어빈 배열 안에 속하지 않는 값  |

### All Documents

```bash
// SELECT * FROM inventory
db.inventory.find( {} )
```

### Sorted data

```bash
db.orders.find().sort( { "amount": 1, "_id": -1 } )
```

### limited data

```bash
db.orders.find().limit(3)
```

### Specify Docmuent

```bash
// SELECT * FROM inventory WHERE status = "D"
db.inventory.find( { status: "D" } )
```

### Specify Conditions

```bash
// SELECT * FROM inventory WHERE status in ("A", "D")
db.inventory.find( { status: { $in: [ "A", "D" ] } } )

// SELECT * FROM inventory WHERE status = "A" AND qty < 30
db.inventory.find( { status: "A", qty: { $lt: 30 } } )

// SELECT * FROM inventory WHERE status = "A" OR qty < 30
db.inventory.find( { $or: [ { status: "A" }, { qty: { $lt: 30 } } ] } )

// SELECT * FROM inventory WHERE status = "A" AND ( qty < 30 OR item LIKE "p%")
db.inventory.find( {
     status: "A",
     $or: [ { qty: { $lt: 30 } }, { item: /^p/ } ]
} )
```

# Update

---

```bash
db.collection.updateOne()
db.collection.updateMany()
db.collection.replaceOne()
```

![mongodb-update](/assets/images/mongodb-update.png)

### update specify field

```bash
db.people.update( { name: "Abet" }, { $set: { age: 20 } } )
```

### replace to new document

```bash
db.people.update( { name: "Betty" }, { "name": "Betty 2nd", age: 1 })
```

### delete specify field

```bash
db.people.update( { name: "David" }, { $unset: { score: 1 } } )
```

### append data in array

```bash
db.people.update(
		 { name: "Charlie" },
		 { $push: { skills: "angularjs" } }
)

db.people.update(
		{ name: "Charlie" },
		{ $push: {
				skills: {
					$each: [ "c++", "java" ],
					$sort: 1 // -1: descending
				}
			}
		}
)
```

### remove data in array

```bash
// angularjs, java 가 포함되어 있는 skills 데이터 제거
db.people.update(
	{ name: "Charlie" },
	{ $pull:
		{ skills:
				{ $in: ["angularjs", "java" ] }
		}
	}
)
```

# Delete

---

```bash
db.collection.deleteOne()
db.collection.deleteMany()
```

![mongodb-delete](/assets/images/mongodb-delete.png)

### delete specify document

```bash
db.books.remove({"name": "Book1"})
```

# Drop DB

```bash
db.dropDatabase()
```

---

## Reference

- [https://velopert.com/479](https://velopert.com/479)
