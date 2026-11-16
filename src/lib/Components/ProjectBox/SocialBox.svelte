<script>
    import underConstruction from "$lib/assets/Images/Under Construction/under-construction-cat.png";
    import Image from "$lib/Components/ProjectBox/Components/Image.svelte";
    import ProjectBox from "$lib/Components/ProjectBox/ProjectBox.svelte";
    import RolloverImage from "$lib/Components/Images/RolloverImage/RolloverImage.svelte";


    let {
        title = "",
        subtitle = "",
        image = underConstruction,
        rolloverImage = "",
        imageCaption = "",
        page = "/UnderConstruction",
        target = "_self",
        externalLink = false,
    } = $props();

</script>

<ProjectBox title={title} 
            subtitle={subtitle} 
            image={image}
            rolloverImage={rolloverImage}
            imageCaption={imageCaption}
            target={target}
            externalLink={true}
            page={page}
            addFigureBorder={false}
            
            --max-image-width = "10rem"
            --min-image-width = "10rem"
            --width-change = "30%"
            --image-border = "0px"
            --break-caption = "normal"
            // --box-width = "25%"
/>
