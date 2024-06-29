<script>
    export let productId = 100;

</script>
<a href="/">Home</a>
<h1>Products</h1>

<h2><a href="/product/1">Product1</a></h2>
<h2><a href="/product/2">Product1</a></h2>
<h2><a href="/product/3">Product1</a></h2>
<h2><a href={`/product/${productId}`}>Product1</a></h2>