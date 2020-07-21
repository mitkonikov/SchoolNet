<script>
	// Svelte Material UI
	import Button, {Group, GroupItem, Label} from '@smui/button';
	import Card, {Content, PrimaryAction, Media, MediaContent, Actions, ActionButtons, ActionIcons} from '@smui/card';
  	import Textfield, {Input, Textarea} from '@smui/textfield';
	import List, {Item, Graphic, Meta, Subheader, Separator, Text, PrimaryText, SecondaryText} from '@smui/list';

	import IconButton, {Icon} from '@smui/icon-button';

	// Icons from Svelte Material Icons
	import Alarm from 'svelte-material-icons/Alarm.svelte';
	import Magnify from 'svelte-material-icons/Magnify.svelte'

	// We want to load the theme file last,
	// this way, it will give the priority to our theme file
  	import './theme/_smui-theme.scss';

</script>

<main>
	<div class="center">
		<h1>Under Construction</h1>
	</div>
</main>

<style>
	.center {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
</style>