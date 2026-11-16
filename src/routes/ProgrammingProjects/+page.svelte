<script>
    import eddieImage from "$lib/assets/Images/ProgrammingProjects/Eddie.png";
    import datapackImage from "$lib/assets/Images/ProgrammingProjects/endVoidEntitiesToSpawn.png";
    import roleImage from "$lib/assets/Images/ProgrammingProjects/roles.png";
    import drWhereImage from "$lib/assets/Images/ProgrammingProjects/drWhere.png";
    import automatingMinecraftImage from "$lib/assets/Images/ProgrammingProjects/automatingMinecraft.png";
    import canMusicPlayMinecraftImage from "$lib/assets/Images/ProgrammingProjects/canMusicPlayMinecraft.png";
    import whatMusicPlaysMinecraftImage from "$lib/assets/Images/ProgrammingProjects/whatMusicPlaysMinecraft.png";
    import Page from "$lib/Components/PageLayout/PageTemplate.svelte";
    import ProjectBox from "$lib/Components/ProjectBox/ProjectBox.svelte";
    import RolloverImage from "$lib/Components/Images/RolloverImage/RolloverImage.svelte";
    import GitHubSocialBox from "$lib/Components/SocialBoxes/GitHub.svelte";
    import ModrinthBox from "$lib/Components/SocialBoxes/Modrinth.svelte";
</script>

<Page title={"Programming Projects"} subTitle={"Out of the frying pan, into the fire..."}>

    <section>

    <GitHubSocialBox/>

    <!-- <SocialBox title={"GitHub"} 
                subtitle={"All (I'm trying) my programming projects!"} 
                image={gitHubImageWhite}
                rolloverImage={gitHubImageBlack}
                imageCaption={"Bobuar"}
                target={"_black"}
                externalLink={true}
                page={"https://github.com/Bobuar"}
                /> -->
    
    </section>

    <hr/>

    <section>

    <h3>Discord Bots</h3>

    <ProjectBox title={"Eddie - The Introduction bot"} 
                subtitle={"The introduction bot used on the TDT server"} 
                image={eddieImage}
                target={"_black"}
                externalLink={true}
                page={"https://github.com/Bobuar/Eddie-the-Introduction-Discord-Bot"}/>

    <ProjectBox title={"Activity Improbability Drive (Activity Bot)"}
                subtitle={"Inactive Member, Active Member or Dragonfly?"}
                image={roleImage}/>

    <ProjectBox title={"Dr Where - The Timezone list maker"}
                subtitle={"Helps with timezone management in Discord servers (used on the TDT server)"}
                image={drWhereImage}/>

    </section>

    <hr/>

    <section>

    <h3>Videos</h3>

    <ProjectBox title={"Can Music Play Minecraft? - The series!"}
                subtitle={"Can it?"}
                image={canMusicPlayMinecraftImage}
                page={"/Videos/CanMusicPlayMinecraftSeries"}/>

    <ProjectBox title={"Automating Minecraft - The series!"}
                subtitle={"Seemed like a good idea at the time, became very difficult to come up with ideas 😆"}
                image={automatingMinecraftImage}
                imageCaption={"Using code to automate boring Minecraft tasks! 🥱"}
                page={"/Videos/AutomatingMinecraft"}/>
    
    </section>

    <hr/>
    <br>
    <!-- <h3>Datapacks</h3> -->

    <section>
    <ModrinthBox/>
    </section>

    <!-- <ProjectBox title={"Datapacks"} 
                subtitle={"No more lightning fire, end void deaths are less annoying, sniffers get more uses? 😯"} 
                image={datapackImage}
                imageCaption={"Entities that enter The End Void are teleported to spawn"}
                target={"_blank"}
                page={"https://modrinth.com/user/Bobuar"}/> -->

</Page>