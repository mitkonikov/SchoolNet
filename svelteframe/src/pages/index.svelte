<script lang="ts">
    import Center from "../components/Center.svelte";
    import PlatformTitle from "../components/PlatformTitle.svelte";

    import BigButton from "./../components/BigButton.svelte";

    import IconButton from '@smui/icon-button';

    import GitHub from 'svelte-material-icons/GithubCircle.svelte';
    import Gmail from 'svelte-material-icons/Gmail.svelte'
</script>

<style type="text/scss">
    #intro {
        font-size: 0.9em;
        margin-bottom: 0.5em;
        padding: 1.2em;
        text-align: justify;
    }

    h1 {
        text-align: center;
    }

    .section {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>

<main>
    <Center>
        <div class="form-wrap">
            <PlatformTitle />

            <div id="intro" class="row">
                Идејата зад срцето на SchoolNet е платформа за модуларни
                едукативни игри, апликации и содржини со кои може да им се
                помогне како и на студентите, така и на професорите и
                научниците. За сега, се отворени ЗБОР и ЗНАМ.
            </div>

            <BigButton
                id="znamBtn"
                image="/frame/img/ZNAM-character.png"
                alt="ZNAM"
                title="ЗНАМ"
                content="Забавни квизови со прашања од сите предмети"
                callback={() => {
                    window.location.href = "https://znam.schoolnet.mk/";
                }}
            />

            <BigButton
                id="zborBtn"
                image="/frame/svg/tatkin.svg"
                alt="ZBOR"
                title="ЗБОР"
                content="Множество на зборови со отворен извор"
                callback={() => {
                    window.location.href = 'https://zbor.schoolnet.mk/';
                }} />

            <div class="separator"></div>

            <div class="row">
                <div class="center-h">
                    <IconButton on:click={() => { window.open('https://github.com/mitkonikov/SchoolNet', '_blank'); }}>
                        <GitHub/>
                    </IconButton>
                    <IconButton on:click={() => { window.open('https://mail.google.com/mail/?view=cm&fs=1&to=mitkonikov01@gmail.com', '_blank'); }}>
                        <Gmail/>
                    </IconButton>
                </div>
            </div>
        </div>
    </Center>
</main>
