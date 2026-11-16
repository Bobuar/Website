<script lang="ts">
	import underConstruction from "$lib/assets/Images/Under Construction/mini-eggs.jpg";
	import logo from "$lib/assets/Images/Logo/logo.png";
	import '$lib/Style/main.css';
	import '$lib/Style/ScreenSizeChanges.css';
	import {SloganGenerator} from "$lib/Scripts/Slogan.ts";
	import NavButton from "$lib/Components/Navigation/button.svelte";
	import Footer from "$lib/Components/Footer/Footer.svelte";
	import {onMount} from "svelte";

	let slogan = $state(SloganGenerator.getRandomSlogan());

	let { children } = $props();

	// PROTECTED CODE! - DO NOT DELETE 🚓 👮👮‍♀️👮‍♂️ 🚓
	// This comment has been written a while after the egg system was developed
	// But I wanted to mention that this code is beautiful and should not be removed
	// or commented out.
	function sayEgg(){console.log("Egg");}
	// END OF PROTECTED CODE SEGMENT


	// Are you sure you want to use onMount in layout not PageTemplate.svelte?
	// onMount runs when this component is loaded. So this will only run
	// when the layout is loaded, not when the whole page does
	 onMount(() => {
		
	});

	
	
</script>

<style>
	h1{
		font-size:10rem;
		margin-top: 0;
		margin-bottom: 0;
		text-align: center;
	}
	p{
		margin-top: 0;
		font-size: 2rem;
		text-align: center;
	}
	#logo {
		width:10%;
		margin-left:2rem;
		margin-top:2rem;
	}
	#mainLetter {
		width:10rem;
		vertical-align: -0.15em;
		transition: border 10s ease;
	}
	img {
		
	}
	img:hover{
		
	}
	#dontate{
		/* replaced with tooLongLink in main.css */
		/* overflow-y: hidden; */
	}

</style>

<svelte:head>
	<link rel="icon" href={logo} />
</svelte:head>

<header>
	<h1 aria-label="Bobuar"><a href="/"><img id=mainLetter src={logo} alt="Bobuar Logo"/></a><span id="obuar">obua<span id="egg">r</span></span></h1>
    <p>{slogan}</p>
</header>

<nav>
	<NavButton title={"Home"} page={"/"}/>
	<NavButton title={"Contact"} page={"/Contact"}/>
	<NavButton title={"Accessibility"} page={"/Accessibility"}/> 
</nav>

{@render children()}

<Footer/>

<p id="dontate" class="tooLongLink">Donate: <a href="https://buymeacoffee.com/bobuar" target="_blank">buymeacoffee.com/<wbr>bobuar</a></p>
<p><a href="/ToDoBoard">See My Todo Board</a></p>