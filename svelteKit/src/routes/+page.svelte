<script>
    import {goto, beforeNavigate, afterNavigate} from '$app/navigation';

    const handleClick = () => {
        console.log('placing order');
        goto('/product');
    }

    beforeNavigate((navigation)=> {
        console.log({before: navigation});
    });

    afterNavigate((navigation)=> {
        console.log({after: navigation});
    })

</script>
<h1>Welcome Somel Ahmed</h1>
<a href="/blog">Blog</a>
<a href="/product">Products</a>

<button on:click={handleClick}>Place Order</button>