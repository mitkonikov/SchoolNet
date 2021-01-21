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

    /* Special Lobby Button CSS */
    .btn-special {
        background-color: transparent;
        border-style: solid;
        border-width: 1px;
        border-color: white;
        width: 100%;
        font-family: 'Roboto', sans-serif;
        font-weight: 100;
        font-size: 1.6em;
        height: 3.6em;
        text-align: center;
        margin: 0 0 0.5em 0;
    }

    .btn-special {
        background-color: var(--color-main-1-1);
        border-style: none;
        border-width: 0;
        margin: 0;
        position: relative;
        height: 4.6em;
    }

    .btn-special:nth-child(2n+1) {
        background-color: var(--color-main-1);
    }

    /*.btn-special:hover {
        background-color: #3489aa;
    }*/

    .btn-special:hover {
        background-color: #114a3b;
    }

    .btn-special:nth-child(2n+1):hover {
        background-color: #0b6e4f;
    }

    .btn-special.active {
        /*background-color: #163c4b;
        color: #ffffff;*/

        animation: pop 0.5s ease-out;
        background: radial-gradient(circle at center, var(--color-button-pop) 5%, #3489aa 6%);
        background-size: 100% 100%;
        background-position: center center;
        background-repeat: no-repeat;
        transform-origin: center;
    }

    .btn-special-text {
        text-align: left;
        padding-left: 5em;
    }

    .btn-special-title {
        font-weight: 300;
        padding-bottom: 0.4em;
    }

    .btn-special-content {
        font-size: 0.7em;
    }

    @media only screen and (max-height: 720px) {
        .btn-special-text {
            padding-left: 4em;
            .btn-special-content {
                font-size: 0.6em;
            }
        }
    }

    @media only screen and (max-width: 530px) {
        .btn-special-text {
            padding-left: 4em;
            .btn-special-content {
                font-size: 0.6em;
            }
        }
    }
</style>