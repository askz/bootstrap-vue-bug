<template>
  <div id="event-details">
    <h5>{{event.title}}</h5>
    <p>{{event}}</p>
  </div>
</template>

<script>
export default {
  name: 'event-details',
  props: ['event']
}
</script>

<style>

</style>
