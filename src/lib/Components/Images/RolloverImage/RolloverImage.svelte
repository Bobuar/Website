<script>
    import underConstruction from "$lib/assets/Images/Under Construction/under-construction-cat.png";
    import Image from "$lib/Components/ProjectBox/Components/Image.svelte";



    let {
        defaultImage = underConstruction,
        rolloverImage = underConstruction,
        imageCaption = "",
        hovered=false,
        focused=false,
        addFigureBorder = true
    } = $props();

    let images = [defaultImage,rolloverImage]

    let currentImage = $state(0);
    let opacity = $state(1);

    let firstTimeTrigger = false;

    $effect(() => {
        if (hovered || focused){
            opacity = 0;
            setTimeout(() => {
                if (hovered || focused){
                    currentImage = 1; opacity=1}}, 1000)
        }
        else{
            if (firstTimeTrigger){
                opacity = 0;
                setTimeout(() => {
                    if (!hovered || focused){
                        currentImage = 0; opacity=1}}, 1000)
            }
            else{firstTimeTrigger = true;}
        }
        // currentImage = hovered == false ? 0 : 1;
        // opacity = hovered == false ? 1 : 0;
    });

</script>

<style>
    /* div { opacity: 0.1;
        transition:opacity, 3s ease;} */
</style>

<Image 
    image={images[currentImage]}
    imageCaption={imageCaption}
    hovered={hovered}
    focused={focused}
    addFigureBorder={addFigureBorder}
    --image-opacity = {opacity}
    --image-transition-on = "opacity"
/>
<!-- Some of these CSS changes should not be done here because they are not specific to a rollover image -->
