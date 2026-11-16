<script>
    import Page from "$lib/Components/PageLayout/PageTemplate.svelte";
    import ProjectBox from "$lib/Components/ProjectBox/ProjectBox.svelte";
    import ImageFrame from "$lib/Components/Painting/ImageFrame.svelte";

    import canMusicPlayMinecraftSeriesImage from "$lib/assets/Images/ProgrammingProjects/canMusicPlayMinecraft.png";
    import canMusicPlayMinecraftImage from "$lib/assets/Images/VideoPageImages/CanMusicPlayMinecraft/CanMusicPlayMinecraftThumb.png";
    import whatMusicPlaysMinecraftImage from "$lib/assets/Images/ProgrammingProjects/whatMusicPlaysMinecraft.png";
</script>

<Page title={"Can Music Play Minecraft?"} subTitle={"The series"}>
    <ImageFrame image={canMusicPlayMinecraftSeriesImage}/>

    <ProjectBox
        title={"Episode 1"} 
        subtitle={"Can Music Play Minecraft?"} 
        image={canMusicPlayMinecraftImage}
        imageCaption="Can Music Play Minecraft?"
        page={"/Videos/CanMusicPlayMinecraftSeries/CanMusicPlayMinecraft"}/>

    <ProjectBox
        title={"Episode 2"} 
        subtitle={"What Music Plays Minecraft?"} 
        image={whatMusicPlaysMinecraftImage}
        imageCaption={"Creating Music that can Play Minecraft"}
        page={"/Videos/CanMusicPlayMinecraftSeries/WhatMusicPlaysMinecraft"}/>
</Page>