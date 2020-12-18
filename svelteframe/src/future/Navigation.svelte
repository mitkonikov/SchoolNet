<script>
    import { Label } from '@smui/button';
	import Tab from '@smui/tab';
	import TabBar from '@smui/tab-bar';

	import Home from 'svelte-material-icons/Home.svelte';
	import School from 'svelte-material-icons/School.svelte';

	let navTabs = {
		'Дома': Home,
		'ЗНАМ': School
	}
	  
	let active = 'Дома';

	$: if (active == 'ЗНАМ') {
		window.location = 'https://znam.schoolnet.mk';
	}
</script>

<TabBar tabs={['Дома', 'ЗНАМ']} let:tab bind:active>
    <Tab {tab}>
        <span class='mdc-tab__icons'>
            <svelte:component this={navTabs[tab]} size='2em'/>
        </span>
        <Label>{tab}</Label>
    </Tab>
</TabBar>