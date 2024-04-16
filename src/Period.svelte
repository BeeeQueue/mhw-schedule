<div class="relative w-full h-50 flex b-0 b-b-2 b-warmgray-9 b-solid overflow-hidden">
  <img
    alt={bgUrl.slice(1).replace(".webp", "")} src={bgUrl}
    class="absolute -top-2 w-100% h-120% object-cover object-l blur-3"
  />

  <div class="flex w-full h-full z-1 text-4xl font-bold text-amber-2">
    <div class="flex flex-col justify-between w-full p-3 font-sans text-outline-1-black">
      <div>
        {#if current}
          Current
        {:else}
          Starts {formatDistanceToNow(date, { addSuffix: true })}
        {/if}
      </div>

      <div class="text-2xl text-amber-1">
        {formatDate(date)}
      </div>
    </div>

    <img
      alt={imageUrl.slice(1).replace(".webp", "")} src={imageUrl}
      class="h-full ml-auto object-cover drop-shadow-md drop-shadow-color-#00000066"
      class:saturate-150={siegeType === "kulve"}
      class:saturate-250={siegeType === "safi"}
    />
  </div>
</div>

<script lang="ts">
import { formatDistanceToNow, getWeek, intlFormat } from "date-fns"

export let current = false
export let date: Date

$: week = getWeek(date)
$: siegeType = week % 4 === 1 ? "kulve" : "safi"
$: bgUrl = siegeType === "kulve" ? "/dorado.webp" : "/valley.webp"
$: imageUrl = siegeType === "kulve" ? "/kulve.webp" : "/safi.webp"

const formatDate = (date: Date) => intlFormat(date, {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
}, { locale: "sv-SE" })
</script>
