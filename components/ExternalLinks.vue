<template>
  <ul class='link-list'>
    <li v-for="link in links" v-bind:key="link.title">
      <a class='external-link' target="_blank" :href="'https://' + link.url">{{ link.title }}</a>
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
  .external-link {
    margin: 0;
    font-size: 1rem;
    color: #4a4a4a;
    cursor: pointer;
    padding: 4px;
    background: rgba(0,0,0,0.2);

  }

  .external-link:hover {
    background: #ff9393;
    background: -webkit-linear-gradient(left, #ff9393 , #00ffde)
  }

  .link-list {
    padding: 0;
    display: flex;
    margin: 0;
    list-style: none;
    justify-content: center;
  }

  .link-list > li {
    padding-right: 1rem;
  }

  .link-list > li:last-child {
    padding-right: 0;
  }

  @media (min-width: 1080px) {
    .external-link {
    font-size: 1.5rem;
    }
  }


</style>
