const hello = require("hello");

(async() => {
  if (process.argv.length > 2) {
    const idk = await hello.hello("bmorrisondev")
    console.log(`${idk.profile.name}\n\n${idk.profile.bio}`)
  } else {
    console.log("Please provide a username :D")
  }
})()