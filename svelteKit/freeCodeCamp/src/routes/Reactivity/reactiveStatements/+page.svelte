<script>
    let count = 0;
    $: if(count > 10) {
        alert("Count is dangerously high!");
        count = 10;
    }

    function handleClick() {
        count++;
    }
</script>

<div>
    <button on:click={handleClick}>
        Clicked {count}
        {count > 0 ? 'times' : 'time'}
    </button>
</div>
<style>
    
    div{
        display: flex;
        justify-content: center;
        margin-top: 100px;
    }
</style>