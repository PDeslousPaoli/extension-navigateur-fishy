let bookTitle = document.getElementsByClassName("a-size-extra-large celwidget");
let bookPrice = document.getElementsByClassName("a-size-base a-color-price a-color-price");
let bookSum = document.getElementsByClassName("a-section a-spacing-small a-padding-small");

let bookAuthor = document.getElementsByClassName("author notFaded");let bookImage;const findImage = () => {
  let imgClass1 = document.getElementsByClassName(
    "a-dynamic-image a-stretch-horizontal"
  );
  let imgClass2 = document.getElementsByClassName(
    "a-dynamic-image a-stretch-vertical"
  );  let img1 = imgClass1[0];  if (img1 !== undefined) {
    return (bookImage = img1.src);
  } else {
    return (bookImage = imgClass2[0].src);
  }
};bookImage = findImage();let data = {
  title: bookTitle[0].innerText,
  image: bookImage,
  price: bookPrice[0].innerText,
  author: bookAuthor[0].innerText,
  summary: bookSum[1].innerText
};
console.log("data :", data);
chrome.runtime.sendMessage({
  message: "scanPositive",
  data: data,
});



