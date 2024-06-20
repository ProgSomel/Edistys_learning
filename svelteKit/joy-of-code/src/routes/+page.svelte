<script>
	import { onMount, onDestroy } from "svelte";

    onMount(()=> console.log('Mounted Home page'))
    onDestroy(()=> console.log('Unmounted Home page'))
</script>

<nav>
    <ul>
        <li>
            <a href="/">Home</a>
        </li>
        <li>
            <a href="/posts">Posts</a>
        </li>
    </ul>
</nav>
<h1 class="text-2xl font-bold">This is Home Page</h1>
<style>
    h1 {
        color: red;
    }
</style>