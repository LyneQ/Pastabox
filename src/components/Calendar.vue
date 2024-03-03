<script setup>
/**
 * init some library
 */
import {ref, reactive, computed} from "vue";
import DateEvent from "@/assets/event.json";
import moment from "moment";
import localisation from 'moment/dist/locale/fr'

moment.updateLocale('fr', localisation);


/**
 * start code
 */
const rawMonth = ref( parseInt(moment().month()) );
const Month = computed({
  get(){
    return rawMonth.value
  },
  set(newMonth){
    rawMonth.value = parseInt(newMonth);
  }
});

const rawContent = reactive({
  month : Month.value,
  totalDayThisMonth: moment().month(Month.value).daysInMonth(),
  calendarFormula: [...Array( moment().month(rawMonth.value).daysInMonth()+1 ).keys() ].slice(1)
})
const firstDayCSSRaw = reactive({
  marginLeft: `calc(${ moment().month(Month.value).date(1).isoWeekday()-1 }*110px)`
})

const CalendarCss = computed({
  get(){
    return firstDayCSSRaw
  },
  set(newValue){
    firstDayCSSRaw.marginLeft = `calc(${ moment().month(newValue).date(1).isoWeekday()-1 }*110px)`
  }
})
const Calendar = computed({
  get(){
    return rawContent.calendarFormula
  },
  set(newMonth){
    rawContent.calendarFormula = [...Array( moment().month(rawMonth.value).daysInMonth()+1 ).keys() ].slice(1)
    CalendarCss.value = Month.value
  }
})
const changeMonth = (operation) => {
  switch (operation) {
    case '++':
      Calendar.value = rawMonth.value++;
      break;
    case '--':
      Calendar.value = rawMonth.value--;
      break;
  }
}

const GetTodayEvent = (year, month, day ) =>{
  const thisMonth = parseInt(moment().set("month", rawMonth.value).set("year", year).format("M"))
  return DateEvent[year] && DateEvent[year][thisMonth] && DateEvent[year][thisMonth][day] ? DateEvent[year][thisMonth][day] : null
}

window.addEventListener("keydown", (e)=>{
  switch (e.key) {
    case "ArrowLeft":
    case "q":
      changeMonth("--")
      break;
    case "ArrowRight":
    case "d":
      changeMonth("++")
      break;
  }
})
</script>

<template>
    <table>
        <thead>
            <tr class="title">
                <th colspan="2"><h2>calendrier {{ moment().month(Month).format("Y") }}</h2></th>
            </tr>
        <tr class="title">
          <th >
            <button @click="changeMonth('--')"><</button> {{ moment().month(Month).format("MMMM YYYY") }} <button @click="changeMonth('++')">></button>
          </th>
        </tr>

        </thead>
        <tbody class="body">
        <tr class="subtitle">
          <th>Lundi</th>
          <th>Mardi</th>
          <th>Mercredi</th>
          <th>Jeudi</th>
          <th>Vendredi</th>
          <th>Samedi</th>
          <th>Dimanche</th>
        </tr>
        <tr class="content"
            v-for=" day in Calendar ">
          <th v-if="day === 1" :style="CalendarCss" >
            {{ day }}
          </th>
          <th v-else >
            {{ day }}
            <div v-if="GetTodayEvent(moment().month(Month).format('Y'), rawMonth+1, day) !== undefined "> {{ GetTodayEvent(moment().month(Month).format('Y'), rawMonth+1, day) }} </div>
          </th>
        </tr>
        </tbody>
    </table>
</template>


<style scoped>
h2 {
  border: none !important;
}
table {
  margin: 20px auto !important;
  padding: 0 !important;
  width: 515px;
}
table, tr, th {
    margin: 0;
    border: 1px solid silver;
}
.title > th:first-child {
  border: none !important;
  border-bottom: 1px solid silver !important;
}
.subtitle:first-child {
    display: inline-flex;
    flex-wrap: nowrap;
    width: fit-content;
    border: none !important;
}
.subtitle > th {
    width: 110px;
}
.subtitle, .content {
    margin: 0 !important;
    border: none !important;
}
.content, .content > * {
    display: inline-flex;
    flex-wrap: wrap;

}
.content > th {
    width: 110px;
    height: 110px;
    padding: 10px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: flex-start;
}
.content > th > div {
  margin: 0;
  padding: 0;
  font-size: x-small;
  word-break: break-word;

}

button {
  border: none !important;
  background-color: transparent;
  color: silver;
  font-size: large;

  &:hover{
    cursor: pointer;
    font-weight: bold;
  }
}

.thisDay {
  color: lightcoral;
}

</style>