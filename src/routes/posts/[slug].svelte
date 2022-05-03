<script context="module">
    export async function load({ page }) {
    const post = {
      // slug comes directly from the file title
      title: page.params.slug,
      date: new Date(),
      body: "lorem ipsum",
    };
    return {
      props: {
        post
      }
    }
  }
</script>

<script>
    export let post;
</script>

<h3>{post.title}</h3>
