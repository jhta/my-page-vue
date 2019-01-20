<template>
  <section class="wrapper">
    <span class="border-top-left"></span>
    <slot></slot>

    <span class="border-bottom-right"></span>
  </section>
</template>

<style>
.wrapper {
  margin: 0 auto;
  position: relative;
  padding: 3rem 5rem 2rem 5rem;
}

.wrapper::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: .5rem;
  width: 6rem;
  background: -webkit-linear-gradient(left, #00ffde, #ff9393);
}

.wrapper::after{
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  height: .5rem;
  width: 6rem;
  /* background:  #ff9393; */
  background: black;
  background: -webkit-linear-gradient(right, #ff9393, #00ffde);
}
.border-top-left {
  position: absolute;
  top: 0;
  left: 0;
  height: 6rem;
  width: .5rem;
  background:  #ff9393;
  background: #00ffde;
}

.border-bottom-right {
  position: absolute;
  bottom: 0;
  right: 0;
  height: 6rem;
  width: .5rem;
  /* background:  #ff9393; */
  background:  #ff9393;
  /* background: #00ffde; */
}


@media(min-width: 1080px) {
  .wrapper {
    padding: 6rem 8rem 6rem;
  }

  .border-bottom-right {
    height: 8rem;
    width: .5rem;
  }

  .border-top-left{
    height: 8rem;
    width: .5rem;
  }

  .wrapper::before {
    height: .5rem;
    width: 8rem;
  }

  .wrapper::after{
    height: .5rem;
    width: 8rem;
    }

}
</style>
