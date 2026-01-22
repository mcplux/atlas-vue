<template>
  <ul>
    <li v-for="a in Array(100).fill('Country')" :key="a">{{ a }}</li>
  </ul>
</template>
