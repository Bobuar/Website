import {Settings, Setting} from "$lib/Scripts/Settings/Settings.svelte.ts";

export function nonEssential(){
    let setting : Setting = Settings.getSetting("non-essential information");
    //let css = document.documentElement.style
    //css.setProperty("--non-essential-display", setting.isActive() ? "block" : "none");

    let allNonEssential : HTMLCollectionOf<Element> = document.getElementsByClassName("non-essential");

    for (let i=0; i < allNonEssential.length; i++){
        let nonEssentialElement : Element = allNonEssential[i];
        nonEssentialElement.hidden = !setting.isActive();
    }
}