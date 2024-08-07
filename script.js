const text = document.getElementById('text');
const sendBtn = document.getElementById('sendBtn');
var count = 0;
var userName = "";
const array = [
  `${userName} Salom! Bugun qanday kayfiyattasiz?`,
  "Ismim jasmina, Sizning ismiz nima?",
  "Uncha tushunmadim bu laqabizmi yoki ismiz ismizi tuliq ayting odatda chiroyli va xurmat bulishligi uchun ism har doim katta xarfllar bilan yoziladi misol uchun 'Jasmina' manabu mmaqsadga muvofiq buldi endi siz ayting?",
  `Vov manga ${userName} isimli yigitlar juda yoqadi sababi judayam chiroyli ism.
  Assalomu alaykum ${userName} Siz bilan tanishganimdan xursandman. Siz qaysi mavzularga qiziqasiz?`,
  "Bo'sh vaqtlaringizda nima bilan shug'ullanasiz?",
  "Hop siz dasturchimisiz?",
  "Ha ishondim shaxsan man dasturlash sohasida ozgina bilimga egaman. Sizchi?",
  "Sizga savol HTML dasturlash tili qaysi biriga tegishli Frontend yoki Backend",
  "Xaxaxa ana aytdimku oddi narsani bilmaysiz deb HTML dasturlash tili emasku",
  "Hop siz bilan tanishganimdan xursandman lekin afsuski vaqtim dasturiy taminot tomonidan cheklangan siz bilan shu yerda xayrlashaman va suhbatni qaytadan boshlayman."
]

sendBtn.disabled = true;

function myTyping() {
  if (text.value) {
    sendBtn.disabled = false;
  } else {
    sendBtn.disabled = true;
  }
}

function myFunc() {
  // if (count == 0) {
    userName = text.value;
  // }
  if (text.value && array.length != count) {
    sendBtn.innerText = "Analayzing...";
    sendBtn.disabled = true;
    console.log("Siz: ", text.value);
    setTimeout(() => {
      console.log("Boot: ", array[count++]);
      sendBtn.innerText = "Send";
    }, 3000);
    text.value = "";
  } else {
    location.reload();
  }
}



// ==============================================

const myObject = {
    postId: 1,
    id: 1,
    name: "id labore ex et quam laborum",
    email: "Eliseo@gardner.biz",
    body: "laudantium enim quasi est quidem magnam voluptate ipsam",
    title: "sunt aut facere repellat provident occaecati excepturi",
    description: "quia et suscipit\nsuscipit recusandae",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952",
    completed: false,
    location: {
        street: "Qator bog kuchasi"
    }
};

const cloneObject = JSON.parse(JSON.stringify(myObject)); //JSON parse
const cloneObjectCreate = Object.create(myObject); //Object create
const cloneObjectAssign = Object.assign({}, myObject); //Object assign
const cloneSpread = { ...cloneObject } //spread

console.log("myObject", myObject.location);
console.log("cloneObject", cloneObject.location);
console.log("cloneObjectCreate", cloneObjectCreate.location);
console.log("cloneObjectAssign", cloneObjectAssign.location);
console.log("cloneSpread", cloneSpread.location);


console.log(myObject.location === myObject.location); //true
console.log(myObject.location === cloneObject.location); //false
console.log(cloneObjectCreate.location === cloneObject.location); //false
console.log(cloneObjectAssign.location === cloneObject.location); //false
console.log(cloneSpread.location === myObject.location); //false
