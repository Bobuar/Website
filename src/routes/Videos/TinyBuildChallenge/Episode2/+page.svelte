<script>
    import underConstruction from "$lib/assets/Images/Under Construction/under-construction-cat.png";
    import Page from "$lib/Components/PageLayout/PageTemplate.svelte";
    import ProjectBox from "$lib/Components/ProjectBox/ProjectBox.svelte";
    import tinyBuildImageEp2Bobuar from "$lib/assets/Images/VideoPageImages/TinyBuild.jpg";
    import tinyBuildImageEp2Lioness from "$lib/assets/Images/VideoPageImages/TinyBuild/Ep2/Lioness.jpg";
    import tinyBuildImageEp2Angel from "$lib/assets/Images/VideoPageImages/TinyBuild/Ep2/Angel.jpg";
    import tinyBuildImageEp2Majora from "$lib/assets/Images/VideoPageImages/TinyBuild/Ep2/Majora.jpg";
</script>

<style>
    button{
        margin:auto;
        margin-bottom:3rem;
        display: block;
    }
</style>

<Page title={"Tiny Build Challenge Episode 2"} subTitle={"Created by ANemeanLioness"}>

    <a href="/Videos/TinyBuildChallenge/"><button>Back To Episodes</button></a>

    <ProjectBox title={"Bobuar"}
                subtitle={""}
                image={tinyBuildImageEp2Bobuar}
                imageCaption={"Tiny Build Challenge - 7 minutes to build with 15 blocks - I wish I could Barbeque!"}
                page={"https://www.youtube.com/watch?v=8GBfu0zOZc8"}/>

    <ProjectBox title={"Lioness"}
            subtitle={""}
            image={tinyBuildImageEp2Lioness}
            imageCaption={"ONLY 15 Blocks?! Most Chaotic Tiny Build Challenge Yet! | Ft. Angel, Bobuar, and MajoraPuppet"}
            page={"https://www.youtube.com/watch?v=1oRZaD1F45c"}/>

    <ProjectBox title={"Angel"}
            subtitle={""}
            image={tinyBuildImageEp2Angel}
            imageCaption={"Fallen Angels, Existential Crises, and A Forever Vacay to Pompeii :D- Tinybuild Episode #2"}
            page={"https://www.youtube.com/watch?v=upT2Y5SV_jQ"}/>

    <ProjectBox title={"Majora"}
            subtitle={""}
            image={tinyBuildImageEp2Majora}
            imageCaption={"Mess With The Worm,You Get The Brows! | The TDT Tiny Build Challenge! ft. Angel, Bobuar & Lioness"}
            page={"https://www.youtube.com/watch?v=e6r6B82MTco"}/>

</Page>