const data = [
  {
    text: "Now from the first the young soldier George had burned with indignation because of the unspeakable cruelties put upon Christians, and he had spoken out boldly in defence of his brethren. His friends had counselled silence and prudence. But George would have none. He knew, however, that he might be called upon to suffer at any time, and he hoped to do better work for the world and to die after braver effort. He therefore distributed his money and his fine apparel among the poor and needy, set free all the slaves he possessed, and went forth upon knightly travel.While pricking one day through the plains of Libya he came to a certain city called Silene, the people of which were bewailing a dire misfortune that had come upon them. An enormous dragon had issued from a marsh neighbouring the town and had devoured all their flocks and herds. Already the monster had taken dwelling near the city walls, and at such distance the people had been able to keep him only by granting him two sheep every day for his food and drink. If they had failed in this he would have come within their walls and poisoned every man, woman, and child with his plague-like breath.",
  },

  {
    text: "Before George could make answer the ill-will of the tyrant waxed to ardent hatred and he summoned guards to take the martyr to prison. Once within the dungeon the keepers threw him to the ground, put his feet in stocks and placed a stone of great weight upon his chest. But even so, in the midst of torture, the blessed one ceased not to give thanks to God for this opportunity to bear witness to Christ's teachings. The next day they stretched the martyr on a wheel full of sharp spokes. But a voice from heaven came to comfort him and said, George, fear not; so it is with those who witness to the truth. And there appeared to him an angel brighter than the sun, clothed in a white robe, who stretched out a hand to embrace and encourage him in his pain. Two of the officers of the prison who saw this beautiful vision became Christians and from that day endeavoured to live after the teachings of Christ.There is still another tale that after George had been comforted by the angel who descended from heaven, his tormentors flung him into a cauldron of boiling lead, and when they believed they had subdued him by the force of his agonies, they brought him to a temple to assist in their worship.",
  },

  {
    text: "Climbed the beanstalk and went to the giant’s house again. Once again, Jack asked the giant’s wife for food, but while he was eating the giant returned. Jack leapt up in fright and went and hid under the bed. The giant cried, “Fee-fifo-fum, I smell the blood of an Englishman. Be he alive, or be he dead, I’ll grind his bones to make my bread!” The wife said, “There is no boy in here!” The giant ate his food and went to his room. There, he took out a hen. He shouted, “Lay!” and the hen laid a golden egg. When the giant fell asleep, Jack took the hen and climbed down the beanstalk. Jack’s mother was very happy with him.After some days, Jack once again climbed the beanstalk and went to the giant’s castle. For the third time, Jack met the giant’s wife and asked for some food. Once again, the giant’s wife gave him bread and milk. But while Jack was eating, the giant came home. “Fee-fi-fo-fum, I smell the blood of an Englishman. Be he alive, or be he dead, I’ll grind his bones to make my bread!” cried the giant. “Don’t be silly! There is no boy in here!” said his wife.The giant had a magical harp that could play beautiful songs. While the giant slept",
  },

  {
    text: "Climbed the beanstalk Climbed the beanstalk",
  },
  {
    text: "Climb",
  },

  {
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem voluptas quaerat atque quos explicabo eos delectus enim, autem, corrupti aliquid ipsa quo? Accusamus, excepturi maiores.",
  },
];

const restartBtn = document.querySelector(".restart-btn");

const text = document.querySelector(".text");
const timerSpan = document.querySelector(".timer");
const mistakesSpan = document.querySelector(".mistakes");
const scoreSpan = document.querySelector(".score");

const inp = document.querySelector("input");

// restartBtn.addEventListener("click", (e) => {
//   text.innerText = data[textIsShown].text;

//   textIsShown === 2 ? (textIsShown = 0) : textIsShown++;
// });

//

let currPos = 0;
let timer;
let maxTime = 60;
let isTyping = false;
let activeEl;

function createText() {
  const randomInx = Math.floor(Math.random() * data.length);
  data[randomInx].text.split("").forEach((span) => {
    const spanTag = document.createElement("span");
    spanTag.innerText = span;
    text.append(spanTag);
  });
}

createText();

