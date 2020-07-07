const SVGA = require("../svga.min.js")

const app = getApp()

Page({
  data: {

  },
  onReady: function () {
    let parser = new SVGA.Parser()
    let player = new SVGA.Player("#myCanvas")
    parser.load("https://cdn.jsdelivr.net/gh/svga/SVGA-Samples@master/angel.svga", function (videoItem) {
      player.setVideoItem(videoItem);
      player.startAnimation();
    })
  },
})
