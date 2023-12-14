<script>

  export let form;

  console.log(form);


</script>



<div class="container">
    <h2>Login</h2>

    {#if form?.message}
    <p class="red" >{form.message}</p>
      
    {/if}
  
    <form method="POST">
      <div class="box">
        <input type="text" name="user" id="" value={form?.user || "" } />
      </div>
      <div class="box">
        <input type="password" name="password" id=""  />
      </div>
      <button>Login</button>
    </form>
  </div>


  <style>

    .container{
      margin: auto;
      width: 20vh;
      margin-top: 10%;
      background-size: contain;
      border: 2px solid black;
      padding: 20px;
      text-align: center;
      line-height: 28px;
    }

    input{
      
    } 

    .red{
      color: red;
    }
  </style>