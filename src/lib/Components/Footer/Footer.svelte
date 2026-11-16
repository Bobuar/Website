<script>
    import bobuarFeet from "$lib/assets/Images/allPages/bobuarFeet(Footer).png";
    import Image from "$lib/Components/ProjectBox/Components/Image.svelte";
</script>

<style>
    footer{
        /* border: 0.5rem dashed var(--text-colour); */
    }

    #footerImage{
        text-align: center;
        width:40%;
        margin: auto;
        display: block;
    }
</style>

<footer>
    <!-- Footer Information -->
<div id="footerImage">
    <Image image={bobuarFeet}
           imageCaption="Footer"/>
</div>
</footer>