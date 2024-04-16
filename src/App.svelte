<main>
  { startDate }
  { kulve }
  <!--{ formatDistanceToNow(startDate, { addSuffix: true }) }-->
</main>

<script lang="ts">
import { formatDistanceToNow, getWeek } from "date-fns"

const startDate = getWeek(new Date("2024-04-16"), { weekStartsOn: 0 })
const kulve = getWeek(new Date("2024-04-20"), { weekStartsOn: 0 })
</script>
