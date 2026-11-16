import {nonEssential} from "$lib/Scripts/Settings/Effects.ts";
import {nonEssential as nonEssentialTrigger}  from "$lib/Scripts/Settings/initalTriggers.ts";

export class Setting{
    public readonly id : string;
    private active : boolean;
    private toRun : Function;
    private initTrigger : Function;

    constructor(id : string, active : boolean, toRun : Function = () => {}, initTrigger : Function = () => {return this.isActive()}){
        this.id = id;
        this.active = active; // Should be default value if it has no trigger function
        this.toRun = toRun;
        this.initTrigger = initTrigger;
    }

    public isActive(){return this.active;}
    public initActive(isActive : boolean){this.active = isActive;} // Ran to initailise after reading from storage. Sets active but does not store value.
    public setActive(isActive : boolean){
        this.active = isActive;
        localStorage.setItem(this.id,this.active.toString());
        this.takeEffect();
    }
    public isTriggered(){return this.initTrigger();}
    public takeEffect(){ // Needs to run on each page on startup
        //this.active? this.toRun() : () => {};
         this.toRun()
    }
}

export class Settings{
    private static settings : Setting[] = [
        new Setting("non-essential information",true, nonEssential,nonEssentialTrigger),
    ];
    public static setupSettingsFromStored(){
        for (let i = 0; i < this.settings.length; i++){
            let setting : Setting = this.settings[i];
            setting.initActive(this.getFromStorage(setting));
        }
    }
    private static getFromStorage(setting: Setting) : boolean{
        let stored : string | null = localStorage.getItem(setting.id);
        if (stored == null){
            setting.setActive(setting.isTriggered());
            return setting.isActive();
        }
        else{return stored == "true" ? true : false;}
    }
    public static getSetting(id : string) : Setting | null{
        for (let i = 0; i < this.settings.length; i++){
            let setting : Setting = this.settings[i];
            if (setting.id == id){return setting}
        }

        return null;
    }
    public static getSettings(){return this.settings;}
    public static addSetting(setting : Setting){this.settings.push(setting);}

    public static takeEffect(){
        for (let i = 0; i < this.settings.length; i++){
            let setting : Setting = this.settings[i];
            setting.takeEffect();
        }
    }
}


export let initSettings = $state({done: false});