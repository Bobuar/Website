import {clickMultipleEasterEgg} from "$lib/Scripts/EasterEggs/EasterEggs.ts";

function PressRToRun(){window.location.href = "/EasterEggs/BobuarInTheDark"}

export function clickR(){new clickMultipleEasterEgg(document.getElementById("egg"), PressRToRun, 3);}