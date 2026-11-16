export class AnimationControler{
    private duration : number;
    private isAnimating : boolean;
    private element : HTMLElement;
    private className : string
    
    public constructor(elemennt : HTMLElement, className : string, duration : number){
        this.element = elemennt;
        this.className = className;
        this.duration = duration;
        this.isAnimating = false;
    }
    public animate(){
        if (!this.isAnimating){
            this.element.classList.add(this.className);
            setTimeout(() => {this.animationEnd()}, this.duration)
            this.isAnimating = true;
        }
    }
    private animationEnd(){
        this.element.classList.remove(this.className);
        this.isAnimating = false;
    }
}

export function getPercentOf(num : number, per : number) : number{
    return (num / 100) * per
}

export function randomNumber(rangeStart : number, rangeEnd : number) : number{
    return  (Math.random() * (rangeEnd - rangeStart + 1) ) + rangeStart;
}

export function chance(percentage : number) : boolean{
    return randomNumber(1,100) <= percentage
}