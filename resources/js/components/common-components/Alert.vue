<template>
  <div>
    <b-alert class="alert alert-card alert-" :variant="errorMessage ? 'danger' : 'success'" show>
      <i v-show="successMessage" :class="[ successMessage ?   'icon-success' : '' , 'icon-check2']"></i>
      <i v-show="errorMessage" :class="[ errorMessage ?   'icon-danger' : '' , 'icon-alert']"></i>
      {{errorMessage ? errorMessage : successMessage}}
    </b-alert>
  </div>
</template>

<script>
    export default{
        props : ['errorMessage'  , 'successMessage']
    }
</script>

