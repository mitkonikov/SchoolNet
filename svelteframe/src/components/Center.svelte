<div class="form-center-container">
    <div class="form-center">
        <div class="form-center-v">
            <slot></slot>
        </div>
    </div>
</div>

<style type="text/scss">
    .form-center-container {
        position: relative;
        width: 100%;
        height: calc(100% - 48px);
    }

    .form-center {
        position: absolute;
        left: 50%;
        width: 50vh;
        height: calc(100% - 57px);
        -webkit-transform: translate(-50%, 0%);
        transform: translate(-50%, 0%);
        box-sizing: border-box;
        overflow: hidden;
    }

    .form-center-v {
        position: absolute;
        width: 100%;
        top: 50%;
        -webkit-transform: translate(0%, -50%);
        transform: translate(0%, -50%);
    }

    
    @media only screen and (max-height: 720px) {
        .form-center {
            font-size: 0.9em;
            width: 30em;
            height: calc(100% - 57px);
            position: absolute;
            top: 0%;
            left: 50%;
            -webkit-transform: translate(-50%, 0%);
            transform: translate(-50%, 0%);
            overflow: auto;
        }

        .form-center-v {
            width: 100%;
            height: 100%;
        }
    }

    @media only screen and (max-width: 530px) {
        .form-center {
            width: 30em;
            height: calc(100% - 57px);
            position: absolute;
            top: 0%;
            left: 50%;
            -webkit-transform: translate(-50%, 0%);
            transform: translate(-50%, 0%);
        }
    }

    @media only screen and (max-width: 482px) {
        .form-center {
            width: 100%;
            height: calc(100% - 57px);
            position: absolute;
            top: 0%;
            left: 0%;
            -webkit-transform: translate(0%, 0%);
            transform: translate(0%, 0%);
        }
    }
</style>