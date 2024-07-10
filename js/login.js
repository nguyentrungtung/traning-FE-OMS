let handler = {
  set: function (target, property, value) {
    target[property] = value;
    const Header = document.querySelector(".header");
    if (value) {
      Header.classList.add("is-login");
      Header.querySelector(".user.login").style.display = "flex";
      Header.querySelector(".user.nologin").style.display = "none";
    } else {
      Header.classList.remove("is-login");
      Header.querySelector(".user.nologin").style.display = "flex";
      Header.querySelector(".user.login").style.display = "none";
    }
  },
};

async function updateIsLogin() {
  let isLogin = new Proxy({ value: undefined }, handler);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  isLogin.value = true;
}

updateIsLogin();
