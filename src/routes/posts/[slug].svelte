<script context="module">
    export async function load({ params }) {
        try {         
            const Post = (await import(`../../posts/${params.slug}.md`));
            // console.log('Post', Post);
            
            return {
                // Data passed into svelte component
                props: {
                    Post: Post.default,
                }
            };
        } catch (e) {
            // return {
            //     status: 303,
            //     redirect: '/posts'
            // }

            // For status to work, we need the correct outputs
            // 404 needs error message
            // Redirects needs status and redirect
            return {
                status: 404,
                error: "Post not found"
            }
        }
    }
</script>

<script>
    export let Post;

</script>

<svelte:component this={Post}/> <!-- copied from cmd -->
