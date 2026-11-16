<script>
    let {image,
         imageCaption,
         altText,
         addFigureBorder = false,
         hovered=false,
         focused=false
    } = $props()
</script>

<style>
    :root{
        --min-image-width: 65rem;
        --max-image-width: 80%;
        --width-change: 90%;
        --image-border: 5px solid var(--highlight-colour-2);
        --image-opacity:1;
        --image-transition-on: none;
        --wrap-caption: normal;
        --break-caption: normal;
        --image-render-method: auto;
    }
    figcaption{
        margin: auto;
        /*border:10px solid black;*/
        width: max(min(calc(var(--max-image-width) - 5%), calc(var(--min-image-width) - 5rem)), 25%);/*75%;*/
        
        width: max(calc(var(--max-image-width) - 5%), 10%);

        min-width: fit-content;
        padding-inline: 1rem;
        max-width: min(calc(var(--max-image-width) - 5%), calc(var(--min-image-width) - 5rem));

        background-color: black;
        transition: color,background-color 1s ease;
        font-size: 2rem;
        box-sizing: border-box;   
        word-break: var(--break-caption);
        text-wrap: balance;
    }
    figure{
        margin:auto;
        /*margin:0; /* Makes the image inside not get smaller */
        width:90%;
        margin-top:1rem;
    }
    .figureBorder{
        border: 0.5rem dashed var(--highlight-colour-2);
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        margin-bottom: 1rem;
        transition: border 3s ease;
    }
    figure.hovered.figureBorder, figure.focused.figureBorder{
        border: 0.5rem dashed var(--highlight-colour);
    }

    figcaption.hovered, figcaption.focused{
        background-color: white;
        colour:black
    }
    
    img{
        width: min(var(--max-image-width),var(--min-image-width));/*80%;*/
        border: var(--image-border);
        margin-bottom: 5%;
        margin-bottom: 0;
        transition: width, var(--image-transition-on);
        transition-duration: 3s;
        transition-timing-function: ease;
        opacity: var(--image-opacity);
        image-rendering: var(--image-render-method);
    }

    /* button:hover img{
        width:90%;
    } */
    img.hovered, img.focused{
        width: max(var(--width-change),var(--max-image-width));
    }
    .imageCaptionContainer{
        margin:auto;
        /* width: 10%; */
        /* min-width: 100%; */
    }

</style>

<figure class={imageCaption && addFigureBorder ? "figureBorder":""} class:hovered class:focused>
    <img src={image} alt={altText} class:hovered class:focused/>
    <div class=imageCaptionContainer>
        <figcaption class:hovered class:focused>{imageCaption}</figcaption>
    </div>
</figure>