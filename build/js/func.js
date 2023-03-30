function spanWrap() {
  const targets = document.querySelectorAll(".textAnima");
  targets.forEach(function (target) {
    let nodes = [...target.childNodes];
    let textBox = "";
    nodes.forEach(function (node) {
      if (node.nodeType == 3) {
        //テキストの場合
        let text = node.textContent.replace(/\r?\n/g, ""); //テキストから改行コード削除
        text.split("").forEach(function (t, i) {
          if (t !== " ") {
            if (i < 10) {
              textBox +=
                '<span class="char c-0' +
                (i + 1) +
                '" ' +
                'style="transition-delay:.' +
                i +
                's;">' +
                t +
                "</span>";
            } else {
              let n = i / 10;
              textBox +=
                '<span class="char c-0' +
                (i + 1) +
                '" ' +
                'style="transition-delay:' +
                n +
                's;">' +
                t +
                "</span>";
            }
          } else {
            textBox += t;
          }
        });
      } else if (node.contains(node) == true) {
        // テキストではなく、子ノード(=span要素)を持つ
        // そのまま連結
        textBox = textBox + node.outerHTML;
      } else {
        // テキストではなく、br要素などspan要素以外の要素を持つ
        // そのまま連結　※br要素などをspan要素とは別に処理する場合はここに書く
        textBox = textBox + node.outerHTML;
      }
    });
    target.innerHTML = textBox;
  });
}
spanWrap();

$(".section-01 .img-box").on("inview", function (event, isInView) {
  if (isInView) {
    //表示領域に入った時
    $(".section-01").addClass("move-in");
  } else {
    //表示領域から出た時
    $(".section-01").removeClass("move-in");
  }
});
$(".section-02 .img-box").on("inview", function (event, isInView) {
  if (isInView) {
    //表示領域に入った時
    $(".section-02").addClass("move-in");
  } else {
    //表示領域から出た時
    $(".section-02").removeClass("move-in");
  }
});
$(".section-03 .img-box").on("inview", function (event, isInView) {
  if (isInView) {
    //表示領域に入った時
    $(".section-03").addClass("move-in");
  } else {
    //表示領域から出た時
    $(".section-03").removeClass("move-in");
  }
});
$(".section-04 .work-thumb-swiper").on("inview", function (event, isInView) {
  if (isInView) {
    //表示領域に入った時
    $(".section-04").addClass("move-in");
  } else {
    //表示領域から出た時
    $(".section-04").removeClass("move-in");
  }
});
$(".section-05 .btn").on("inview", function (event, isInView) {
  if (isInView) {
    //表示領域に入った時
    $(".section-05").addClass("move-in");
  } else {
    //表示領域から出た時
    $(".section-05").removeClass("move-in");
  }
});
$(".footer").on("inview", function (event, isInView) {
  if (isInView) {
    //表示領域に入った時
    $(".section-06").addClass("move-in");
  } else {
    //表示領域から出た時
    $(".section-06").removeClass("move-in");
  }
});

$(".recruit #mv").on("inview", function (event, isInView) {
  if (isInView) {
    //表示領域に入った時
    $("header").removeClass("mv-in");
  } else {
    //表示領域から出た時
    $("header").removeClass("mv-in");
  }
});
$("#mv-recruit").on("inview", function (event, isInView) {
  if (isInView) {
    //表示領域に入った時
    $(".mv-staff").removeClass("mv-in");
    $("header").removeClass("mv-in");
  } else {
    //表示領域から出た時
    $(".mv-staff").addClass("mv-in");
  }
});
$(".recruit header").removeClass("mv-in");

$("#recruit_01").on("inview", function (event, isInView) {
  if (isInView) {
    //表示領域に入った時
    $(".recruit-frame ul").addClass("in");
  } else {
    //表示領域から出た時
    $(".recruit-frame ul").removeClass("in");
  }
});
$("#recruit_02").on("inview", function (event, isInView) {
  if (isInView) {
    //表示領域に入った時
    $(".section-recruit_02 h3").addClass("in");
  } else {
    //表示領域から出た時
    $(".section-recruit_02 h3").removeClass("in");
  }
});
$("#recruit_03").on("inview", function (event, isInView) {
  if (isInView) {
    //表示領域に入った時
    $(".section-recruit_03 h3").addClass("in");
  } else {
    //表示領域から出た時
    $(".section-recruit_03 h3").removeClass("in");
  }
});
$("#recruit_02_01").on("inview", function (event, isInView) {
  if (isInView) {
    //表示領域に入った時
    $(".section-recruit_02 .movie-box").addClass("in");
  } else {
    //表示領域から出た時
    $(".section-recruit_02 .movie-box").removeClass("in");
  }
});
$("#recruit_03_01").on("inview", function (event, isInView) {
  if (isInView) {
    //表示領域に入った時
    $(".section-recruit_03 .movie-box").addClass("in");
  } else {
    //表示領域から出た時
    $(".section-recruit_03 .movie-box").removeClass("in");
  }
});
$(".section-mv").on("inview", function (event, isInView) {
  if (isInView) {
    //表示領域に入った時
    $(".topto").addClass("out");
    $(".recruitto").removeClass("in");
  } else {
    //表示領域から出た時
    $(".topto").removeClass("out");
    $(".recruitto").addClass("in");
  }
});
$("#recruit_04").on("inview", function (event, isInView) {
  if (isInView) {
    //表示領域に入った時
  } else {
    //表示領域から出た時
    $(".section-recruit_04 .contents").removeClass("right-on left-on");
  }
});
$("#recruit_07").on("inview", function (event, isInView) {
  if (isInView) {
    //表示領域に入った時
    $(".section-recruit_07").addClass("out");
  } else {
    //表示領域から出た時
    $(".section-recruit_07").removeClass("out");
  }
});
$(".tgl-tb h4").on("click", function () {
  $(this).next("ul").toggle("fast");
  $(this).toggleClass("open");
});
$(".drawer-link ul a").on("click", function () {
  $('input[type="checkbox"]')
    .removeAttr("checked")
    .prop("checked", false)
    .change();
});

