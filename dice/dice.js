

let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;
let count6 = 0;
let per;
let perCount;
function visible(dicer) {

    var b = document.getElementById(`dice${dicer}`).classList.remove("hidden");
    var a = document.getElementById(`dice${dicer}`).classList.add("visible");


};
function hidden(a) {
    document.getElementById(`dice${a}`).classList.remove("visible");

    document.getElementById(`dice${a}`).classList.add("hidden");
};

function roll() {
    let dicer = Math.floor(Math.random() * 6 + 1);
    console.log(dicer);
    if (dicer === 1) {
        /*visibility*/
        visible(dicer);
        hidden(2);
        hidden(3);
        hidden(4);
        hidden(5);
        hidden(6); count1++;
        document.querySelector('.rec').innerText = `${dicer + "."}`;

        per = count1 + count2 + count3 + count4 + count5 + count6;
        perCount1 = Math.floor((count1 / per) * 100);
        document.querySelector(".one").innerHTML = `${perCount1}`;

        perCount2 = Math.floor((count2 / per) * 100);
        document.querySelector(".two").innerHTML = `${perCount2}`;

        perCount3 = Math.floor((count3 / per) * 100);
        document.querySelector(".three").innerHTML = `${perCount3}`;

        perCount4 = Math.floor((count4 / per) * 100);
        document.querySelector(".four").innerHTML = `${perCount4}`;

        perCount5 = Math.floor((count5 / per) * 100);
        document.querySelector(".five").innerHTML = `${perCount5}`;

        perCount6 = Math.floor((count6 / per) * 100);
        document.querySelector(".six").innerHTML = `${perCount6}`;


    } else if (dicer === 2) {
        visible(dicer);
        hidden(1);
        hidden(3);
        hidden(4);
        hidden(5);
        hidden(6); count2++;
        document.querySelector('.rec').innerText += `${dicer + "."}`;
        per = count1 + count2 + count3 + count4 + count5 + count6;
        perCount1 = Math.floor((count1 / per) * 100);
        document.querySelector(".one").innerHTML = `${perCount1}`;

        perCount2 = Math.floor((count2 / per) * 100);
        document.querySelector(".two").innerHTML = `${perCount2}`;

        perCount3 = Math.floor((count3 / per) * 100);
        document.querySelector(".three").innerHTML = `${perCount3}`;

        perCount4 = Math.floor((count4 / per) * 100);
        document.querySelector(".four").innerHTML = `${perCount4}`;

        perCount5 = Math.floor((count5 / per) * 100);
        document.querySelector(".five").innerHTML = `${perCount5}`;

        perCount6 = Math.floor((count6 / per) * 100);
        document.querySelector(".six").innerHTML = `${perCount6}`;


    } else if (dicer === 3) {
        visible(dicer);
        hidden(2);
        hidden(1);
        hidden(4);
        hidden(5);
        hidden(6); count3++;
        document.querySelector('.rec').innerText += `${dicer + "."}`;
        per = count1 + count2 + count3 + count4 + count5 + count6;
        perCount1 = Math.floor((count1 / per) * 100);
        document.querySelector(".one").innerHTML = `${perCount1}`;

        perCount2 = Math.floor((count2 / per) * 100);
        document.querySelector(".two").innerHTML = `${perCount2}`;

        perCount3 = Math.floor((count3 / per) * 100);
        document.querySelector(".three").innerHTML = `${perCount3}`;

        perCount4 = Math.floor((count4 / per) * 100);
        document.querySelector(".four").innerHTML = `${perCount4}`;

        perCount5 = Math.floor((count5 / per) * 100);
        document.querySelector(".five").innerHTML = `${perCount5}`;

        perCount6 = Math.floor((count6 / per) * 100);
        document.querySelector(".six").innerHTML = `${perCount6}`;

    } else if (dicer === 4) {
        visible(dicer);
        hidden(2);
        hidden(3);
        hidden(1);
        hidden(5);
        hidden(6); count4++;
        document.querySelector('.rec').innerText += `${dicer + "."}`;
        per = count1 + count2 + count3 + count4 + count5 + count6;
        perCount1 = Math.floor((count1 / per) * 100);
        document.querySelector(".one").innerHTML = `${perCount1}`;

        perCount2 = Math.floor((count2 / per) * 100);
        document.querySelector(".two").innerHTML = `${perCount2}`;

        perCount3 = Math.floor((count3 / per) * 100);
        document.querySelector(".three").innerHTML = `${perCount3}`;

        perCount4 = Math.floor((count4 / per) * 100);
        document.querySelector(".four").innerHTML = `${perCount4}`;

        perCount5 = Math.floor((count5 / per) * 100);
        document.querySelector(".five").innerHTML = `${perCount5}`;

        perCount6 = Math.floor((count6 / per) * 100);
        document.querySelector(".six").innerHTML = `${perCount6}`;

    } else if (dicer === 5) {
        visible(dicer);
        hidden(2);
        hidden(3);
        hidden(4);
        hidden(1);
        hidden(6); count5++;
        document.querySelector('.rec').innerText += `${dicer + "."}`;
        per = count1 + count2 + count3 + count4 + count5 + count6;
        perCount1 = Math.floor((count1 / per) * 100);
        document.querySelector(".one").innerHTML = `${perCount1}`;

        perCount2 = Math.floor((count2 / per) * 100);
        document.querySelector(".two").innerHTML = `${perCount2}`;

        perCount3 = Math.floor((count3 / per) * 100);
        document.querySelector(".three").innerHTML = `${perCount3}`;

        perCount4 = Math.floor((count4 / per) * 100);
        document.querySelector(".four").innerHTML = `${perCount4}`;

        perCount5 = Math.floor((count5 / per) * 100);
        document.querySelector(".five").innerHTML = `${perCount5}`;

        perCount6 = Math.floor((count6 / per) * 100);
        document.querySelector(".six").innerHTML = `${perCount6}`;

    } else if (dicer === 6) {
        visible(dicer);
        hidden(2);
        hidden(3);
        hidden(4);
        hidden(5);
        hidden(1); count6++;
        document.querySelector('.rec').innerText += `${dicer + "."}`;
        per = count1 + count2 + count3 + count4 + count5 + count6;
        perCount1 = Math.floor((count1 / per) * 100);
        document.querySelector(".one").innerHTML = `${perCount1}`;

        perCount2 = Math.floor((count2 / per) * 100);
        document.querySelector(".two").innerHTML = `${perCount2}`;

        perCount3 = Math.floor((count3 / per) * 100);
        document.querySelector(".three").innerHTML = `${perCount3}`;

        perCount4 = Math.floor((count4 / per) * 100);
        document.querySelector(".four").innerHTML = `${perCount4}`;

        perCount5 = Math.floor((count5 / per) * 100);
        document.querySelector(".five").innerHTML = `${perCount5}`;

        perCount6 = Math.floor((count6 / per) * 100);
        document.querySelector(".six").innerHTML = `${perCount6}`;

    }
}
