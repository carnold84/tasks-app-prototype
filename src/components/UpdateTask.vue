<template>
  <div>
    <text-field
      v-model="title"
      :isRequired="true"
      label="Title"
      style="margin: 0 0 15px;"
    />
    <date-time-picker
      v-model="dueDate"
      label="Due Date"
      style="margin: 0 0 15px;"
    />
    <text-field
      v-model="notes"
      label="Notes"
      style="height: 150px;"
      type="textArea"
    />
  </div>
</template>

<script>
  import api from '../api';
  import DateTimePicker from './DateTimePicker.vue';
  import TextField from './TextField.vue';

  export default {
    name: 'UpdateTask',
    components: {
      DateTimePicker,
      TextField,
    },
    data() {
      return {
        dueDate: this.task.dueDate,
        isSaving: false,
        notes: this.task.notes,
        title: this.task.title,
      };
    },
    props: {
      task: {
        required: true,
        type: Object,
      },
    },
    methods: {
      async onAdd() {
        if (this.title !== '') {
          this.isSaving = true;

          const task = {
            dueDate: this.dueDate,
            notes: this.notes,
            title: this.title,
          };
          if (this.id) {
            await api.tasks.update({ ...task, id: this.id });
          } else {
            await api.tasks.create(task);
          }
          this.$router.go(-1);
        }
      },
    },
  };
</script>
