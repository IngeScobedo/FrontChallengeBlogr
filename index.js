let isNav = (dropdown) => {
  let classes = dropdown.classList;
  let result;
  classes.forEach((element) => {
    result = element === "show" ? true : false;
  });
  return result;
};
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);
    
    if (toggle && nav) {
        toggle.addEventListener("click", () => {
        if (isNav(nav)) {
            nav.classList.toggle("show");
            nav.classList.add('hide');
        }else{
            nav.classList.toggle("show");
        }

    });
  }
};

showMenu("header-toggle", "nav-menu");
const products = document.getElementById("dropdown__section-products"),
  company = document.getElementById("dropdown__section-company"),
  connect = document.getElementById("dropdown__section-connect");

let is = (dropdown) => {
  let classes = dropdown.classList;
  let result;
  classes.forEach((element) => {
    result = element === "dropdown__active" ? true : false;
  });
  return result;
};

console.log(is(products));
console.log(is(company));
console.log(is(connect));

const showMore = (toggleId, navId, arrowId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    arrow = document.getElementById(arrowId);
  console.log(arrow);

  if (toggle && nav) {
    if (toggleId === "nav__products") {
      toggle.addEventListener("click", () => {
        if (is(company)) {
          company.classList.remove("dropdown__active");
        }
        if (is(connect)) {
          connect.classList.toggle("dropdown__active");
        }
        nav.classList.toggle("dropdown__active");
        arrow.classList.toggle("rotate");
      });
    }
    if (toggleId === "nav__company") {
      toggle.addEventListener("click", () => {
        if (is(products)) {
          products.classList.toggle("dropdown__active");
        }
        if (is(connect)) {
          connect.classList.toggle("dropdown__active");
        }
        nav.classList.toggle("dropdown__active");
        arrow.classList.toggle("rotate");
      });
    }
    if (toggleId === "nav__connect") {
      toggle.addEventListener("click", () => {
        if (is(products)) {
          products.classList.toggle("dropdown__active");
        }
        if (is(company)) {
          company.classList.toggle("dropdown__active");
        }
        nav.classList.toggle("dropdown__active");
        arrow.classList.toggle("rotate");
      });
    }
  }
};

showMore("nav__products", "dropdown__section-products", "nav__arrow-products");
showMore("nav__company", "dropdown__section-company", "nav__arrow-company");
showMore("nav__connect", "dropdown__section-connect", "nav__arrow-connect");
