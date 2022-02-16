// There's no such thing as private properties on a JavaScript object! But,
// maybe there are ? Implement a function createSecretHolder(secret) which accepts
// any value as secret and returns an object with ONLY two methods.getSecret()
// which returns the secret setSecret() which sets the secret

function createSecretHolder(secret) {
  return {
    getSecret: function () {
      return secret;
    },
    setSecret: function (val) {
      secret = val;
    },
  };
}

// ============================================ //

/* Test 1 */
let obj = createSecretHolder(5);

console.log(obj.getSecret());
// log: 5
obj.setSecret(2);

console.log(obj.getSecret());
// log: 2
