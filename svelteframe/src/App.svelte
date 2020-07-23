<script>
	// Svelte Material UI
	import Button, {Group, GroupItem, Label} from '@smui/button';
	import Card, {Content, PrimaryAction, Media, MediaContent, Actions, ActionButtons, ActionIcons} from '@smui/card';
  	import Textfield, {Input, Textarea} from '@smui/textfield';
	import List, {Item, Graphic, Meta, Subheader, Separator, Text, PrimaryText, SecondaryText} from '@smui/list';

	import IconButton, {Icon} from '@smui/icon-button';

	import { queryFetch, graphQL } from './js/common';

	let isAuth = false;
	
	import CenterMobile from './components/Center.svelte';
	import Navigation from './components/Navigation.svelte';

	import './theme/common.scss';

	// We want to load the theme file last,
	// this way, it will give the priority to our theme file
	import './theme/_smui-theme.scss';

	const fetchIsAuth = (async () => {
		const response = await graphQL({ query: "{ isAuth }" });
		if (response && response.data && response.data.isAuth > 0) {
			isAuth = true;
		}
	})();
</script>

<main>
	<CenterMobile>
		<h1>Under Construction</h1><br>
		<Card>
			<Content>Authenticated: {isAuth} </Content>
		</Card>
	</CenterMobile>
	<Navigation />
</main>

<style>
	h1 {
		text-align: center;
	}
</style>