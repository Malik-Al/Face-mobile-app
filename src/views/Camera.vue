<template>
      <q-page-container>
        <q-page class="flex flex-center">
            <div class="fon-content">
                <div id="videoElement"><video autoplay="true" ref="video"></video></div>
                  <div class="center">
                    <q-input outlined type="text" v-model="input" label="Username" />
                      <q-btn @click="sendImg" color="primary" size="18px" text-color="white" :label="buttonLabel"/>
                      <q-btn v-if="resetButton" @click="Photoft" size="18px" color="green" label="Снимок"/>
                    <q-btn v-else @click="playVid" size="18px" color="purple" label="Переснять"/>
                  </div>
                <div class="submenu"><canvas ref="canvas"></canvas></div>
            </div>
        </q-page>
    </q-page-container>   
</template>

<script>
import axios from 'axios'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Camera',
  data () {
    return{
      input: '',
      resetButton: true,
      photo: null
    }
  },
    computed: {
    ...mapGetters([
      'id',
      'username',
      'timerstart',
      'timerstop',
      'active',
      'resultime'
    ]),
    buttonLabel () {
      let label = 'start'
      if (this.active) label = 'stop'
      return label
    }
  },
  mounted () {
    const video = this.$refs.video
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
          video.srcObject = stream
        })
        .catch(function () {
          console.log('Something went wrong!')
        })
    }
  },
  methods: {
    ...mapActions({
      saveId: 'save_id',
      userName: 'save_username',
      save_timerstart: 'save_timerstart',
      save_timerstop: 'save_timerstop',
      save_active: 'save_active',
      save_resultime: 'save_resultime'
    }),
    startTimer () {
      axios({
        method: 'post',
        url: 'http://discoverykg.ddns.net:9292/timer',
        data: {
          userId: this.id
        }
      }).then((res) => {
        console.log(res.data)
        this.save_timerstart(res.data.start)
        this.save_timerstop(res.data.stop)
        this.save_active(res.data.active)
        this.save_resultime(res.data.time)
        console.log(this.active)
        console.log(this.timerstart)
        console.log(this.timerstop)
        console.log(this.resultime)
      })
    },
    async getPicture () {
      this.pauseVid()
      const canvas = this.$refs.canvas
      const video = this.$refs.video
      this.resetButton = false

      return new Promise((resolve) => {
        const ctx = canvas.getContext('2d')
        const w = video.videoWidth
        const h = video.videoHeight
        canvas.width = w
        canvas.height = h

        ctx.drawImage(video, 0, 0, w, h)
        ctx.font = '16px Arial'

        canvas.toBlob((blob) => {
          resolve(blob)
        }, 'image/jpeg')
      })
    },
    async Photoft (){
      const imgSend = await this.getPicture()
      this.photo = imgSend
    },
    async sendImg () {
      if (!this.photo){
        alert('No photo')
        return
      }
      const formData = new FormData()
      formData.append('image', new File([this.photo], 'image.jpg'))
      formData.append('username', this.input)
      console.log(this.photo)
      this.$q.loading.show()
      await axios({
        method: 'post',
        url: 'http://discoverykg.ddns.net:9292/user',
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then((res) => {
        console.log(res.data)
        this.saveId(res.data._id ? res.data._id : res.data)
        this.userName(this.input)
        this.startTimer()
        // this.$router.push('/calendar')
        this.$q.loading.hide()
        this.resetButton = true
        this.playVid()
      })
    },
    pauseVid () {
      const vid = this.$refs.video
      vid.pause()
    },
    playVid () {
      this.resetButton = true
      const vid = this.$refs.video
      vid.play()
      this.photo = false
      console.log(this.photo)
    },
  },
}
</script>
<style>
body{
  background-color: rgb(184, 194, 206);
}
.submenu {
  display: none;
}
.center{
  text-align: center;
}

@media screen and (max-width: 700px) {
   video {
    width:100%;
    padding: 5%;
  }
}
@media screen and (max-width: 700px) {
   .center {
    width:100%;
  }
}
.fon-content{
  border: 10px solid black;
}


</style>