<main class="h-full overflow-y-scroll">
  <div>
    <Period current date={current} />
  </div>

  {#each items as item}
    <Period date={item} />
  {/each}
</main>

<script lang="ts">
import { addWeeks, setDay, setDefaultOptions, setHours, setMinutes } from "date-fns"

import Period from "./Period.svelte"

setDefaultOptions({ weekStartsOn: 5 })

const base = setMinutes(setHours(setDay(new Date(), 5, { weekStartsOn: 1 }), 0), 0)
const current = addWeeks(base, -2)

const items: Date[] = []

for (let i = 0; i < 15; i++) {
  items.push(addWeeks(base, i * 2))
}
</script>
