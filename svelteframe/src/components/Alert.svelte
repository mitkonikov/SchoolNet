<script lang="ts">
    type iconStates = "warning" | "success";
    export let content: string;
    export let icon: iconStates = "warning";
    export let iconSize = "1.5em";
    export let visible = true;

    import Card from "@smui/card";
    import PrimaryAction from "@smui/card/PrimaryAction.svelte"

    import Alert from "svelte-material-icons/Alert.svelte";
    import CheckboxMarkedCircleOutline from "svelte-material-icons/CheckboxMarkedCircleOutline.svelte";

    function scaleV(node: Element, { duration }: { duration?: number }) {
		return {
			duration,
			css: t => {
                return `transform: translate(0, -${60 * Math.max(0, 1 - (t+0.2))}px) scale(1, ${t});`
            }
		};
    }
</script>

{#if visible}
    <div class="alert-card" in:scaleV = "{{ duration: 200 }}" out:scaleV = "{{ duration: 200 }}">
        <Card style="flex-direction: row;">
            <PrimaryAction on:click={() => { visible = false }} padded>
                <div class="inline-icon">
                    {#if icon == "warning"}
                        <Alert size={iconSize} />
                    {:else if icon == "success"}
                        <CheckboxMarkedCircleOutline size={iconSize} />
                    {/if}
                </div>
                {content}
            </PrimaryAction>
        </Card>
    </div>
{/if}

<style lang="scss">
    .inline-icon {
        margin-right: 0.6em;
        transform: translate(0, -0.1em);
    }
</style>