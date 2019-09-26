const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,//吸底模式
    autoplay: false,//默认是否自动播放
    theme: '#66CCFF',
    loop: 'all',
    order: 'random',
    preload: 'auto',
    volume: 0.4,//默认音量
    mutex: true,//是否不允许多个播放器同时播放
    listFolded: true,//是否默认收起播放列表
    listMaxHeight: 90,//播放列表的高度
    lrcType: 3, //使用lrc文件提供歌词
    //网易云默认外链链接：http://music.163.com/song/media/outer/url?id=ID数字.mp3
    audio: [
        {
            name: '世末歌者',
            artist: '乐正绫 | COP',
            url: 'http://music.163.com/song/media/outer/url?id=429460239.mp3',
            cover: 'http://p1.music.126.net/sZGaAxUHHhuhQ1Zxa2jw4g==/17790098137764958.jpg',
            lrc: '/./aplayer/lrc/smgz.lrc',
            theme: '#EE0000'
        },
        {
            name: '唱给雅音宮羽Ⅱ',
            artist: '洛天依 | 純白P',
            url: 'http://music.163.com/song/media/outer/url?id=29784378.mp3',
            cover: 'http://p2.music.126.net/a61wnSbpl7iz4juzmlq-gA==/6641050233030998.jpg',
            lrc: '/./aplayer/lrc/cgyygy2.lrc',
            theme: '#66CCFF'
        },
        {
            name: 'Artificial Emotions',
            artist: '心华 | 純白P',
            url: 'http://music.163.com/song/media/outer/url?id=415090258.mp3',
            cover: 'http://p2.music.126.net/naihNDWAJXSxy7UE3XVKEg==/17692241602844445.jpg',
            lrc: '/./aplayer/lrc/arti_emo.lrc',
            theme: '#EE82EE'
        },
        {
            name: '我的海岸线',
            artist: '心华 | 純白P',
            url: 'http://music.163.com/song/media/outer/url?id=453278711.mp3',
            cover: 'http://p2.music.126.net/jpZu0Ykp1YCJ3xlcvYhbtA==/109951162842712103.jpg',
            lrc: '/./aplayer/lrc/wdhax.lrc',
            theme: '#EE82EE'
        },
        {
            name: '繁华唱遍',
            artist: '洛天依 | URUUT',
            url: 'http://music.163.com/song/media/outer/url?id=1362645677.mp3',
            cover: 'http://p2.music.126.net/Ytdbz--Ui1u_Mvosiv7C1w==/109951164042650892.jpg',
            lrc: '/./aplayer/lrc/fhcb.lrc',
            theme: '#66CCFF'
        },
        {
            name: '小小思念',
            artist: '洛天依 | 純白P',
            url: 'http://music.163.com/song/media/outer/url?id=28987160.mp3',
            cover: 'http://p2.music.126.net/L8eZSVnPcNSTXmxMd36gEg==/8976412929211156.jpg',
            lrc: '/./aplayer/lrc/xxsn.lrc',
            theme: '#66CCFF'
        },
        {
            name: '寻遍星空',
            artist: '洛天依 | 公兔',
            url: 'http://music.163.com/song/media/outer/url?id=29307542.mp3',
            cover: 'http://p2.music.126.net/VDzqLf2w5SV-VU1FH1AwNg==/6657542906420975.jpg',
            lrc: '/./aplayer/lrc/xbxk.lrc',
            theme: '#66CCFF'
        }
    ]
});