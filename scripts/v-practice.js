class Login {
    constructor(phone, pw) {
        this.phone = phone;
        this.pw = pw;
    }
    getUid() {
        // console.log(this.phone);
        axios.defaults.baseURL = 'https://music.hzbiz.net/';

        var url = 'login/cellphone';
        var params = {
            phone: this.phone,
            password: this.pw
        }

        axios.post(url, params)
            .then(res => {
                axios.post(url, params)
                    .then(res => {
                        console.log(res);
                        var avatar = document.createElement('img');
                        var img = document.getElementsByTagName('main');
                        img[0].append(avatar);
                        avatar.src = res.data.profile.avatarUrl;
                        console.log(res.data.profile.userId);
                    })
            })
            .catch(err => {
                console.error(err);
            })
    }
}



var app = new Vue({
    el: '#login',
    data: {
        content: 'ttttttttt' + new Date().toLocaleString(),
        seen: true,
        message: '登录',
        phone: null,
        password: null
    },
    methods: {
        test: function (e) {
            e.preventDefault();

            let t = new Login(this.$data.phone, this.$data.password);

            t.getUid();
            // axios.defaults.baseURL = 'https://music.hzbiz.net/';

            // e.preventDefault();
            // var url = 'login/cellphone';
            // var params = {
            //     phone: this.$data.phone,
            //     password: this.$data.password
            // }
            // axios.post(url, params)
            //     .then(res => {
            //         // console.log(res);

            //         axios.post(url, params)
            //             .then(res => {
            //                 console.log(res);
            //                 var avatar = document.createElement('img');
            //                 var img = document.getElementsByTagName('main');
            //                 img[0].append(avatar);
            //                 avatar.src = res.data.profile.avatarUrl;

            //                 var songListUrl = 'user/playlist';
            //                 var uId = {
            //                     uid: res.data.profile.userId
            //                 };
            //                 axios.post(songListUrl, uId)
            //                     .then(res => {
            //                         console.log(res.data.playlist);

            //                         for (let index = 0; index < res.data.playlist.length; index++) {
            //                             var songList = document.createElement('li');
            //                             songList.innerHTML = res.data.playlist[index].name;
            //                             songList.className = 'sList';
            //                             songList.setAttribute('v-on:click', 'listShow');
            //                             document.getElementsByClassName('songList')[0].append(songList);
            //                             // console.log(songList);
            //                         }

            //                         var url = 'playlist/detail';
            //                         var params = {
            //                             id: res.data.playlist[0].id
            //                         };
            //                         axios.post(url, params)
            //                             .then(res => {
            //                                 console.log(res.data.playlist.trackIds[0].id)
            //                                 var url = 'song/url';
            //                                 var params = {
            //                                     id: res.data.playlist.trackIds[30].id
            //                                 }

            //                                 axios.post(url, params)
            //                                     .then(res => {
            //                                         console.log(res);
            //                                         var player = document.createElement('audio');
            //                                         player.src = res.data.data[0].url;
            //                                         player.controls = 'control';
            //                                         img[0].append(player);
            //                                     })
            //                                     .catch(err => {
            //                                         console.error(err);
            //                                     })
            //                             })
            //                             .catch(err => {
            //                                 console.error(err);
            //                             })
            //                     })
            //                     .catch(err => {
            //                         console.error(err);
            //                     })
            //             })
            //             .catch(err => {
            //                 console.error(err);
            //             })
            //     })
            //     .catch(err => {
            //         console.error(err);
            //     })
            // console.log(this.$data.phone)
            // console.log(this.$data.password);
        }
    },
})

new Vue({
    // 事件委托
    el: '.songList',
    methods: {
        listShow: function (e) {
            if (e.target.nodeName.toLowerCase() === 'li') {
                // console.log(e.target);
                var url = 'user/playlist';
            }
        }
    },
})