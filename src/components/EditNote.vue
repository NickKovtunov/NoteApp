<template>
  <div class="edit-container" :class="{isOpenEditWindow: isOpenEditWindow}">
    <div class="edit-note">
      <label>Title</label>
      <input v-model="editedNote.title" type="text" @keyup.enter="editNote" @keyup.esc="closeEditWindow">
      <label>Priority</label>
      <select v-model="editedNote.priority">
          <option v-for="(priority, index) in priorities" :key="index">{{priority.title}}</option>
      </select>
      <label>Description</label>
      <textarea v-model="editedNote.descr" @keyup.enter="editNote" @keyup.esc="closeEditWindow"></textarea>
      <button class="btn btnPrimary" @click="editNote" style="margin-right:50px">Edit note</button>
      <button class="btn btnWhite" @click="closeEditWindow" style="border: 1px solid grey">Cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    editedNote: {
      type: Object,
      required: true
    },
    priorities: {
      type: Array,
      required: true
    },
    isOpenEditWindow: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    editNote () {
      if (this.editedNote.title === '') {
        alert('title can`t be blank!')
        return false
      }
      this.$emit('editNote', this.editedNote.index)
    },

    closeEditWindow () {
      this.$emit('closeEditWindow')
    }
  }
}
</script>

<style lang="scss">
.edit-note {
  margin: 50px auto 0;
  max-width: 800px;
  position: relative;
  text-align: center;
}

.edit-container {
  background: white;
  display: none;
  min-height: 100%;
  position: fixed;
  top: 0;
  width: 100%;
}

.isOpenEditWindow{
  display: block;
}
</style>

