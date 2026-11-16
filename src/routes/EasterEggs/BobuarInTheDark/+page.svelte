<script lang="ts">
    import Page from "$lib/Components/PageLayout/PageTemplate.svelte";
    import ProjectBox from "$lib/Components/ProjectBox/ProjectBox.svelte";
    import ImageFrame from "$lib/Components/Painting/ImageFrame.svelte";
    import Image from "$lib/Components/ProjectBox/Components/Image.svelte";
    import {onMount} from "svelte";
    import bobuarBoat from "$lib/assets/Images/EasterEggs/BobuarsInTheDark/Bobuar.png";
    import wayOutImage from "$lib/assets/Images/EasterEggs/BobuarsInTheDark/wayOut.png";

    // should detect if the user presses enter and do the submit function

    let shouldEndScreenShow = $state(false);

    let questions = $state([
        "What has roots as nobody sees, is taller than trees. Up, up it goes, and yet never grows?",
        "Thirty white horses on a red hill, first they champ, then they stamp, then they stand still.",
        "Voiceless it cries, wingless flutters, toothless bites, mouthless mutters"
    ]);
    
    let answers = [
        "mountain",
        "teeth",
        "wind"
    ];
    let currentQuestionNumber = $state(0);

    let currentQuestion = $derived(questions[currentQuestionNumber]);

    onMount(() => {
		 AnimationStore.setStyle();

        document.getElementById("riddleAnswer").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {submitAnswer();}
        });
        document.getElementById("riddleAnswer").classList.remove("correct"); /* Svelte will remove a class from existance if it isn't used in the HTML at least once. This is required so Svelte knows about the class when script adds it */
        document.getElementById("riddleAnswer").classList.remove("incorrect");
	});

    

    class AnimationStore{
        private static style;
        
        public static setStyle(){
            this.style = window.getComputedStyle(document.getElementById("riddleAnswer")).getPropertyValue("animation");
        }
        public static getStyle(){return this.style;}
        }

    function animationToggle(){
        let inputBox = document.getElementById("riddleAnswer");
        let style = window.getComputedStyle(inputBox);
        if (style.getPropertyValue("animation") == "none"){
            inputBox.style.animation = AnimationStore.getStyle();
        }
        else{inputBox.style.animation = "none";}
    }

    function submitAnswer(){
        let submittedAnswer : string = document.getElementById("riddleAnswer").value.toLowerCase();
        if (submittedAnswer == answers[currentQuestionNumber]){
            currentQuestionNumber ++;
            document.getElementById("riddleAnswer").value = "";
            document.getElementById("riddleAnswer").classList.add("correct");
            console.log(document.getElementsByClassName("correct"));
            
            setTimeout(() => {
                document.getElementById("riddleAnswer").classList.remove("correct");}, 1200)
            
        }
        else{currentQuestionNumber = 0;
            document.getElementById("riddleAnswer").classList.add("incorrect");
            currentQuestion = questions[currentQuestionNumber];
            setTimeout(() => {document.getElementById("riddleAnswer").classList.remove("incorrect");}, 1200)
        }

        if (currentQuestionNumber == questions.length){
            document.getElementById("riddleAnswer").classList.add("correct");
            setTimeout(() => {
                document.getElementById("riddleAnswer").classList.remove("correct");shouldEndScreenShow = true;}, 1200)
        }
    }

</script>

<style>
    input{
        --startingWidth: 20rem;
        --startingHeight:10rem;

        font-family: var(--main-font);
        font-size: 2rem;
        text-align: center;
        background-color: var(--highlight-colour-2);
        color: var(--text-colour-rollover);
        border: 1rem solid var(--highlight-colour);
        animation: ring 10s infinite; 
        height: var(--startingHeight);
        width: var(--startingWidth);
        margin-bottom:3rem;
    }

    @keyframes ring {

        0%{
            /* border-radius: 0%; */
            height: var(--startingHeight);
            width: var(--startingWidth);
            border: 1rem solid var(--highlight-colour);
        }
        20%{
            /* border-radius: 0%; */
            height: var(--startingHeight);
            width: var(--startingWidth);
            border: 1rem solid var(--highlight-colour);
        }
        25%{box-shadow: 0 0 0 gold;}
        45%{
            border: 1.5rem solid gold;
            height:var(--startingWidth);
            width:var(--startingWidth);
            border-radius: 50%;
            box-shadow: 0 0 0 gold;
            box-shadow: 0 0 1rem gold;
        }
        55%{
            border: 1.5rem solid gold;
            height:var(--startingWidth);
            width:var(--startingWidth);
            border-radius: 50%;
            box-shadow: 0 0 5rem white;
        }
        60%{
            border: 1.5rem solid gold;
            height:var(--startingWidth);
            width:var(--startingWidth);
            border-radius: 50%;
        }
        100%{
            height: var(--startingHeight);
            width: var(--startingWidth);
            border: 1rem solid var(--highlight-colour);}
}

    .correct {
        background-color: white;
        animation: ring 10s infinite, correctFlash 1.2s ease;
    }
    .incorrect{
        background-color: white;
        animation: ring 10s infinite, correctFlash 1.2s ease, incorrectFlash 1.2s ease;
    }

    @keyframes correctFlash {
        0% {
            background-color: white;
        }
        20% {
            background-color: #4CAF50;
        }
        100% {
            background-color: white;
        }
    }

    @keyframes incorrectFlash{
        0% {
            background-color: white;
        }
        20% {
            background-color: #af4c4c;
        }
        100% {
            background-color: white;
        }
    }
    
    #endScreen{}

</style>

<Page title={"Bobuars in the dark"} subTitle={""}>
    <p id="intro">
        As normal on this Saturday morning, you have begun caving with your friends. This time in unfamiliar territory. Suddenly, you bump your head...
    <br/><br/>

        When you open your eyes, you wonder if you have. You are in complete darkness. Where are your friends? You call out, nothing. You feel out, a wall. And on the other side, a wall. The only way is forward? 
    <br/><br/>
        You enter a room with a pond and a Bobuar sailing round. If you want to leave, you’ll have to answer his riddles! 
    </p>
    <Image image={bobuarBoat}
           imageCaption={'"What iss he, my preciouss?"'}/>
    <hr>
    {#if !shouldEndScreenShow}
        <div id="riddles">
            <button onclick={animationToggle}>Animation Toggle</button>
            <p/>
            <!-- <h1>{currentQuestionNumber}</h1> -->
            <!-- <h1 id="questionTitle">Question - {currentQuestionNumber + 1}/{questions.length} </h1>  -->
            <p id="questionTitle">Question - {currentQuestionNumber + 1}/{questions.length} </p> 
            <!-- <p>{currentQuestion}</p> -->
            <h3 id="question">{currentQuestion}</h3>
            <!-- <h3>{currentQuestion}</h3> -->
            <!-- It has a problem with h3 but h1 and p are fine? -->
            <label for="riddleAnswer"><p>Answer:</p></label>
            <input type=text id="riddleAnswer" class="correct incorrect"/>
            <br>
            <button onclick={submitAnswer}>Submit Answer</button>
        </div>
    {:else}
        <div id="endScreen">
            <Image image={wayOutImage}/>
            <h3>Bobuar shows you the exit...</h3>
            <button onclick={history.back()}>Return</button>
        </div>
    {/if}
</Page>