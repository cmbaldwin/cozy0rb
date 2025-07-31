/*
  @title   Wait and Bleed
  @by      Cozy0rb
  @album   Untitled 2025
  @license CC BY-NC-SA (code)
  @url     https://cozyorb.com
*/

samples('https://raw.githubusercontent.com/cmbaldwin/cozy0rb/main/wait-and-bleed.json?version=1');
samples('https://raw.githubusercontent.com/cmbaldwin/cozy0rb/main/classic-beat-loops.json?version=1');

setcpm(160 / 4);

const backingdrum = ({ bd_gain = 0.75, sd_gain = 0.3 } = {}) => {
  return stack(
    stack(
      s("bd").beat("0,8,10", 16)
        .lpf(300).gain(bd_gain)
      ,

      s("sd").beat("4,12", 16)
        .hpf(100).gain(sd_gain)
      ,
    )
      .compressor("-20:20:10:.002:.02")
  )
}

const matsuri = ({ l1_gain = 0.2, l2_gain = 0.3 }) => {
  return stack(
    s("matsuri_flute_and_taiko_16/4")
      .chop(16).fit()
      .hpf(50)
      .gain(l1_gain)
    ,

    s("matsuri_flute_and_taiko_16/4")
      .chop(32).fit()
      .scrub("<[0 ~]*2 [0.1 0.15]*2 0.65*4 [0.4 0.81]*4 0.55*8>")
      .almostNever(ply("8"))
      .hpf(1000).lpf(1500)
      .gain(l2_gain).cut(1)
  )
}

const battu_march = ({ l1_gain = 1, l2_gain = 1 }) => {
  const battu_march_loop = s("battu_march_drums_16/4").chop(16).fit()
  return stack(
    battu_march_loop.gain(l1_gain)
    ,

    battu_march_loop
      .scrub("<0*4 2.5*2 6.5*2>")
      .gain(l2_gain)
  )
}

const beat = ({ }) => {
  return stack(

    s("80s_beat_spedup_4/1")
      .chop(16).fit()
      .orbit(2).cut(2)
    ,

    s("80s_beat_spedup_4/2")
      .chop(16).fit()
      .almostNever(ply("4 | 2"))
    ,

    s("80s_beat_spedup_4/1")
      .chop(16).fit()
      .scrub(irand(8).div(8).seg(4)
        .rib(slider(55, 0, 300, 1), 1))
      .almostNever(ply("2 | 4"))
      .orbit(2).cut(2).gain(0.4)

  )
}

const intro = ({ bass_lpf = 100, banpaku_gain = 0.75 }) => {
  return stack(
    s("heavy_synth_base_mod_128/8")
      .chop(64).fit()
      .lpf(bass_lpf)
      .gain(1.2)
    ,

    s("banpaku_2025_park_48/20")
      .chop(64).fit()
      .room(0.75)
      .gain(banpaku_gain)
  )
}

const break_build = ({ bg_gain = 0.75 }) => {
  return stack(
    intro({ banpaku_gain: bg_gain }),
    backingdrum({ sd_gain: 0 }),
    matsuri({ l2_gain: 0.75, l2_gain: 0 })
  )
}

let build = stack(
  intro({
    bass_lpf: "<100 200 350 450 600 700 900 1000>"
  }),
  backingdrum({}),
  matsuri({}),
  battu_march({ l2_gain: 0 })
)

let pre_main = stack(
  stack(
    intro({
      bass_lpf: "<2000>"
    }),
    backingdrum({}),
    matsuri({
      l2_gain:
        "<0.75 0.65 0.5 0.8>"
    }),
    battu_march({ l2_gain: 0.3 }),
    s("80s_beat_spedup_4/2")
      .chop(16).fit()
      .scrub("0"),
  ).mask("<1 1 1 1 1 1 0 0>")
  ,
  s("80s_beat_spedup_4/2")
    .chop(16).fit()
    .scrub("<[0*4] [0*8] [0*16] [0*32]>/2")
    .mask("<1 1 1 1 1 1 1 [1 0*31]>")
  ,
  s("yoiyoyana_16/4")
    .chop(4).fit()
    .echoWith(8, 1 / 4, (pat) => pat.gain(0.8))
    .early(1.45)
    .mask("<0 0 0 0 0 0 [0 1] 1>")
)

let main_start = stack(
  intro({
    bass_lpf: "<2000 1000 600 5500>"
  }),
  backingdrum({}),
  matsuri({
    l2_gain:
      "<0.75 0.65 0.5 0.3>"
  }),
  beat({}),
  s("distorted_guitar_synth_32/8")
    .chop(64).fit().gain(2),
)

let main = stack(
  intro({
    bass_lpf: "<300>"
  }),
  beat({}),
  s("distorted_guitar_synth_32/8").late(4)
    .chop(64).fit().gain(2),
)

let main_mod = stack(
  intro({
    bass_lpf: "<200 150 100 150>"
  }),
  beat({}),
  s("distorted_guitar_synth_32/8")
    .chop(64).fit()
    .echo(3, 1 / 4, 0.65).gain(1)
)

arrange(
  [16, intro({})],
  [8, break_build({})],
  [8, build],
  [8, pre_main],
  [4, main_start],
  [16, main],
  [16, main_mod],
  [8, break_build({ bg_gain: 0 })]
)._punchcard()