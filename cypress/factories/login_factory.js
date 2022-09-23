let faker = require('faker');

export default {
    ebacUser: function() {
        let firstName = faker.name.firstName()
        let lastName = faker.name.lastName()

        let data = {
            name: `${firstName}${lastName}`,
            email: faker.internet.email(firstName),
            password: "?CeuAzul32?",

        }

        return data
    }
}