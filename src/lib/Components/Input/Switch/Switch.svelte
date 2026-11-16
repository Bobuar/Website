<script>
    let {
        title = "",
        explination = "",
        id = "",
        toRun = () => {},

        children
    } = $props();
</script>

<style>
    input{
        width:5rem;
        height:5rem;
        display: block;
        margin: auto;
        accent-color: var(--highlight-colour);
        border: 10rem solid var(--highlight-colour);
    }

    #switchBox{
        width:75%;
        margin: auto;
        border: 0.5rem solid var(--highlight-colour-2);
        box-sizing: border-box;
        margin-top: 5rem;
    }
</style>

<section id="switchBox">
    <label for={id}><h3>{title}</h3></label>
    <input id={id} type="checkbox" onclick={toRun}>
    <p>{explination}</p>
    {@render children?.()}
</section>