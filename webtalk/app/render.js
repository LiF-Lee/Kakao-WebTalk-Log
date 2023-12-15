// function createChatHTML(n){let s="";switch(n.type){case"UI":s=`<div class="chat_ui"><div class="toast_comm"><span>${n.message}</span></div></div>`;break;case"MESSAGE_MINE":s=`<div class="chat_comm chat_mine chat_start" tabindex="0"\nstyle="position: static; top: 0px; left: 16px; padding-right: 22px;">\n<div class="chat_contents">\n<div class="bubble_comm bubble_talk">\n<span class="ico_webchat ico_bubble">\n<svg aria-hidden="true" focusable="false">\n<use href="#icoBubble"></use>\n</svg>\n</span>\n<div class="bubble_body">\n<div class="contents_comm">\n<p><span>${n.message}</span></p>\n</div>\n</div>\n</div>\n</div>\n<div class="util_bubble">\n<div class="info_bubble">\n<div class="list_info"><span class="screen_out">보낸시간</span>\n<span role="text">오후 <span class="num_comm">${n.time}</span></span>\n</div>\n</div>\n</div>\n</div>`;break;case"MESSAGE":s=`<div class="chat_comm chat_another" tabindex="0"\nstyle="position: static; top: 0px; left: 16px; padding-right: 22px;">\n<div class="chat_profile">\n<div class="profile_comm">\n<div class="box_thumb" style="opacity: 1;">\n<svg viewBox="0 0 36 36" aria-hidden="true" focusable="false">\n<g>\n<image clip-path="url(#clipThumb2)" height="100%" width="100%"\nhref="${n.profile}" preserveAspectRatio="xMidYMid slice"></image>\n<use href="#shapeSuircle2" class="thumb_bg"></use>\n<use href="#squircleBorder" class="thumb_stroke"></use>\n</g>\n</svg>\n</div>\n<div class="info_profile"><strong class="tit_profile">${n.name}</strong></div>\n</div>\n</div>\n<div class="chat_contents">\n<div class="bubble_comm bubble_talk">\n<span class="ico_webchat ico_bubble">\n<svg aria-hidden="true" focusable="false">\n<use href="#icoBubble"></use>\n</svg>\n</span>\n<div class="bubble_body">\n<div class="contents_comm">\n${n.message.split("\n").map((n=>`<p><span>${n}</span></p>`)).join("")}\n</div>\n</div>\n</div>\n</div>\n<div class="util_bubble">\n<div class="info_bubble">\n<div class="list_info"><span class="screen_out">보낸시간</span>\n<span role="text">오후 <span class="num_comm">${n.time}</span></span>\n</div>\n</div>\n</div>\n</div>`}return s}function toBinary(n){const s=new Uint16Array(n.length);for(let e=0;e<s.length;e++)s[e]=n.charCodeAt(e);return btoa(String.fromCharCode(...new Uint8Array(s.buffer))).replaceAll("=","")}function fromBinary(n){const s=atob(n),e=new Uint8Array(s.length);for(let n=0;n<e.length;n++)e[n]=s.charCodeAt(n);return String.fromCharCode(...new Uint16Array(e.buffer))}function urlParam(n){const s=window.location.search,e=new URLSearchParams(s);return!!e.has(n)&&e.get(n)}function renderChat(){const n=document.querySelector(".tit_webchat"),s=document.querySelector(".inner_webchat"),e=urlParam("data");if(!1!==e){const a=JSON.parse(fromBinary(e));n.innerHTML=a.room??"",void 0!==a.data&&a.data.forEach((n=>{s.innerHTML+=createChatHTML(n)}))}}renderChat();

(function(_0x2f7bda, _0x2f7fcd) {
    const _0xbb51a9 = _0xfeae,
        _0x5f126d = _0x2f7bda();
    while (!![]) {
        try {
            const _0x4a8e81 = -parseInt(_0xbb51a9(0x1ef)) / 0x1 * (parseInt(_0xbb51a9(0x1d1)) / 0x2) + -parseInt(_0xbb51a9(0x1e6)) / 0x3 + parseInt(_0xbb51a9(0x1cc)) / 0x4 * (parseInt(_0xbb51a9(0x1d7)) / 0x5) + -parseInt(_0xbb51a9(0x1dc)) / 0x6 * (parseInt(_0xbb51a9(0x1cd)) / 0x7) + -parseInt(_0xbb51a9(0x1c9)) / 0x8 + -parseInt(_0xbb51a9(0x1d2)) / 0x9 * (parseInt(_0xbb51a9(0x1cf)) / 0xa) + parseInt(_0xbb51a9(0x1de)) / 0xb * (parseInt(_0xbb51a9(0x1e9)) / 0xc);
            if (_0x4a8e81 === _0x2f7fcd) break;
            else _0x5f126d['push'](_0x5f126d['shift']());
        } catch (_0x4a4fbf) {
            _0x5f126d['push'](_0x5f126d['shift']());
        }
    }
}(_0x5f0f, 0x6b436));

