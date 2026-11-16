<script>
    import Page from "$lib/Components/PageLayout/PageTemplate.svelte";
    import ProjectBox from "$lib/Components/ProjectBox/ProjectBox.svelte";

    import ep1Image from "$lib/assets/Images/ProgrammingProjects/AutomatingMinecraft/ep1.png";
    import ep2Image from "$lib/assets/Images/ProgrammingProjects/AutomatingMinecraft/ep2.png";
    import ep3Image from "$lib/assets/Images/ProgrammingProjects/AutomatingMinecraft/ep3.png";
    import ep4Image from "$lib/assets/Images/ProgrammingProjects/AutomatingMinecraft/ep4.png";
</script>

<Page title={"Automating Minecraft"} subTitle={"Cus that game is so boring! 🥱 Why do people play it so much?"}>

    <ProjectBox title={"Episode 1"}
                image={ep1Image}
                imageCaption={"Using code to automate boring Minecraft tasks! 🥱"}
                page={"/Videos/AutomatingMinecraft/Ep1"}/>

    <ProjectBox title={"Episode 2"}
                image={ep2Image}
                imageCaption={"Coding to Automate Boring Nether Journeys 🥱"}
                page={"/Videos/AutomatingMinecraft/Ep2"}/>

    <ProjectBox title={"Episode 3"}
                image={ep3Image}
                imageCaption={"Coding to Automate my Brick and Terracotta Factory"}
                page={"/Videos/AutomatingMinecraft/Ep3"}/>

    <ProjectBox title={"Episode 4"}
                image={ep4Image}
                imageCaption={"Fixing my Code to Fully Automate my Brick and Terracotta Factory"}
                page={"/Videos/AutomatingMinecraft/Ep4"}/>

    <ProjectBox title={"Episode 5?"}
                subtitle={"Oooo, Bobuar's got another episode planned!"}
                imageCaption={"For now it's just under construction cat for you"}/>

</Page>