<script lang="ts">
	import './theme/common.scss';

	// We want to load the theme file last,
	// this way, it will give the priority to our theme file
    import './theme/_smui-theme.scss';
    
	import './scss/style_common.scss';

	import socketio from 'socket.io-client';
	import { domain } from './js/common';

	const socket = socketio(domain());
	socket.nsp = "/pilot";

	interface logEvent {
		type: string,
		data: string
	};

	let logs: logEvent[] = [];

	socket.on('log', (log: logEvent) => {
		logs = logs.concat(log);
	});
</script>

<main>
	<div class="noselect terminal">
		<span class="terminal-text">
			{#each logs as log}
				<div class="{log.type == 'ERR' ? 'error' : ''}">{log.data}</div>
			{/each}
		</span>
		<div class="terminal-sync"></div>
	</div>
</main>

<style type="text/scss">
	$main-background-color:rgb(15, 15, 15);
	$main-text-color: rgb(0, 238, 255);

	main {
		width: 100%;
		height: 100%;
	}

	.terminal {
		width: 100%;
		height: 100%;
		background-color: $main-background-color;
		color: $main-text-color;
		font-family: Consolas;
	}

	.terminal-sync {
		height: 1em;
		width: 0.5em;
		background-color: $main-text-color;
		animation: blink 1s step-start 0s infinite;
		-webkit-animation: blink 1s step-start 0s infinite;
	}
	
	.error {
		color:rgb(255, 30, 0);
	}

	@keyframes blink {
		50% {
			opacity: 0.0;
		}
	}
	@-webkit-keyframes blink {
		50% {
			opacity: 0.0;
		}
	}
</style>