<script lang="ts">
    import underConstruction from "$lib/assets/Images/Under Construction/under-construction-cat.png";
    import Page from "$lib/Components/PageLayout/PageTemplate.svelte";
    import ProjectBox from "$lib/Components/ProjectBox/ProjectBox.svelte";

    import ImageFrame from "$lib/Components/Painting/ImageFrame.svelte";

    import todoPortrait from "$lib/assets/Images/Todo/todo.png";

    import text from "$lib/ToDoBoard/todo.txt?raw";
</script>

<style>
    pre{
        text-align: left;
        margin:auto;
        width:75%;
        hyphens: auto;
        overflow-wrap: anywhere;
    }
</style>

<Page title={"Todo Board"} subTitle={"So much work!"}>
    <ImageFrame
        image={todoPortrait}
        imageCaption={"Todo Portrait"}
        --image-render-method = "pixelated"
        />
    <p>This is Todo and here is his board. The board is everything that needs 
        adding, changing or considering about the website. Todo does all of that. (Thanks Todo)</p>
    <p><a href="https://github.com/Bobuar/Website/issues" target="_blank">Got something to add to the board?</a></p>
    <hr/>

    <pre><p>{text}</p></pre>

</Page>