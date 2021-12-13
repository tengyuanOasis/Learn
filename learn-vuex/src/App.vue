<template>
	<div id="app">
		{{ $store.state.count }}
		<button @click="$store.commit('increment', 10)">increment</button>
		<button @click="$store.commit('decrement', 10)">decrement</button>
	</div>
</template>

<script>
	export default {
		name: "App"
	};
</script>
