<script lang="ts">
    import PlatformTitle from '../components/PlatformTitle.svelte';

    import BigButton from './../components/BigButton.svelte';
</script>

<main>
        <div id="fullPage">
            <div class="section">
                <div class="form-wrap">
                    <PlatformTitle />

                    <!-- <BigButton
                        id="znamBtn"
                        image="/frame/img/ZNAM-character.png"
                        alt="ZNAM"
                        title="ЗНАМ"
                        content="Забавни квизови со прашања од сите предмети"
                        callback={() => {
                            window.location.href = "https:\/\/znam.schoolnet.mk/";
                        }}
                    /> -->

                    <BigButton
                        id="zborBtn"
                        image="/frame/svg/tatkin.svg"
                        alt="ZBOR"
                        title="ЗБОР"
                        content="Множество на зборови со отворен извор"
                        callback={() => {
                            window.location.href = "https:\/\/zbor.schoolnet.mk/";
                        }}
                    />
                </div>
            </div>

            <div class="section" id="statSection">                
                <!-- Statistics -->
            </div>

            <div class="section">
				<!-- ABOUT -->
            </div>

        </div>
</main>

<style type="text/scss">
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