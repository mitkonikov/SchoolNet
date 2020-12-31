<script lang="ts">
	import './../theme/common.scss';

	// We want to load the theme file last,
	// this way, it will give the priority to our theme file
    import './../theme/_smui-theme.scss';
    
    import './../scss/style_common.scss';
    import './../scss/style_home.scss';
</script>

<slot></slot>