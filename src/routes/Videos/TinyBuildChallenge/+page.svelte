<script>
    import underConstruction from "$lib/assets/Images/Under Construction/under-construction-cat.png";
    import Page from "$lib/Components/PageLayout/PageTemplate.svelte";
    import ProjectBox from "$lib/Components/ProjectBox/ProjectBox.svelte";
    import tinyBuildImageEp1 from "$lib/assets/Images/VideoPageImages/TinyBuildEp1.jpg";
    import tinyBuildImageEp2 from "$lib/assets/Images/VideoPageImages/TinyBuild.jpg";
</script>

<style>
    
</style>

<Page title={"Tiny Build Challenge"} subTitle={"Created by ANemeanLioness"}>

    <ProjectBox title={"Episode 1"}
                subtitle={""}
                image={tinyBuildImageEp1}
                imageCaption={""}
                page={"/Videos/TinyBuildChallenge/Episode1"}/>

    <ProjectBox title={"Episode 2"}
            subtitle={""}
            image={tinyBuildImageEp2}
            imageCaption={""}
            page={"/Videos/TinyBuildChallenge/Episode2"}/>


</Page>