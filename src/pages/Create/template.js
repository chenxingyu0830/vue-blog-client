import blog from '@/api/blog'


export default {
  data () {
    return {
      title: '',
      description: '',
      content: '',
      atIndex: false,

    }
  },

  computed: {
    titleActive: function () {
        if(this.title.length>=30){
        return {
          active: true
        }
      }
    },
    descriptionActive: function () {
        if(this.description.length>=50){
        return {
          active: true
        }
      }
    },
    contentActive: function () {
        if(this.content.length>=500){
        return {
          active: true
        }
      }
    }
  },

  methods: {
    onCreate(){
      blog.createBlog({ title: this.title, content: this.content, description:this.description, atIndex: this.atIndex })
        .then(res=> {
          this.$message.success(res.msg)
          this.$router.push({ path: `/detail/${res.data.id}` })
        })
    },
    verifyTitle(){
      if(this.title.length >= 30) {
        this.$message.warning('字数已达到30个字')
        return this.title
      }
    },
    verifyDescription(){
      if(this.description.length >= 50) {
        this.$message.warning('字数已达到50个字')
        return this.description
      }
    },
    verifyContent(){
      if(this.content.length >= 500) {
        this.$message.warning('字数已达到500个字')
        return this.content
      }
    }
  }
}