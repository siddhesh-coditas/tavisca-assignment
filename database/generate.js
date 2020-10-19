module.exports = function() {
    var faker = require("faker");
    var _ = require("lodash")
    return {
        items: _.times(100, function(n) {
            return {
                id: n,
                name: faker.commerce.productName(),
                description: faker.commerce.productDescription(),
                imgUrl: faker.image.abstract(),
                price: faker.commerce.price()
            }
        })
    }
}