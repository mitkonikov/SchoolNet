<script>
    import IconButton from '@smui/icon-button';
    
    import Facebook from 'svelte-material-icons/Facebook.svelte';
    import Google from 'svelte-material-icons/Google.svelte';
</script>

<div id="login-buttons">
    <div class="center-vh">
        <div class="auth-icon">
            <IconButton class='large' on:click={() => {
                window.location.href = "https://schoolnet.mk/auth/facebook/frame";
            }}>
                <Facebook/>
            </IconButton>
        </div>
        <div class="auth-icon">
            <IconButton class='large' on:click={() => {
                window.location.href = "https://schoolnet.mk/auth/google/frame";
            }}>
                <Google/>
            </IconButton>
        </div>
    </div>
</div>

<style type="text/scss">
    #login-buttons {
        position: relative;
        height: 8em;
    }

    .auth-icon {
        display: inline-block;
    }
</style>