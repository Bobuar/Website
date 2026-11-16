<script>
    import underConstruction from "$lib/assets/Images/Under Construction/under-construction-cat.png";
    import Image from "$lib/Components/ProjectBox/Components/Image.svelte";
    
    let {
        image = underConstruction,
        imageCaption = ""
    } = $props();

</script>

<style>
    #image{
        margin-bottom: 3rem;
    }
</style>

<div id=image>
    <Image
        image={image}
        imageCaption={imageCaption}
    />
</div>