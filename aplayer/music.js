const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    theme: '#FADFA3',
    loop: 'all',
    order: 'list',
    preload: 'none',
    volume: 0.33,
    mutex: true,
    listFolded: true,
    listMaxHeight: '233px',
    lrcType: 3,
    audio: [
        {
            name: 'My Soul,Your Beats!',
            artist: '麻枝准',
            url: 'https://music.163.com/song/media/outer/url?id=28699614.mp3',
            cover: 'https://p2.music.126.net/tw0Vs85YAsvUpDsM7f2JMQ==/109951163914291289.jpg',
            lrc: '/./aplayer/lrc/none.lrc',
            theme: '#9370DB'
        },
        {
            name: '世末歌者',
            artist: '乐正绫 | COP',
            url: 'https://music.163.com/song/media/outer/url?id=429460239.mp3',
            cover: 'https://p1.music.126.net/sZGaAxUHHhuhQ1Zxa2jw4g==/17790098137764958.jpg',
            lrc: '/./aplayer/lrc/smgz.lrc',
            theme: '#EE0000'
        },
        {
            name: '同归世界线',
            artist: '乐正绫 | COP',
            url: 'https://music.163.com/song/media/outer/url?id=35807133.mp3',
            cover: 'https://p2.music.126.net/EnQ0J1f_-p8S2OunnRiGhA==/3298534885062503.jpg',
            lrc: '/./aplayer/lrc/tgsjx.lrc',
            theme: '#EE0000'
        },
        {
            name: '凉雨',
            artist: '洛天依 | COP',
            url: 'https://music.163.com/song/media/outer/url?id=477137425.mp3',
            cover: 'https://p1.music.126.net/COB5xLS-nDUdCvzBSw0eOg==/109951162924485415.jpg',
            lrc: '/./aplayer/lrc/ly.lrc',
            theme: '#66CCFF'
        },
        {
            name: '唱给雅音宮羽Ⅱ',
            artist: '洛天依 | 純白P',
            url: 'https://music.163.com/song/media/outer/url?id=29784378.mp3',
            cover: 'https://p2.music.126.net/a61wnSbpl7iz4juzmlq-gA==/6641050233030998.jpg',
            lrc: '/./aplayer/lrc/cgyygy2.lrc',
            theme: '#66CCFF'
        },
        {
            name: '繁华唱遍',
            artist: '洛天依 | URUUT',
            url: 'https://music.163.com/song/media/outer/url?id=1362645677.mp3',
            cover: 'https://p2.music.126.net/Ytdbz--Ui1u_Mvosiv7C1w==/109951164042650892.jpg',
            lrc: '/./aplayer/lrc/fhcb.lrc',
            theme: '#66CCFF'
        },
        {
            name: '小小思念',
            artist: '洛天依 | 純白P',
            url: 'https://music.163.com/song/media/outer/url?id=28987160.mp3',
            cover: 'https://p2.music.126.net/L8eZSVnPcNSTXmxMd36gEg==/8976412929211156.jpg',
            lrc: '/./aplayer/lrc/xxsn.lrc',
            theme: '#66CCFF'
        },
        {
            name: '时间日记',
            artist: '洛天依 | 湯ん',
            url: 'https://music.163.com/song/media/outer/url?id=555103145.mp3',
            cover: 'https://p1.music.126.net/mwQhrhXSrt7NbR0EX_NLDg==/109951163129515683.jpg',
            lrc: '/./aplayer/lrc/sjrj.lrc',
            theme: '#66CCFF'
        },
        {
            name: '寻遍星空',
            artist: '洛天依 | 公兔',
            url: 'https://music.163.com/song/media/outer/url?id=29307542.mp3',
            cover: 'https://p2.music.126.net/VDzqLf2w5SV-VU1FH1AwNg==/6657542906420975.jpg',
            lrc: '/./aplayer/lrc/xbxk.lrc',
            theme: '#66CCFF'
        },
        {
            name: '岁月流年',
            artist: '洛天依',
            url: 'https://music.163.com/song/media/outer/url?id=29792008.mp3',
            cover: 'https://p2.music.126.net/vkoQqphGwk6TyRFai3ZBdw==/3238061743857732.jpg',
            lrc: '/./aplayer/lrc/syln.lrc',
            theme: '#66CCFF'
        },
        {
            name: '天空的味道',
            artist: '洛天依',
            url: 'https://music.163.com/song/media/outer/url?id=29450488.mp3',
            cover: 'https://p1.music.126.net/Dqgbz3BMQG3w5dzs9s3-Hw==/3284241233862965.jpg',
            lrc: '/./aplayer/lrc/tkdwd.lrc',
            theme: '#66CCFF'
        },
        {
            name: '刹那烟火，落尽清凉',
            artist: '洛天依 | 九御kyuugo',
            url: 'https://music.163.com/song/media/outer/url?id=413188707.mp3',
            cover: 'https://p2.music.126.net/guXC-WPcWhXdIdzpmRMJ1w==/109951162942281449.jpg',
            lrc: '/./aplayer/lrc/cnyh.lrc',
            theme: '#66CCFF'
        },
        {
            name: '朝汐',
            artist: '洛天依 | 千面音葉7ZH',
            url: 'https://music.163.com/song/media/outer/url?id=1315517813.mp3',
            cover: 'https://p1.music.126.net/R_DVp-6qp8aJuXGetjzVmg==/109951163587343726.jpg',
            lrc: '/./aplayer/lrc/zx.lrc',
            theme: '#66CCFF'
        },
        {
            name: '心跳同步的时光',
            artist: '洛天依 | JUSF周存',
            url: 'https://music.163.com/song/media/outer/url?id=422427110.mp3',
            cover: 'https://p2.music.126.net/CSmaT-E-XIMzqm2jqpsrJw==/18185922323824829.jpg',
            lrc: '/./aplayer/lrc/xttbdsg.lrc',
            theme: '#66CCFF'
        },
        {
            name: '为了你唱下去',
            artist: '洛天依 | COP',
            url: 'https://music.163.com/song/media/outer/url?id=420397887.mp3',
            cover: 'https://p1.music.126.net/W3VMsSEjTdvhz7h3a0oxTg==/17782401556325576.jpg',
            lrc: '/./aplayer/lrc/wlncxq.lrc',
            theme: '#66CCFF'
        },
        {
            name: '绝体绝命',
            artist: '洛天依 | 阿良良木健',
            url: 'https://music.163.com/song/media/outer/url?id=550059604.mp3',
            cover: 'https://p1.music.126.net/Csw9Gl-c5YDFLJggK-gpyw==/109951163696193010.jpg',
            lrc: '/./aplayer/lrc/jtjm.lrc',
            theme: '#66CCFF'
        },
        {
            name: '春风来',
            artist: '洛天依 | 阿良良木健',
            url: 'https://music.163.com/song/media/outer/url?id=480243094.mp3',
            cover: 'https://p2.music.126.net/DPs2L7G6yXTAEvlCV3cEqQ==/109951162955968424.jpg',
            lrc: '/./aplayer/lrc/cfl.lrc',
            theme: '#66CCFF'
        },
        {
            name: '勾指起誓',
            artist: '洛天依 | ilem',
            url: 'https://music.163.com/song/media/outer/url?id=1345872140.mp3',
            cover: 'https://p1.music.126.net/eMyCr0gv0kPGlew9XTNjyA==/109951163944178164.jpg',
            lrc: '/./aplayer/lrc/gzqs.lrc',
            theme: '#66CCFF'
        },
        {
            name: '深海少女',
            artist: '洛天依',
            url: 'https://music.163.com/song/media/outer/url?id=29357538.mp3',
            cover: 'https://p1.music.126.net/yI0SluM1lL2NWofjbXr99w==/109951163926977151.jpg',
            lrc: '/./aplayer/lrc/shsn.lrc',
            theme: '#66CCFF'
        },
        {
            name: '与你最后的夏天',
            artist: '洛天依',
            url: 'https://music.163.com/song/media/outer/url?id=33715419.mp3',
            cover: 'https://p2.music.126.net/vkoQqphGwk6TyRFai3ZBdw==/3238061743857732.jpg',
            lrc: '/./aplayer/lrc/ynzhdxt.lrc',
            theme: '#66CCFF'
        },
        {
            name: '谷雨',
            artist: '洛天依 | 桑葚上的猴子',
            url: 'https://music.163.com/song/media/outer/url?id=410161057.mp3',
            cover: 'https://p2.music.126.net/UL_YbIkPg9t6UFpmTRxMPw==/18198016951571087.jpg',
            lrc: '/./aplayer/lrc/gy.lrc',
            theme: '#66CCFF'
        },
        {
            name: '咸咸的',
            artist: '洛天依 | 純白P',
            url: 'https://music.163.com/song/media/outer/url?id=484710046.mp3',
            cover: 'https://p2.music.126.net/-mSe3PXd0x66UZQRmip9qQ==/109951162950201713.jpg',
            lrc: '/./aplayer/lrc/xxd.lrc',
            theme: '#66CCFF'
        },
        {
            name: '前尘如梦',
            artist: '洛天依 | 唐乐林',
            url: 'https://music.163.com/song/media/outer/url?id=27908599.mp3',
            cover: 'https://p1.music.126.net/A9oKNYp-KPOv_TrMG5ml6w==/3405187512278986.jpg',
            lrc: '/./aplayer/lrc/qcrm.lrc',
            theme: '#66CCFF'
        },
        {
            name: '梨花泽泽远山远 ',
            artist: '洛天依 | MeLo',
            url: 'https://music.163.com/song/media/outer/url?id=425710799.mp3',
            cover: 'https://p2.music.126.net/vjwCPafPafceVxULtWFSfg==/18020995579444517.jpg',
            lrc: '/./aplayer/lrc/lhzzysy.lrc',
            theme: '#66CCFF'
        },
        {
            name: '夏天·延长战',
            artist: '洛天依 | DOS:Error#',
            url: 'https://music.163.com/song/media/outer/url?id=499272397.mp3',
            cover: 'https://p2.music.126.net/ww_5Ayf5s-vwP-GSgEKMwA==/109951163032306409.jpg',
            lrc: '/./aplayer/lrc/xtycz.lrc',
            theme: '#66CCFF'
        },
        {
            name: '一秒之序',
            artist: '洛天依 | PoKeR',
            url: 'https://music.163.com/song/media/outer/url?id=433059462.mp3',
            cover: 'https://p1.music.126.net/irEm-wZzV8zfbtc4UqKsyg==/17999005346907532.jpg',
            lrc: '/./aplayer/lrc/ymzx.lrc',
            theme: '#66CCFF'
        },
        {
            name: 'Last Natsu',
            artist: '洛天依 | KAII',
            url: 'https://music.163.com/song/media/outer/url?id=532815418.mp3',
            cover: 'https://p2.music.126.net/Jg7qB9BxGV0XJzkcWBEWEA==/109951163116417673.jpg',
            lrc: '/./aplayer/lrc/lastnatsu.lrc',
            theme: '#66CCFF'
        },
        {
            name: '化尘旅行',
            artist: '洛天依 | Tuno桐音',
            url: 'https://music.163.com/song/media/outer/url?id=33854157.mp3',
            cover: 'https://p2.music.126.net/vkoQqphGwk6TyRFai3ZBdw==/3238061743857732.jpg',
            lrc: '/./aplayer/lrc/hclx.lrc',
            theme: '#66CCFF'
        },
        {
            name: '九尾妖狐',
            artist: '洛天依 | PoKeR',
            url: 'https://music.163.com/song/media/outer/url?id=550364401.mp3',
            cover: 'https://p1.music.126.net/yuPHEbEeTmxpTxMStl-lLw==/109951163230319367.jpg',
            lrc: '/./aplayer/lrc/jwyh.lrc',
            theme: '#66CCFF'
        },
        {
            name: '异样的风暴中心',
            artist: '洛天依 | 杉田朗',
            url: 'https://music.163.com/song/media/outer/url?id=535915977.mp3',
            cover: 'https://p2.music.126.net/vKUpCUdQY3jWq8Vpr3R9Tg==/109951163632766055.jpg',
            lrc: '/./aplayer/lrc/yydfbzx.lrc',
            theme: '#66CCFF'
        },
        {
            name: '被祝福的旅程',
            artist: '洛天依 | DELA,雨狸',
            url: 'https://music.163.com/song/media/outer/url?id=453352408.mp3',
            cover: 'https://p2.music.126.net/RC1fjVZmE50uTlxOWGspVg==/109951162842875584.jpg',
            lrc: '/./aplayer/lrc/bzfdlc.lrc',
            theme: '#66CCFF'
        },
        {
            name: 'trii - Feel Your Dream 2018',
            artist: '洛天依 | 純白P',
            url: 'https://music.163.com/song/media/outer/url?id=528634797.mp3',
            cover: 'https://p2.music.126.net/PKPVikQLZb4dqLDqCdqLWg==/109951163101308515.jpg',
            lrc: '/./aplayer/lrc/fyd2018.lrc',
            theme: '#66CCFF'
        },
        {
            name: '逆浪千秋',
            artist: '言和',
            url: 'https://music.163.com/song/media/outer/url?id=542364335.mp3',
            cover: 'https://p1.music.126.net/z4f7Gfge3f1PkY90bozxPQ==/109951163169021511.jpg',
            lrc: '/./aplayer/lrc/nlqq.lrc',
            theme: '#99FFFF'
        },
        {
            name: '梦之雨',
            artist: '言和',
            url: 'https://music.163.com/song/media/outer/url?id=29095492.mp3',
            cover: 'https://p2.music.126.net/YZ4EmG8r5T6XPj_1WBue-A==/3295236350128132.jpg',
            lrc: '/./aplayer/lrc/mzy.lrc',
            theme: '#99FFFF'
        },
        {
            name: '岁月成碑',
            artist: '乐正绫 | Days',
            url: 'https://music.163.com/song/media/outer/url?id=34179200.mp3',
            cover: 'https://p2.music.126.net/W2ZKq9bj8Y0YgLyTLpQNew==/7930777373220204.jpg',
            lrc: '/./aplayer/lrc/sycb.lrc',
            theme: '#EE0000'
        },
        {
            name: '烈火灼冰',
            artist: '乐正绫 | 希望索任合资',
            url: 'https://music.163.com/song/media/outer/url?id=525488258.mp3',
            cover: 'https://p2.music.126.net/V60ZQN_0tsWwsvQo2B2KQA==/109951163089698048.jpg',
            lrc: '/./aplayer/lrc/lhzb.lrc',
            theme: '#EE0000'
        },
        {
            name: '千里邀月',
            artist: '乐正绫 | 純白P',
            url: 'https://music.163.com/song/media/outer/url?id=1332491711.mp3',
            cover: 'https://p1.music.126.net/0emegncinMnQQanyBvfK_w==/109951163718505451.jpg',
            lrc: '/./aplayer/lrc/qlyy.lrc',
            theme: '#EE0000'
        },
        {
            name: '梦语',
            artist: '乐正绫',
            url: 'https://music.163.com/song/media/outer/url?id=33190543.mp3',
            cover: 'https://p2.music.126.net/0NsramhXlm6t4Kex3v2LSA==/109951163926966859.jpg',
            lrc: '/./aplayer/lrc/my.lrc',
            theme: '#EE0000'
        },
        {
            name: 'Artificial Emotions',
            artist: '心华 | 純白P',
            url: 'https://music.163.com/song/media/outer/url?id=415090258.mp3',
            cover: 'https://p2.music.126.net/naihNDWAJXSxy7UE3XVKEg==/17692241602844445.jpg',
            lrc: '/./aplayer/lrc/arti_emo.lrc',
            theme: '#EE82EE'
        },
        {
            name: '我的海岸线',
            artist: '心华 | 純白P',
            url: 'https://music.163.com/song/media/outer/url?id=453278711.mp3',
            cover: 'https://p2.music.126.net/jpZu0Ykp1YCJ3xlcvYhbtA==/109951162842712103.jpg',
            lrc: '/./aplayer/lrc/wdhax.lrc',
            theme: '#EE82EE'
        },
        {
            name: '我寻着光而来',
            artist: '心华 | 著小生zoki',
            url: 'https://music.163.com/song/media/outer/url?id=1323549392.mp3',
            cover: 'https://p1.music.126.net/8ipWcNy5FQu-0E8dRTt1Rw==/109951163651934410.jpg',
            lrc: '/./aplayer/lrc/wxzgel.lrc',
            theme: '#EE82EE'
        },
        {
            name: '星雨之夜',
            artist: '心华 | ilem',
            url: 'https://music.163.com/song/media/outer/url?id=41672085.mp3',
            cover: 'https://p2.music.126.net/xZ6LySLSgYz98kO8mGbp4Q==/1387583675775967.jpg',
            lrc: '/./aplayer/lrc/xyzy.lrc',
            theme: '#EE82EE'
        },
        {
            name: '我們的彈幕青春',
            artist: '心华 | VelecTi',
            url: 'https://music.163.com/song/media/outer/url?id=41672084.mp3',
            cover: 'https://p1.music.126.net/xZ6LySLSgYz98kO8mGbp4Q==/1387583675775967.jpg',
            lrc: '/./aplayer/lrc/wmddmqc.lrc',
            theme: '#EE82EE'
        },
        {
            name: '绯焰悲空',
            artist: '心华 | 純白P',
            url: 'https://music.163.com/song/media/outer/url?id=415085220.mp3',
            cover: 'https://p2.music.126.net/b8Ubr5n4QytBg7Pc7O3pjw==/780653265867628.jpg',
            lrc: '/./aplayer/lrc/fybk.lrc',
            theme: '#EE82EE'
        },
        {
            name: '万神纪',
            artist: '星尘 | 海鲜面',
            url: 'https://music.163.com/song/media/outer/url?id=459831628.mp3',
            cover: 'https://p1.music.126.net/ygeaRVdHTDjylMZy8_bmSw==/109951162860064953.jpg',
            lrc: '/./aplayer/lrc/wsj.lrc',
            theme: '#9999FF'
        },
        {
            name: '星愿StarWish',
            artist: '星尘 | 平行四界Quadimension',
            url: 'https://music.163.com/song/media/outer/url?id=506607859.mp3',
            cover: 'https://p1.music.126.net/Xl4Mp9uEudbnYQ79amRJWA==/109951162879679523.jpg',
            lrc: '/./aplayer/lrc/xy.lrc',
            theme: '#9999FF'
        },
        {
            name: '一日都市',
            artist: '星尘 | 小野道ono',
            url: 'https://music.163.com/song/media/outer/url?id=494953325.mp3',
            cover: 'https://p1.music.126.net/wPE3Z922KRX5mo94eGgi5g==/109951162923791285.jpg',
            lrc: '/./aplayer/lrc/yrds.lrc',
            theme: '#9999FF'
        },
        {
            name: '曙光',
            artist: '星尘',
            url: 'https://music.163.com/song/media/outer/url?id=496807835.mp3',
            cover: 'https://p1.music.126.net/0AZa9x1gcaPHQJNia6IvMA==/109951163031876680.jpg',
            lrc: '/./aplayer/lrc/sg2.lrc',
            theme: '#9999FF'
        },
        {
            name: '時計塔中の白兎',
            artist: '初音ミク | 純白P',
            url: 'https://music.163.com/song/media/outer/url?id=435996054.mp3',
            cover: 'https://p1.music.126.net/7m5M903sHrRAoXplswrSdw==/18211211091317943.jpg',
            lrc: '/./aplayer/lrc/jst.lrc',
            theme: '#39C5BB'
        },
        {
            name: '歌に形はないけれど',
            artist: '初音ミク | doriko',
            url: 'https://music.163.com/song/media/outer/url?id=409912.mp3',
            cover: 'https://p1.music.126.net/Pv6EyvmbbHhewnS5U-8dYw==/2493692371854828.jpg',
            lrc: '/./aplayer/lrc/srgswx.lrc',
            theme: '#39C5BB'
        },
        {
            name: 'morning haze',
            artist: '初音ミク | keeno',
            url: 'https://music.163.com/song/media/outer/url?id=34690740.mp3',
            cover: 'https://p1.music.126.net/s06UBcyrFpXUmAf_ly8jTQ==/2901611187579735.jpg',
            lrc: '/./aplayer/lrc/morning.lrc',
            theme: '#39C5BB'
        },
        {
            name: 'glow',
            artist: '初音ミク | keeno',
            url: 'https://music.163.com/song/media/outer/url?id=29023581.mp3',
            cover: 'https://p2.music.126.net/58JEcKKl34g-4s5v0RSb9Q==/6625657069114417.jpg',
            lrc: '/./aplayer/lrc/glow.lrc',
            theme: '#39C5BB'
        },
        {
            name: '每颗流星都见证',
            artist: '初音ミク | 小野道ono',
            url: 'https://music.163.com/song/media/outer/url?id=526704382.mp3',
            cover: 'https://p1.music.126.net/KjqhDvfpxkzsrTJ74WV0Zg==/109951163094643593.jpg',
            lrc: '/./aplayer/lrc/mklxdjz.lrc',
            theme: '#39C5BB'
        },
        {
            name: '冬去春来再尽年',
            artist: '言和,乐正绫,心华,洛天依 | COP',
            url: 'https://music.163.com/song/media/outer/url?id=413074063.mp3',
            cover: 'https://p1.music.126.net/pGnU2i0-iQMYyGECNWghUw==/18434411951503489.jpg',
            lrc: '/./aplayer/lrc/dqclzjn.lrc'
        },
        {
            name: '白石溪',
            artist: '乐正绫,洛天依 | 純白P',
            url: 'https://music.163.com/song/media/outer/url?id=415086297.mp3',
            cover: 'https://p2.music.126.net/naihNDWAJXSxy7UE3XVKEg==/17692241602844445.jpg',
            lrc: '/./aplayer/lrc/bsx.lrc'
        },
        {
            name: 'β受体阻滞剂与星辰',
            artist: '洛天依,言和 | Kevinz',
            url: 'https://music.163.com/song/media/outer/url?id=447943681.mp3',
            cover: 'https://p1.music.126.net/FWNGckJvrMCQ2lCd7Ot89g==/109951162992552158.jpg',
            lrc: '/./aplayer/lrc/beita.lrc'
        },
        {
            name: '霜雪千年',
            artist: '洛天依,乐正绫 | COP',
            url: 'https://music.163.com/song/media/outer/url?id=34923862.mp3',
            cover: 'https://p2.music.126.net/vkoQqphGwk6TyRFai3ZBdw==/3238061743857732.jpg',
            lrc: '/./aplayer/lrc/sxqn.lrc'
        },
        {
            name: '深夜诗人',
            artist: '洛天依,言和 | ilem',
            url: 'https://music.163.com/song/media/outer/url?id=477936261.mp3',
            cover: 'https://p2.music.126.net/Bt3dFUR9xWCd8wJlmrsgXg==/3429376768564696.jpg',
            lrc: '/./aplayer/lrc/sysr.lrc'
        },
        {
            name: '普通DISCO',
            artist: '洛天依,言和 | ilem',
            url: 'https://music.163.com/song/media/outer/url?id=31140522.mp3',
            cover: 'https://p1.music.126.net/FwrkRhTBoI9TNj3BkUy2Hw==/1364493965811296.jpg',
            lrc: '/./aplayer/lrc/ptdisco.lrc'
        }
    ]
});