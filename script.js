//your JS code here. If required.
let AgeE1 = document.getElementById("age");
let nameE1 = document.getElementById("name");
const btnE1 = document.getElementById("btn");

btnE1.addEventListener('click', (event) => {
  event.preventDefault();

  let age = AgeE1.value;
  let name = nameE1.value;

  if (!age || !name) {
    alert("Please enter valid details");
  } else {
    function Validate(age, name) {
      return new Promise((resolve, reject) => {
        if (Number(age) > 18) {
          setTimeout(() => {
            resolve(`Welcome, ${name}. You can vote.`);
          }, 4000);
        } else {
          setTimeout(() => {
            reject(`Oh sorry ${name}. You aren't old enough.`);
          }, 4000);
        }
      });
    }

    Validate(age, name)
      .then((res) => alert(res))
      .catch((err) => alert(err));
  }
});