function createChatHTML(_0x4f26f1) {
    const _0x1f6a4a = _0xfeae;
    let _0x49d3ec = '';
    switch (_0x4f26f1['type']) {
        case 'UI':
            _0x49d3ec = _0x1f6a4a(0x1df) + _0x4f26f1[_0x1f6a4a(0x1cb)] + _0x1f6a4a(0x1f1);
            break;
        case 'MESSAGE_MINE':
            _0x49d3ec = _0x1f6a4a(0x1e2) + _0x4f26f1['message'] + '</span></p>\x0a</div>\x0a</div>\x0a</div>\x0a</div>\x0a<div\x20class=\x22util_bubble\x22>\x0a<div\x20class=\x22info_bubble\x22>\x0a<div\x20class=\x22list_info\x22><span\x20class=\x22screen_out\x22>보낸시간</span>\x0a<span\x20role=\x22text\x22>오후\x20<span\x20class=\x22num_comm\x22>' + _0x4f26f1[_0x1f6a4a(0x1ea)] + _0x1f6a4a(0x1e1);
            break;
        case _0x1f6a4a(0x1e4):
            _0x49d3ec = '<div\x20class=\x22chat_comm\x20chat_another\x22\x20tabindex=\x220\x22\x0astyle=\x22position:\x20static;\x20top:\x200px;\x20left:\x2016px;\x20padding-right:\x2022px;\x22>\x0a<div\x20class=\x22chat_profile\x22>\x0a<div\x20class=\x22profile_comm\x22>\x0a<div\x20class=\x22box_thumb\x22\x20style=\x22opacity:\x201;\x22>\x0a<svg\x20viewBox=\x220\x200\x2036\x2036\x22\x20aria-hidden=\x22true\x22\x20focusable=\x22false\x22>\x0a<g>\x0a<image\x20clip-path=\x22url(#clipThumb2)\x22\x20height=\x22100%\x22\x20width=\x22100%\x22\x0ahref=\x22' + _0x4f26f1[_0x1f6a4a(0x1e0)] + _0x1f6a4a(0x1db) + _0x4f26f1[_0x1f6a4a(0x1da)] + _0x1f6a4a(0x1e5) + _0x4f26f1['message']['split']('\x0a')[_0x1f6a4a(0x1d0)](_0x37156f => '<p><span>' + _0x37156f + '</span></p>')[_0x1f6a4a(0x1ca)]('') + _0x1f6a4a(0x1ee) + _0x4f26f1[_0x1f6a4a(0x1ea)] + _0x1f6a4a(0x1e1);
    }
    return _0x49d3ec;
}

