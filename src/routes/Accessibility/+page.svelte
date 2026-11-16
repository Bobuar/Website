<script lang="ts">
    import Page from "$lib/Components/PageLayout/PageTemplate.svelte";
    import Switch from "$lib/Components/Input/Switch/Switch.svelte";
    import {Settings, Setting, initSettings} from "$lib/Scripts/Settings/Settings.svelte.ts";
    import {onMount} from "svelte";

    onMount(() => {
        $effect(() => {
            if (initSettings.done){
                initNonEssentialInformation();
            }
        });
    });

    function initNonEssentialInformation(){
        let setting : Setting = Settings.getSetting("non-essential information");
        document.getElementById("non-essential").checked = setting.isActive();
    }

    function setNonEssentialInformation(){
        let isChecked : boolean = <HTMLInputElement> document.getElementById("non-essential").checked;
        Settings.getSetting("non-essential information").setActive(isChecked);
    }
</script>

<Page title={"Settings"} subTitle={""}>
    <Switch title={"Show non-essential information"}
            explination={"Some information is hidden for smaller screens. Show it or hide it?"}
            toRun = {setNonEssentialInformation}
            id = {"non-essential"}>
    <p class="non-essential">This information is non-essential!</p>    
    </Switch>
    
    <Switch title={"Placebo Switch"}
            explination={"Don't like something about the website? This switch might (but won't) help!"}
            toRun = {()=>{}}
            id = {"D.N"}/>
</Page>