var hotelData = require('../data/hotel-data.json');

module.exports.hotelsGetAll = function(req, res){
	console.log('GET the hotels');
	console.log(req.query);

	var offset = 0;
	var count = 5;

	if (req.query && req.query.offset) {
		offset = parseInt(req.query.offset, 10);
	}

	if (req.query && req.query.count) {
		count = parseInt(req.query.count, 10);
	}

	var returnedData = hotelData.slice(offset, offset+count);

	res
	.status(200)
	.json( returnedData );
};

module.exports.hotelsGetOne = function(req, res){
	var hotelId = req.params.hotelId;
	var thisHotel = hotelData[hotelId];
	console.log(`GET Hotel ID: ${hotelId}`);
	res
	.status(200)
	.json( thisHotel );
};

module.exports.hotelsAddOne = function(req, res){
	console.log('POST new hotel');
	console.log(req.body);
	res
	.status(200)
	.json( req.body )
}