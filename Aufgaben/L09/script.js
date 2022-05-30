let tones = {
    a: new Audio("../L08/assets/task_material_assets_Keyboard_a.mp3"),
    af: new Audio("../L08/assets/task_material_assets_Keyboard_af.mp3"),
    b: new Audio("../L08/assets/task_material_assets_Keyboard_b.mp3"),
    bf: new Audio("../L08/assets/task_material_assets_Keyboard_bf.mp3"),
    c: new Audio("../L08/assets/task_material_assets_Keyboard_c.mp3"),
    d: new Audio("../L08/assets/task_material_assets_Keyboard_d.mp3"),
    df: new Audio("../L08/assets/task_material_assets_Keyboard_df.mp3"),
    e: new Audio("../L08/assets/task_material_assets_Keyboard_e.mp3"),
    ef: new Audio("../L08/assets/task_material_assets_Keyboard_ef.mp3"),
    f: new Audio("../L08/assets/task_material_assets_Keyboard_f.mp3"),
    g: new Audio("../L08/assets/task_material_assets_Keyboard_g.mp3"),
    gf: new Audio("../L08/assets/task_material_assets_Keyboard_gf.mp3")
};
function playSample(tonesList) {
    let currentIndex = 1;
    tonesList[0].play();
    setInterval(() => {
        if (currentIndex > tonesList.length - 1) {
            clearInterval();
            return;
        }
        tonesList[currentIndex].play();
        currentIndex += 1; //oder "++" => erhöt index um 1
        console.log(currentIndex);
    }, 3000);
}
function keyboard(keyboardEvent) {
    console.log(keyboardEvent.key);
    if (keyboardEvent.key === "1") {
        tones.c.play();
    }
    else if (keyboardEvent.key === "2") {
        tones.d.play();
    }
    else if (keyboardEvent.key === "3") {
        tones.e.play();
    }
    else if (keyboardEvent.key === "4") {
        tones.f.play();
    }
    else if (keyboardEvent.key === "5") {
        tones.g.play();
    }
    else if (keyboardEvent.key === "6") {
        tones.a.play();
    }
    else if (keyboardEvent.key === "7") {
        tones.b.play();
    }
    else if (keyboardEvent.key === "q") {
        tones.df.play();
    }
    else if (keyboardEvent.key === "w") {
        tones.ef.play();
    }
    else if (keyboardEvent.key === "e") {
        tones.gf.play();
    }
    else if (keyboardEvent.key === "r") {
        tones.af.play();
    }
    else if (keyboardEvent.key === "t") {
        tones.bf.play();
    }
    else {
        console.log("Unbekannte Taste");
    }
}
let isPlaying = false;
document.querySelector("#taste1").addEventListener("click", () => { playSample([tones.c]); });
document.querySelector("#taste2").addEventListener("click", () => { playSample([tones.d]); });
document.querySelector("#taste3").addEventListener("click", () => { playSample([tones.e]); });
document.querySelector("#taste4").addEventListener("click", () => { playSample([tones.f]); });
document.querySelector("#taste5").addEventListener("click", () => { playSample([tones.g]); });
document.querySelector("#taste6").addEventListener("click", () => { playSample([tones.a]); });
document.querySelector("#taste7").addEventListener("click", () => { playSample([tones.b]); });
document.querySelector("#staste1").addEventListener("click", () => { playSample([tones.df]); });
document.querySelector("#staste2").addEventListener("click", () => { playSample([tones.ef]); });
document.querySelector("#staste3").addEventListener("click", () => { playSample([tones.gf]); });
document.querySelector("#staste4").addEventListener("click", () => { playSample([tones.af]); });
document.querySelector("#staste5").addEventListener("click", () => { playSample([tones.bf]); });
document.querySelector("#play").addEventListener("click", () => {
    isPlaying = !isPlaying;
    while (isPlaying) {
        playSample([tones.c, tones.d, tones.e, tones.f, tones.g, tones.g, tones.a, tones.a, tones.a, tones.a, tones.g, tones.a, tones.a, tones.a, tones.a, tones.g, tones.f, tones.f, tones.f, tones.f, tones.e, tones.e, tones.d, tones.d, tones.d, tones.d, tones.c]);
    }
});
addEventListener("keypress", (e) => { keyboard(e); });
//# sourceMappingURL=script.js.map