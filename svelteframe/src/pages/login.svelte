<script lang="ts">
	// Svelte Material UI
	import Button, {Group, GroupItem, Label} from '@smui/button';
	import Card, {Content, PrimaryAction, Media, MediaContent, Actions, ActionButtons, ActionIcons} from '@smui/card';
  	import Textfield, {Input, Textarea} from '@smui/textfield';
	import List, {Item, Graphic, Meta, Subheader, Separator, Text, PrimaryText, SecondaryText} from '@smui/list';

	import { graphQL, domain } from './../js/common';
	
	import CenterMobile from '../components/Center.svelte';
	import Navigation from './../components/Navigation.svelte';
	import Authentication from '../components/Authentication.svelte';
	import PlatformTitle from '../components/PlatformTitle.svelte';
	import Alert from '../components/Alert.svelte';

	graphQL({ query: "{ isAuth }" }, (data) => {
		if (data.isAuth > 0) {
			window.location.href = domain();
		}
	});
	
</script>

<main>
	<CenterMobile>
		<!-- <Card>
			<Content>Authenticated: {isAuth} </Content>
        </Card> -->
        <div class="relative-wrapper">
			<PlatformTitle />
			<Alert content="Најавете се на нашиот сајт преку Facebook или Google." icon="success"/>
            <Authentication />
        </div>
	</CenterMobile>
	<Navigation />
</main>

<style type="text/scss">
    
</style>