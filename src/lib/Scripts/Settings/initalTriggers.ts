export function nonEssential(){
    let cssVariables : Element = document.querySelector(":root");
    let isSmallScreen : string = getComputedStyle(cssVariables).getPropertyValue("--isSmallScreen");
    return isSmallScreen == "1" ? false : true;
}