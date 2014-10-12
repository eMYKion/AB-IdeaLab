function render(){
            
    var winsize=[window.innerWidth,window.innerHeight];
    document.getElementById("mc-par").innerHTML="Your Inner Window Resolution:\n\t"+String(winsize[0])+","+String(winsize[1]);
    /*
    var top  = document.getElementById("top");
    var l_col  = document.getElementById("left-column");
    var m_col  = document.getElementById("middle-column");
    var r_col  = document.getElementById("right-column");
    var bot  = document.getElementById("bottom");
            
    top.width=winsize[0]-20;
    l_col.width=(winsize[0]-40)/4;
    m_col.width=(winsize[0]-40)/2;
    r_col.width=(winsize[0]-40)/4;
    bot.width=winsize[0]-20;
    */
    setTimeout(render, 1000/60);
            
            
            
}
render()