var db = connect('localhost:27017/db');

let users = db.users.find();

let initialAddress = db.addresses.find();

let secondAddress = db.addresses.find().skip(50);

while (users.hasNext()) {
  var everyUser = users.next();
  let address1 = initialAddress.next();
  let address2 = secondAddress.next();
  var status = db.users.update(
    { _id: everyUser._id },
    { $set: { addresses: [address1._id, address2._id] } },
  );
}