function _0x5f0f() {
    const _0x4f7724 = ['2033469VJMNeg', 'length', '.inner_webchat', 'buffer', 'replaceAll', '5zgJVOI', 'querySelector', 'get', 'name', '\x22\x20preserveAspectRatio=\x22xMidYMid\x20slice\x22></image>\x0a<use\x20href=\x22#shapeSuircle2\x22\x20class=\x22thumb_bg\x22></use>\x0a<use\x20href=\x22#squircleBorder\x22\x20class=\x22thumb_stroke\x22></use>\x0a</g>\x0a</svg>\x0a</div>\x0a<div\x20class=\x22info_profile\x22><strong\x20class=\x22tit_profile\x22>', '2147646RSYGiy', 'location', '10373uLMsDH', '<div\x20class=\x22chat_ui\x22><div\x20class=\x22toast_comm\x22><span>', 'profile', '</span></span>\x0a</div>\x0a</div>\x0a</div>\x0a</div>', '<div\x20class=\x22chat_comm\x20chat_mine\x20chat_start\x22\x20tabindex=\x220\x22\x0astyle=\x22position:\x20static;\x20top:\x200px;\x20left:\x2016px;\x20padding-right:\x2022px;\x22>\x0a<div\x20class=\x22chat_contents\x22>\x0a<div\x20class=\x22bubble_comm\x20bubble_talk\x22>\x0a<span\x20class=\x22ico_webchat\x20ico_bubble\x22>\x0a<svg\x20aria-hidden=\x22true\x22\x20focusable=\x22false\x22>\x0a<use\x20href=\x22#icoBubble\x22></use>\x0a</svg>\x0a</span>\x0a<div\x20class=\x22bubble_body\x22>\x0a<div\x20class=\x22contents_comm\x22>\x0a<p><span>', 'fromCharCode', 'MESSAGE', '</strong></div>\x0a</div>\x0a</div>\x0a<div\x20class=\x22chat_contents\x22>\x0a<div\x20class=\x22bubble_comm\x20bubble_talk\x22>\x0a<span\x20class=\x22ico_webchat\x20ico_bubble\x22>\x0a<svg\x20aria-hidden=\x22true\x22\x20focusable=\x22false\x22>\x0a<use\x20href=\x22#icoBubble\x22></use>\x0a</svg>\x0a</span>\x0a<div\x20class=\x22bubble_body\x22>\x0a<div\x20class=\x22contents_comm\x22>\x0a', '385671ouFhGc', 'charCodeAt', 'search', '24132MVodtN', 'time', 'innerHTML', 'data', 'has', '\x0a</div>\x0a</div>\x0a</div>\x0a</div>\x0a<div\x20class=\x22util_bubble\x22>\x0a<div\x20class=\x22info_bubble\x22>\x0a<div\x20class=\x22list_info\x22><span\x20class=\x22screen_out\x22>보낸시간</span>\x0a<span\x20role=\x22text\x22>오후\x20<span\x20class=\x22num_comm\x22>', '2Dxrbfl', 'room', '</span></div></div>', '4147080SaGzcE', 'join', 'message', '3384400yOgTQh', '14GJBEjk', 'forEach', '10cKGNPS', 'map', '714358cTvQvM'];
    _0x5f0f = function() {
        return _0x4f7724;
    };
    return _0x5f0f();
}

function toBinary(_0x5520fe) {
    const _0x38f614 = _0xfeae,
        _0x3cff94 = new Uint16Array(_0x5520fe['length']);
    for (let _0x431eac = 0x0; _0x431eac < _0x3cff94[_0x38f614(0x1d3)]; _0x431eac++) _0x3cff94[_0x431eac] = _0x5520fe[_0x38f614(0x1e7)](_0x431eac);
    return btoa(String[_0x38f614(0x1e3)](...new Uint8Array(_0x3cff94[_0x38f614(0x1d5)])))[_0x38f614(0x1d6)]('=', '');
}

function fromBinary(_0x514930) {
    const _0x4fbdbd = _0xfeae,
        _0x11c213 = atob(_0x514930),
        _0x24925d = new Uint8Array(_0x11c213[_0x4fbdbd(0x1d3)]);
    for (let _0x4b54ba = 0x0; _0x4b54ba < _0x24925d['length']; _0x4b54ba++) _0x24925d[_0x4b54ba] = _0x11c213[_0x4fbdbd(0x1e7)](_0x4b54ba);
    return String[_0x4fbdbd(0x1e3)](...new Uint16Array(_0x24925d['buffer']));
}

function _0xfeae(_0x3e2ed4, _0x5ca59b) {
    const _0x5f0f16 = _0x5f0f();
    return _0xfeae = function(_0xfeae26, _0x22ae5d) {
        _0xfeae26 = _0xfeae26 - 0x1c9;
        let _0x51c998 = _0x5f0f16[_0xfeae26];
        return _0x51c998;
    }, _0xfeae(_0x3e2ed4, _0x5ca59b);
}

function renderChat(_0x109825) {
    const _0x3b3df9 = _0xfeae,
        _0x2fbf44 = document['querySelector']('.tit_webchat'),
        _0x62a9fa = document[_0x3b3df9(0x1d8)](_0x3b3df9(0x1d4))
    if (!0x1 !== _0x109825) {
        const _0xf3a3cc = JSON['parse'](fromBinary(_0x109825));
        _0x2fbf44[_0x3b3df9(0x1eb)] = _0xf3a3cc[_0x3b3df9(0x1f0)] ?? '', void 0x0 !== _0xf3a3cc[_0x3b3df9(0x1ec)] && _0xf3a3cc[_0x3b3df9(0x1ec)][_0x3b3df9(0x1ce)](_0x2fff4b => {
            const _0x5bcb46 = _0x3b3df9;
            _0x62a9fa[_0x5bcb46(0x1eb)] += createChatHTML(_0x2fff4b);
        });
    }
}