/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};



console.log("working...");

//Get form data
document.querySelector("form").addEventListener("submit", function (e) {
  var data = Object.fromEntries(new FormData(e.target).entries());
  console.log(data);
  debugger;
  //debugger for check
});
//Dropdown
var button = document.querySelector(".form__select-button");
var dropDown = document.querySelector(".form__select-dropdown");
var listDropDown = document.querySelectorAll(".form__select-item");
var dropDownInput = document.querySelector('[name="select"]');
listDropDown.forEach(function (item) {
  item.addEventListener("click", function () {
    button.innerText = item.innerText;
    dropDownInput.value = item.dataset.value;
    button.classList.toggle("form__select-button_open");
    dropDown.classList.toggle("form__select-dropdown_open");
  });
});
button.addEventListener("click", function (e) {
  e.preventDefault();
  e.stopPropagation();
  button.classList.toggle("form__select-button_open");
  dropDown.classList.toggle("form__select-dropdown_open");
});
document.addEventListener("click", function (e) {
  if (e.target.closest(".list")) return;
  button.classList.remove("form__select-button_open");
  dropDown.classList.remove("form__select-dropdown_open");
});
//Range
var range = document.querySelector(".form__range-input");
var rangeText = document.querySelector(".form__range-value");
// let rangeInput = document.querySelector('[name="range"]');
range.addEventListener('input', function () {
  rangeText.innerText = "".concat(range.value, " %");
  // rangeInput.value = range.value
});
//Burger
var burger = document.querySelector('.burger');
var menu = document.querySelector('.navigation');
burger.addEventListener('click', function () {
  burger.classList.toggle('burger_open');
  menu.classList.toggle('navigation_open');
});
window.addEventListener('resize', function () {
  burger.classList.remove('burger_open');
  menu.classList.remove('navigation_open');
});
window.addEventListener('scroll', function () {
  burger.classList.remove('burger_open');
  menu.classList.remove('navigation_open');
});
//Scroll
var menuItems = document.querySelectorAll('.navigation__link');
var form = document.querySelector('.form');
var yOffset = 50;
var coords = form.getBoundingClientRect().top + window.pageYOffset - yOffset;
menuItems.forEach(function (menuItem) {
  // if (menuItem.href === ?) {
  //  do something
  // }
  menuItem.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
      top: coords,
      behavior: "smooth"
    });
  });
});
/******/ })()
;