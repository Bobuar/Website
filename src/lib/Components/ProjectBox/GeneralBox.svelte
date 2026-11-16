<script>
    import underConstruction from "$lib/assets/Images/Under Construction/under-construction-cat.png"
    import arrow from "$lib/assets/Images/allPages/arrow.png";

    let defaultPage = "/UnderConstruction";

    let hovered = $state(false);
    let focused = $state(false);

    let {
        title = "",
        subtitle = "",
        image = underConstruction,
        imageCaption = "",
        page = defaultPage,
        target = "_self",
        externalLink = false,
        children
    } = $props();

    externalLink = externalLink || page.startsWith("http")
    if (externalLink && target == "_self"){target="_blank"}
    if (page == ""){page=defaultPage}

</script>

<style>
    :root {
        --external-link-image-width: 5rem;
        --box-width: 75%
    }

    .projectBox{
        margin: auto;
        width:var(--box-width);
        /*border: 5px solid rgb(88, 63, 154);*/
        margin-bottom: 3rem;
        padding:0px;
        padding-bottom:1rem;
    }

    button{
    transition: background-color 2s, color 2s;
    transition-timing-function: ease;

    figcaption{
        margin: auto;
        /* border:10px solid black; */
        width:75%;
        background-color: black;
        transition: color,background-color 3s ease;
    }
    figure{
        margin:auto;
        /*margin:0; /* Makes the image inside not get smaller */
        width:90%;
    }
    .figureBorder{
        border: 0.5rem dashed var(--highlight-colour-2);
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        margin-bottom: 1rem;
        transition: border 3s ease;
    }
    button:focus, button:hover .figureBorder{
        border: 0.5rem dashed var(--highlight-colour);
    }

    #opensNewTabArrow{
        /* width: var(--external-link-image-width); */
        width: clamp(3rem,10vw,var(--external-link-image-width));
        float:right;
        /*border:1px solid white;*/
    }

    h3.externalLink{
        margin-left: clamp(0px,10vw,var(--external-link-image-width));
        margin-right: clamp(0px,10vw,var(--external-link-image-width));
        
        /* border:1px solid red; */
    }

    .subtitle{text-wrap: balance;}
}

/*.projectBox p{
        font-size: 1.5rem;
    }*/
</style>

<a href={page} target={target} tabindex="-1">
    <button class="projectBox" class:hovered
        onmouseenter={() => hovered = true}
        onmouseleave={() => hovered = false}
        onfocusin={() => focused = true}
        onfocusout={() => focused = false}>
        {#if externalLink}
            <img id="opensNewTabArrow" src={arrow}/>
        {/if}
        <h3 class:externalLink>{title}</h3>
        <p class="non-essential subtitle">{subtitle}</p>
        {@render children({hovered,focused})}
    </button>
</a>