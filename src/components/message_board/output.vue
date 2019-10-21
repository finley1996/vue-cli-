<template>
  <div>
    <Show />
    <InputFrame />
  </div>
</template>
<script>
import InputFrame from "./input_board";
import Show from "./show_board";

export default {
  components: {
    InputFrame,
    Show
  },
  data() {
    return {};
  }
};
</script>