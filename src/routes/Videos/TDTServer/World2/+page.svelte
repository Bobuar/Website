<script>
    import underConstruction from "$lib/assets/Images/Under Construction/under-construction-cat.png";
    import Page from "$lib/Components/PageLayout/PageTemplate.svelte";
    import ProjectBox from "$lib/Components/ProjectBox/ProjectBox.svelte";

    import ep1Image from "$lib/assets/Images/VideoPageImages/TDT/World2/Ep1.jpg";
    import ep2Image from "$lib/assets/Images/VideoPageImages/TDT/World2/Ep2.jpg";
    import ep3Image from "$lib/assets/Images/VideoPageImages/TDT/World2/Ep3.jpg";
    import happyGhastImage from "$lib/assets/Images/VideoPageImages/TDT/World2/HappyGhast.jpg";
</script>

<style>
    button{
        margin:auto;
        margin-bottom:3rem;
        display: block;
    }
</style>

<Page title={"TDT World 2 Videos"} subTitle={""}>
    <a href="/Videos/TDTServer/"><button>Back To Worlds</button></a>

    <ProjectBox
        title={'Episode 1'}
        subtitle={""}
        image={ep1Image}
        imageCaption={"Explanation - Episode 1 - World 2 - The TDT Server"}
        page={"https://www.youtube.com/watch?v=S3QJIehtgM8"}
    />

    <ProjectBox
        title={'Episode 2'}
        subtitle={"SIR ALEXANDER BOAR... THE EIGHTH"}
        image={ep2Image}
        imageCaption={"Brick and Terracotta Factory! - Episode 2 - The TDT Server"}
        page={"https://www.youtube.com/watch?v=sAX4PQYWzNQ"}
    />

    <ProjectBox
        title={'Episode 3'}
        subtitle={""}
        image={ep3Image}
        imageCaption={"A series of stupid mistakes that lead to success - Episode 3 - The TDT Server"}
        page={"https://www.youtube.com/watch?v=gOC7olEJoRk"}
    />

    <hr>
    <h3>Stopped numbering.</h3>
    <p>Should the automating Minecraft seriese be in here as well?</p>
    <a href="/Videos/AutomatingMinecraft"><button>Automating Minecraft Page</button></a>
    <p>There you go.</p>
    <p>Anyway, here's the rest...</p>

    <ProjectBox
        title={'Happy Ghast Landing Platforms'}
        subtitle={"His name is Freddie (actually Freddie 2 😢)"}
        image={happyGhastImage}
        imageCaption={"Happy Ghast Landing Platforms - TDT Server"}
        page={"https://www.youtube.com/watch?v=JF-GQxjNCvs"}
    />

</Page>