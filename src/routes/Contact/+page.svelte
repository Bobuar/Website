<script lang="ts">
    import Page from "$lib/Components/PageLayout/PageTemplate.svelte";
    import ProjectBox from "$lib/Components/ProjectBox/ProjectBox.svelte";
    import {getPercentOf, AnimationControler, randomNumber, chance} from "$lib/Scripts/helful.ts";
    import {onMount} from "svelte";
    import BlueskySocialBox from "$lib/Components/SocialBoxes/Bluesky.svelte";
    import GitHubSocialBox from "$lib/Components/SocialBoxes/GitHub.svelte";

    let revealCounter = $state(0)
    
    let revealButton : HTMLElement;
    let telephoneBox : HTMLElement;
    let revealButtonAnimationControler : AnimationControler;

    let checkClickingWord : boolean = true;

    onMount(() => {
        revealButton = document.getElementById("revealButton");
        revealButton.classList.remove("pulse");
        revealButtonAnimationControler = new AnimationControler(revealButton, "pulse", 1200);
        telephoneBox = document.getElementById("telephoneBox");
        telephoneBox.classList.remove("telephoneBoxBorder");
    });

    function changeClickingWordToUpperCase(){
        if (checkClickingWord){
            if (chance(10)){
                let clicklingWordElement : HTMLElement = document.getElementById("clicklingWord");
                let clickingWord : string = clicklingWordElement.innerText;
                let index : number = randomNumber(0,clickingWord.length-1);
                let letter : string = clickingWord.charAt(index);
                while (letter == letter.toUpperCase()){
                    index = randomNumber(0,clickingWord.length-1);
                    letter = clickingWord.charAt(index);
                }
                clicklingWordElement.style.fontSize = randomNumber(3,5) + "rem";
                letter = letter.toUpperCase();
                clicklingWordElement.innerText = clickingWord.slice(0,index) + letter + clickingWord.slice(index+1);

                if (clicklingWordElement.innerText == clickingWord.toUpperCase()){checkClickingWord=false;console.log("end");}
            }
        }
    }

    function incrementRevealCounter(){
        revealCounter ++;

        if (revealCounter == 1){telephoneBox.classList.add("telephoneBoxBorder");}
        
        if (revealCounter >= 200){location.href = '/No'}

        changeClickingWordToUpperCase();

        let width : number = revealButton.offsetWidth
        let height : number = revealButton.offsetHeight
        if (revealButton?.clientWidth < getPercentOf(revealButton?.parentElement?.clientWidth,90)){
            revealButton.style.width =  width + 10 + "px";
            revealButton.style.height =  height + 10 + "px";
        }
        else{
            revealButton.classList.add("highlightButton");
            revealButtonAnimationControler.animate();
        }
    }   
</script>

<style>

    #traditionalContactInfo{
        /* margin:auto; */
       padding-inline: 2rem;
    }

    #traditionalContactInfo p{
        text-align: left;
    }

    #telephoneBox{
        
        /* margin: auto; */
        /* width:75%; */
    }
    .telephoneBoxBorder{
        border: 0.4rem solid var(--highlight-colour-2);
    }

    .pulse{
        /* background-color: white; */
        animation: infinite pulse 1.2s ease;
    }

    @keyframes pulse{
        0% {
            /* background-color: white; */
        }
        50% {
            background-color: #af4c4c;
        }
        100% {
            /* background-color: white; */
        }
    }
</style>

<Page title={"Contact Bobuar"} subTitle={"💌"}>
    <!-- <h3>Traditional Contact Methods</h3> -->
    <div id="traditionalContactInfo">
        <p><b>Email:</b> Not yet configured, sorry</p>
        <div id="telephoneBox" class="telephoneBoxBorder">
        <p><b>Telephone:</b> <button id="revealButton" class="pulse" onclick={incrementRevealCounter}>Reveal</button></p>
        {#if revealCounter >= 1}
        <p>You really want to know?</p>
        <p>Keep <b id="clicklingWord" class="pulse">clicking</b></p>
        <p>Get to <b>200:</b> {revealCounter}</p>
        {/if}
        </div>
        <p><b>Address:</b> Bobuar Space Station, just look up? 🙄😳</p>

        <br>
        <p class="tooLongLink"><b>Bluesky:</b> <a target="_blank" href="https://bsky.app/profile/bobuar.bsky.social">bsky.app/<wbr>profile/<wbr>bobuar.<wbr>bsky.<wbr>social</a></p>
        <p class="tooLongLink"><b>GitHub:</b> <a target="_blank" href="https://github.com/Bobuar">github.com/<wbr>Bobuar</a></p>
    </div>

    <!-- <hr/> -->

    <!-- <h3>Social Media</h3>

    <BlueskySocialBox/>
    <GitHubSocialBox/> -->

</Page>