//swiper
const workSwiper = new Swiper(".work-swiper", {
  effect: "cube",
  loop: true,
  slidesPerView: 1,
  speed: 3000,
  allowTouchMove: false,
  autoplay: {
    delay: 3000,
  },

  pagination: {
    el: ".swiper-pagination",
  },
});
const workSwiperThumb = new Swiper(".work-thumb-swiper", {
  loop: true,
  slidesPerView: 2,
  speed: 3000,
  spaceBetween: 20,
  autoplay: {
    delay: 3000,
  },
  thumbs: {
    swiper: workSwiper,
  },
});

(function (a) {
  a.fn.particleText = function (p) {
    var k = "";
    if (this[0].className) {
      k = "." + this[0].className;
    }
    if (this[0].id) {
      k = "#" + this[0].id;
    }
    var f = document.querySelector(k);
    var o = f.getContext("2d");
    var i = (f.width = f.clientWidth);
    var c = (f.height = f.clientHeight);
    var m = "";
    var l = 0.09;
    if (p.speed) {
      if (p.speed == "middle") {
        l = 0.07;
      } else {
        if (p.speed == "slow") {
          l = 0.04;
        } else {
          if (p.speed == "high") {
            l = 0.15;
          }
        }
      }
    }
    if (p.text) {
      m = p.text;
    } else {
      m = p;
    }
    var b = ["#F54064", "#F5D940", "#18EBF2"];
    if (p.colors) {
      b = p.colors;
    }
    var e = false;
    if (m.indexOf("<br>") != -1) {
      e = true;
    }
    var n = [],
      j = 0;
    function g(r, q) {
      this.x = Math.random() * i;
      this.y = Math.random() * c;
      this.goal = { x: r, y: q };
      this.r = (f.clientWidth / 2) * 0.0035;
      this.color = b[Math.floor(Math.random() * b.length)];
    }
    g.prototype.render = function () {
      this.x += (this.goal.x - this.x) * l;
      this.y += (this.goal.y - this.y) * l;
      o.fillStyle = this.color;
      o.beginPath();
      o.arc(this.x, this.y, this.r, Math.PI * 2, false);
      o.fill();
    };
    function h() {
      var x = (f.width = f.clientWidth);
      var r = (f.height = f.clientHeight);
      o.clearRect(0, 0, f.width, f.height);
      var w = 5;
      o.font = "bold " + x / w + "px fot-tsukuardgothic-std";
      o.textAlign = "center";
      if (!e) {
        v();
      } else {
        q();
      }
      function v() {
        var y = 2;
        if (f.height <= 300 && f.width > 768) {
          y = 1.5;
        }
        o.fillText(m, x / 2, r / y, x);
      }
      function q() {
        var D = m;
        var C = "<br>";
        var A = D.split("<br>");
        var y = r / A.length;
        var z = A.length;
        var F = 768;
        var E = 0.8;
        for (var B = 0; B < A.length; B++) {
          o.fillText(A[B], x / 2, y * E);
          E += x / 1300;
        }
      }
      var u = o.getImageData(0, 0, x, r).data;
      o.clearRect(0, 0, f.width, f.height);
      o.globalCompositeOperation = "source-over";
      n = [];
      for (var t = 0; t < x; t += Math.round(x / 200)) {
        for (var s = 0; s < r; s += Math.round(x / 200)) {
          if (u[(t + s * x) * 4 + 3] > 150) {
            n.push(new g(t, s));
          }
        }
      }
      j = n.length;
    }
    function d(q) {
      requestAnimationFrame(d);
      o.clearRect(0, 0, f.width, f.height);
      for (var r = 0; r < j; r++) {
        n[r].render();
      }
    }
    window.addEventListener("resize", h);
    h();
    requestAnimationFrame(d);
  };
})(jQuery);
$("#particle").particleText({
  text: "4月末乞うご期待",
  colors: ["#fff","#ccc", "#ddd"],
  speed: "high",
});
