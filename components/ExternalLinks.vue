<template>
  <ul>
    <li v-for="link in links" v-bind:key="link.title">
      <a target="_blank" :href="'https://' + link.url">{{ link.title }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          title: 'Code',
          url: 'github.com/jhta'
        },
        {
          title: 'Stories',
          url: 'medium.com/@jeisonhiguita'
        },
        {
          title: 'Resumé',
          url: 'linkedin.com/in/jeisonhiguita'
        },
        {
          title: 'Photo',
          url: 'unsplash.com/@jeison'
        },

      ]
    }
  }
}
</script>


<style>
  a {
    margin: 0;
    font-size: 1.5rem;
    color: #4a4a4a;
    cursor: pointer;
    padding: 4px;

  }

  a:hover {
    background: #ff9393;
    background: -webkit-linear-gradient(left, #ff9393 , #00ffde)
  }

  ul {
    padding: 0;
    display: flex;
    margin: 0;
    list-style: none;
  }

  li {
    padding-right: 1rem;
  }

  li:last-child {
    padding-right: 0;
  }
</style>
