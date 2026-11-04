let r = 0, b = 6, w = 0, t = 12, y = 0, int, active = false;

const el = id => document.getElementById(id);
const upd = () => { el('r').innerText = r; el('b').innerText = b; el('w').innerText = w; };
const msg = txt => el('msg').innerText = txt;

const bowl = () => {
    active = true;
    y = 0;
    el('ball').style.display = 'block';
    int = setInterval(() => {
        y += 5;
        el('ball').style.top = y + 'px';
        if (y > 300) {
            clearInterval(int);
            processHit(null);
        }
    }, 20);
};

const processHit = hitY => {
    active = false;
    el('ball').style.display = 'none';
    b--;
    
    if (hitY === null || hitY < 200 || hitY > 290) {
        w++;
        msg("Wicket!");
    } else {
        let d = Math.abs(hitY - 260);
        if (d < 15) { r += 6; msg("Six!"); }
        else if (d < 35) { r += 4; msg("Four!"); }
        else { r += 1; msg("Single"); }
    }
    
    upd();
    
    if (r >= t) { msg("You Win!"); el('hit').disabled = true; }
    else if (b <= 0 || w > 0) { msg("You Lose!"); el('hit').disabled = true; }
    else setTimeout(bowl, 1000);
};

el('hit').onclick = () => {
    if (!active) return;
    clearInterval(int);
    processHit(y);
};

setTimeout(bowl, 1000);