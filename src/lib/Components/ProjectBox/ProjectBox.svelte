<script>
    import underConstruction from "$lib/assets/Images/Under Construction/under-construction-cat.png";
    import Image from "$lib/Components/ProjectBox/Components/Image.svelte";
    import GeneralBox from "$lib/Components/ProjectBox/GeneralBox.svelte";
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
        addFigureBorder = true
    } = $props();

</script>

<GeneralBox title={title}
            subtitle={subtitle}
            image={image}
            imageCaption={imageCaption}
            page={page}
            target={target}
            externalLink={externalLink}>
    {#snippet children({ hovered,focused })}
    {#if rolloverImage == ""}
        <Image image={image}
            imageCaption={imageCaption}
            hovered={hovered}
            focused={focused}
            addFigureBorder={addFigureBorder}/>
    {:else}
        <RolloverImage
            defaultImage={image}
            rolloverImage={rolloverImage}
            imageCaption={imageCaption}
            hovered={hovered}
            focused={focused}
            addFigureBorder={addFigureBorder}/>
    {/if}
    {/snippet}
</GeneralBox>