<script context="module">
    export async function load({ params }) {
        const Hello = (await import(`../../posts/${params.slug}.md`));
        // console.log('Hello', Hello);

        return {
            props: {
                Hello: Hello.default,
                title: Hello.metadata.title // figured out how to find this via console log
            }
        }
    }
</script>

<script>
    export let Hello;
    export let title;
</script>

<h2>{title}</h2>

<svelte:component this={Hello}/> <!-- copied from cmd -->
