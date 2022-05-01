<script>
    import Header from "$lib/header.svelte";
</script>

<Header />

<main>    
    <slot />
</main>

<footer>Copyright 2022</footer>

<!-- Svelte CSS is Scoped by default -->
<style>
    
    :global(header) {
        background: red;
    }
</style>