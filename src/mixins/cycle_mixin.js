var cycle_mixin = {
    created() {
        
    },
    mounted() {
        document.addEventListener("keyup", this.onKeyListener);
    },
    beforeDestroy() {
        document.removeEventListener("keyup", this.onKeyListener);
    }
}
export default cycle_mixin;