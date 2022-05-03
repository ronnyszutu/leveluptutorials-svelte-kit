<script context="module">
    export async function load() {
        const posts = import.meta.globEager('../../posts/*.md');
        // console.log('posts', Object.values(posts));
        const postsList = Object.values(posts);
        const postsMeta = postsList.map(post => {
            return post.metadata;
        });
        console.log('postsMeta', postsMeta);
        return {
            props: {
                posts: postsMeta
            }
        };
    }
</script>

<script>
    export let posts;
</script>

<div>
    <slot />
    <h5>Archive</h5>
    <ui>
        {#each posts as post}
            <li><a href={post.slug}>{post.title}</a></li>
        {/each}
    </ui>
</div>