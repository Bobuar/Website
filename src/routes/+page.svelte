<script>
    import underConstruction from "$lib/assets/Images/Under Construction/under-construction-cat.png";
    import socialMediaImage from "$lib/assets/Images/MainPageProjectImages/socialMedia.png";
    import videoImage from "$lib/assets/Images/MainPageProjectImages/video.jpg";
    import codeImage from "$lib/assets/Images/MainPageProjectImages/openSource.png";
    import datapackImage from "$lib/assets/Images/MainPageProjectImages/datapack.png";
    import Page from "$lib/Components/PageLayout/PageTemplate.svelte";
    import ProjectBox from "$lib/Components/ProjectBox/ProjectBox.svelte";
    import SocialBox from "$lib/Components/ProjectBox/SocialBox.svelte";
    import BlueskySocialBox from "$lib/Components/SocialBoxes/Bluesky.svelte";
    import ModrinthBox from "$lib/Components/SocialBoxes/Modrinth.svelte";
</script>

<style>
    
</style>

<Page title={"Home"} subTitle={"Check out some of these projects"}>

<ProjectBox title={"Videos"} 
            subtitle={"Mostly Minecraft and/or Programming"} 
            image={videoImage}
            page={"/Videos"}/>

<!-- <SocialBox
    title={"Datapacks"}
    subtitle={"No more lightning fire, end void deaths are less annoying, sniffers get more uses? 😯"}
    image={modrinthLogoLight}
    rolloverImage={modrinthLogoDark}
    imageCaption={"Modrinth"}
    target={"_blank"}
    externalLink={true}
    page={"https://modrinth.com/user/Bobuar"}
    /> -->
    <ModrinthBox/>

<ProjectBox title={"Open Source Code Projects"} 
            subtitle={"Contains: Discord bots, Code from videos..."} 
            image={codeImage}
            page={"/ProgrammingProjects"}/>

<!-- <SocialBox
    title={"Bluesky"}
    subtitle={""}
    image={blueSkyLogoWhite}
    rolloverImage={blueSkyLogoBlue}
    imageCaption={"@bobuar.\u200Bbsky.\u200Bsocial"}
    target={"_blank"}
    externalLink={true}
    page={"https://bsky.app/profile/bobuar.bsky.social"}
    /> -->
    
    <BlueskySocialBox/>

</Page>