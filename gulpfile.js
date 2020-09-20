"use strict";

var gulp = require("gulp");
var webpackstream = require("webpack-stream");
var webpack = require('webpack');

gulp.task("default", function(done) {
  console.log("Available tasks");
  var tasks = Object.keys(gulp.registry().tasks());
  tasks.sort();
  tasks.forEach(function(taskName) {
    console.log(" " + taskName);
  });
  done();
})

gulp.task("mainBundle", function() {

  let cfg = {
    mode: "none",
    output: {
      filename: "index.js",
      globalObject: "this"
    },
    performance: { hints: false},
    devtool: 'source-map',
    node: false
  }
  return gulp
    .src("./src/sayHello.js")
    .pipe(webpackstream(cfg, webpack))
    .pipe(gulp.dest("./public/javascripts"))
})
