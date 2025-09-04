let input = document.querySelector("[name='dollar']")
let result = document.querySelector(".result");

oninput = function () {
    let dollar = input.value;
    let egp = (dollar * 48.50).toFixed(2);
     if (dollar === "" || isNaN(dollar)) {
        result.textContent = "{0} USD Dollar = {0} Egyptian Pound"
     } else {
      result.textContent =  `${dollar} USD Dollar = ${egp} Egyptian Pound`
     }
}