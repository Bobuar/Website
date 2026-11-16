<script lang="ts">
    import Page from "$lib/Components/PageLayout/PageTemplate.svelte";
</script>

<Page title={"No"}>
    <button onclick={history.back()}>Go Back</button>
</Page>