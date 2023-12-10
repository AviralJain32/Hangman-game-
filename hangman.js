let hints=document.querySelector(".box")
let words=document.querySelector(".enter-word")
let keyboardkeys=document.querySelectorAll(".keyboard")
let nextword=document.querySelector(".next")

// console.log(words);
const array=[
      {
        "word": "sunflower",
        "hint": "Yellow"
      },
      {
        "word": "puzzle",
        "hint": "Enigma"
      },
      {
        "word": "ocean",
        "hint": "Blue"
      },
      {
        "word": "whisper",
        "hint": "Soft"
      },
      {
        "word": "guitar",
        "hint": "Strings"
      },
      {
        "word": "joyful",
        "hint": "Happy"
      },
      {
        "word": "book",
        "hint": "Pages"
      },
      {
        "word": "tiger",
        "hint": "Stripes"
      }
    ]

let index=0;

let previous=document.querySelector(".previous")
let next=document.querySelector(".next")


next.addEventListener("click",()=>{
    if(index>=0){
      hints.textContent=array[index].hint
      let str="";
      for(let i=0;i<array[index].word.length;i++){
        str+="_";
      }
      words.textContent=str;
    }
    if(index===array.length-1){
        index=-1;
    }
    index+=1;
})
let content={};
let rightWord={};
let indexForWord=-1;
let indexForWordKaLetter=0;

const placeLetter=(rightWord)=>{
  // console.log(Object.values(rightWord));
  // console.log(array[indexForWord].word);
  const word=Object.values(rightWord)[0].toLowerCase();
  // console.log(array[indexForWord].word.indexOf(word));
  for (const word of Object.values(rightWord)) {
    const smallWord=word.toLowerCase();
    const positionOfSmallWord=array[indexForWord].word.indexOf(smallWord);
    const filled=Array.from(words.textContent);
    for (const fillWord in filled) {
      if(fillWord == positionOfSmallWord){
        filled[fillWord]=smallWord
      }
    }
    const actualWord=filled.join("").toUpperCase()
    // console.log(filled.join(""));
    words.textContent=actualWord;
  }
}

for(let i=0;i<=keyboardkeys.length-1;i++){
  keyboardkeys[i].addEventListener("click",()=>{
    // console.log(keyboardkeys[i].textContent);

    let clickedLetter = keyboardkeys[i].textContent;
    let targetWord= array[indexForWord].word;
    console.log(array[indexForWord]);
    if (!targetWord.includes(clickedLetter.toLowerCase())) {
      // console.log("wrong");
      content[i]= keyboardkeys[i].textContent
      keyboardkeys[i].textContent="X";
      keyboardkeys[i].classList.add("disabledRed");
    }
    else{
      // console.log("right");
      content[i]= keyboardkeys[i].textContent
      rightWord[i]= keyboardkeys[i].textContent
      // console.log(rightWord);
      // console.log(content);
      keyboardkeys[i].textContent="✅";
      keyboardkeys[i].classList.add("disabledGreen");

      placeLetter(rightWord)
    }
      
  })
}
// for(let i=1;i<=keyboardkeys.length-1;i++){
//   keyboardkeys[i].addEventListener("click",()=>{
   
//   })
// }
// console.log(content);
// console.log(Object.keys(content));
// console.log(Object.values(content));

// if(!words.textContent.includes("_")){
//   for(let i=0;i<keyboardkeys.length;i++){
//     indexForWord=indexForWord+1;
//     const array=Object.values(content);
//     keyboardkeys[Object.keys(content)[i]].textContent=array[i];
//     keyboardkeys[i].classList.remove("disabledRed");
//     keyboardkeys[i].classList.remove("disabledGreen");
    
//     }
// }

nextword.addEventListener("click",()=>{
  nextword.textContent="Next Word >>";
  indexForWord=indexForWord+1;
  if(indexForWord==array.length-1){
    indexForWord=0
  }
  for(let i=0;i<keyboardkeys.length;i++){
    keyboardkeys[i].classList.remove("disabledRed");
    keyboardkeys[i].classList.remove("disabledGreen");
    const array=Object.values(content);
    keyboardkeys[Object.keys(content)[i]].textContent=array[i];
    }
})
