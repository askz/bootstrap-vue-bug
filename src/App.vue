<template>
  <div id="app">
    <full-calendar
    :config="config"
    :events="events"
    >
    </full-calendar>
    <!-- <div v-if="rendered"> -->
      <portal :disabled="!rendered" v-bind:key="event.id" v-for="event in events"  name="event1" :target-el="'#event'+event.id">
        <div style="" v-b-popover.click="'I am Top'" container="calendar"
                    title="Popover!"
                    variant="primary">
          {{msg}}
        </div>
      </portal>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  },
  data() {
    var self = this;
    return {
      msg: 'Portal-vue is ok',
      rendered: false,
      config: {
        eventRender: function(event, element) {
          self.rendered = false
          element.find('.fc-title').html(`<div class="event-description" id="event${event.id}">Portal-vue not okay :/</div> `); 
          console.log(`rendered event ${event.id}`)
          self.rendered = true
        }
      },
      events: [
        {
          id: 1,
          title: 'hey 1',
          start: new Date()
        },
        {
          id: 2,
          title: 'hey 2',
          start: new Date()
        }
      ]
    }
  },
}
</script>

<style>
@import '~fullcalendar/dist/fullcalendar.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
