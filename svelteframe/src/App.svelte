<script lang="ts">
	// Svelte Material UI
	import Button, {Group, GroupItem, Label} from '@smui/button';
	import Card, {Content, PrimaryAction, Media, MediaContent, Actions, ActionButtons, ActionIcons} from '@smui/card';
  	import Textfield, {Input, Textarea} from '@smui/textfield';
	import List, {Item, Graphic, Meta, Subheader, Separator, Text, PrimaryText, SecondaryText} from '@smui/list';

	import { queryFetch, graphQL } from './js/common';

	let isAuth = false;
	
	// import CenterMobile from './future/Center.svelte';
	// import Navigation from './future/Navigation.svelte';
	// import Authentication from './future/Authentication.svelte';

	import './theme/common.scss';

	// We want to load the theme file last,
	// this way, it will give the priority to our theme file
    import './theme/_smui-theme.scss';
    
    import './scss/style_common.scss';
    import './scss/style_home.scss';
    import BigButton from './components/BigButton.svelte';

	// graphQL({ query: "{ isAuth }" }, (data) => {
	// 	if (data.isAuth > 0) {
	// 		isAuth = true;
	// 	}
	// });
	
</script>

<main>
	<!-- <CenterMobile>
		<h1>Under Construction</h1><br>
		<Card>
			<Content>Authenticated: {isAuth} </Content>
		</Card>
		<Authentication />
	</CenterMobile>
	<Navigation /> -->

        <div id="fullPage">
            <div class="section">
                <div class="form-wrap">
                    <div class="row">
                        <h1 class="logo-text noselect">SchoolNet</h1>
                    </div>

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
                            window.location.href = "https:\/\/zbor.schoolnet.mk/"
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