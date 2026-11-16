class EasterEgg{
    private elementToWatch : HTMLElement;
    private toRun : ()=>void;
    
    public constructor (elementToWatch : HTMLLIElement, toRun : ()=>void){ // toRun is a function
        this.elementToWatch = elementToWatch;
        this.toRun = toRun;
    }
    public setToRun(toRun : ()=>void){this.toRun = toRun;}// toRun is a function
    public getElementToWatch(){return this.elementToWatch;}
    public do(){this.toRun()}
}

export class clickEasterEgg extends EasterEgg{
    public constructor(elementToWatch : HTMLLIElement, toRun : ()=>void){ // toRun is a function
        super(elementToWatch, toRun);
        this.getElementToWatch().addEventListener("click", () => {this.do()});
    }
}
export class clickMultipleEasterEgg extends clickEasterEgg{
    private timesClicked : number;
    private maxClickNumber : number;
    public constructor(elementToWatch : HTMLLIElement, toRun : ()=>void, maxClickNumber : number){ // toRun is a function
        super(elementToWatch, doNothing);
        this.setToRun(toRun);
        this.timesClicked = 0;
        this.maxClickNumber = maxClickNumber;
    }
    public beenClicked(){
        this.timesClicked ++;
        if (this.timesClicked == this.maxClickNumber){
            super.do();
            this.timesClicked = 0;
        }
    }
    public do(){
        this.beenClicked();
    }
}

function doNothing(){};