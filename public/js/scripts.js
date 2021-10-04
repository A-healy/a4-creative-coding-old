const start = () => {
    console.log("Test button");

    // init graph
    audioCtx = new AudioContext()

    // create nodes
    osc = audioCtx.createOscillator()
    osc.type = 'sawtooth'

    gainNode = audioCtx.createGain()
    gainNode.gain.value = .1

    biquad = audioCtx.createBiquadFilter()
    //biquad.frequency.value = 550

    // connect nodes to each other and to output
    osc.connect( biquad )
    biquad.connect( gainNode )
    gainNode.connect( audioCtx.destination )
    
    // start
    osc.start( 0 )

    biquad.frequency.value = 110
    biquad.frequency.linearRampToValueAtTime( 1440, audioCtx.currentTime + 2 )
    biquad.frequency.linearRampToValueAtTime( 110, audioCtx.currentTime + 2 )

    
    // osc.stop()
    }

window.onload = ()=> {
    document.getElementById('start').onclick = start
    //document.querySelector('stop').onclick = osc.stop()
}
