db = connect('localhost:27017/db');

var addressInfo = db.users.aggregate([
  { $unwind: '$addresses' },
  {
    $lookup: {
      from: 'addresses',
      localField: 'addresses',
      foreignField: '_id',
      as: 'addressInfo',
    },
  },
  { $unwind: '$addressInfo' },
  { $limit: 10 },
  { $skip: 5 },
]);

var sortedUserInfo = db.users.aggregate([
  { $sort: { name: 1 } },
  {
    $lookup: {
      from: 'addresses',
      let: { addressIds: '$addresses' },
      pipeline: [
        { $match: { $expr: { $in: ['$_id', '$$addressIds'] } } },
        { $sort: { city: 1 } },
      ],
      as: 'addressInfo',
    },
  },
  { $skip: 5 },
  { $limit: 5 },
]);

var selectedValues = db.users.aggregate([
  {
    $lookup: {
      from: 'addresses',
      let: { addressIds: '$addresses' },
      pipeline: [
        { $match: { $expr: { $in: ['$_id', '$$addressIds'] } } },
        { $sort: { city: 1 } },
      ],
      as: 'AddressInfo',
    },
  },
  { $unwind: '$AddressInfo' },
  { $project: { _id: 0, UserID: '$_id', AddressInfo: 1 } },
]);

print('question1 ********************************************************');

while (addressInfo.hasNext()) {
  let everyAddress = addressInfo.next();
  print(JSON.stringify(everyAddress));
}

print('question2 **********************************************************');

while (sortedUserInfo.hasNext()) {
  let everyAddress = sortedUserInfo.next();
  print(JSON.stringify(everyAddress));
}

print('question3 **************************************************************');

while (selectedValues.hasNext()) {
  let everyAddress = selectedValues.next();
  print(JSON.stringify(everyAddress));
}

print('question4 ***********************************************************');

db.addresses.createIndex({ city: 1, state: 1 });

var sortedAddress = db.addresses.aggregate([{ $sort: { city: 1, state: 1 } }]);

while (sortedAddress.hasNext()) {
  var eachaddr = sortedAddress.next();
  print(JSON.stringify(eachaddr));
}
