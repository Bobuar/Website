<script>
    import underConstruction from "$lib/assets/Images/Under Construction/under-construction-cat.png";
    import Page from "$lib/Components/PageLayout/PageTemplate.svelte";
    import ProjectBox from "$lib/Components/ProjectBox/ProjectBox.svelte";

    import TDTWorld2Image from "$lib/assets/Images/VideoPageImages/TDT/2026-10-25_19.25.39.png";
    import TDTWorld1Image from "$lib/assets/Images/VideoPageImages/TDT/2026-10-25_19.35.54.png";
</script>

<style>
    
</style>

<Page title={"TDT Server Videos"} subTitle={""}>

<ProjectBox
    title={'World 1'}
    subtitle={""}
    image={TDTWorld1Image}
    page={"/Videos/TDTServer/World1"}
/>

<ProjectBox
    title={'World 2'}
    subtitle={""}
    image={TDTWorld2Image}
    page={"/Videos/TDTServer/World2"}
/>

</Page>