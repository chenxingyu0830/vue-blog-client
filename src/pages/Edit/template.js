import blog from '@/api/blog'


export default {
  data () {
    return {
      blogId: null,
      title: '',
      description: '',
      content: '',
      atIndex: false,

    }
  },

  created () {
    this.blogId = this.$route.params.blogId
    blog.getDetail({ blogId: this.blogId }).then(res => {
      this.title = res.data.title
      this.description = res.data.description
      this.content = res.data.content
      this.atIndex = res.data.atIndex
    })
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
    onEdit() {
      blog.updateBlog({ blogId: this.blogId }, { title: this.title, content: this.content, description: this.description, atIndex: this.atIndex})
        .then(res => {
          this.$message.success(res.msg)
          this.$router.push({ path: `/detail/${res.data.id}`})
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