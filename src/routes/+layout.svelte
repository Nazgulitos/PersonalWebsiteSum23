<svelte:head>
    <title>Jokes_API</title>
</svelte:head>

<nav>
    <a href="/#about" class="head">About</a>
    <a href="/#projects" class="head">Projects</a>
    <a href="/#contact" class="head">Contact</a>
    <a href="/comic" class="head">Jokes_API</a>
</nav>

<div class="wrapper">
    <main>
        <slot/>
    </main>

    <footer>
        <p>2023 Created by Salikhova Nazgul</p>
    </footer>
</div>

<style>
    * {
        margin: 0px;
        padding: 0px;
    }

    nav {
        position: relative;
        list-style-type: none;
        width: 100%;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #161617;
    }
    a {
        float: left;
    }
    a.head {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-family: 'Courier New', Courier, monospace;
        font-size: 1.5em;
    }

    a.head:hover {
        background-color: #403851;
        transform: scale(1.04) perspective(1px)
    }

    main {
        flex: 1;
        padding-bottom: 100px;
    }

    footer {
        height: 100px;
        text-align: center;
        font-family: 'Abril Fatface', serif;
        color: #4D4C4C;
        font-size: 2em;
    }
</style>