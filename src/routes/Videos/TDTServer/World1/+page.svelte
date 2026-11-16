<script>
    import underConstruction from "$lib/assets/Images/Under Construction/under-construction-cat.png";
    import Page from "$lib/Components/PageLayout/PageTemplate.svelte";
    import ProjectBox from "$lib/Components/ProjectBox/ProjectBox.svelte";

    import TDTWorld2Image from "$lib/assets/Images/VideoPageImages/TDT/2026-10-25_19.25.39.png";
    import TDTWorld1Image from "$lib/assets/Images/VideoPageImages/TDT/2026-10-25_19.35.54.png";
    import ep0Image from "$lib/assets/Images/VideoPageImages/TDT/World1/Ep0.jpg";
    import ep1Image from "$lib/assets/Images/VideoPageImages/TDT/World1/Ep1.jpg";
    import ep2Image from "$lib/assets/Images/VideoPageImages/TDT/World1/Ep2.jpg";
    import ep3Image from "$lib/assets/Images/VideoPageImages/TDT/World1/Ep3.jpg";
</script>

<style>
    button{
        margin:auto;
        margin-bottom:3rem;
        display: block;
    }
</style>

<Page title={"TDT World 1 Videos"} subTitle={""}>
    <a href="/Videos/TDTServer/"><button>Back To Worlds</button></a>

    <ProjectBox
        title={'Episode 0'}
        subtitle={""}
        image={ep0Image}
        imageCaption={"An Introduction - Episode 0 - The TDT Server"}
        page={"https://www.youtube.com/watch?v=-fKt6lMObhU"}
    />

    <ProjectBox
        title={'Episode 1 - Part[1/2]'}
        subtitle={""}
        image={ep1Image}
        imageCaption={"Willing Participants - Episode 1 (Part 1/2) - The TDT Server"}
        page={"https://www.youtube.com/watch?v=NdxCCXGwXWI"}
    />

    <ProjectBox
        title={'Episode 1 - Part[2/2]'}
        subtitle={""}
        image={ep2Image}
        imageCaption={"Boring Academies and One in a Million Shots! - Episode 1 (Part 2/2) - The TDT Server"}
        page={""}
    />

    <ProjectBox
        title={'Episode 2'}
        subtitle={""}
        image={ep3Image}
        imageCaption={"End Busters and Base Building - Episode 2 - The TDT Server"}
        page={"https://www.youtube.com/watch?v=uhiTZMfQMAE"}
    />

</Page>