module.exports = function () {
  var faker = require("faker");
  var _ = require("lodash")
  var dbJson = require('./../db-1603263200956.json');
  // Generate Random Item Data
  // return {
  //     items: _.times(10, function(n) {
  //         return {
  //             id: n,
  //             name: faker.commerce.productName(),
  //             description: faker.commerce.productDescription(),
  //             imgUrl: faker.image.avatar(),
  //             price: faker.commerce.price()
  //         }
  //     })
  // }

  //   Generate Random user data with one admin user
  //   return {
  //     items: itemsJson.items,
  //     users: _.times(10, function (n) {
  //       return {
  //         id: n,
  //         name: faker.name.findName(),
  //         email: faker.internet.email(),
  //         password: 'admin'
  //       }
  //     })
  //   }

  const usersData = _.times(3, function (n) {
    return {
      id: n,
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: 'admin',
      items: []
    }
  })

  return {
    items: _.times(5, function (n) {
      return {
        id: n,
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        imgUrl: faker.image.avatar(),
        price: faker.commerce.price(),
        userAccess: null
      }
    }),
    users: [...usersData, {
      id: 100,
      name: "admin admin",
      email: "admin@dev.com",
      password: "admin",
      items: []
    }]
  }
}
