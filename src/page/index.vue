<template>
    <div>
        <p>index page</p>
       
    </div>

</template>
<script>
    export default{
      created() {
        this.$api.get('topics', null, res => {
          console.log(res)
        })
      }
    }
</script>
