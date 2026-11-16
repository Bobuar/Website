<script>
    import underConstruction from "$lib/assets/Images/Under Construction/under-construction-cat.png";
    import videoImage from "$lib/assets/Images/MainPageProjectImages/video.jpg";
    import Page from "$lib/Components/PageLayout/PageTemplate.svelte";
    import ProjectBox from "$lib/Components/ProjectBox/ProjectBox.svelte";
    import proudImage from "$lib/assets/Images/VideoPageImages/CanMusicPlayMinecraft.png";
    import lionessThumb from "$lib/assets/Images/VideoPageImages/LionessThumb.jpg";
    import angelThumb from "$lib/assets/Images/VideoPageImages/AngelThumb.jpg";
    import majoraThumb from "$lib/assets/Images/VideoPageImages/majoraThumb.jpg";
    import SocialBox from "$lib/Components/ProjectBox/SocialBox.svelte";
    import automatingMinecraftImage from "$lib/assets/Images/ProgrammingProjects/automatingMinecraft.png";
    import canMusicPlayMinecraftImage from "$lib/assets/Images/ProgrammingProjects/canMusicPlayMinecraft.png";
    import tinyBuildImage from "$lib/assets/Images/VideoPageImages/TinyBuild.jpg";
    import secretLifeImage from "$lib/assets/Images/VideoPageImages/SecretLife.jpg";
    import datapackImage from "$lib/assets/Images/VideoPageImages/Datapack.jpg";
    import TDTServerImage from "$lib/assets/Images/VideoPageImages/TDTServer.jpg";
    import YouTubeSocialBox from "$lib/Components/SocialBoxes/YouTube.svelte";
</script>

<style>
    
</style>

<Page title={"Videos"} subTitle={"SMASH that like button... or whatever I'm supposed to say 😆"}>

<section>

<YouTubeSocialBox/>

<ProjectBox title={"The Video I'm most proud of"} 
            subtitle={"I bet you want to know..."} 
            image={proudImage}
            imageCaption={"Can Music Play Minecraft?"}
            page={"https://www.youtube.com/watch?v=yXmAm0iXgCQ"}
            target={"_blank"}/>
<!-- <ProjectBox title={"The Video I'm least proud of"} 
            subtitle={"Embarrassing! 🫣"} 
            image={underConstruction}/> -->

</section>

<hr/>

<section>

<h3>Bobuar's Friends!</h3>
<ProjectBox title={"ANemeanLioness"}
            subtitle={"Builder of impressive towers, towns and trees!"}
            image={lionessThumb}
            imageCaption={"EPIC Murals, Interiors, Quests & MORE!"}
            page={"https://www.youtube.com/@ANemeanLionesss"}
            target={"_blank"}/>

<ProjectBox title={"Angelp"}
            subtitle={"Makes amazing depictions of our characters!"}
            image={angelThumb}
            imageCaption={"Fallen Angels, Existential Crises, and A Forever Vacay to Pompeii :D- Tinybuild Episode #2"}
            page={"https://www.youtube.com/@ZshfAolDpjrlk"}
            target={"_blank"}/>

<ProjectBox title={"MajoraPuppet"}
            subtitle={"A rat.. I mean Elephant! (Just imagine there's a trunk there)"}
            image={majoraThumb}
            imageCaption={"A Stable Beginning | TDT 2: EP 1"}
            page={"https://www.youtube.com/@majorapuppet0"}
            target={"_blank"}/>

    </section>

<hr>

<section>

<h3>Series</h3>

<ProjectBox title={"Can Music Play Minecraft?"}
                subtitle={"Can it?"}
                image={canMusicPlayMinecraftImage}
                page={"/Videos/CanMusicPlayMinecraftSeries"}/>

<ProjectBox title={"Automating Minecraft"}
                subtitle={"Seemed like a good idea at the time, became very difficult to come up with ideas 😆"}
                image={automatingMinecraftImage}
                imageCaption={"Using code to automate boring Minecraft tasks! 🥱"}
                page={"/Videos/AutomatingMinecraft"}/>

<ProjectBox
    title={"Tiny Build"}
    subtitle={"Created by ANemeanLioness"}
    image={tinyBuildImage}
    imageCaption={"4 Contestants, 3 Rounds, 15 Blocks, 7 Minutes"}
    page={"/Videos/TinyBuildChallenge"}
/>

<ProjectBox
    title={"Datapacks"}
    subtitle={"So much to maintain!"}
    image={datapackImage}
    page={"/Videos/Datapacks"}
/>

<ProjectBox
    title={"TDT Server"}
    subtitle={"Delightful"}
    image={TDTServerImage}
    page={"/Videos/TDTServer"}
/>

<ProjectBox
    title={"Secret Life"}
    subtitle={"Ssshhhh"}
    image={secretLifeImage}
    imageCaption={"PINK SNIFS!"}
    page={"/Videos/SecretLife"}
/>

<!-- <ProjectBox
    title={"Double Life"}
    subtitle={"Bobuar + Majora"}
/> -->

</section>

</Page>