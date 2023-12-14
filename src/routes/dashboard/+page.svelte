<script>
    import Counter from "../../lib/components/counter.svelte";

    
    
</script>

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

<div class="navbar">

    <div  class="icon" >
    <a href="/"><span  class="material-symbols-outlined">
        arrow_back_ios
        </span></a>

    </div>
    <h1 id="title">FeedBack</h1>


</div>

<div class="container">
    <h1>Analitics</h1>



    <progress id="satisfied" min="0" max="10" value="8"></progress><br />
    <progress id="dissatisfied" min="0" max="10" value="8"></progress><br />
    <progress id="neutral" min="0" max="10" value="8"></progress><br />

    

</div>









<style>

    .container > progress{
        width: 50%;
        padding: 26px;
    }


    .container{
        margin-top: 4%;
        width: 100%;
        
        text-align: center;
    }

    .navbar{
        width: 100%;
        background-color: blue;
        height: 10vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: white;
        
    }

    .material-symbols-outlined{
        font-size: 40px;
        
        

    }

    @media screen and (max-width: 481px) {
        .container > progress{
            width: 65%;
            padding: 26px;
    }
    } 

    .material-symbols-outlined:hover{
        cursor: pointer;
    }

    a{
        color: white;
        padding-left: 14px;
        
    }

    #title{
        font-size: 40px;
        margin: auto;
        
        
    }
</style>