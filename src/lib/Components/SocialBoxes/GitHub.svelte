<script>
    import SocialBox from "$lib/Components/ProjectBox/SocialBox.svelte";
    import gitHubImageWhite from "$lib/assets/Images/ProgrammingProjects/GitHubLogo/GitHub_Invertocat_White.svg";
    import gitHubImageBlack from "$lib/assets/Images/ProgrammingProjects/GitHubLogo/GitHub_Invertocat_Black.svg";
</script>

<SocialBox title={"GitHub"} 
                subtitle={"All (I'm trying) my programming projects!"} 
                image={gitHubImageWhite}
                rolloverImage={gitHubImageBlack}
                imageCaption={"Bobuar"}
                target={"_black"}
                externalLink={true}
                page={"https://github.com/Bobuar"}
                />