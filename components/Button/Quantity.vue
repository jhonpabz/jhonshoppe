<script setup>
import { reactive } from "vue";

const emit = defineEmits(["qty-value"]);

const qty = reactive(1);
</script>

<template>
  <div>
    <label for="Quantity" class="sr-only"> Quantity </label>

    <div class="flex items-center border border-gray-200 rounded mr-3">
      <button
        @click="$emit('qty-value', qty--)"
        type="button"
        class="w-10 h-11 leading-10 text-gray-600 transition hover:opacity-75"
      >
        &minus;
      </button>

      <input
        type="number"
        id="Quantity"
        :value="qty"
        class="h-11 w-16 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
      />

      <button
        @click="$emit('qty-value', qty++)"
        type="button"
        class="w-10 h-11 leading-10 text-gray-600 transition hover:opacity-75"
      >
        &plus;
      </button>
    </div>
  </div>
</template>
