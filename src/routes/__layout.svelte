<svelte:head>
    <title>Pokemon APP</title>
</svelte:head>

<div class="p-8 max-w-7xl mx-auto">

<nav class="flex gap-x-32 justify-center my-4">
    <a class= "text-xl "href="/">Home</a>
    <a class= "text-xl "href="/about">About</a>
</nav>


    <slot></slot>
</div>

<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>