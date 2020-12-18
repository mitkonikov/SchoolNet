<script lang="ts">
    export let id: string;
    export let image: string;
    export let alt: string;
    export let callback: Function;
    export let title: string;
    export let content: string;
</script>

<div class="row">
    <div class="s-form no-padding box">
        <button type="button" class="btn btn-special" id={id} on:click={() => callback()}> 
            <img id="logo" src={image} alt={alt}>
            <div class="btn-special-text">
                <div class="btn-special-title">{title}</div>
                <div class="btn-special-content">{content}</div>
            </div>
        </button>
    </div>
</div>

<style lang="scss">
    #logo {
        width: 3.5em;
        float: left;
        position: relative;
        max-height: -webkit-fill-available;
    }
</style>