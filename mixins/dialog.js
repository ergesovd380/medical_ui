export default {
  data() { 
    return { 
      openDialog: false, 
      functionResolve: null,
    } 
  },
  beforeRouteLeave(to, from, next) {
    this.openDialog = true
    this.createPromise().then(res => {
      next(res)
    })
  },
  methods: {
    createPromise() {
      return new Promise(resolve => {
        this.functionResolve = resolve;
      })
    },
    dialogResponse(response) {
      this.functionResolve(response)
    },
  },
}
