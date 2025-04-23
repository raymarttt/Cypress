let petId; // Shared variable to store the pet ID
let orderId; // Shared variable to store the order ID
let username = `testUser_${Date.now()}`; // Ensuring a unique username per test

describe('Pet Store API Tests', () => {
  const pet = {
    id: 12345,
    name: 'Fulgoso',
    status: 'available',
  };

  const updatedPet = {
    id: 12345,
    name: 'Fulgoso Updated',
    status: 'sold',
  };

  const user = {
    id: 4,
    username: username,
    firstName: "Raymart",
    lastName: "Test",
    email: "raymart@example.com",
    password: "securePassword!",
    phone: "1234567890",
    userStatus: 1
  };

  before(() => {
    cy.api({
      method: 'POST',
      url: '/pet',
      body: pet,
    }).then((response) => {
      expect(response.status).to.eq(200);
      petId = response.body.id;
    });

    cy.api({
      method: 'POST',
      url: '/user',
      body: user,
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it('GET - Retrieve store inventory', () => {
    cy.api({
      method: 'GET',
      url: '/store/inventory',
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('object');
      expect(Object.keys(response.body).length).to.be.greaterThan(0);
      cy.log('Inventory Data:', response.body);
    });
  });

  it('POST - Place an order for a pet', () => {
    const order = {
      petId: petId,
      quantity: 1,
      shipDate: new Date().toISOString(),
      status: "placed",
      complete: true
    };

    cy.api({
      method: 'POST',
      url: '/store/order',
      body: order,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id');
      orderId = response.body.id;
    });
  });

  it('GET - Retrieve an order by ID', () => {
    cy.wrap(orderId, { timeout: 5000 }).should('exist').then((id) => {
      cy.api({
        method: 'GET',
        url: `/store/order/${id}`,
        failOnStatusCode: false,
      }).then((response) => {
        cy.log('Response Status:', response.status);
        cy.log('Response Body:', JSON.stringify(response.body));

        if (response.status === 200) {
          expect(response.body).to.have.property('id', id);
          expect(response.body).to.have.property('petId').and.to.be.a('number');
          expect(response.body).to.have.property('status').and.to.be.a('string');
        } else {
          cy.log(`Unexpected status code: ${response.status}`);
        }
      });
    });
  });

  it('DELETE - Remove an order by ID', () => {
    cy.wrap(orderId).should('exist');

    cy.api({
      method: 'DELETE',
      url: `/store/order/${orderId}`,
      failOnStatusCode: false,
    }).then((response) => {
      if (response.status === 404) {
        cy.log('Order Not Found');
      } else {
        expect(response.status).to.eq(200);
      }
    });
  });

  it('POST - Create a user with username', () => {
    cy.api({
      method: 'POST',
      url: '/user',
      body: user,
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it('POST - Create a single user using /user endpoint', () => {
    const newUser = {
      id: 0,
      username: "string",
      firstName: "string",
      lastName: "string",
      email: "string@example.com",
      password: "string",
      phone: "1234567890",
      userStatus: 0
    };

    cy.api({
      method: 'POST',
      url: '/user',
      body: newUser,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('message');
      cy.log('Single user creation response:', response.body);
    });
  });

  it('GET - Retrieve a user by username', () => {
    cy.api({
      method: 'GET',
      url: `/user/${user.username}`,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('username', user.username);
    });
  });

  it('DELETE - Remove a user by username', () => {
    cy.api({
      method: 'DELETE',
      url: `/user/${user.username}`,
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it('GET - Login a user', () => {
    cy.api({
      method: 'GET',
      url: `/user/login?username=${user.username}&password=${user.password}`,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('message');
      cy.log('Login Response:', response.body);
    });
  });

  it('GET - Logout a user', () => {
    cy.api({
      method: 'GET',
      url: '/user/logout',
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('message', 'ok');
    });
  });

  it('POST - Create multiple users using an array', () => {
    const users = [
      {
        id: 0,
        username: "string1",
        firstName: "string1",
        lastName: "string1",
        email: "string1@example.com",
        password: "password1",
        phone: "1234567890",
        userStatus: 0
      },
      {
        id: 1,
        username: "string2",
        firstName: "string2",
        lastName: "string2",
        email: "string2@example.com",
        password: "password2",
        phone: "9876543210",
        userStatus: 0
      }
    ];

    cy.api({
      method: 'POST',
      url: '/user/createWithArray',
      body: users,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('message', 'ok');
    });
  });

  it('POST - Create multiple users using a list', () => {
    const users = [
      {
        id: 0,
        username: "string1",
        firstName: "string1",
        lastName: "string1",
        email: "string1@example.com",
        password: "password1",
        phone: "1234567890",
        userStatus: 0
      },
      {
        id: 1,
        username: "string2",
        firstName: "string2",
        lastName: "string2",
        email: "string2@example.com",
        password: "password2",
        phone: "9876543210",
        userStatus: 0
      }
    ];

    cy.api({
      method: 'POST',
      url: '/user/createWithList',
      body: users,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('message', 'ok');
    });
  });

  it('PUT - Update an existing pet', () => {
    cy.wrap(petId).should('exist');

    cy.api({
      method: 'PUT',
      url: '/pet',
      body: updatedPet,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id', petId);
      expect(response.body).to.have.property('name', updatedPet.name);
      expect(response.body).to.have.property('status', updatedPet.status);
    });
  });
});
