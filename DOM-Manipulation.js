// 1)
// const followUs = document.querySelector(".footer__social-networks")[1];
const followUs = $(".footer__social-networks")[1];
const headerNavbar = $(".header__navbar-item")[0];
headerNavbar.appendChild(followUs);
followUs.classList.remove("col-sm-5");
followUs.firstChild.classList.add(
  "header__navbar-title",
  "header__navbar-title--label"
);
followUs.firstChild.style.color = "#999";
followUs.firstChild.style.fontWeight = "400";

// 2) Na verdade, Veículos é o segundo item do menu de navegação, o primeiro é o Home.
// Primeiro recarregue a página, por favor.
const referenceNavItem = $(".nav-item")[4];
const navLinkVehicles = referenceNavItem.cloneNode(true);
const navItem2 = $(".nav-item")[1];
navItem2.parentNode.insertBefore(navLinkVehicles, navItem2);
navLinkVehicles.setAttribute("style", "--animation-index: 1");
navLinkVehicles.firstChild.firstChild.textContent = "Veículos";
$(".nav-item")[2].remove();
$(".nav-item")[2].remove();
navLinkVehicles.childNodes[1].firstChild.firstChild.firstChild.textContent =
  "Novos";
navLinkVehicles.childNodes[1].firstChild.firstChild.firstChild.setAttribute(
  "href",
  "/autoforce-ford/novos"
);
navLinkVehicles.childNodes[1].firstChild.childNodes[1].firstChild.textContent =
  "Seminovos";
navLinkVehicles.childNodes[1].firstChild.childNodes[1].firstChild.setAttribute(
  "href",
  "/autoforce-ford/seminovos"
);
navLinkVehicles.childNodes[1].firstChild.childNodes[2].remove();
navLinkVehicles.addEventListener("click", () => {
  if (!navLinkVehicles.classList.contains("show")) {
    navLinkVehicles.firstChild.setAttribute("aria-expanded", true);
    navLinkVehicles.classList.add("show");
    navLinkVehicles.childNodes[1].classList.add("show");
  } else {
    navLinkVehicles.firstChild.setAttribute("aria-expanded", false);
    navLinkVehicles.classList.remove("show");
    navLinkVehicles.childNodes[1].classList.remove("show");
  }
});
navLinkVehicles.firstChild.setAttribute("href", "#");

// 3) Primeiro recarregue a página, por favor.
const form = $(".form-conversion__body")[0];
const newSelectItem = form.childNodes[2].cloneNode(true);
newSelectItem.firstChild.textContent = "Categoria";
const selectOptionsArray = newSelectItem.childNodes[1].childNodes;
const hatch = selectOptionsArray[0].cloneNode(true);
const pickup = selectOptionsArray[1].cloneNode(true);
newSelectItem.childNodes[1].appendChild(hatch);
newSelectItem.childNodes[1].appendChild(pickup);
newSelectItem.childNodes[1].childNodes[0].childNodes[2].textContent = "SUV";
newSelectItem.childNodes[1].childNodes[1].childNodes[2].textContent = "Sedã";
newSelectItem.childNodes[1].childNodes[2].childNodes[2].textContent = "Hatch";
newSelectItem.childNodes[1].childNodes[3].childNodes[2].textContent = "Pickup";
newSelectItem.childNodes[1].childNodes[0].childNodes[0].setAttribute(
  "name",
  "categoria"
);
newSelectItem.childNodes[1].childNodes[1].childNodes[0].setAttribute(
  "name",
  "categoria"
);
newSelectItem.childNodes[1].childNodes[2].childNodes[0].setAttribute(
  "name",
  "categoria"
);
newSelectItem.childNodes[1].childNodes[3].childNodes[0].setAttribute(
  "name",
  "categoria"
);
newSelectItem.childNodes[1].childNodes[0].childNodes[0].setAttribute(
  "value",
  "suv"
);
newSelectItem.childNodes[1].childNodes[1].childNodes[0].setAttribute(
  "value",
  "seda"
);
newSelectItem.childNodes[1].childNodes[2].childNodes[0].setAttribute(
  "value",
  "hatch"
);
newSelectItem.childNodes[1].childNodes[3].childNodes[0].setAttribute(
  "value",
  "pickup"
);
const messageContainer = document.createElement("div");
messageContainer.classList.add("form-group");
const newTextareaItem = document.createElement("textarea");
newTextareaItem.setAttribute("name", "message");
newTextareaItem.setAttribute("placeholder", "Mensagem");
messageContainer.appendChild(newTextareaItem);
messageContainer.classList.add("mt-3");
newTextareaItem.classList.add("form-control");
form.childNodes[0].appendChild(newSelectItem);
form.childNodes[0].appendChild(messageContainer);

// 4) Primeiro recarregue a página, por favor.
// https://testes.autoforce.com.br/autoforce-ford
const dropdownContainer = $(".dropdown-menu")[4].cloneNode(true);
const whatsAppIcon = $("#popup-whats")[0];
whatsAppIcon.setAttribute("onclick", "");
whatsAppIcon.appendChild(dropdownContainer);
dropdownContainer.setAttribute(
  "style",
  "width: 300px; height: 150px; z-index:1000; margin-top: -240px;"
);
whatsAppIcon.addEventListener("click", () => {
  if (!whatsAppIcon.parentNode.classList.contains("show")) {
    dropdownContainer.classList.add("show");
    whatsAppIcon.setAttribute("aria-expanded", true);
    whatsAppIcon.parentNode.classList.add("show");
  } else {
    dropdownContainer.classList.remove("show");
    whatsAppIcon.setAttribute("aria-expanded", false);
    whatsAppIcon.parentNode.classList.remove("show");
  }
});
dropdownContainer.firstChild.childNodes[0].firstChild.textContent = "Seminovos";
dropdownContainer.firstChild.childNodes[1].firstChild.textContent = "Serviços";
dropdownContainer.firstChild.childNodes[2].firstChild.textContent =
  "Central de Vendas";
dropdownContainer.firstChild.childNodes[0].firstChild.setAttribute(
  "href",
  "https://api.whatsapp.com/send?phone=5511999999999"
);
dropdownContainer.firstChild.childNodes[1].firstChild.setAttribute(
  "href",
  "https://api.whatsapp.com/send?phone=5511111111111"
);
dropdownContainer.firstChild.childNodes[2].firstChild.setAttribute(
  "href",
  "https://api.whatsapp.com/send?phone=5511888888888"
);
dropdownContainer.firstChild.childNodes[0].firstChild.setAttribute(
  "target",
  "_blank"
);
dropdownContainer.firstChild.childNodes[1].firstChild.setAttribute(
  "target",
  "_blank"
);
dropdownContainer.firstChild.childNodes[2].firstChild.setAttribute(
  "target",
  "_blank"
);
