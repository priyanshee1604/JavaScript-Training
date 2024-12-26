describe("getUsers", function() {

    it("gets users from GitHub", async function() {
      let users = await getUsers(['priyanshee1604', 'remy', 'no.such.users']);
      assert.equal(users[0].login, 'priyanshee1604');
      assert.equal(users[1].login, 'remy');
      assert.equal(users[2], null);
    });
  
  });