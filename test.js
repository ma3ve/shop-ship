const joi = require('joi');

const schema = joi.object({
	name: joi.string().required(),
	email: joi.string().required().email({ tlds: false }),
	mobile: joi.string().required(),
	city: joi.string().required(),
})


console.log(schema.validate({
	"name": "test",
	"email": "test"
}));
// -> { value: { username: 'abc', birth_year: 1994 } }
