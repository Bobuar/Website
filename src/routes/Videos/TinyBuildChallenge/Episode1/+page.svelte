<script>
    import underConstruction from "$lib/assets/Images/Under Construction/under-construction-cat.png";
    import Page from "$lib/Components/PageLayout/PageTemplate.svelte";
    import ProjectBox from "$lib/Components/ProjectBox/ProjectBox.svelte";
    import tinyBuildImageEp1Bobuar from "$lib/assets/Images/VideoPageImages/TinyBuildEp1.jpg";
    import tinyBuildImageEp1Lioness from "$lib/assets/Images/VideoPageImages/TinyBuild/Ep1/Lioness.jpg";
    import tinyBuildImageEp1Angel from "$lib/assets/Images/VideoPageImages/TinyBuild/Ep1/Angel.jpg";
</script>

<style>
    button{
        margin:auto;
        margin-bottom:3rem;
        display: block;
    }
</style>

<Page title={"Tiny Build Challenge Episode 1"} subTitle={"Created by ANemeanLioness"}>

    <a href="/Videos/TinyBuildChallenge/"><button>Back To Episodes</button></a>

    <ProjectBox title={"Bobuar"}
                subtitle={""}
                image={tinyBuildImageEp1Bobuar}
                imageCaption={"Tiny Build Challenge with Angel and ANemeanLioness"}
                page={"https://www.youtube.com/watch?v=kn8rDyDz9Po"}/>

    <ProjectBox title={"Lioness"}
            subtitle={""}
            image={tinyBuildImageEp1Lioness}
            imageCaption={"The FIRST EVER Tiny Build Challenge! | Ft. Angel and Bobuar"}
            page={"https://www.youtube.com/watch?v=PHotWZxu65w"}/>

    <ProjectBox title={"Angel"}
            subtitle={""}
            image={tinyBuildImageEp1Angel}
            imageCaption={"20 BLOCK TINYBUILD CHALLENGE!!!!"}
            page={"https://www.youtube.com/watch?v=EtAjR5Jpp1Q"}/>

    <!-- <ProjectBox title={"Majora"}
            subtitle={""}
            image={""}
            imageCaption={""}
            page={"/Videos/TinyBuildChallenge/Episode1/Majora"}/> -->

</Page>