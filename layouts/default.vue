<template>
  <div>
    <nuxt />
  </div>
</template>

<style>
html {
  /* font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', */
    /* Roboto, 'Helvetica Neue', Arial, sans-serif; */
  font-family: 'Ubuntu', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}


body {
  overflow: hidden;
  font-family: 'Ubuntu', sans-serif;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}



.h100 {
  height: 100% !important;
}

.text-center {
  text-align: center;
}

.c-base {
  color: #4b4b4b !important;
}

.c-white {
  color: white !important;
  -webkit-text-fill-color: white !important;
}

.c-black {
  color: black !important;
  -webkit-text-fill-color: black !important;
}

.font-title {
  font-family: 'Staatliches', cursive;
}

.bg-black {
  background: black;
}

.text-envolve {
  background: #4a4a4a;
}

.no-padding {
  padding: 0 !important;
}


@keyframes gradientBG {
0% {
  background-position: 0% 50%;
}
50% {
  background-position: 100% 50%;
}
100% {
  background-position: 0% 50%;
}
}
.gradient {
  background: #ff9393;
  animation-name: gradientBG;
  animation-duration: 6s;
  /* animation-delay: 1s; */
  animation-iteration-count: infinite;
  background: -webkit-linear-gradient(-20deg, #ff9393 10%,#40E4CB, #00ffde, #ff9393 90%);
  /* background: -webkit-linear-gradient(left, #ff9393, #00ffde); */
  background-size: 400% 400%;
}

</style>
