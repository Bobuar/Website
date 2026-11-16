<script>
    import Page from "$lib/Components/PageLayout/PageTemplate.svelte";
    import ProjectBox from "$lib/Components/ProjectBox/ProjectBox.svelte";
    import gitHubImageWhite from "$lib/assets/Images/ProgrammingProjects/GitHubLogo/GitHub_Invertocat_White.svg";
    import gitHubImageBlack from "$lib/assets/Images/ProgrammingProjects/GitHubLogo/GitHub_Invertocat_Black.svg";
    import SocialBox from "$lib/Components/ProjectBox/SocialBox.svelte";

    let {
        pageTitle = "",
        pageSubtitle = "",
        
        backLink = "",

        videoImage = "",
        videoImageCaption = "",
        videoPage = "",

        codeImage = gitHubImageWhite,
        codeImageCaption = "",
        codePage = "",
        codeImageRollover = gitHubImageBlack
        } = $props();
</script>

<style>
    button{
        margin:auto;
        margin-bottom:3rem;
        display: block;
    }
</style>

<Page title={pageTitle} subTitle={pageSubtitle}>
    {#if backLink != ""}
        <a href={backLink}><button>Other Episodes</button></a>
    {/if}
    <ProjectBox title={"Video"}
                image={videoImage}
                imageCaption={videoImageCaption}
                page={videoPage}
                externalLink={true}
                target={"_blank"}/>

    <SocialBox title={"Code"}
                image={codeImage}
                imageCaption={codeImageCaption}
                rolloverImage={codeImageRollover}
                page={codePage}
                externalLink={true}
                target={"_blank"}/>
</Page>
