<h1>Reactivity</h1>
<script>


    let number = 1;
    // the `$:` means 're-run whenever these values change'
    $: doubled = number * 2;
    $: quadrupled = doubled * 2;

    function handleIncrement2() {
        number++;
    }

</script>

<div>
    


<h4>Reactive declarations:</h4>
<button on:click={handleIncrement2}>
    Count: {number}
</button>


<p>
    {number} * 2 = {doubled}
    <br>
    <br>
    {doubled} * 2 = {quadrupled}
</p>
</div>


<style>
    div {
        text-align: center;
    }
</style>