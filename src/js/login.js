let handler = {
  set: function (target, property, value) {
    target[property] = value;
    const Header = document.querySelector(".Header");
    const HeaderUserAvatar = document.querySelector(".Header__user-avt");

    if (value && Header) {
      Header.classList.add("isLogin");
      HeaderUserAvatar.src = "../../assets/svg/avtar.svg";
    } else {
      Header.classList.remove("isLogin");
    }
    return true;
  },
};

let isLogin = new Proxy({ value: false }, handler);
await new Promise((resolve) => setTimeout(resolve, 1000));
isLogin.value = true;
