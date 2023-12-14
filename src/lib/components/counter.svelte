<script>

    

export let counter_medio = 0;
export let counter_felice = 0;
export let counter_triste = 0;






  function incremento_satisfied() {
    
    counter_felice +=1;

    localStorage.setItem("satisfied", counter_felice);
    
    
  }

  function incremento_neutral() {

    counter_medio +=1;

    localStorage.setItem("neutral", counter_medio);

    }

  function incremento_dissatisfied() {

    
    counter_triste +=1;

    localStorage.setItem("dissatisfied", counter_triste);
  }

  



    

</script>

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

<div class="container_emojs">
    <div class="item"  > 
        <span id="satisfied" class="material-symbols-outlined" on:click={incremento_satisfied}  >
        sentiment_satisfied
        </span>
    </div>
    <div class="item" >
		<span id="neutral" class="material-symbols-outlined" on:click={incremento_neutral} >
            sentiment_Neutral
        </span>
	</div>
   
    <div class="item"><span id="dissatisfied"   class=" material-symbols-outlined" on:click={incremento_dissatisfied}>
        sentiment_dissatisfied
        </span>
    </div>


</div>









<style>

#dissatisfied{
        color: red;
    }

    #neutral{
        color: yellow;
    }

    #satisfied{
        color: green;
    }

    .container_emojs{
        width: 50%;
        
        
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr;
        margin: auto;
        margin-top: 5%;
        contain: content;
        justify-items: center;
        padding: 10px;
        background-size: contain;


    }

    .container_emojs > .item{
        
        
        
        background-size: contain;
        margin: auto;
        

    }

    
    .item > .material-symbols-outlined  {
    font-variation-settings:'FILL' 0,'wght' 400,'GRAD' 0,'opsz' 24;

    font-size: 200px;
    }

    .material-symbols-outlined:hover{
        cursor: pointer;
        
    }

    @media screen and (max-width: 481px) {
        .container_emojs{
            width: 80%;
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr 1fr;

            align-items: flex-end;

            
        }
    } 




</style>