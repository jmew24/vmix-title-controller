<template>
  <p class="input-string">
    <b-input-group class="mb-2">
      <b-input-group-prepend class="quad-input" is-text>
        <input
          ref="checkbox"
          :checked="activeString === value.id"
          type="checkbox"
          @click="radioHandler"
        />
      </b-input-group-prepend>
      <b-form-input
        v-model="data.firstname"
        class="quad-input"
        @input="writeColumns"
      ></b-form-input>
      <b-form-input
        v-model="data.lastname"
        class="quad-input"
        @input="writeColumns"
      ></b-form-input>
    </b-input-group>
  </p>
</template>

<script>
export default {
  props: {
    uppercase: {
      type: Boolean,
      required: true,
    },
    activeString: {
      type: String,
      required: true,
    },
    value: {
      type: Object,
      required: true,
    },
  },
  emits: ['click', 'write-result', 'save-columns'],
  data() {
    return {
      data: this.value,
    };
  },
  methods: {
    radioHandler() {
      if (this.$refs.checkbox.checked) {
        const data = `${this.data.firstname}#${this.data.lastname}`;
        this.$emit('click', this.value.id);
        this.$emit('write-result', data);
      } else {
        this.$emit('click', 'null');
        this.$emit('write-result', '#');
      }
    },
    validate() {
      if (this.uppercase) {
        this.data.firstname = this.data.firstname.toUpperCase();
        this.data.lastname = this.data.lastname.toUpperCase();
      }
    },
    async writeColumns() {
      this.validate();
      this.$emit('input', this.data);
      this.$emit('save-columns');
      await this.$store.dispatch('saveDB');
      if (this.$refs.checkbox.checked) {
        this.radioHandler();
      }
    },
  },
};
</script>

<style scoped>
p,
.input-string,
.input-group {
  margin: 0 !important;
}
.quad-input {
  height: 25px !important;
}
input {
  font-family: 'Montserrat', Verdana !important;
  font-size: 12px !important;
  padding: 2px 5px;
}
</style>
