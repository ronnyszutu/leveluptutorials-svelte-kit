<script context="module">
    export async function load({ params }) {
        const Hello = (await import(`../../posts/${params.slug}.md`)).default;
        const post = {
            // slug comes directly from the file title
            // title: params.slug,
            // date: new Date(),
            // body: "lorem ipsum",
        };
        return {
            props: {
                Hello,
                // post
            }
        }
    }
</script>

<script>
    // import Hello from '../../posts/hello.md';
    // export let post;
    export let Hello;
</script>

<!-- <Hello /> -->
<svelte:component this={Hello}/> <!-- copied from cmd -->

<!-- <h3>{post.title}</h3> -->
