<template>
  <div id="app">
    <full-calendar
      :config="config"
      :events="events"
      @event-selected="eventSelected"
    >
    </full-calendar>

    <portal v-for="event in events"
            v-bind:key="event.id"
            name="event-portal"
            :to="`event${event.id}`"
            >
      <div style=""
          class="event-description"
           v-b-popover.click.blur="event.title"
           container="calendar"
           title="Popover!"
           variant="primary">
        {{event.title}}
      </div>
    </portal>
  </div>
</template>

<script>
import Vue from 'vue'
import { PortalTarget } from 'portal-vue'
const PortalTargetComp = Vue.extend(PortalTarget)

import EventDetails from './components/EventDetails'
export default {
  name: 'app',
  components: {
    EventDetails
  },
  methods: {
    eventSelected(event, jsEvent,view) {
      var self = this;
      this.selected = event
    },
  },
  data() {
    var self = this;
    return {
      currentPopover: null,
      msg: 'Portal-vue is ok',
      rendered: false,
      selected: {},
      config: {
        eventRender: function(event, element) {
          element.find('.fc-title').html(`
          <div class="event-description" id="event${event.id}">
            <div class="portal-mount-point"></div>
          </div> 
          `);
          const mountElement = element.find('.portal-mount-point').get()[0]
          new PortalTargetComp({
            propsData: {
              name: `event${event.id}`,
            },
            el: mountElement
          })
          console.log(`rendered event ${event.id}`)
        }
      },
      events: [
        {
          id: 1,
          rendered: false,
          title: 'hey 1',
          start: new Date()
        },
        {
          id: 2,
          rendered: false,
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
.fc-content, .fc-title, .event-description, .vue-portal-target {
  height: 100%;
  width: 100%;
}
</style>
