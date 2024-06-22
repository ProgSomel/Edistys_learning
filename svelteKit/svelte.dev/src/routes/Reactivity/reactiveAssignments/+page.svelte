<h1>Reactivity</h1>
<script>
    let count = 0;
    function handleIncrement() {
        count++;
    }


</script>

<div>
    <h4>Reactive assignments:</h4>
<button on:click={handleIncrement}>
    Clicked {count}
    {count > 0 ?'times':'time' }
</button>





</div>


<style>
    div {
        text-align: center;
    }
</style>