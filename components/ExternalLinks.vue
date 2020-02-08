<template>
  <ul class='link-list'>
    <li v-for="link in links" v-bind:key="link.title">
      <div class="external-link--cover">
        <a class='external-link' target="_blank" :href="'https://' + link.url">{{ link.title }}</a>
      </div>
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
    background: #eee;
    transition: all ease 0.4s;
    -webkit-transition: all ease 0.4s;
  }

  .external-link--cover {
    padding-bottom: .3rem;
    background: #ff9393;
    background: -webkit-linear-gradient(left, #ff9393 , #00ffde)
  }

  .external-link:hover {
    background: #ff9393;
    background: -webkit-linear-gradient(left, #ff9393 , #00ffde);
    /* transition: all ease-in 0.4s; */
  }

  .link-list {
    padding: 0;
    display: flex;
    margin: 0;
    list-style: none;
  }

  .link-list > li {
    padding-right: 1rem;
  }

  .link-list > li:last-child {
    padding-right: 0;
  }


  @media(min-width: 768px) {
    .external-link {
      padding: .5rem;
      font-size: 1.5rem;
    }
  }

  @media (min-width: 1080px) {
    .link-list > li {
      padding-right: 1.5rem;
    }
    .external-link {
      font-size: 2.5rem;
      padding: .5rem;
    }
  }


</style>
