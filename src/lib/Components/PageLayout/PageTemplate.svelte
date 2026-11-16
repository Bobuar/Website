<script>
    import '$lib/Style/main.css';
    import Footer from "$lib/Components/Footer/Footer.svelte";
    import ProjectBox from "$lib/Components/ProjectBox/ProjectBox.svelte";
    import {onMount} from "svelte";
	import {clickR} from "$lib/Scripts/EasterEggs/SpecificCode/PressR.ts";
	import {Settings,initSettings} from "$lib/Scripts/Settings/Settings.svelte.ts";

    let {title, subTitle, children} = $props();

    onMount(() => {
		Settings.setupSettingsFromStored();
		initSettings.done = true;
		Settings.takeEffect();
		
		clickR();
	});
</script>

<main>
 <div id="page">
    <h2>{title}</h2>
    {#if subTitle != ""}
        <p>{subTitle}</p>
    {/if}
    {@render children?.()}
</div>
</main>

