
<script>
    import Navbar from '../lib/components/Navbar.svelte';
import NavBar from '../lib/components/Navbar.svelte'
import { onMount } from 'svelte';



    import Counter from '$lib/components/counter.svelte'

    
    onMount(async () => {
        console.log("ON MOUNT");
        
        localStorage.setItem("neutral", counter_medio);
        
        
    });

    onMount(async () => {
        console.log("ON MOUNT");
        localStorage.setItem("dissatisfied", counter_triste);
    }
    );

    onMount(async () => {
        console.log("ON MOUNT");
        localStorage.setItem("satisfied", counter_felice);
        
    }
    );

   
let counter_felice = 0;
let counter_medio = 0;
let counter_triste = 0;





</script>



<NavBar/>









<Counter bind:counter_felice={counter_felice} bind:counter_medio={counter_medio} bind:counter_triste={counter_triste}  />

<div class="container">
    <div class="item" id="satisfied"><h1> {counter_felice} voti</h1></div>
    <div class="item" id="neutral"><h1> {counter_medio} voti</h1></div>
    <div class="item" id="dissatisfied"><h1> {counter_triste} voti</h1></div>

</div>











<style>



#satisfied{
    background-color: green;

}

#dissatisfied{
    background-color: red;

}

#neutral{
    background-color: yellow;
}

.container{
    
    width: 50%;
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    
    margin: auto;
    column-gap: 10px;
}


.item{
    display: flex;
    border-radius: 18px;
    width: 100%;
    height: 10vh;
    color: white;
    background-size: contain;
    margin: auto;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    

}

@media screen and (max-width: 481px) {
    .container{
        
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr;

        align-items: flex-end;
        row-gap: 10px;

        

        
    }
} 











</style>