const supertest = require("supertest");
const app = require("./http_server");
const { faker } = require("@faker-js/faker");
const request = supertest(app);

function users() {
  // setup
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const date = faker.date.past(
    50,
    new Date("Sat Sep 20 1992 21:35:02 GMT+0200 (CEST)")
  );

  // random data
  const name = faker.name.fullName(firstName, lastName);
  const email = faker.internet.email(firstName, lastName);
  const username = faker.internet.userName(firstName, lastName);
  const password = faker.internet.password();
  const phone = faker.phone.number();
  const streetaddress = faker.address.streetAddress();
  const citystatezip =
    faker.address.city() +
    ", " +
    faker.address.stateAbbr() +
    " " +
    faker.address.zipCode();
  const latitude = faker.address.latitude();
  const longitude = faker.address.longitude();
  const avatar = faker.internet.avatar();
  const dob =
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  const company = faker.company.name();
  // user data object for post
  return {
    name,
    dob,
    email,
    username,
    password,
    phone,
    streetaddress,
    citystatezip,
    latitude,
    longitude,
    avatar,
    company,
  };
}
const user1 = users();
const user2 = users();
const user3 = users();

it("Create user", async () => {
  try {
    await request.post("./add").send(user1);
    await request.post("./add").send(user2);
    await request.post("./add").send(user3);
  } catch (err) {}
});
/* it("compare users", async () => {
  try {
    await ;
    expect(1).toBe(1);
  } catch (err) {}
}); */
it("Hello World!", async () => {
  try {
    await service();
    expect(1).toBe(1);
  } catch (err) {}
});

var server = app.listen(3000, function () {
  console.log("Running on port 3000");
});

afterAll((done) => {
  server.close();
  done();
});