document.addEventListener("keydown", () => {
  inp.focus();
  if (!isTyping) {
    timer = setInterval(() => {
      maxTime--;
      timerSpan.innerText = maxTime + "s";

      updateTime(maxTime);
    }, 1000);

    isTyping = true;
  }
});
text.addEventListener("click", () => {
  inp.focus();
  if (!isTyping) {
    timer = setInterval(() => {
      maxTime--;
      timerSpan.innerText = maxTime + "s";

      updateTime(maxTime);
    }, 1000);

    isTyping = true;
  }
});

inp.addEventListener("input", checkSimilarity);

function checkSimilarity() {
  let inpVal = inp.value;

  const el = document.querySelectorAll("span");

  if (maxTime > 0 && currPos <= text.innerText.length - 1) {
    document.querySelector(".active")?.classList.remove("active");

    document.querySelectorAll("span")[currPos].classList.add("active");
    activeEl = document.querySelector(".active");

    // indention();
    if (inpVal.length < currPos) {
      currPos--;

      el[inpVal.length].classList.remove("correct", "incorrect");
      scoreSpan.innerText = document.querySelectorAll(".correct").length;
      mistakesSpan.innerText = document.querySelectorAll(".incorrect").length;
    } else {
      el[currPos].innerText.toLowerCase() === inpVal[inpVal.length - 1]
        ? el[currPos].classList.add("correct")
        : el[currPos].classList.add("incorrect");

      scoreSpan.innerText = document.querySelectorAll(".correct").length;
      mistakesSpan.innerText = document.querySelectorAll(".incorrect").length;
      currPos++;
    }
  } else {
  }
}

console.log(activeEl);

function updateTime(maxTime) {
  console.log("length", text.innerText.length);
  console.log("cur pos", currPos);

  // -3 odu ki 3dene span artiqdi bunlar timer, mistake ve scorun spanidi
  if (maxTime < 0 || currPos === text.innerText.length) {
    if (currPos === text.innerText.length) {
    }
    const divTag = document.createElement("div");
    divTag.classList.add("score-details");
    divTag.style.height = "50vh";

    divTag.style.display = "flex";
    divTag.style.alignItems = "center";
    divTag.style.justifyContent = "center";
    const pTag = document.createElement("p");
    console.log(document.querySelectorAll(".incorrect").length);

    if (
      currPos === text.innerText.length &&
      document.querySelectorAll(".incorrect").length !== 0
    ) {
      pTag.innerHTML = ` <span>&nbsp;</span> Congratulations. You've finished, but seems you have some mistakes.  <br /> <br /> 
                     Your  score is ${scoreSpan.innerText}
          `;
      console.log(document.querySelectorAll(".incorrect"));
    } else if (
      currPos === text.innerText.length &&
      document.querySelectorAll(".incorrect").length === 0
    ) {
      pTag.innerHTML = ` Congratulations. You've succeeded to finish whole text without mistake. <br /> <br /> 
      Your  score is ${scoreSpan.innerText}
          `;
    } else {
      pTag.innerHTML = ` <span>&nbsp;</span> Time is over <br /> <br /> 
      Your  score is ${scoreSpan.innerText}
          `;
    }

    divTag.prepend(pTag);
    text.innerText = "";
    text.style.display = "none";
    document.querySelector(".wrapper").prepend(divTag);

    timerSpan.innerHTML = 0;
    clearInterval(timer);
  }
}

// function indention() {
//   const rect = document.querySelector(".active").getBoundingClientRect().top;
//   console.log(rect);
//   // console.log(document.querySelector(".active").pageYoffset);
//   // console.log(text.getBoundingClientRect());
//   if (rect < 0) {
//     alert("false");
//     // text.scrollBy({
//     //   top: 100,
//     //   left: 0,
//     //   behavior: "smooth",
//     // });
//   }
// }

// indention();

// restartBtn.addEventListener("click", () => {
//   text.style.display = "block";
//   document.querySelector(".score-details")?.remove();
//   maxTime = 60;
//   text.innerText = "";
//   mistakesSpan.innerText = 0;
//   scoreSpan.innerText = 0;
//   timerSpan.innerText = maxTime + "s";
//   currPos = 0;
//   isTyping = false;
//   createText();
// });

restartBtn.addEventListener("click", () => {
  window.location.reload();
});
