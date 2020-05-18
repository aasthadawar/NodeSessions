let mongoose = require("../database/connection");
let Items = require('../model/items');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();


chai.use(chaiHttp);

describe('Items', () => {
	beforeEach((done) => { 
		Items.deleteMany({}, (err) => { 
		   done();		   
		});		
	});
 
    //test get all route
  describe('/GET items', () => {
	  it('it should GET all the items', (done) => {
			chai.request(server)
		    .get('/items')
		    .end((err, res) => {
			  	res.should.have.status(200);
			  	res.body.should.be.a('array');
			  	res.body.length.should.be.eql(0);
		      done();
		    });
	  });
  });
 
  // test post route
  describe('/POST items', () => {
	  it('it should POST a item ', (done) => {
	  	var item = {
	  		name: "paracitamol",
	  		quantity: 5,
	  		isSanitized: true,
              unit: "box",
              category:'Medical',
              location:'Store'
	  	}
			chai.request(server)
		    .post('/items')
		    .send(item)
		    .end((err, res) => {
			  	res.should.have.status(200);
			  	res.body.should.be.a('object');
			  	res.body.should.have.property('name');
			  	res.body.should.have.property('quantity');
			  	res.body.should.have.property('isSanitized');
                  res.body.should.have.property('unit');
                  res.body.should.have.property('category');
                  res.body.should.have.property('location');
		      done();
		    });
	  });
  });
 
  // test delete route
  describe('/DELETE/:id item', () => {
	  it('it should DELETE a book given the id', (done) => {
	  	let item = new Items({name: "paracitamol",
          quantity: 5,
          isSanitized: true,
          unit: "box",
          category:'Medical',
          location:'Store'})
	  	item.save((err, res) => {
				chai.request(server)
			    .delete('/items/' + item.id)
			    .end((err, res) => {
				  	res.should.have.status(200);
				  	res.body.should.be.a('object');
				  	res.body.should.have.property('ok').eql(1);
			      done();
			    });
		  });
	  });
  });
});
